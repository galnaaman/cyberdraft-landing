import type {
  BlogPost,
  BlogPostMetadata,
  BlogCategory,
  BlogTag,
  Author,
  BlogSearchParams,
  BlogSortOptions,
  BlogPagination,
  BlogSearchResult,
  BlogApiResponse,
  BlogPostResponse,
  BlogPostListResponse,
  BlogCategoriesResponse,
  BlogTagsResponse,
  BlogAuthorsResponse,
  BlogPostInput,
  BlogPostUpdate,
} from "@/types/blog";
import { BLOG_CONSTANTS } from "@/types/blog";

// API client configuration
interface BlogApiConfig {
  baseUrl: string;
  apiKey?: string;
  timeout?: number;
  retries?: number;
}

class BlogApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public code?: string
  ) {
    super(message);
    this.name = "BlogApiError";
  }
}

// Main API client class
export class BlogApiClient {
  private config: BlogApiConfig;

  constructor(config: BlogApiConfig) {
    this.config = {
      timeout: 10000,
      retries: 3,
      ...config,
    };
  }

  private async fetchWithRetry<T>(
    url: string,
    options: RequestInit = {},
    retries = this.config.retries!
  ): Promise<T> {
    const requestOptions: RequestInit = {
      headers: {
        "Content-Type": "application/json",
        ...(this.config.apiKey && { Authorization: `Bearer ${this.config.apiKey}` }),
        ...options.headers,
      },
      ...options,
    };

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), this.config.timeout);

      const response = await fetch(url, {
        ...requestOptions,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new BlogApiError(
          `HTTP ${response.status}: ${response.statusText}`,
          response.status
        );
      }

      const data = await response.json();
      return data;
    } catch (error) {
      if (retries > 0 && !(error instanceof BlogApiError && error.status < 500)) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        return this.fetchWithRetry<T>(url, options, retries - 1);
      }
      throw error;
    }
  }

  // Blog post operations
  async getPosts(
    params: BlogSearchParams = {},
    sort: BlogSortOptions = BLOG_CONSTANTS.DEFAULT_SORT,
    pagination: Partial<BlogPagination> = {}
  ): Promise<BlogSearchResult> {
    const queryParams = new URLSearchParams();
    
    // Add search parameters
    if (params.query) queryParams.set("q", params.query);
    if (params.category) queryParams.set("category", params.category);
    if (params.tag) queryParams.set("tag", params.tag);
    if (params.author) queryParams.set("author", params.author);
    if (params.status) queryParams.set("status", params.status);
    if (params.featured !== undefined) queryParams.set("featured", params.featured.toString());
    if (params.dateFrom) queryParams.set("dateFrom", params.dateFrom.toISOString());
    if (params.dateTo) queryParams.set("dateTo", params.dateTo.toISOString());

    // Add sorting
    queryParams.set("sortField", sort.field);
    queryParams.set("sortDirection", sort.direction);

    // Add pagination
    queryParams.set("page", (pagination.page || 1).toString());
    queryParams.set("limit", (pagination.limit || BLOG_CONSTANTS.DEFAULT_PAGE_SIZE).toString());

    const url = `${this.config.baseUrl}/api/blog/posts?${queryParams}`;
    const response = await this.fetchWithRetry<BlogPostListResponse>(url);

    if (!response.success) {
      throw new BlogApiError(response.error || "Failed to fetch posts", 500);
    }

    return response.data;
  }

  async getPost(slug: string): Promise<BlogPost> {
    const url = `${this.config.baseUrl}/api/blog/posts/${slug}`;
    const response = await this.fetchWithRetry<BlogPostResponse>(url);

    if (!response.success) {
      throw new BlogApiError(response.error || "Post not found", 404);
    }

    return response.data;
  }

  async getPostMetadata(slug: string): Promise<BlogPostMetadata> {
    const url = `${this.config.baseUrl}/api/blog/posts/${slug}/metadata`;
    const response = await this.fetchWithRetry<BlogApiResponse<BlogPostMetadata>>(url);

    if (!response.success) {
      throw new BlogApiError(response.error || "Post metadata not found", 404);
    }

    return response.data;
  }

  async createPost(post: BlogPostInput): Promise<BlogPost> {
    const url = `${this.config.baseUrl}/api/blog/posts`;
    const response = await this.fetchWithRetry<BlogPostResponse>(url, {
      method: "POST",
      body: JSON.stringify(post),
    });

    if (!response.success) {
      throw new BlogApiError(response.error || "Failed to create post", 500);
    }

    return response.data;
  }

  async updatePost(update: BlogPostUpdate): Promise<BlogPost> {
    const url = `${this.config.baseUrl}/api/blog/posts/${update.id}`;
    const response = await this.fetchWithRetry<BlogPostResponse>(url, {
      method: "PUT",
      body: JSON.stringify(update),
    });

    if (!response.success) {
      throw new BlogApiError(response.error || "Failed to update post", 500);
    }

    return response.data;
  }

  async deletePost(id: string): Promise<void> {
    const url = `${this.config.baseUrl}/api/blog/posts/${id}`;
    const response = await this.fetchWithRetry<BlogApiResponse<null>>(url, {
      method: "DELETE",
    });

    if (!response.success) {
      throw new BlogApiError(response.error || "Failed to delete post", 500);
    }
  }

  // Category operations
  async getCategories(): Promise<BlogCategory[]> {
    const url = `${this.config.baseUrl}/api/blog/categories`;
    const response = await this.fetchWithRetry<BlogCategoriesResponse>(url);

    if (!response.success) {
      throw new BlogApiError(response.error || "Failed to fetch categories", 500);
    }

    return response.data;
  }

  async getCategory(slug: string): Promise<BlogCategory> {
    const url = `${this.config.baseUrl}/api/blog/categories/${slug}`;
    const response = await this.fetchWithRetry<BlogApiResponse<BlogCategory>>(url);

    if (!response.success) {
      throw new BlogApiError(response.error || "Category not found", 404);
    }

    return response.data;
  }

  async getCategoryPosts(
    categorySlug: string,
    pagination: Partial<BlogPagination> = {},
    sort: BlogSortOptions = BLOG_CONSTANTS.DEFAULT_SORT
  ): Promise<BlogSearchResult> {
    return this.getPosts(
      { category: categorySlug },
      sort,
      pagination
    );
  }

  // Tag operations
  async getTags(): Promise<BlogTag[]> {
    const url = `${this.config.baseUrl}/api/blog/tags`;
    const response = await this.fetchWithRetry<BlogTagsResponse>(url);

    if (!response.success) {
      throw new BlogApiError(response.error || "Failed to fetch tags", 500);
    }

    return response.data;
  }

  async getTag(slug: string): Promise<BlogTag> {
    const url = `${this.config.baseUrl}/api/blog/tags/${slug}`;
    const response = await this.fetchWithRetry<BlogApiResponse<BlogTag>>(url);

    if (!response.success) {
      throw new BlogApiError(response.error || "Tag not found", 404);
    }

    return response.data;
  }

  async getTagPosts(
    tagSlug: string,
    pagination: Partial<BlogPagination> = {},
    sort: BlogSortOptions = BLOG_CONSTANTS.DEFAULT_SORT
  ): Promise<BlogSearchResult> {
    return this.getPosts(
      { tag: tagSlug },
      sort,
      pagination
    );
  }

  // Author operations
  async getAuthors(): Promise<Author[]> {
    const url = `${this.config.baseUrl}/api/blog/authors`;
    const response = await this.fetchWithRetry<BlogAuthorsResponse>(url);

    if (!response.success) {
      throw new BlogApiError(response.error || "Failed to fetch authors", 500);
    }

    return response.data;
  }

  async getAuthor(slug: string): Promise<Author> {
    const url = `${this.config.baseUrl}/api/blog/authors/${slug}`;
    const response = await this.fetchWithRetry<BlogApiResponse<Author>>(url);

    if (!response.success) {
      throw new BlogApiError(response.error || "Author not found", 404);
    }

    return response.data;
  }

  async getAuthorPosts(
    authorSlug: string,
    pagination: Partial<BlogPagination> = {},
    sort: BlogSortOptions = BLOG_CONSTANTS.DEFAULT_SORT
  ): Promise<BlogSearchResult> {
    return this.getPosts(
      { author: authorSlug },
      sort,
      pagination
    );
  }

  // Search operations
  async searchPosts(
    query: string,
    filters: Omit<BlogSearchParams, "query"> = {},
    pagination: Partial<BlogPagination> = {},
    sort: BlogSortOptions = BLOG_CONSTANTS.DEFAULT_SORT
  ): Promise<BlogSearchResult> {
    return this.getPosts(
      { query, ...filters },
      sort,
      pagination
    );
  }

  // Related posts
  async getRelatedPosts(
    postId: string,
    limit = 5
  ): Promise<BlogPostMetadata[]> {
    const url = `${this.config.baseUrl}/api/blog/posts/${postId}/related?limit=${limit}`;
    const response = await this.fetchWithRetry<BlogApiResponse<BlogPostMetadata[]>>(url);

    if (!response.success) {
      throw new BlogApiError(response.error || "Failed to fetch related posts", 500);
    }

    return response.data;
  }

  // Popular posts
  async getPopularPosts(
    period: "day" | "week" | "month" | "year" = "month",
    limit = 10
  ): Promise<BlogPostMetadata[]> {
    const url = `${this.config.baseUrl}/api/blog/posts/popular?period=${period}&limit=${limit}`;
    const response = await this.fetchWithRetry<BlogApiResponse<BlogPostMetadata[]>>(url);

    if (!response.success) {
      throw new BlogApiError(response.error || "Failed to fetch popular posts", 500);
    }

    return response.data;
  }

  // Recent posts
  async getRecentPosts(limit = 5): Promise<BlogPostMetadata[]> {
    const url = `${this.config.baseUrl}/api/blog/posts/recent?limit=${limit}`;
    const response = await this.fetchWithRetry<BlogApiResponse<BlogPostMetadata[]>>(url);

    if (!response.success) {
      throw new BlogApiError(response.error || "Failed to fetch recent posts", 500);
    }

    return response.data;
  }

  // Featured posts
  async getFeaturedPosts(limit = 3): Promise<BlogPostMetadata[]> {
    const url = `${this.config.baseUrl}/api/blog/posts/featured?limit=${limit}`;
    const response = await this.fetchWithRetry<BlogApiResponse<BlogPostMetadata[]>>(url);

    if (!response.success) {
      throw new BlogApiError(response.error || "Failed to fetch featured posts", 500);
    }

    return response.data;
  }
}

// Default API client instance
export const blogApi = new BlogApiClient({
  baseUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000",
  apiKey: process.env.BLOG_API_KEY,
});

// Utility functions for common operations
export const fetchBlogPosts = async (
  params: BlogSearchParams = {},
  options: {
    sort?: BlogSortOptions;
    pagination?: Partial<BlogPagination>;
  } = {}
): Promise<BlogSearchResult> => {
  const { sort = BLOG_CONSTANTS.DEFAULT_SORT, pagination = {} } = options;
  return blogApi.getPosts(params, sort, pagination);
};

export const fetchBlogPost = async (slug: string): Promise<BlogPost> => {
  return blogApi.getPost(slug);
};

export const fetchBlogCategories = async (): Promise<BlogCategory[]> => {
  return blogApi.getCategories();
};

export const fetchBlogTags = async (): Promise<BlogTag[]> => {
  return blogApi.getTags();
};

export const fetchBlogAuthors = async (): Promise<Author[]> => {
  return blogApi.getAuthors();
};

// Error handling helpers
export const isBlogApiError = (error: unknown): error is BlogApiError => {
  return error instanceof BlogApiError;
};

export const handleBlogApiError = (error: unknown): {
  message: string;
  status: number;
  code?: string;
} => {
  if (isBlogApiError(error)) {
    return {
      message: error.message,
      status: error.status,
      code: error.code,
    };
  }

  if (error instanceof Error) {
    return {
      message: error.message,
      status: 500,
    };
  }

  return {
    message: "An unknown error occurred",
    status: 500,
  };
};

// Cache keys for React Query or SWR
export const BLOG_QUERY_KEYS = {
  posts: (params?: BlogSearchParams) => ["blog", "posts", params],
  post: (slug: string) => ["blog", "post", slug],
  postMetadata: (slug: string) => ["blog", "post", "metadata", slug],
  categories: () => ["blog", "categories"],
  category: (slug: string) => ["blog", "category", slug],
  categoryPosts: (slug: string, params?: BlogSearchParams) => ["blog", "category", slug, "posts", params],
  tags: () => ["blog", "tags"],
  tag: (slug: string) => ["blog", "tag", slug],
  tagPosts: (slug: string, params?: BlogSearchParams) => ["blog", "tag", slug, "posts", params],
  authors: () => ["blog", "authors"],
  author: (slug: string) => ["blog", "author", slug],
  authorPosts: (slug: string, params?: BlogSearchParams) => ["blog", "author", slug, "posts", params],
  search: (query: string, filters?: BlogSearchParams) => ["blog", "search", query, filters],
  relatedPosts: (postId: string) => ["blog", "post", postId, "related"],
  popularPosts: (period: string) => ["blog", "posts", "popular", period],
  recentPosts: () => ["blog", "posts", "recent"],
  featuredPosts: () => ["blog", "posts", "featured"],
} as const;