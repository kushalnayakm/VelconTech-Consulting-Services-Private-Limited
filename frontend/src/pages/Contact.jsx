import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Loader2, Mail, MapPin, Phone } from 'lucide-react';
import SEO from '../components/common/SEO';
import PageHero from '../components/common/PageHero';
import { company } from '../data/company';
import { services } from '../data/services';
import { postJson } from '../lib/api';

export default function Contact() {
  const location = useLocation();
  const presetService = location.state?.service || '';

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: presetService,
    message: '',
    consent: false,
  });
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

    setSubmitting(true);
    try {
      const result = await postJson('/api/contact', form);
      setStatus({ type: 'success', message: result.message });
      setForm({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
        consent: false,
      });
    } catch (error) {
      setStatus({ type: 'error', message: error.message });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <SEO
        title="Contact"
        description="Contact VelconTech Consulting Services Private Limited in Bangalore for technology consulting inquiries."
        path="/contact"
      />
      <PageHero
        eyebrow="Contact"
        title="Talk to Our Team"
        description="Share your inquiry and we will respond by email. Submissions are delivered by email only and are not stored in a website database."
      />

      <section className="section-pad">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="space-y-5">
            <div className="card-surface p-6">
              <h2 className="font-display text-xl font-semibold text-navy">Registered office</h2>
              <div className="mt-4 flex gap-3 text-sm leading-relaxed text-navy/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald" />
                <div>
                  {company.registeredOffice.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
              <div className="mt-5 space-y-3 text-sm text-navy/70">
                <p className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-emerald" />
                  <a href={`tel:${company.phone}`}>{company.phoneDisplay}</a>
                </p>
                <p className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-emerald" />
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </p>
              </div>
              <p className="mt-5 text-sm text-navy/60">{company.hours}</p>
            </div>
            <div className="card-surface p-6">
              <h2 className="font-display text-xl font-semibold text-navy">Sales office presence</h2>
              <p className="mt-3 text-sm text-navy/65">{company.salesPresence.join(', ')}</p>
            </div>
          </aside>

          <form onSubmit={handleSubmit} className="card-surface space-y-5 p-6 sm:p-8" noValidate>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="label-field" htmlFor="name">
                  Name
                </label>
                <input id="name" name="name" className="input-field" required value={form.name} onChange={updateField} />
              </div>
              <div>
                <label className="label-field" htmlFor="email">
                  Business email
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
                <label className="label-field" htmlFor="company">
                  Company
                </label>
                <input id="company" name="company" className="input-field" required value={form.company} onChange={updateField} />
              </div>
            </div>

            <div>
              <label className="label-field" htmlFor="service">
                Service of interest
              </label>
              <select id="service" name="service" className="input-field" required value={form.service} onChange={updateField}>
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service.slug} value={service.title}>
                    {service.title}
                  </option>
                ))}
                <option value="General Inquiry">General Inquiry</option>
              </select>
            </div>

            <div>
              <label className="label-field" htmlFor="message">
                Message
              </label>
              <textarea id="message" name="message" rows={6} className="input-field" required value={form.message} onChange={updateField} />
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
                I consent to VelconTech contacting me about this inquiry. Messages are emailed to the company and are
                not saved in a website database.
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
                  Sending…
                </>
              ) : (
                'Send message'
              )}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
