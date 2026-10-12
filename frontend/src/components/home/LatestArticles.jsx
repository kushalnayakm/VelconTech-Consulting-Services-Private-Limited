import { Link } from 'react-router-dom';
import SectionHeading from '../common/SectionHeading';
import BlogCard from '../blog/BlogCard';
import { getAllPosts } from '../../lib/blog';

export default function LatestArticles() {
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <section className="section-pad bg-white/60">
      <div className="container-page">
        <SectionHeading
          eyebrow="Insights"
          title="Latest technology articles"
          description="Practical perspectives on cloud, data, cybersecurity, software and related technology topics."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {latestPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
        <div className="mt-8">
          <Link to="/blog" className="btn-secondary">
            Visit the blog
          </Link>
        </div>
      </div>
    </section>
  );
}
