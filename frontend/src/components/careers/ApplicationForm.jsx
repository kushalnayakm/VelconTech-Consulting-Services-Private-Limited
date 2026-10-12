import { useState } from 'react';
import { Loader2 } from 'lucide-react';
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

export default function ApplicationForm({ job }) {
  const [form, setForm] = useState(initial);
  const [resume, setResume] = useState(null);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  function updateField(event) {
    const { name, value, type, checked } = event.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
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
      setResume(null);
      event.target.reset();
    } catch (error) {
      setStatus({ type: 'error', message: error.message });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card-surface space-y-5 p-6 sm:p-8" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="label-field" htmlFor="fullName">
            Full name
          </label>
          <input id="fullName" name="fullName" className="input-field" required value={form.fullName} onChange={updateField} />
        </div>
        <div>
          <label className="label-field" htmlFor="email">
            Email
          </label>
          <input id="email" name="email" type="email" className="input-field" required value={form.email} onChange={updateField} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="label-field" htmlFor="phone">
            Phone
          </label>
          <input id="phone" name="phone" className="input-field" required value={form.phone} onChange={updateField} />
        </div>
        <div>
          <label className="label-field" htmlFor="qualification">
            Qualification
          </label>
          <input
            id="qualification"
            name="qualification"
            className="input-field"
            required
            value={form.qualification}
            onChange={updateField}
            placeholder={job.qualification}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="label-field" htmlFor="experience">
            Relevant experience
          </label>
          <input id="experience" name="experience" className="input-field" required value={form.experience} onChange={updateField} />
        </div>
        <div>
          <label className="label-field" htmlFor="location">
            Current location
          </label>
          <input id="location" name="location" className="input-field" required value={form.location} onChange={updateField} />
        </div>
      </div>

      <div>
        <label className="label-field" htmlFor="jobAppliedFor">
          Job applied for
        </label>
        <input id="jobAppliedFor" className="input-field bg-mist" value={job.title} readOnly />
      </div>

      <div>
        <label className="label-field" htmlFor="skills">
          Skills
        </label>
        <textarea id="skills" name="skills" rows={3} className="input-field" required value={form.skills} onChange={updateField} />
      </div>

      <div>
        <label className="label-field" htmlFor="coverLetter">
          Cover letter
        </label>
        <textarea
          id="coverLetter"
          name="coverLetter"
          rows={6}
          className="input-field"
          required
          value={form.coverLetter}
          onChange={updateField}
        />
      </div>

      <div>
        <label className="label-field" htmlFor="resume">
          Resume (PDF or DOCX, max 5 MB)
        </label>
        <input
          id="resume"
          name="resume"
          type="file"
          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          className="input-field"
          required
          onChange={(event) => setResume(event.target.files?.[0] || null)}
        />
      </div>

      <label className="flex items-start gap-3 text-sm text-navy/75">
        <input
          type="checkbox"
          name="consent"
          className="mt-1 h-4 w-4 rounded border-navy/20 text-emerald focus:ring-emerald"
          checked={form.consent}
          onChange={updateField}
        />
        <span>
          I consent to VelconTech processing my application details and resume solely to evaluate this job application
          and contact me about it. Applications are delivered by email and are not stored in a website database.
        </span>
      </label>

      {status.message ? (
        <div
          role="alert"
          className={`rounded-xl px-4 py-3 text-sm ${
            status.type === 'success' ? 'bg-emerald/10 text-emerald-700' : 'bg-red-50 text-red-700'
          }`}
        >
          {status.message}
        </div>
      ) : null}

      <button type="submit" className="btn-primary" disabled={submitting}>
        {submitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending application…
          </>
        ) : (
          'Submit application'
        )}
      </button>
    </form>
  );
}
