import SEO from '../components/common/SEO';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import CtaBand from '../components/common/CtaBand';
import { company } from '../data/company';

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about VelconTech Consulting Services Private Limited — mission, values, leadership team and locations."
        path="/about"
      />
      <PageHero
        eyebrow="About Us"
        title="Where Technology Customizes"
        description="VelconTech is a consulting, analytics and technology services firm focused on Data, Cloud and Emerging Technologies."
      />

      <section className="section-pad">
        <div className="container-page grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5">
            {company.about.map((paragraph) => (
              <p key={paragraph} className="body-muted text-lg">
                {paragraph}
              </p>
            ))}
            <p className="body-muted text-lg">{company.intro}</p>
          </div>
          <aside className="card-surface h-fit p-7">
            <h2 className="font-display text-xl font-semibold text-navy">Registered Office</h2>
            <div className="mt-4 space-y-1 text-sm leading-relaxed text-navy/70">
              {company.registeredOffice.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <div className="mt-6 space-y-2 text-sm text-navy/70">
              <p>
                <span className="font-semibold text-navy">Phone:</span> {company.phoneDisplay}
              </p>
              <p>
                <span className="font-semibold text-navy">Email:</span> {company.email}
              </p>
              <p>
                <span className="font-semibold text-navy">Website:</span> {company.website}
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-pad bg-white/70">
        <div className="container-page">
          <SectionHeading eyebrow="Mission" title="Our Mission" description={company.mission} />
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <SectionHeading
            eyebrow="Values"
            title="What guides our work"
            description="Our approach is grounded in client success, exceptional people, partnership and a fresh perspective on hard problems."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {company.values.map((value) => (
              <div key={value.title} className="card-surface p-6">
                <h3 className="font-display text-xl font-semibold text-navy">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy/65">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white/70">
        <div className="container-page">
          <SectionHeading eyebrow="Leadership" title="Our Team" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {company.team.map((member) => (
              <div key={member.name} className="card-surface p-6 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-navy via-emerald to-copper text-lg font-bold text-white">
                  {member.name
                    .split(' ')
                    .slice(0, 2)
                    .map((part) => part[0])
                    .join('')}
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-navy">{member.name}</h3>
                <p className="mt-1 text-sm text-navy/60">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page grid gap-8 lg:grid-cols-2">
          <div className="card-surface p-7">
            <h2 className="font-display text-2xl font-semibold text-navy">Customers & Partners</h2>
            <p className="mt-3 text-sm leading-relaxed text-navy/65">
              Organizations referenced in our company profile include:
            </p>
            <ul className="mt-5 space-y-2">
              {company.customersAndPartners.map((name) => (
                <li key={name} className="rounded-xl bg-mist px-4 py-3 text-sm font-semibold text-navy">
                  {name}
                </li>
              ))}
            </ul>
          </div>
          <div className="card-surface p-7">
            <h2 className="font-display text-2xl font-semibold text-navy">Locations</h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-navy/70">
              <div>
                <p className="font-semibold text-navy">Registered Office — Bangalore, India</p>
                <p className="mt-1">{company.registeredOffice.lines.slice(1).join(' ')}</p>
              </div>
              <div>
                <p className="font-semibold text-navy">Sales Office Presence</p>
                <p className="mt-1">{company.salesPresence.join(', ')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white/70">
        <div className="container-page">
          <SectionHeading
            eyebrow="Technologies"
            title="Technologies mastered"
            description="Technology platforms and languages highlighted in our company profile."
          />
          <div className="mt-8 overflow-x-auto rounded-2xl border border-navy/8 bg-white">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-mist text-navy">
                <tr>
                  <th className="px-4 py-3 font-semibold">Technology</th>
                  <th className="px-4 py-3 font-semibold">Use Case</th>
                  <th className="px-4 py-3 font-semibold">Advantages</th>
                </tr>
              </thead>
              <tbody>
                {company.technologies.map((tech) => (
                  <tr key={tech.name} className="border-t border-navy/8">
                    <td className="px-4 py-3 font-medium text-navy">{tech.name}</td>
                    <td className="px-4 py-3 text-navy/70">{tech.useCase}</td>
                    <td className="px-4 py-3 text-navy/70">{tech.advantages}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
