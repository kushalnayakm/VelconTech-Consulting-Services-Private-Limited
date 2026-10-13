import { useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock3,
  Cloud,
  Code2,
  Cpu,
  Database,
  Layers,
  ShieldCheck,
  Workflow,
} from 'lucide-react';
import SEO from '../components/common/SEO';
import ShareButtons from '../components/blog/ShareButtons';
import { getPostBySlug, getRelatedPosts } from '../lib/blog';
import logoIcon from '../assets/images/logo-icon.jpeg';
import inventoryImage from '../assets/images/inventory.jpeg';
import semiconductorImage from '../assets/images/semicontor.jpeg';
import cybersecurityImage from '../assets/images/cs.jpeg';
import cloudImage from '../assets/images/CC.jpeg';
import dataAiImage from '../assets/images/images.jpeg';
import softwareImage from '../assets/images/erp.jpeg';

const categoryIcons = {
  Semiconductor: Cpu,
  Software: Code2,
  Cybersecurity: ShieldCheck,
  Operations: Workflow,
  Cloud: Cloud,
  'Data & AI': Database,
};

const categoryImages = {
  Operations: inventoryImage,
  Semiconductor: semiconductorImage,
  Cybersecurity: cybersecurityImage,
  Cloud: cloudImage,
  'Data & AI': dataAiImage,
  Software: softwareImage,
};

function formatDisplayDate(dateValue) {
  if (!dateValue) return '';
  const parsed = new Date(dateValue);
  if (Number.isNaN(parsed.getTime())) return dateValue;
  return parsed.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

function RelatedThumb({ post }) {
  const RelatedIcon = categoryIcons[post.category] || Layers;
  const thumbSrc = post.coverImage || categoryImages[post.category] || null;
  const [failed, setFailed] = useState(false);
  const showImage = Boolean(thumbSrc) && !failed;

  return (
    <span className="blog-article__related-thumb" aria-hidden="true">
      {showImage ? (
        <img
          src={thumbSrc}
          alt=""
          className="blog-article__related-thumb-image"
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
        />
      ) : (
        <RelatedIcon className="blog-article__related-thumb-icon" />
      )}
    </span>
  );
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);
  const reduceMotion = useReducedMotion();
  const [heroFailed, setHeroFailed] = useState(false);

  useEffect(() => {
    setHeroFailed(false);
  }, [slug]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const related = getRelatedPosts(post);
  const shareUrl =
    typeof window !== 'undefined' ? window.location.href : `https://www.velcontech.com/blog/${post.slug}`;
  const tags = Array.isArray(post.tags) ? post.tags.filter(Boolean) : [];
  const CategoryIcon = categoryIcons[post.category] || Layers;
  const heroImage = post.coverImage || categoryImages[post.category] || null;
  const showHeroImage = Boolean(heroImage) && !heroFailed;
  const motionProps = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 18 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
      };

  return (
    <>
      <SEO title={post.title} description={post.excerpt} path={`/blog/${post.slug}`} />

      <article className="blog-article">
        <header className="blog-article__hero">
          <div className="blog-article__hero-glow" aria-hidden="true" />
          <div className="blog-article__hero-shapes" aria-hidden="true">
            <span className="blog-article__hero-shape blog-article__hero-shape--a" />
            <span className="blog-article__hero-shape blog-article__hero-shape--b" />
          </div>
          <div className="container-page blog-article__hero-inner">
            <motion.div className="blog-article__hero-copy" {...motionProps}>
              <p className="blog-article__category">
                <span className="blog-article__category-rule" aria-hidden="true" />
                {post.category}
              </p>
              <h1 className="blog-article__title">{post.title}</h1>
              {post.excerpt ? <p className="blog-article__excerpt">{post.excerpt}</p> : null}

              <div className="blog-article__meta">
                <span className="blog-article__author">
                  <span className="blog-article__avatar" aria-hidden="true">
                    <img src={logoIcon} alt="" className="blog-article__avatar-image" width={40} height={40} />
                  </span>
                  <span>{post.author}</span>
                </span>
                {post.date ? (
                  <span className="blog-article__meta-item">
                    <CalendarDays className="blog-article__meta-icon" aria-hidden="true" />
                    <time dateTime={post.date}>{formatDisplayDate(post.date)}</time>
                  </span>
                ) : null}
                <span className="blog-article__meta-item">
                  <Clock3 className="blog-article__meta-icon" aria-hidden="true" />
                  {post.readingTime} min read
                </span>
              </div>
            </motion.div>

            <motion.div
              className="blog-article__hero-visual"
              aria-hidden="true"
              {...(reduceMotion
                ? {}
                : {
                    initial: { opacity: 0, y: 22 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] },
                  })}
            >
              <div className="blog-article__hero-orb" />
              <div
                className={`blog-article__hero-panel${showHeroImage ? ' blog-article__hero-panel--media' : ''}`}
              >
                {showHeroImage ? (
                  <img
                    src={heroImage}
                    alt=""
                    className="blog-article__hero-image"
                    width={480}
                    height={360}
                    decoding="async"
                    onError={() => setHeroFailed(true)}
                  />
                ) : (
                  <CategoryIcon className="blog-article__hero-icon" strokeWidth={1.5} />
                )}
              </div>
            </motion.div>
          </div>
        </header>

        <div className="blog-article__body">
          <div className="container-page blog-article__layout">
            <motion.div
              className="blog-article__main"
              {...(reduceMotion
                ? {}
                : {
                    initial: { opacity: 0, y: 16 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.45, delay: 0.1, ease: [0.22, 1, 0.36, 1] },
                  })}
            >
              <Link to="/blog" className="blog-article__back">
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>

              <div className="blog-article__content prose-blog">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
              </div>
            </motion.div>

            <motion.aside
              className="blog-article__sidebar"
              {...(reduceMotion
                ? {}
                : {
                    initial: { opacity: 0, y: 16 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.45, delay: 0.16, ease: [0.22, 1, 0.36, 1] },
                  })}
            >
              <ShareButtons url={shareUrl} title={post.title} />

              {related.length ? (
                <div className="blog-article__card">
                  <div className="blog-article__card-head">
                    <h2 className="blog-article__card-title">Related articles</h2>
                    <ArrowRight className="blog-article__card-head-icon" aria-hidden="true" />
                  </div>
                  <ul className="blog-article__related">
                    {related.map((item) => (
                      <li key={item.slug}>
                        <Link to={`/blog/${item.slug}`} className="blog-article__related-link">
                          <RelatedThumb post={item} />
                          <span className="blog-article__related-copy">
                            <span className="blog-article__related-title">{item.title}</span>
                            <span className="blog-article__related-meta">{item.readingTime} min read</span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {tags.length ? (
                <div className="blog-article__card">
                  <h2 className="blog-article__card-title">Tags</h2>
                  <div className="blog-article__tags">
                    {tags.map((tag) => (
                      <span key={tag} className="blog-article__tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}
            </motion.aside>
          </div>
        </div>
      </article>
    </>
  );
}
