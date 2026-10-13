import { technologyPartners } from '../../data/partners'

export default function TrustedPartners() {
  const loopPartners = [...technologyPartners, ...technologyPartners]

  return (
    <section className="partners-section" aria-labelledby="trusted-partners-heading">
      <div className="container-page">
        <div className="partners-section__intro">
          <div className="partners-section__accent" aria-hidden="true" />
          <div>
            <h2 id="trusted-partners-heading" className="partners-section__title">
              Our Partners
            </h2>
            <p className="partners-section__subtitle">Trusted Technology. Stronger Solutions.</p>
          </div>
        </div>
      </div>

      <div className="partners-carousel" aria-label="Technology partner logos">
        <div className="partners-carousel__track">
          {loopPartners.map((partner, index) => (
            <div
              className="partners-carousel__item"
              key={`${partner.id}-${index}`}
              aria-hidden={index >= technologyPartners.length ? true : undefined}
            >
              <img
                src={partner.logo}
                alt={partner.alt}
                loading="lazy"
                decoding="async"
              />
              <span className="partners-carousel__name">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
