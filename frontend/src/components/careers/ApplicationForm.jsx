import { useId, useRef, useState } from 'react';
import {
  BriefcaseBusiness,
  CloudUpload,
  FileText,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
  UserRound,
  X,
} from 'lucide-react';
import { postFormData } from '../../lib/api';

const initial = {
  fullName: '',
  email: '',
  phone: '',
  qualification: '',
  experience: '',
  location: '',
  skills: '',
  coverLetter: '',
  consent: false,
};

const MAX_RESUME_BYTES = 5 * 1024 * 1024;
const ACCEPTED_RESUME =
  '.pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document';

function isAcceptedResume(file) {
  if (!file) return false;
  const name = file.name.toLowerCase();
  return (
    name.endsWith('.pdf') ||
    name.endsWith('.doc') ||
    name.endsWith('.docx') ||
    ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(
      file.type,
    )
  );
}

export default function ApplicationForm({ job }) {
  const [form, setForm] = useState(initial);
  const [resume, setResume] = useState(null);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);
  const formId = useId();

  function updateField(event) {
    const { name, value, type, checked } = event.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  }

  function assignResume(file) {
    if (!file) {
      setResume(null);
      return;
    }

    if (!isAcceptedResume(file)) {
      setStatus({ type: 'error', message: 'Please upload your resume as PDF or DOCX.' });
      setResume(null);
      return;
    }

    if (file.size > MAX_RESUME_BYTES) {
      setStatus({ type: 'error', message: 'Resume must be 5 MB or smaller.' });
      setResume(null);
      return;
    }

    setStatus({ type: '', message: '' });
    setResume(file);
  }

  function clearResume() {
    setResume(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus({ type: '', message: '' });

    if (!form.consent) {
      setStatus({ type: 'error', message: 'Privacy consent is required.' });
      return;
    }

    if (!resume) {
      setStatus({ type: 'error', message: 'Please upload your resume as PDF or DOCX.' });
      return;
    }

    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, String(value));
    });
    formData.append('jobAppliedFor', job.title);
    formData.append('jobSlug', job.slug);
    formData.append('resume', resume);

    setSubmitting(true);
    try {
      const result = await postFormData('/api/careers/apply', formData);
      setStatus({ type: 'success', message: result.message });
      setForm(initial);
      clearResume();
      event.target.reset();
    } catch (error) {
      setStatus({ type: 'error', message: error.message });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="apply-form" noValidate>
      <div className="apply-form__header">
        <span className="apply-form__badge" aria-hidden="true">
          <BriefcaseBusiness className="apply-form__badge-icon" />
        </span>
        <div>
          <h2 className="apply-form__title">Application Form</h2>
          <p className="apply-form__subtitle">Tell us about yourself and your interest in joining VelconTech</p>
        </div>
      </div>

      <div className="apply-form__divider" aria-hidden="true">
        <span className="apply-form__divider-accent" />
      </div>

      <div className="apply-form__grid">
        <div className="apply-form__field">
          <label className="apply-form__label" htmlFor={`${formId}-fullName`}>
            <UserRound className="apply-form__label-icon" aria-hidden="true" />
            Full Name <span className="apply-form__required">*</span>
          </label>
          <input
            id={`${formId}-fullName`}
            name="fullName"
            className="apply-form__input"
            required
            value={form.fullName}
            onChange={updateField}
            placeholder="Your full name"
            autoComplete="name"
          />
        </div>

        <div className="apply-form__field">
          <label className="apply-form__label" htmlFor={`${formId}-email`}>
            <Mail className="apply-form__label-icon" aria-hidden="true" />
            Email <span className="apply-form__required">*</span>
          </label>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            className="apply-form__input"
            required
            value={form.email}
            onChange={updateField}
            placeholder="you@example.com"
            autoComplete="email"
          />
        </div>

        <div className="apply-form__field">
          <label className="apply-form__label" htmlFor={`${formId}-phone`}>
            <Phone className="apply-form__label-icon" aria-hidden="true" />
            Phone <span className="apply-form__required">*</span>
          </label>
          <input
            id={`${formId}-phone`}
            name="phone"
            className="apply-form__input"
            required
            value={form.phone}
            onChange={updateField}
            placeholder="+91 00000 00000"
            autoComplete="tel"
          />
        </div>

        <div className="apply-form__field">
          <label className="apply-form__label" htmlFor={`${formId}-qualification`}>
            <Sparkles className="apply-form__label-icon" aria-hidden="true" />
            Qualification <span className="apply-form__required">*</span>
          </label>
          <input
            id={`${formId}-qualification`}
            name="qualification"
            className="apply-form__input"
            required
            value={form.qualification}
            onChange={updateField}
            placeholder={job.qualification}
          />
        </div>

        <div className="apply-form__field">
          <label className="apply-form__label" htmlFor={`${formId}-experience`}>
            <BriefcaseBusiness className="apply-form__label-icon" aria-hidden="true" />
            Relevant Experience <span className="apply-form__required">*</span>
          </label>
          <input
            id={`${formId}-experience`}
            name="experience"
            className="apply-form__input"
            required
            value={form.experience}
            onChange={updateField}
            placeholder="Years / highlights"
          />
        </div>

        <div className="apply-form__field">
          <label className="apply-form__label" htmlFor={`${formId}-location`}>
            <MapPin className="apply-form__label-icon" aria-hidden="true" />
            Current Location <span className="apply-form__required">*</span>
          </label>
          <input
            id={`${formId}-location`}
            name="location"
            className="apply-form__input"
            required
            value={form.location}
            onChange={updateField}
            placeholder="City, country"
            autoComplete="address-level2"
          />
        </div>
      </div>

      <div className="apply-form__field apply-form__field--full">
        <label className="apply-form__label" htmlFor={`${formId}-jobAppliedFor`}>
          <BriefcaseBusiness className="apply-form__label-icon" aria-hidden="true" />
          Job Applied For
        </label>
        <input
          id={`${formId}-jobAppliedFor`}
          className="apply-form__input apply-form__input--readonly"
          value={job.title}
          readOnly
        />
      </div>

      <div className="apply-form__field apply-form__field--full">
        <label className="apply-form__label" htmlFor={`${formId}-skills`}>
          <Sparkles className="apply-form__label-icon" aria-hidden="true" />
          Skills <span className="apply-form__required">*</span>
        </label>
        <div className="apply-form__textarea-wrap">
          <textarea
            id={`${formId}-skills`}
            name="skills"
            rows={3}
            className="apply-form__input apply-form__textarea"
            required
            value={form.skills}
            onChange={updateField}
            placeholder="Mention your key skills (e.g. React, Python, Java, etc.)"
          />
          <span className="apply-form__counter" aria-hidden="true">
            {form.skills.length} chars
          </span>
        </div>
      </div>

      <div className="apply-form__field apply-form__field--full">
        <label className="apply-form__label" htmlFor={`${formId}-coverLetter`}>
          <FileText className="apply-form__label-icon" aria-hidden="true" />
          Cover Letter <span className="apply-form__required">*</span>
        </label>
        <textarea
          id={`${formId}-coverLetter`}
          name="coverLetter"
          rows={5}
          className="apply-form__input apply-form__textarea"
          required
          value={form.coverLetter}
          onChange={updateField}
          placeholder="Share why you want to join VelconTech and how you fit this role."
        />
      </div>

      <div className="apply-form__field apply-form__field--full">
        <p className="apply-form__label">
          <CloudUpload className="apply-form__label-icon" aria-hidden="true" />
          Resume <span className="apply-form__required">*</span>
        </p>
        <label
          htmlFor={`${formId}-resume`}
          className={`apply-form__upload${dragActive ? ' is-dragging' : ''}${resume ? ' has-file' : ''}`}
          onDragEnter={(event) => {
            event.preventDefault();
            event.stopPropagation();
            setDragActive(true);
          }}
          onDragOver={(event) => {
            event.preventDefault();
            event.stopPropagation();
            setDragActive(true);
          }}
          onDragLeave={(event) => {
            event.preventDefault();
            event.stopPropagation();
            setDragActive(false);
          }}
          onDrop={(event) => {
            event.preventDefault();
            event.stopPropagation();
            setDragActive(false);
            assignResume(event.dataTransfer.files?.[0] || null);
          }}
        >
          <input
            ref={fileInputRef}
            id={`${formId}-resume`}
            name="resume"
            type="file"
            accept={ACCEPTED_RESUME}
            className="apply-form__file-input"
            required={!resume}
            onChange={(event) => assignResume(event.target.files?.[0] || null)}
          />
          <span className="apply-form__upload-icon" aria-hidden="true">
            <CloudUpload />
          </span>
          {resume ? (
            <span className="apply-form__upload-copy">
              <strong>{resume.name}</strong>
              <span>{(resume.size / (1024 * 1024)).toFixed(2)} MB — click or drop to replace</span>
            </span>
          ) : (
            <span className="apply-form__upload-copy">
              <strong>Drag and drop your resume here</strong>
              <span>or click to browse</span>
              <span className="apply-form__upload-hint">PDF or DOCX, max 5 MB</span>
            </span>
          )}
        </label>
        {resume ? (
          <button type="button" className="apply-form__clear-file" onClick={clearResume}>
            <X className="h-3.5 w-3.5" aria-hidden="true" />
            Remove file
          </button>
        ) : null}
      </div>

      <label className="apply-form__consent">
        <input
          type="checkbox"
          name="consent"
          className="apply-form__checkbox"
          checked={form.consent}
          onChange={updateField}
        />
        <span>
          I consent to VelconTech processing my application details and resume solely to evaluate this job
          application and contact me about it. Applications are delivered by email and are not stored in a website
          database.
        </span>
      </label>

      {status.message ? (
        <div
          role="alert"
          className={`apply-form__status apply-form__status--${status.type === 'success' ? 'success' : 'error'}`}
        >
          {status.message}
        </div>
      ) : null}

      <button type="submit" className="apply-form__submit" disabled={submitting}>
        {submitting ? (
          <>
            <Loader2 className="apply-form__submit-icon apply-form__submit-icon--spin" aria-hidden="true" />
            Sending application…
          </>
        ) : (
          <>
            <Send className="apply-form__submit-icon" aria-hidden="true" />
            Submit Application
          </>
        )}
      </button>
    </form>
  );
}
