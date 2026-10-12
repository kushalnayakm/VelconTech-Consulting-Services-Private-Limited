import SEO from '../components/common/SEO';
import PageHero from '../components/common/PageHero';
import { company } from '../data/company';

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Privacy Policy for VelconTech Consulting Services Private Limited website forms and communications."
        path="/privacy-policy"
      />
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="How VelconTech handles information submitted through this website."
      />

      <section className="section-pad">
        <div className="container-page prose-blog max-w-3xl space-y-6">
          <p>
            This Privacy Policy describes how {company.legalName} (“VelconTech”, “we”, “us”) handles personal
            information submitted through the website at {company.website}.
          </p>
          <h2>Information we collect</h2>
          <p>
            When you use our contact form or job application form, you may provide contact details, company
            information, inquiry content, application details and a resume file.
          </p>
          <h2>How we use information</h2>
          <p>
            Contact inquiries are emailed to our company mailbox so we can respond to your request. Job applications
            and resumes are emailed to our recruitment mailbox so we can evaluate the application and contact you
            about the role.
          </p>
          <h2>Storage</h2>
          <p>
            This website does not store contact inquiries or job applications in a database or persistent file store.
            Temporary resume files created during upload processing are deleted after the application email is handled.
            Copies may exist in email systems used to send and receive messages.
          </p>
          <h2>Legal basis and consent</h2>
          <p>
            Forms require privacy consent before submission. By submitting a form, you ask us to process the provided
            details for the stated purpose.
          </p>
          <h2>Sharing</h2>
          <p>
            We use email delivery services (such as Gmail SMTP through our configured sender account) to transmit
            messages. We do not sell personal information.
          </p>
          <h2>Contact</h2>
          <p>
            For privacy questions, contact {company.email} or write to {company.registeredOffice.lines.join(' ')}.
          </p>
          <p className="text-sm text-navy/55">Last updated: April 2026</p>
        </div>
      </section>
    </>
  );
}
