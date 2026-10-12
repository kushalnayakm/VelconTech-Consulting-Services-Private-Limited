import { blogPosts as allPosts } from 'virtual:blog-posts';

export function getAllPosts({ includeDrafts = false } = {}) {
  return allPosts.filter((post) => includeDrafts || post.status === 'published');
}

export function getPostBySlug(slug) {
  return getAllPosts().find((post) => post.slug === slug);
}

export function getCategories() {
  return [...new Set(getAllPosts().map((post) => post.category))].sort();
}

export function getRelatedPosts(post, limit = 3) {
  return getAllPosts()
    .filter((item) => item.slug !== post.slug)
    .sort((a, b) => {
      const aScore = a.category === post.category ? 1 : 0;
      const bScore = b.category === post.category ? 1 : 0;
      return bScore - aScore;
    })
    .slice(0, limit);
}

export function searchPosts(query, category) {
  const q = query.trim().toLowerCase();
  return getAllPosts().filter((post) => {
    const matchesCategory = !category || category === 'All' || post.category === category;
    if (!matchesCategory) return false;
    if (!q) return true;
    const haystack = [post.title, post.excerpt, post.category, ...(post.tags || [])]
      .join(' ')
      .toLowerCase();
    return haystack.includes(q);
  });
}
