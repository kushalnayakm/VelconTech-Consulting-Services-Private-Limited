import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';

const VIRTUAL_ID = 'virtual:blog-posts';
const RESOLVED_ID = '\0' + VIRTUAL_ID;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BLOG_DIR = path.resolve(__dirname, '../content/blog');

function readingTime(text) {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

function loadPosts() {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf8');
      const { data, content } = matter(raw);
      const slug = data.slug || file.replace(/\.md$/, '');
      return {
        slug,
        title: data.title || slug,
        excerpt: data.excerpt || '',
        category: data.category || 'Technology',
        author: data.author || 'VelconTech Team',
        date: data.date || '',
        status: data.status || 'draft',
        tags: data.tags || [],
        readingTime: readingTime(content),
        content,
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function blogPlugin() {
  return {
    name: 'velcontech-blog',
    resolveId(id) {
      if (id === VIRTUAL_ID) return RESOLVED_ID;
    },
    load(id) {
      if (id !== RESOLVED_ID) return null;
      const posts = loadPosts();
      return `export const blogPosts = ${JSON.stringify(posts)};`;
    },
    handleHotUpdate({ file, server }) {
      if (file.startsWith(BLOG_DIR) && file.endsWith('.md')) {
        const mod = server.moduleGraph.getModuleById(RESOLVED_ID);
        if (mod) {
          server.moduleGraph.invalidateModule(mod);
          server.ws.send({ type: 'full-reload' });
        }
      }
    },
  };
}
