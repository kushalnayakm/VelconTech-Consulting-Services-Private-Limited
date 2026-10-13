export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow ? <p className="eyebrow mb-2">{eyebrow}</p> : null}
      <h2 className="heading-display !text-3xl sm:!text-4xl">{title}</h2>
      {description ? <p className="body-muted mt-3 text-base sm:text-lg">{description}</p> : null}
    </div>
  );
}
