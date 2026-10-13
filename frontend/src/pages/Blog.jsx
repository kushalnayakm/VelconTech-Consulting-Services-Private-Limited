import { useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Search } from 'lucide-react';
import SEO from '../components/common/SEO';
import BlogCard from '../components/blog/BlogCard';
import { getCategories, searchPosts } from '../lib/blog';
import blogHeroIllustration from '../assets/images/blog-hero-ai-analytics.webp';

const PREFERRED_CATEGORIES = [
  'All',
  'Cloud',
  'Cybersecurity',
  'Data & AI',
  'Operations',
  'Semiconductor',
  'Software',
];

export default function Blog() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const reduceMotion = useReducedMotion();

  const categories = useMemo(() => {
    const available = new Set(getCategories());
    return PREFERRED_CATEGORIES.filter((item) => item === 'All' || available.has(item));
  }, []);

  const posts = searchPosts(query, category);

  return (
    <>
      <SEO
        title="Technology Blog"
        description="VelconTech technology articles on cloud, data, cybersecurity, software and related topics."
        path="/blog"
      />

      <section className="blog-listing__hero">
        <div className="blog-listing__hero-bg" aria-hidden="true">
          <div className="blog-listing__hero-glow blog-listing__hero-glow--a" />
          <div className="blog-listing__hero-glow blog-listing__hero-glow--b" />
          <div className="blog-listing__hero-glow blog-listing__hero-glow--c" />
          <svg className="blog-listing__hero-curves" viewBox="0 0 1200 420" fill="none" preserveAspectRatio="none">
            <path
              d="M-40 280 C 180 210, 320 330, 520 250 S 880 120, 1240 190"
              stroke="rgba(8,127,98,0.14)"
              strokeWidth="1.25"
            />
            <path
              d="M-20 340 C 220 300, 380 380, 620 310 S 960 220, 1240 280"
              stroke="rgba(184,115,75,0.16)"
              strokeWidth="1.1"
            />
            <circle cx="180" cy="120" r="3.5" fill="rgba(8,127,98,0.28)" />
            <circle cx="980" cy="88" r="2.5" fill="rgba(184,115,75,0.35)" />
            <circle cx="1080" cy="210" r="4" fill="rgba(8,127,98,0.18)" />
            <circle cx="720" cy="56" r="2" fill="rgba(16,43,70,0.16)" />
          </svg>
        </div>

        <div className="container-page blog-listing__hero-inner">
          <motion.div
            className="blog-listing__hero-copy"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="blog-listing__eyebrow">
              <span className="blog-listing__eyebrow-line" aria-hidden="true" />
              Blog
            </p>
            <h1 className="blog-listing__title">
              Technology <span className="text-emerald">Insights</span>
            </h1>
            <p className="blog-listing__description">
              Ideas, guides, and perspectives on technology that moves business forward.
            </p>
          </motion.div>

          <motion.div
            className="blog-listing__hero-visual"
            initial={reduceMotion ? false : { opacity: 0, y: 22, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: reduceMotion ? 0 : 0.6,
              delay: reduceMotion ? 0 : 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="blog-listing__hero-orb" aria-hidden="true" />
            <div className="blog-listing__hero-shape blog-listing__hero-shape--a" aria-hidden="true" />
            <div className="blog-listing__hero-shape blog-listing__hero-shape--b" aria-hidden="true" />
            <motion.img
              src={blogHeroIllustration}
              alt=""
              className="blog-listing__hero-image"
              width={560}
              height={420}
              decoding="async"
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, -8, 0],
                    }
              }
              transition={
                reduceMotion
                  ? undefined
                  : {
                      duration: 5.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }
              }
            />
          </motion.div>
        </div>
      </section>

      <section className="blog-listing__body">
        <div className="container-page">
          <div className="blog-listing__toolbar">
            <label className="blog-listing__search">
              <span className="sr-only">Search articles</span>
              <Search className="blog-listing__search-icon" aria-hidden="true" />
              <input
                className="blog-listing__search-input"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search articles"
              />
            </label>

            <div className="blog-listing__filters" role="group" aria-label="Article categories">
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  className={`blog-listing__filter${category === item ? ' is-active' : ''}`}
                  aria-pressed={category === item}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {posts.length ? (
            <div className="blog-listing__grid">
              {posts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.4,
                    delay: reduceMotion ? 0 : Math.min(index * 0.05, 0.3),
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <BlogCard post={post} />
                </motion.div>
              ))}
            </div>
          ) : (
            <p className="blog-listing__empty">No published articles match your filters.</p>
          )}
        </div>
      </section>
    </>
  );
}
