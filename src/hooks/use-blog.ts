import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
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
  BlogPostInput,
  BlogPostUpdate,
} from "@/types/blog";
import { BLOG_CONSTANTS } from "@/types/blog";
import {
  blogApi,
  BLOG_QUERY_KEYS,
  handleBlogApiError,
} from "@/lib/blog-api";

// Hook options interface
interface UseBlogOptions {
  enabled?: boolean;
  staleTime?: number;
  cacheTime?: number;
  refetchOnWindowFocus?: boolean;
  retry?: boolean | number;
}

// Default query options
const DEFAULT_QUERY_OPTIONS: UseBlogOptions = {
  enabled: true,
  staleTime: 5 * 60 * 1000, // 5 minutes
  cacheTime: 10 * 60 * 1000, // 10 minutes
  refetchOnWindowFocus: false,
  retry: 3,
};

// Blog posts hooks
export const useBlogPosts = (
  params: BlogSearchParams = {},
  sort: BlogSortOptions = BLOG_CONSTANTS.DEFAULT_SORT,
  pagination: Partial<BlogPagination> = {},
  options: UseBlogOptions = {}
) => {
  const queryOptions = { ...DEFAULT_QUERY_OPTIONS, ...options };

  return useQuery({
    queryKey: BLOG_QUERY_KEYS.posts({ ...params, ...pagination, ...sort }),
    queryFn: () => blogApi.getPosts(params, sort, pagination),
    ...queryOptions,
  });
};

export const useBlogPost = (slug: string, options: UseBlogOptions = {}) => {
  const queryOptions = { ...DEFAULT_QUERY_OPTIONS, ...options };

  return useQuery({
    queryKey: BLOG_QUERY_KEYS.post(slug),
    queryFn: () => blogApi.getPost(slug),
    enabled: queryOptions.enabled && !!slug,
    ...queryOptions,
  });
};

// Re-export types for convenience
export type {
  BlogPost,
  BlogPostMetadata,
  BlogCategory,
  BlogTag,
  Author,
  BlogSearchParams,
  BlogSortOptions,
  BlogPagination,
  BlogSearchResult,
};