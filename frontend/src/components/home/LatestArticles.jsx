import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getAllPosts } from '../../lib/blog';

export default function LatestArticles() {
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <section className="section-pad">
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="eyebrow mb-2">Insights</p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">Latest Insights</h2>
          <p className="body-muted mt-3 text-base sm:text-lg">
            Short perspectives on cloud, data, cybersecurity, software and related technology topics.
          </p>
        </div>

        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {latestPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="card-surface block p-5 transition hover:-translate-y-0.5 hover:shadow-soft"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">{post.category}</p>
              <h3 className="mt-2 font-display text-lg font-semibold text-navy">{post.title}</h3>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-navy/65">{post.excerpt}</p>
            </Link>
          ))}
        </div>

        <div className="mt-6">
          <Link to="/blog" className="btn-secondary">
            Visit the Blog
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
