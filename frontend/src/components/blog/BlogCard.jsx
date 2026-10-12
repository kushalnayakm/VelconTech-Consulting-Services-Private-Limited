import { Link } from 'react-router-dom';

export default function BlogCard({ post }) {
  return (
    <Link to={`/blog/${post.slug}`} className="card-surface block p-6 transition hover:shadow-soft">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">{post.category}</p>
      <h2 className="mt-3 font-display text-xl font-semibold text-navy">{post.title}</h2>
      <p className="mt-3 text-sm leading-relaxed text-navy/65">{post.excerpt}</p>
      <p className="mt-4 text-xs text-navy/50">
        {post.author} · {post.date} · {post.readingTime} min read
      </p>
    </Link>
  );
}
