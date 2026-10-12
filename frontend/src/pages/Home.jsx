import SEO from '../components/common/SEO';
import CtaBand from '../components/common/CtaBand';
import Hero from '../components/home/Hero';
import ServicesOverview from '../components/home/ServicesOverview';
import FeaturedProjects from '../components/home/FeaturedProjects';
import AboutPreview from '../components/home/AboutPreview';
import CareersPreview from '../components/home/CareersPreview';
import LatestArticles from '../components/home/LatestArticles';

export default function Home() {
  return (
    <>
      <SEO
        title="Home"
        description="VelconTech Consulting Services Private Limited — technology consulting across software, cloud, data and emerging technologies."
        path="/"
      />
      <Hero />
      <ServicesOverview />
      <FeaturedProjects />
      <AboutPreview />
      <CareersPreview />
      <LatestArticles />
      <CtaBand />
    </>
  );
}
