import { Helmet } from 'react-helmet-async';

export default function SEO({
  title,
  description = 'VelconTech Consulting Services Private Limited — technology consulting across software, cloud, data, cybersecurity and emerging technologies.',
  path = '/',
}) {
  const fullTitle = title
    ? `${title} | VelconTech`
    : 'VelconTech | Where Technology Customizes';
  const url = `https://www.velcontech.com${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
