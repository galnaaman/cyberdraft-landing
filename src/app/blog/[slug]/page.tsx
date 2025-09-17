import { getBlogPost, getAllPosts } from "@/lib/blog-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShareButton } from "@/components/ShareButton";
import { Clock, User, Calendar, ArrowLeft, BookOpen } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.id,
  }));
}

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  
  if (!post) {
    notFound();
  }

  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  // Convert content to JSX (simplified markdown parsing)
  const formatContent = (content: string) => {
    return content.split('\n').map((line, index) => {
      if (line.startsWith('# ')) {
        return <h1 key={index} className="text-4xl font-bold text-white mb-6 mt-8">{line.slice(2)}</h1>;
      } else if (line.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-bold text-white mb-4 mt-8">{line.slice(3)}</h2>;
      } else if (line.startsWith('### ')) {
        return <h3 key={index} className="text-xl font-bold text-white mb-3 mt-6">{line.slice(4)}</h3>;
      } else if (line.startsWith('- ')) {
        return <li key={index} className="text-white/80 ml-4 mb-2">{line.slice(2)}</li>;
      } else if (line.trim() === '') {
        return <br key={index} />;
      } else {
        return <p key={index} className="text-white/80 mb-4 leading-relaxed">{line}</p>;
      }
    });
  };

  return (
    <div className="min-h-screen relative">
      {/* Cybersecurity-themed background */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900 via-cyan-900 to-indigo-900 opacity-90"></div>
      <div className="fixed inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_black_70%)]"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Back Navigation */}
        <section className="pt-24 pb-8 px-6">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog">
              <Button variant="outline" className="bg-black/40 border-white/30 text-white hover:bg-black/60 mb-8">
                <ArrowLeft size={16} className="mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </section>

        {/* Article Header */}
        <section className="pb-12 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Badge className="bg-blue-600 hover:bg-blue-700 text-white mb-4">
                {post.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-2xl leading-tight">
                {post.title}
              </h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-6 mb-8 text-white/70">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{post.readTimeMinutes} min read</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen size={16} />
                <span>{post.content.split(' ').length} words</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="border-cyan-500/50 text-cyan-400">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Share Button */}
            <div className="flex gap-4 mb-12">
              <ShareButton title={post.title} excerpt={post.excerpt} />
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="pb-16 px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-black/60 backdrop-blur-md border-blue-500/20 shadow-2xl shadow-black/70">
              <CardContent className="p-8 md:p-12">
                <div className="prose prose-invert prose-lg max-w-none">
                  {formatContent(post.content)}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <section className="py-16 px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8 drop-shadow-lg">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`}>
                    <Card className="bg-black/60 backdrop-blur-md border-blue-500/20 shadow-xl shadow-black/50 hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105 h-full">
                      <div className="aspect-video bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-t-lg"></div>
                      <CardContent className="p-6">
                        <Badge variant="outline" className="border-cyan-500/50 text-cyan-400 text-xs mb-3">
                          {relatedPost.category}
                        </Badge>
                        <h3 className="text-lg font-bold text-white line-clamp-2 hover:text-cyan-400 transition-colors mb-3">
                          {relatedPost.title}
                        </h3>
                        <p className="text-white/70 text-sm line-clamp-2 mb-4">
                          {relatedPost.excerpt}
                        </p>
                        <div className="flex items-center gap-3 text-xs text-white/60">
                          <div className="flex items-center gap-1">
                            <Clock size={10} />
                            <span>{relatedPost.readTimeMinutes} min</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar size={10} />
                            <span>{new Date(relatedPost.publishedAt).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Newsletter CTA */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-black/60 backdrop-blur-md rounded-2xl p-12 border border-blue-500/30 shadow-2xl shadow-black/70">
              <h2 className="text-3xl font-bold text-white mb-4 drop-shadow-lg">
                Enjoyed this article?
              </h2>
              <p className="text-white/80 mb-8 text-lg">
                Subscribe to our cybersecurity newsletter for more expert insights and threat intelligence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 shadow-lg">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}