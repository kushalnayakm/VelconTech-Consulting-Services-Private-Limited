import { useState } from 'react';
import { Check, Link2, Linkedin, Mail, Share2 } from 'lucide-react';

export default function ShareButtons({ url, title }) {
  const [copied, setCopied] = useState(false);
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const mailHref = `mailto:?subject=${encodedTitle}&body=${encodedTitle}%0A%0A${encodedUrl}`;

  const handleCopy = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(url);
      } else {
        const input = document.createElement('textarea');
        input.value = url;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
      }
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="blog-article__card">
      <h2 className="blog-article__card-title">Share this article</h2>
      <div className="blog-article__share">
        <a
          className="blog-article__share-btn"
          href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
          target="_blank"
          rel="noreferrer"
          aria-label="Share on X"
        >
          <Share2 className="blog-article__share-icon" />
        </a>
        <a
          className="blog-article__share-btn"
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
          target="_blank"
          rel="noreferrer"
          aria-label="Share on LinkedIn"
        >
          <Linkedin className="blog-article__share-icon" />
        </a>
        <button
          type="button"
          className="blog-article__share-btn"
          onClick={handleCopy}
          aria-label={copied ? 'Link copied' : 'Copy link'}
        >
          {copied ? <Check className="blog-article__share-icon" /> : <Link2 className="blog-article__share-icon" />}
        </button>
        <a className="blog-article__share-btn" href={mailHref} aria-label="Share by email">
          <Mail className="blog-article__share-icon" />
        </a>
      </div>
      {copied ? <p className="blog-article__share-status">Link copied</p> : null}
    </div>
  );
}
