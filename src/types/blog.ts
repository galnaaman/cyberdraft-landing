import type { Metadata } from "next";

// Core blog post types
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: Date;
  updatedAt: Date;
  status: BlogPostStatus;
  author: Author;
  category: BlogCategory;
  tags: BlogTag[];
  seo: BlogSEO;
  readTime: number; // in minutes
  featured: boolean;
  coverImage?: BlogImage;
}

export interface BlogPostMetadata {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: Date;
  updatedAt: Date;
  status: BlogPostStatus;
  author: Pick<Author, 'id' | 'name' | 'avatar'>;
  category: Pick<BlogCategory, 'id' | 'name' | 'slug'>;
  tags: Pick<BlogTag, 'id' | 'name' | 'slug'>[];
  readTime: number;
  featured: boolean;
  coverImage?: Pick<BlogImage, 'url' | 'alt'>;
}

export type BlogPostStatus = 'draft' | 'published' | 'archived';

// Author types
export interface Author {
  id: string;
  name: string;
  bio: string;
  avatar?: BlogImage;
  role: string;
  social?: AuthorSocial;
  slug: string;
}

export interface AuthorSocial {
  twitter?: string;
  linkedin?: string;
  github?: string;
  website?: string;
}

// Category and tag types
export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  color: string; // Hex color for styling
  icon?: string; // Icon name or component identifier
  parentId?: string; // For hierarchical categories
}

export interface BlogTag {
  id: string;
  name: string;
  slug: string;
  description?: string;
  count?: number; // Number of posts with this tag
}

// Image types
export interface BlogImage {
  url: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
  credit?: string;
}

// SEO and metadata types
export interface BlogSEO {
  metaTitle?: string; // Overrides post title if provided
  metaDescription?: string; // Overrides excerpt if provided
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: BlogImage;
  twitterCard?: 'summary' | 'summary_large_image';
  noIndex?: boolean;
  structuredData?: BlogStructuredData;
}

export interface BlogStructuredData {
  '@type': 'BlogPosting';
  headline: string;
  description: string;
  author: {
    '@type': 'Person';
    name: string;
    url?: string;
  };
  publisher: {
    '@type': 'Organization';
    name: string;
    logo?: {
      '@type': 'ImageObject';
      url: string;
    };
  };
  datePublished: string;
  dateModified: string;
  image?: string[];
  mainEntityOfPage: string;
}

// Search and filtering types
export interface BlogSearchParams {
  query?: string;
  category?: string;
  tag?: string;
  author?: string;
  status?: BlogPostStatus;
  featured?: boolean;
  dateFrom?: Date;
  dateTo?: Date;
}

export interface BlogSortOptions {
  field: 'publishedAt' | 'updatedAt' | 'title' | 'readTime';
  direction: 'asc' | 'desc';
}

export interface BlogPagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export interface BlogSearchResult {
  posts: BlogPostMetadata[];
  pagination: BlogPagination;
  filters: {
    categories: BlogCategory[];
    tags: BlogTag[];
    authors: Pick<Author, 'id' | 'name' | 'slug'>[];
  };
}

// Content management types
export interface BlogPostInput {
  title: string;
  excerpt: string;
  content: string;
  authorId: string;
  categoryId: string;
  tagIds: string[];
  status: BlogPostStatus;
  featured: boolean;
  coverImage?: Omit<BlogImage, 'url'> & { file?: File };
  seo?: Partial<BlogSEO>;
  publishedAt?: Date;
}

export interface BlogPostUpdate extends Partial<BlogPostInput> {
  id: string;
}

// API response types
export interface BlogApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}

export interface BlogPostResponse extends BlogApiResponse<BlogPost> {}
export interface BlogPostListResponse extends BlogApiResponse<BlogSearchResult> {}
export interface BlogCategoriesResponse extends BlogApiResponse<BlogCategory[]> {}
export interface BlogTagsResponse extends BlogApiResponse<BlogTag[]> {}
export interface BlogAuthorsResponse extends BlogApiResponse<Author[]> {}

// Utility types for dynamic routing
export type BlogRouteParams = {
  slug: string;
};

export type BlogCategoryRouteParams = {
  category: string;
};

export type BlogTagRouteParams = {
  tag: string;
};

export type BlogAuthorRouteParams = {
  author: string;
};

export type BlogSearchRouteParams = {
  query?: string;
  category?: string;
  tag?: string;
  author?: string;
  page?: string;
};

// Type guards for runtime type checking
export const isBlogPost = (obj: unknown): obj is BlogPost => {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    typeof (obj as BlogPost).id === 'string' &&
    typeof (obj as BlogPost).slug === 'string' &&
    typeof (obj as BlogPost).title === 'string'
  );
};

export const isBlogPostMetadata = (obj: unknown): obj is BlogPostMetadata => {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    typeof (obj as BlogPostMetadata).id === 'string' &&
    typeof (obj as BlogPostMetadata).slug === 'string' &&
    typeof (obj as BlogPostMetadata).title === 'string'
  );
};

// Constants for default values
export const BLOG_CONSTANTS = {
  DEFAULT_PAGE_SIZE: 10,
  MAX_PAGE_SIZE: 50,
  DEFAULT_SORT: { field: 'publishedAt' as const, direction: 'desc' as const },
  DEFAULT_READ_TIME: 5,
  EXCERPT_LENGTH: 160,
  SEO_TITLE_MAX_LENGTH: 60,
  SEO_DESCRIPTION_MAX_LENGTH: 160,
} as const;