import { Router } from 'express';
import { sendMail } from '../utils/email.js';
import {
  hasHeaderInjection,
  isValidEmail,
  isValidPhone,
  requireFields,
  sanitizeText,
} from '../utils/validation.js';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const name = sanitizeText(req.body.name, { max: 120 });
    const email = sanitizeText(req.body.email, { max: 180 }).toLowerCase();
    const phone = sanitizeText(req.body.phone, { max: 40 });
    const company = sanitizeText(req.body.company, { max: 160 });
    const service = sanitizeText(req.body.service, { max: 160 });
    const message = sanitizeText(req.body.message, { max: 4000 });
    const consent = req.body.consent === true || req.body.consent === 'true';

    const missing = requireFields({ name, email, phone, company, service, message });
    if (missing.length) {
      return res.status(400).json({
        success: false,
        message: `Missing required fields: ${missing.join(', ')}.`,
      });
    }

    if (!consent) {
      return res.status(400).json({
        success: false,
        message: 'Privacy consent is required.',
      });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ success: false, message: 'Enter a valid business email.' });
    }

    if (!isValidPhone(phone)) {
      return res.status(400).json({ success: false, message: 'Enter a valid phone number.' });
    }

    if (hasHeaderInjection(name, email, phone, company, service)) {
      return res.status(400).json({ success: false, message: 'Invalid characters in form fields.' });
    }

    const contactTo = process.env.CONTACT_EMAIL || 'services@velcontech.com';

    await sendMail({
      to: contactTo,
      replyTo: email,
      subject: `Website inquiry from ${name} — ${service}`,
      text: [
        'New contact inquiry from the VelconTech website',
        '',
        `Name: ${name}`,
        `Business email: ${email}`,
        `Phone: ${phone}`,
        `Company: ${company}`,
        `Service of interest: ${service}`,
        '',
        'Message:',
        message,
      ].join('\n'),
    });

    try {
      await sendMail({
        to: email,
        subject: 'We received your message — VelconTech',
        text: [
          `Hello ${name},`,
          '',
          'Thank you for contacting VelconTech Consulting Services Private Limited.',
          'We have received your inquiry and our team will respond shortly.',
          '',
          `Service of interest: ${service}`,
          '',
          'Regards,',
          'VelconTech Team',
          'services@velcontech.com',
        ].join('\n'),
      });
    } catch {
      // Acknowledgement failure should not fail the inquiry once notification succeeded.
    }

    return res.json({
      success: true,
      message: 'Your message has been sent successfully. We will get back to you soon.',
    });
  } catch (error) {
    console.error('Contact form error:', error.message);
    return res.status(500).json({
      success: false,
      message:
        'Unable to send your message right now. Please try again later or email services@velcontech.com.',
    });
  }
});

export default router;
