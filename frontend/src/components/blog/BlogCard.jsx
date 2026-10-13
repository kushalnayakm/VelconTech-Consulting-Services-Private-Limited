import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CalendarDays, Clock3, UserRound } from 'lucide-react';
import {
  formatDisplayDate,
  getCategoryIcon,
  getCategoryImage,
} from '../../lib/blogDisplay';

export default function BlogCard({ post }) {
  const CategoryIcon = getCategoryIcon(post.category);
  const coverImage = post.coverImage || getCategoryImage(post.category);
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = Boolean(coverImage) && !imageFailed;

  return (
    <Link to={`/blog/${post.slug}`} className="blog-card">
      <div className="blog-card__media" aria-hidden="true">
        {showImage ? (
          <img
            src={coverImage}
            alt=""
            className="blog-card__image"
            loading="lazy"
            decoding="async"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div
            className={`blog-card__fallback blog-card__fallback--${(post.category || 'default')
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, '-')}`}
          >
            <CategoryIcon className="blog-card__fallback-icon" strokeWidth={1.5} />
          </div>
        )}
      </div>

      <div className="blog-card__body">
        <p className="blog-card__category">{post.category}</p>
        <h2 className="blog-card__title">{post.title}</h2>
        {post.excerpt ? <p className="blog-card__excerpt">{post.excerpt}</p> : null}

        <div className="blog-card__footer">
          <div className="blog-card__meta">
            <span className="blog-card__meta-item">
              <UserRound className="blog-card__meta-icon" aria-hidden="true" />
              {post.author}
            </span>
            {post.date ? (
              <span className="blog-card__meta-item">
                <CalendarDays className="blog-card__meta-icon" aria-hidden="true" />
                <time dateTime={post.date}>{formatDisplayDate(post.date)}</time>
              </span>
            ) : null}
            <span className="blog-card__meta-item">
              <Clock3 className="blog-card__meta-icon" aria-hidden="true" />
              {post.readingTime} min read
            </span>
          </div>

          <span className="blog-card__arrow" aria-hidden="true">
            <ArrowRight className="blog-card__arrow-icon" />
          </span>
        </div>
      </div>
    </Link>
  );
}
