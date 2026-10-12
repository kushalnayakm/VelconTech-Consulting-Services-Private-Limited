import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import PageHero from '../components/common/PageHero';

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="The requested VelconTech page could not be found." path="/404" />
      <PageHero
        eyebrow="404"
        title="Page not found"
        description="The page you requested does not exist or may have moved."
      >
        <Link to="/" className="btn-primary">
          Return home
        </Link>
      </PageHero>
    </>
  );
}
