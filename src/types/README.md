# Blog System TypeScript Architecture

This directory contains the comprehensive TypeScript architecture for the CyberDraft blog system, designed for type safety, SEO optimization, and integration with Next.js 15.

## Core Features

- **Type-Safe Data Structures**: Complete type definitions for blog posts, categories, tags, authors, and metadata
- **SEO Optimization**: Built-in SEO types with structured data and Open Graph support
- **Dynamic Routing**: Type-safe route parameters for Next.js App Router
- **Form Validation**: Zod schemas for runtime validation and form handling
- **API Integration**: TanStack Query hooks with proper error handling
- **Content Management**: Full CRUD operations with optimistic updates
- **Search & Filtering**: Advanced search capabilities with type safety
- **Analytics Support**: Built-in analytics and metrics tracking

## Architecture Overview

```
src/
├── types/
│   ├── blog.ts           # Core blog data structures
│   ├── seo.ts            # SEO and metadata types
│   └── index.ts          # Type exports
├── lib/
│   ├── blog-api.ts       # API client with error handling
│   ├── blog-routes.ts    # Next.js routing utilities
│   ├── blog-utils.ts     # Content processing utilities
│   ├── blog-validation.ts # Zod validation schemas
│   ├── seo.ts            # SEO metadata generators
│   └── index.ts          # Utility exports
└── hooks/
    ├── use-blog.ts       # React Query hooks
    └── index.ts          # Hook exports
```

## Key Type Definitions

### BlogPost
Complete blog post with content, metadata, and relationships:
```typescript
interface BlogPost {
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
  readTime: number;
  featured: boolean;
  coverImage?: BlogImage;
}
```

### BlogSEO
Comprehensive SEO metadata:
```typescript
interface BlogSEO {
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: BlogImage;
  twitterCard?: 'summary' | 'summary_large_image';
  noIndex?: boolean;
  structuredData?: BlogStructuredData;
}
```

### BlogSearchParams
Type-safe search and filtering:
```typescript
interface BlogSearchParams {
  query?: string;
  category?: string;
  tag?: string;
  author?: string;
  status?: BlogPostStatus;
  featured?: boolean;
  dateFrom?: Date;
  dateTo?: Date;
}
```

## Usage Examples

### Basic Post Fetching
```typescript
import { useBlogPost } from "@/hooks";

function BlogPostPage({ params }: { params: { slug: string } }) {
  const { data: post, isLoading, error } = useBlogPost(params.slug);
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading post</div>;
  if (!post) return <div>Post not found</div>;
  
  return <BlogPostComponent post={post} />;
}
```

### Search with Filtering
```typescript
import { useBlogSearch } from "@/hooks";

function SearchResults({ searchParams }: { searchParams: BlogSearchParams }) {
  const { data, isLoading } = useBlogSearch(
    searchParams.query || "",
    { category: searchParams.category, tag: searchParams.tag },
    { page: 1, limit: 10 }
  );
  
  return <BlogPostList posts={data?.posts || []} />;
}
```

### Metadata Generation
```typescript
import { generateBlogPostMetadata } from "@/lib";

export const generateMetadata = generateBlogPostMetadata;

export default function BlogPost({ params }: { params: { slug: string } }) {
  // Component implementation
}
```

### Form Validation
```typescript
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { blogPostInputSchema } from "@/lib";

function CreatePostForm() {
  const form = useForm({
    resolver: zodResolver(blogPostInputSchema),
    defaultValues: {
      title: "",
      excerpt: "",
      content: "",
      // ... other fields
    },
  });
  
  // Form implementation
}
```

## SEO Integration

### Automatic Metadata Generation
The system automatically generates:
- Page titles and descriptions
- Open Graph data for social sharing
- Twitter Card metadata
- Structured data (JSON-LD) for rich snippets
- Canonical URLs
- Robots meta tags

### Example Generated Metadata
```typescript
{
  title: "Advanced Threat Detection - CyberDraft Blog",
  description: "Learn about the latest advances in cybersecurity threat detection...",
  openGraph: {
    type: "article",
    title: "Advanced Threat Detection",
    description: "Learn about the latest advances...",
    url: "https://cyberdraft.com/blog/advanced-threat-detection",
    images: [{ url: "https://cyberdraft.com/og-image.jpg" }],
    publishedTime: "2024-01-15T10:00:00Z",
    authors: ["John Doe"],
    section: "Security",
    tags: ["threat-detection", "cybersecurity", "ai"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Advanced Threat Detection",
    description: "Learn about the latest advances...",
    images: ["https://cyberdraft.com/twitter-image.jpg"],
  },
}
```

## API Integration

### Type-Safe API Client
```typescript
import { blogApi } from "@/lib";

// Get posts with type safety
const posts = await blogApi.getPosts(
  { status: "published", category: "security" },
  { field: "publishedAt", direction: "desc" },
  { page: 1, limit: 10 }
);

// Error handling
try {
  const post = await blogApi.getPost(slug);
} catch (error) {
  if (isBlogApiError(error)) {
    console.log(`API Error [${error.status}]: ${error.message}`);
  }
}
```

### React Query Integration
```typescript
import { useBlogPosts } from "@/hooks";

function BlogList() {
  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
  } = useBlogPosts(
    { status: "published" },
    { field: "publishedAt", direction: "desc" },
    { page: 1, limit: 10 }
  );
  
  // Component implementation with loading states
}
```

## Validation and Forms

### Zod Schemas
All forms use Zod schemas for runtime validation:
- `blogPostInputSchema` - Creating new posts
- `blogPostUpdateSchema` - Updating existing posts
- `blogSearchParamsSchema` - Search parameters
- `blogCategorySchema` - Category management
- `blogTagSchema` - Tag management
- `authorSchema` - Author profiles

### Error Handling
```typescript
import { createFormValidationErrors } from "@/lib";

try {
  const validatedData = blogPostInputSchema.parse(formData);
} catch (error) {
  if (error instanceof z.ZodError) {
    const fieldErrors = createFormValidationErrors(error);
    // Handle field-specific errors
  }
}
```

## Content Management

### CRUD Operations
```typescript
import { useCreateBlogPost, useUpdateBlogPost, useDeleteBlogPost } from "@/hooks";

function PostEditor() {
  const createPost = useCreateBlogPost();
  const updatePost = useUpdateBlogPost();
  const deletePost = useDeleteBlogPost();
  
  const handleCreate = async (data: BlogPostInput) => {
    try {
      await createPost.mutateAsync(data);
      // Success handling
    } catch (error) {
      // Error handling
    }
  };
}
```

### Optimistic Updates
The React Query integration includes optimistic updates for better UX:
- Immediate UI updates on mutations
- Automatic cache invalidation
- Rollback on errors
- Background refetching

## Performance Features

### Static Generation
```typescript
// Generate static params for build-time optimization
export const generateStaticParams = generateBlogStaticParams;

// Pre-generate category pages
export const generateStaticParams = generateCategoryStaticParams;
```

### Caching Strategy
- Long-term caching for published content
- Short-term caching for frequently changing data
- Intelligent cache invalidation
- Background refetching for stale data

## Security Considerations

### Content Sanitization
```typescript
import { sanitizeContent } from "@/lib";

const safeContent = sanitizeContent(userInput);
```

### Input Validation
All user inputs are validated at multiple levels:
- Client-side with Zod schemas
- Server-side validation
- Content sanitization
- SQL injection prevention

## Future Extensibility

The architecture is designed for easy extension:

### Adding New Content Types
1. Define types in `types/blog.ts`
2. Add API methods in `lib/blog-api.ts`
3. Create React hooks in `hooks/use-blog.ts`
4. Add validation schemas in `lib/blog-validation.ts`

### Custom SEO Requirements
1. Extend SEO types in `types/seo.ts`
2. Add metadata generators in `lib/seo.ts`
3. Update route metadata functions

### Analytics Integration
1. Extend analytics types
2. Add tracking hooks
3. Implement dashboard components

## Development Workflow

### Type Safety
All operations maintain strict type safety:
- Compile-time checking with TypeScript
- Runtime validation with Zod
- API response validation
- Form input validation

### Testing Strategy
- Unit tests for utility functions
- Integration tests for API clients
- Component tests with proper typing
- E2E tests for user workflows

### Code Organization
- Clear separation of concerns
- Consistent naming conventions
- Comprehensive documentation
- Modular architecture for easy maintenance