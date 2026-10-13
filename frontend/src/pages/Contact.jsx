import { useId, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  ArrowRight,
  ExternalLink,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
} from 'lucide-react'
import SEO from '../components/common/SEO'
import { company } from '../data/company'
import { services } from '../data/services'
import { postJson } from '../lib/api'
import talkToUsImage from '../assets/images/talk-to-us.jpeg'

/** Verified from Google Maps CID listing (Sapthashree Nivasa). */
const mapsPlace = {
  name: 'Sapthashree Nivasa',
  address:
    'Sapthasree nivasa, 120, I Main Rd, Vysya Bank Colony, Shantiniketan Layout, Arekere, Bengaluru, Karnataka 560076, India',
  cid: '10702971170805869823',
}

const mapsPlaceUrl = `https://www.google.com/maps?cid=${mapsPlace.cid}&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAFKgSoqNcy`
const mapsEmbedUrl = `https://www.google.com/maps?cid=${mapsPlace.cid}&hl=en&z=17&output=embed`
const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  `${mapsPlace.name}, ${mapsPlace.address}`,
)}`
const whatsappUrl = `https://wa.me/${company.phone.replace(/\D/g, '')}`

export default function Contact() {
  const location = useLocation()
  const formId = useId()
  const presetService = location.state?.service || ''

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: presetService,
    message: '',
    consent: false,
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ type: '', message: '' })
  const [submitting, setSubmitting] = useState(false)
  const [mapFailed, setMapFailed] = useState(false)

  function updateField(event) {
    const { name, value, type, checked } = event.target
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    setErrors((prev) => {
      if (!prev[name]) return prev
      const next = { ...prev }
      delete next[name]
      return next
    })
  }

  function validate() {
    const next = {}
    if (!form.name.trim()) next.name = 'Name is required.'
    if (!form.email.trim()) next.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = 'Enter a valid business email.'
    }
    if (!form.phone.trim()) next.phone = 'Phone is required.'
    if (!form.company.trim()) next.company = 'Company is required.'
    if (!form.service) next.service = 'Select a service of interest.'
    if (!form.message.trim()) next.message = 'Message is required.'
    if (!form.consent) next.consent = 'Privacy consent is required.'
    return next
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus({ type: '', message: '' })

    const nextErrors = validate()
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors)
      setStatus({ type: 'error', message: 'Please fix the highlighted fields and try again.' })
      return
    }

    setSubmitting(true)
    try {
      const result = await postJson('/api/contact', form)
      setStatus({ type: 'success', message: result.message })
      setErrors({})
      setForm({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
        consent: false,
      })
    } catch (error) {
      setStatus({ type: 'error', message: error.message })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <SEO
        title="Contact"
        description="Contact VelconTech Consulting Services Private Limited in Bangalore for technology consulting inquiries."
        path="/contact"
      />

      <section className="contact-hero" aria-labelledby="contact-hero-heading">
        <div className="contact-hero__glow contact-hero__glow--one" aria-hidden="true" />
        <div className="contact-hero__glow contact-hero__glow--two" aria-hidden="true" />
        <div className="contact-hero__shape" aria-hidden="true" />

        <div className="container-page contact-hero__shell">
          <div className="contact-hero__grid">
            <div className="contact-hero__copy">
              <p className="contact-kicker">
                <span>Contact</span>
              </p>
              <h1 id="contact-hero-heading" className="contact-hero__title">
                <span className="contact-hero__title-line">Let&apos;s Start a</span>
                <span className="contact-hero__title-accent">Conversation</span>
              </h1>
              <p className="contact-hero__lead">
                Reach out to VelconTech for software development, IT infrastructure, cloud,
                cybersecurity and digital transformation solutions.
              </p>
            </div>

            <div className="contact-hero__media">
              <div className="contact-hero__media-glow" aria-hidden="true" />
              <img
                src={talkToUsImage}
                alt="VelconTech team collaborating around a workspace"
                className="contact-hero__image"
                width={640}
                height={420}
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="contact-body" aria-labelledby="contact-details-heading">
        <div className="container-page contact-body__shell">
          <div className="contact-top">
            <div className="contact-intro">
              <h2 id="contact-details-heading" className="contact-intro__heading">
                Get in touch
              </h2>
              <p className="contact-intro__lead">
                Prefer a direct conversation? Reach our team by phone, email, or WhatsApp during
                business hours.
              </p>

              <ul className="contact-details">
                <li>
                  <span className="contact-details__icon contact-details__icon--teal" aria-hidden="true">
                    <MapPin size={18} strokeWidth={2} />
                  </span>
                  <div>
                    <p className="contact-details__label">Location</p>
                    <address className="contact-details__value">
                      {company.registeredOffice.lines.map((line) => (
                        <span key={line}>
                          {line}
                          <br />
                        </span>
                      ))}
                    </address>
                  </div>
                </li>
                <li>
                  <span className="contact-details__icon contact-details__icon--emerald" aria-hidden="true">
                    <Phone size={18} strokeWidth={2} />
                  </span>
                  <div>
                    <p className="contact-details__label">Phone</p>
                    <a className="contact-details__value" href={`tel:${company.phone}`}>
                      {company.phoneDisplay}
                    </a>
                  </div>
                </li>
                <li>
                  <span className="contact-details__icon contact-details__icon--copper" aria-hidden="true">
                    <Mail size={18} strokeWidth={2} />
                  </span>
                  <div>
                    <p className="contact-details__label">Email</p>
                    <a className="contact-details__value" href={`mailto:${company.email}`}>
                      {company.email}
                    </a>
                  </div>
                </li>
              </ul>

              <div className="contact-actions">
                <a href={`tel:${company.phone}`} className="btn-primary contact-actions__btn">
                  <Phone size={16} aria-hidden="true" />
                  Call Us
                </a>
                <a href={`mailto:${company.email}`} className="btn-secondary contact-actions__btn">
                  <Mail size={16} aria-hidden="true" />
                  Email Us
                </a>
                <a
                  href={whatsappUrl}
                  className="btn-secondary contact-actions__btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle size={16} aria-hidden="true" />
                  WhatsApp
                </a>
              </div>

              <p className="contact-intro__hours">{company.hours}</p>
            </div>

            <div className="contact-map">
              <div className="contact-map__meta">
                <p className="contact-map__place">{mapsPlace.name}</p>
                <p className="contact-map__address">{mapsPlace.address}</p>
              </div>

              <div className="contact-map__frame">
                {!mapFailed ? (
                  <iframe
                    title={`${mapsPlace.name} on Google Maps`}
                    src={mapsEmbedUrl}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                    onError={() => setMapFailed(true)}
                  />
                ) : (
                  <div className="contact-map__fallback">
                    <p>The map preview could not be loaded.</p>
                    <a href={mapsPlaceUrl} target="_blank" rel="noreferrer">
                      Open {mapsPlace.name} in Google Maps
                      <ExternalLink size={14} aria-hidden="true" />
                    </a>
                  </div>
                )}
              </div>

              <div className="contact-map__footer">
                <a
                  href={mapsPlaceUrl}
                  className="contact-map__open"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open in Maps
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
                <a
                  href={mapsDirectionsUrl}
                  className="btn-primary contact-map__directions"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Navigation size={16} aria-hidden="true" />
                  Get Directions
                </a>
              </div>

              <p className="contact-map__fallback-note">
                Map not loading?{' '}
                <a href={mapsPlaceUrl} target="_blank" rel="noreferrer">
                  Open this location in Google Maps
                </a>
                .
              </p>
            </div>
          </div>

          <section className="contact-form-card" aria-labelledby="contact-form-heading">
            <div className="contact-form-card__header">
              <h2 id="contact-form-heading">Send an Enquiry</h2>
              <p>
                Share your inquiry and we will respond by email. Submissions are delivered by email
                only and are not stored in a website database.
              </p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="contact-form__grid">
                <div className="contact-form__field">
                  <label className="contact-form__label" htmlFor={`${formId}-name`}>
                    Name <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id={`${formId}-name`}
                    name="name"
                    className={`contact-form__input${errors.name ? ' is-invalid' : ''}`}
                    required
                    value={form.name}
                    onChange={updateField}
                    autoComplete="name"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? `${formId}-name-error` : undefined}
                  />
                  {errors.name ? (
                    <p id={`${formId}-name-error`} className="contact-form__error" role="alert">
                      {errors.name}
                    </p>
                  ) : null}
                </div>

                <div className="contact-form__field">
                  <label className="contact-form__label" htmlFor={`${formId}-company`}>
                    Company <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id={`${formId}-company`}
                    name="company"
                    className={`contact-form__input${errors.company ? ' is-invalid' : ''}`}
                    required
                    value={form.company}
                    onChange={updateField}
                    autoComplete="organization"
                    aria-invalid={Boolean(errors.company)}
                    aria-describedby={errors.company ? `${formId}-company-error` : undefined}
                  />
                  {errors.company ? (
                    <p id={`${formId}-company-error`} className="contact-form__error" role="alert">
                      {errors.company}
                    </p>
                  ) : null}
                </div>

                <div className="contact-form__field">
                  <label className="contact-form__label" htmlFor={`${formId}-email`}>
                    Email <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id={`${formId}-email`}
                    name="email"
                    type="email"
                    className={`contact-form__input${errors.email ? ' is-invalid' : ''}`}
                    required
                    value={form.email}
                    onChange={updateField}
                    autoComplete="email"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? `${formId}-email-error` : undefined}
                  />
                  {errors.email ? (
                    <p id={`${formId}-email-error`} className="contact-form__error" role="alert">
                      {errors.email}
                    </p>
                  ) : null}
                </div>

                <div className="contact-form__field">
                  <label className="contact-form__label" htmlFor={`${formId}-phone`}>
                    Phone <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id={`${formId}-phone`}
                    name="phone"
                    className={`contact-form__input${errors.phone ? ' is-invalid' : ''}`}
                    required
                    value={form.phone}
                    onChange={updateField}
                    autoComplete="tel"
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? `${formId}-phone-error` : undefined}
                  />
                  {errors.phone ? (
                    <p id={`${formId}-phone-error`} className="contact-form__error" role="alert">
                      {errors.phone}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="contact-form__field">
                <label className="contact-form__label" htmlFor={`${formId}-service`}>
                  Service of interest <span aria-hidden="true">*</span>
                </label>
                <select
                  id={`${formId}-service`}
                  name="service"
                  className={`contact-form__input${errors.service ? ' is-invalid' : ''}`}
                  required
                  value={form.service}
                  onChange={updateField}
                  aria-invalid={Boolean(errors.service)}
                  aria-describedby={errors.service ? `${formId}-service-error` : undefined}
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service.slug} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                  <option value="General Inquiry">General Inquiry</option>
                </select>
                {errors.service ? (
                  <p id={`${formId}-service-error`} className="contact-form__error" role="alert">
                    {errors.service}
                  </p>
                ) : null}
              </div>

              <div className="contact-form__field">
                <label className="contact-form__label" htmlFor={`${formId}-message`}>
                  Message <span aria-hidden="true">*</span>
                </label>
                <textarea
                  id={`${formId}-message`}
                  name="message"
                  rows={6}
                  className={`contact-form__input contact-form__textarea${errors.message ? ' is-invalid' : ''}`}
                  required
                  value={form.message}
                  onChange={updateField}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? `${formId}-message-error` : undefined}
                />
                {errors.message ? (
                  <p id={`${formId}-message-error`} className="contact-form__error" role="alert">
                    {errors.message}
                  </p>
                ) : null}
              </div>

              <label className="contact-form__consent" htmlFor={`${formId}-consent`}>
                <input
                  id={`${formId}-consent`}
                  type="checkbox"
                  name="consent"
                  checked={form.consent}
                  onChange={updateField}
                  aria-invalid={Boolean(errors.consent)}
                  aria-describedby={errors.consent ? `${formId}-consent-error` : undefined}
                />
                <span>
                  I consent to VelconTech contacting me about this inquiry. Messages are emailed to
                  the company and are not saved in a website database.{' '}
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </span>
              </label>
              {errors.consent ? (
                <p id={`${formId}-consent-error`} className="contact-form__error" role="alert">
                  {errors.consent}
                </p>
              ) : null}

              {status.message ? (
                <div
                  role="alert"
                  className={`contact-form__status contact-form__status--${status.type}`}
                >
                  {status.message}
                </div>
              ) : null}

              <button type="submit" className="btn-primary contact-form__submit" disabled={submitting}>
                {submitting ? (
                  <>
                    <Loader2 size={16} className="contact-form__spin" aria-hidden="true" />
                    Sending…
                  </>
                ) : (
                  <>
                    Send Enquiry
                    <ArrowRight size={16} aria-hidden="true" />
                  </>
                )}
              </button>
            </form>
          </section>
        </div>
      </section>
    </>
  )
}
