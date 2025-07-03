export interface Article {
  id: string;
  title: string;
  summary: string;
  content: string;
  author: string;
  publishedAt: string;
  category: Category;
  imageUrl: string;
  tags: string[];
  readTime: number;
  isFeatured?: boolean;
  isTrending?: boolean;
  isBreaking?: boolean;
  slug?: string;
  metaDescription?: string;
  keywords?: string;
  canonicalUrl?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  color: string;
}

export interface NewsletterSubscription {
  email: string;
  preferences: string[];
}

export interface SEOArticle extends Article {
  slug: string;
  metaDescription: string;
  keywords: string;
  canonicalUrl: string;
  modifiedAt?: string;
}