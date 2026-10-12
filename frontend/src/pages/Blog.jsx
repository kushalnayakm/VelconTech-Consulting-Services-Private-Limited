import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import SEO from '../components/common/SEO';
import PageHero from '../components/common/PageHero';
import BlogCard from '../components/blog/BlogCard';
import { getCategories, searchPosts } from '../lib/blog';

export default function Blog() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const categories = useMemo(() => ['All', ...getCategories()], []);
  const posts = searchPosts(query, category);

  return (
    <>
      <SEO
        title="Technology Blog"
        description="VelconTech technology articles on cloud, data, cybersecurity, software and related topics."
        path="/blog"
      />
      <PageHero
        eyebrow="Blog"
        title="Technology insights"
        description="Articles are managed as Markdown files and published with the website build. Draft posts are not listed publicly."
      />

      <section className="section-pad">
        <div className="container-page">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <label className="relative block w-full max-w-md">
              <span className="sr-only">Search articles</span>
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/40" />
              <input
                className="input-field pl-10"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search articles"
              />
            </label>
            <div className="flex flex-wrap gap-2">
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
                    category === item
                      ? 'bg-emerald text-white'
                      : 'border border-navy/10 bg-white text-navy hover:border-navy/25'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

          {!posts.length ? (
            <p className="mt-10 text-center text-navy/60">No published articles match your filters.</p>
          ) : null}
        </div>
      </section>
    </>
  );
}
