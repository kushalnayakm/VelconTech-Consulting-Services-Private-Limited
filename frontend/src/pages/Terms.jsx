import SEO from '../components/common/SEO';
import PageHero from '../components/common/PageHero';
import { company } from '../data/company';

export default function Terms() {
  return (
    <>
      <SEO
        title="Terms and Conditions"
        description="Terms and Conditions for use of the VelconTech Consulting Services Private Limited website."
        path="/terms"
      />
      <PageHero
        eyebrow="Legal"
        title="Terms and Conditions"
        description="Please read these terms before using the VelconTech website."
      />

      <section className="section-pad">
        <div className="container-page prose-blog max-w-3xl space-y-6">
          <p>
            By accessing this website operated by {company.legalName}, you agree to these Terms and Conditions.
          </p>
          <h2>Website purpose</h2>
          <p>
            This website provides information about VelconTech services, projects, careers and technology articles. It
            also allows visitors to submit contact inquiries and job applications by email.
          </p>
          <h2>No professional advice warranty</h2>
          <p>
            Content on this website is for general information. It does not create a client relationship and should not
            be treated as legal, financial or technical advice for a specific situation.
          </p>
          <h2>Accuracy</h2>
          <p>
            We aim to keep information accurate and current, but website content may change without notice. Project and
            service descriptions are based on our company profile and related materials.
          </p>
          <h2>User submissions</h2>
          <p>
            You agree to provide accurate information in forms and not to submit unlawful, harmful or misleading
            content. Resume uploads must be PDF or DOCX files within the stated size limit.
          </p>
          <h2>Intellectual property</h2>
          <p>
            Site design, text, logos and other materials remain the property of VelconTech or their respective owners.
            The VelconTech logo and brand assets may not be used without permission.
          </p>
          <h2>Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, VelconTech is not liable for damages arising from use of or
            inability to use this website, including delayed or failed email delivery caused by third-party services.
          </p>
          <h2>Contact</h2>
          <p>
            Questions about these terms may be sent to {company.email}. Registered office:{' '}
            {company.registeredOffice.lines.join(' ')}.
          </p>
          <p className="text-sm text-navy/55">Last updated: April 2026</p>
        </div>
      </section>
    </>
  );
}
