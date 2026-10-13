import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Cloud,
  Code2,
  Cpu,
  Database,
  Layers,
  ShieldCheck,
  UserRound,
  Workflow,
} from 'lucide-react';
import inventoryImage from '../../assets/images/inventory.jpeg';
import semiconductorImage from '../../assets/images/semicontor.jpeg';
import cybersecurityImage from '../../assets/images/cs.jpeg';
import cloudImage from '../../assets/images/CC.jpeg';
import dataAiImage from '../../assets/images/images.jpeg';
import softwareImage from '../../assets/images/erp.jpeg';

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

export default function BlogCard({ post }) {
  const CategoryIcon = categoryIcons[post.category] || Layers;
  const coverImage = post.coverImage || categoryImages[post.category] || null;
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
