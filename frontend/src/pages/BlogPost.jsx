import { Link, Navigate, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowLeft } from 'lucide-react';
import SEO from '../components/common/SEO';
import PageHero from '../components/common/PageHero';
import ShareButtons from '../components/blog/ShareButtons';
import { getPostBySlug, getRelatedPosts } from '../lib/blog';

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const related = getRelatedPosts(post);
  const shareUrl = typeof window !== 'undefined' ? window.location.href : `https://www.velcontech.com/blog/${post.slug}`;

  return (
    <>
      <SEO title={post.title} description={post.excerpt} path={`/blog/${post.slug}`} />
      <PageHero eyebrow={post.category} title={post.title} description={post.excerpt}>
        <div className="flex flex-wrap items-center gap-4 text-sm text-navy/60">
          <span>{post.author}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={post.date}>{post.date}</time>
          <span aria-hidden="true">·</span>
          <span>{post.readingTime} min read</span>
        </div>
      </PageHero>

      <article className="section-pad !pt-10">
        <div className="container-page grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div>
            <Link to="/blog" className="btn-secondary mb-8">
              <ArrowLeft className="h-4 w-4" />
              Back to blog
            </Link>
            <div className="prose-blog card-surface p-6 sm:p-10">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
            </div>
          </div>

          <aside className="space-y-6">
            <ShareButtons url={shareUrl} title={post.title} />

            <div className="card-surface p-5">
              <h2 className="font-display text-lg font-semibold text-navy">Related articles</h2>
              <ul className="mt-4 space-y-4">
                {related.map((item) => (
                  <li key={item.slug}>
                    <Link className="text-sm font-semibold text-emerald hover:underline" to={`/blog/${item.slug}`}>
                      {item.title}
                    </Link>
                    <p className="mt-1 text-xs text-navy/50">{item.readingTime} min read</p>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </article>
    </>
  );
}
