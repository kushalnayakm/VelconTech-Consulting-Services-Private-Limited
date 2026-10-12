import { Router } from 'express';
import { findJob } from '../utils/jobs.js';
import { sendMail } from '../utils/email.js';
import {
  hasHeaderInjection,
  isValidEmail,
  isValidPhone,
  requireFields,
  sanitizeText,
} from '../utils/validation.js';
import { cleanupFile, maxMb, resumeUpload } from '../utils/upload.js';

const router = Router();

router.post('/apply', (req, res) => {
  resumeUpload.single('resume')(req, res, async (uploadError) => {
    const tempPath = req.file?.path;

    try {
      if (uploadError) {
        const message =
          uploadError.code === 'LIMIT_FILE_SIZE'
            ? `Resume must be ${maxMb} MB or smaller.`
            : uploadError.message || 'Resume upload failed.';
        return res.status(400).json({ success: false, message });
      }

      if (!req.file) {
        return res.status(400).json({ success: false, message: 'Resume upload is required (PDF or DOCX).' });
      }

      const fullName = sanitizeText(req.body.fullName, { max: 120 });
      const email = sanitizeText(req.body.email, { max: 180 }).toLowerCase();
      const phone = sanitizeText(req.body.phone, { max: 40 });
      const qualification = sanitizeText(req.body.qualification, { max: 200 });
      const experience = sanitizeText(req.body.experience, { max: 500 });
      const location = sanitizeText(req.body.location, { max: 160 });
      const jobAppliedFor = sanitizeText(req.body.jobAppliedFor, { max: 160 });
      const jobSlug = sanitizeText(req.body.jobSlug, { max: 120 });
      const skills = sanitizeText(req.body.skills, { max: 1000 });
      const coverLetter = sanitizeText(req.body.coverLetter, { max: 5000 });
      const consent = req.body.consent === true || req.body.consent === 'true';

      const missing = requireFields({
        fullName,
        email,
        phone,
        qualification,
        experience,
        location,
        jobAppliedFor,
        skills,
        coverLetter,
      });

      if (missing.length) {
        cleanupFile(tempPath);
        return res.status(400).json({
          success: false,
          message: `Missing required fields: ${missing.join(', ')}.`,
        });
      }

      if (!consent) {
        cleanupFile(tempPath);
        return res.status(400).json({
          success: false,
          message: 'Privacy consent is required.',
        });
      }

      if (!isValidEmail(email)) {
        cleanupFile(tempPath);
        return res.status(400).json({ success: false, message: 'Enter a valid email address.' });
      }

      if (!isValidPhone(phone)) {
        cleanupFile(tempPath);
        return res.status(400).json({ success: false, message: 'Enter a valid phone number.' });
      }

      if (
        hasHeaderInjection(
          fullName,
          email,
          phone,
          qualification,
          experience,
          location,
          jobAppliedFor,
          skills,
        )
      ) {
        cleanupFile(tempPath);
        return res.status(400).json({ success: false, message: 'Invalid characters in form fields.' });
      }

      const job = findJob({ slug: jobSlug, title: jobAppliedFor });
      if (!job) {
        cleanupFile(tempPath);
        return res.status(400).json({
          success: false,
          message: 'Selected job is not a valid open vacancy.',
        });
      }

      const careersTo = process.env.CAREERS_EMAIL || process.env.CONTACT_EMAIL || 'services@velcontech.com';

      await sendMail({
        to: careersTo,
        replyTo: email,
        subject: `Job application: ${job.title} — ${fullName}`,
        text: [
          'New career application from the VelconTech website',
          '',
          `Job applied for: ${job.title}`,
          `Job slug: ${job.slug}`,
          `Full name: ${fullName}`,
          `Email: ${email}`,
          `Phone: ${phone}`,
          `Qualification: ${qualification}`,
          `Relevant experience: ${experience}`,
          `Current location: ${location}`,
          `Skills: ${skills}`,
          '',
          'Cover letter:',
          coverLetter,
        ].join('\n'),
        attachments: [
          {
            filename: req.file.originalname,
            path: req.file.path,
            contentType: req.file.mimetype,
          },
        ],
      });

      try {
        await sendMail({
          to: email,
          subject: `Application received — ${job.title}`,
          text: [
            `Hello ${fullName},`,
            '',
            `Thank you for applying for the ${job.title} role at VelconTech Consulting Services Private Limited.`,
            'We have received your application and resume. Our team will review your details and contact you if there is a fit.',
            '',
            'This is an automated acknowledgement. Please do not reply with additional attachments to this message.',
            '',
            'Regards,',
            'VelconTech Careers',
          ].join('\n'),
        });
      } catch {
        // Notification already accepted; acknowledgement is best-effort.
      }

      cleanupFile(tempPath);

      return res.json({
        success: true,
        message: 'Your application has been sent successfully. A confirmation email will follow shortly.',
      });
    } catch (error) {
      cleanupFile(tempPath);
      console.error('Careers apply error:', error.message);
      return res.status(500).json({
        success: false,
        message:
          'Unable to submit your application right now. Please try again later or email services@velcontech.com.',
      });
    }
  });
});

export default router;
