/// <reference types="vite/client" />

declare module 'virtual:blog-posts' {
  export type BlogPost = {
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    author: string;
    date: string;
    status: string;
    tags: string[];
    readingTime: number;
    content: string;
  };

  export const blogPosts: BlogPost[];
}
