import { Link2, Linkedin, Share2 } from 'lucide-react';

export default function ShareButtons({ url, title }) {
  const shareText = encodeURIComponent(title);

  return (
    <div className="card-surface p-5">
      <h2 className="font-display text-lg font-semibold text-navy">Share</h2>
      <div className="mt-4 flex flex-wrap gap-2">
        <a
          className="btn-secondary !px-3 !py-2"
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${shareText}`}
          target="_blank"
          rel="noreferrer"
        >
          <Share2 className="h-4 w-4" />
          X
        </a>
        <a
          className="btn-secondary !px-3 !py-2"
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin className="h-4 w-4" />
          LinkedIn
        </a>
        <button
          type="button"
          className="btn-secondary !px-3 !py-2"
          onClick={() => navigator.clipboard?.writeText(url)}
        >
          <Link2 className="h-4 w-4" />
          Copy
        </button>
      </div>
    </div>
  );
}
