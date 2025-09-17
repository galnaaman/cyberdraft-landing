import { BlogPost } from "@/lib/blog-data";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, User, Calendar } from "lucide-react";
import Link from "next/link";

interface BlogPostCardProps {
  post: BlogPost;
  featured?: boolean;
  compact?: boolean;
}

export default function BlogPostCard({ post, featured = false, compact = false }: BlogPostCardProps) {
  if (compact) {
    return (
      <Link href={`/blog/${post.id}`}>
        <Card className="bg-black/60 backdrop-blur-md border-blue-500/20 shadow-xl shadow-black/50 hover:shadow-blue-500/20 transition-all duration-300 hover:bg-black/70">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="border-cyan-500/50 text-cyan-400 text-xs">
                {post.category}
              </Badge>
              {post.tags.slice(0, 2).map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-gray-700/50 text-gray-300 text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
            <h3 className="text-xl font-bold text-white line-clamp-2 hover:text-cyan-400 transition-colors">
              {post.title}
            </h3>
          </CardHeader>
          <CardContent>
            <p className="text-white/70 text-sm mb-4 line-clamp-2">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between text-xs text-white/60">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <User size={12} />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={12} />
                  <span>{post.readTimeMinutes} min</span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Calendar size={12} />
                <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    );
  }

  return (
    <Link href={`/blog/${post.id}`}>
      <Card className="bg-black/80 backdrop-blur-md border-blue-500/30 shadow-2xl shadow-black/70 hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105 h-full">
        <div className="aspect-video bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-t-lg relative overflow-hidden">
          {/* Cyber-style overlay pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/10 to-cyan-500/20"></div>
          <div className="absolute top-4 left-4">
            {featured && (
              <Badge className="bg-yellow-600 hover:bg-yellow-700 text-white text-xs">
                Featured
              </Badge>
            )}
          </div>
        </div>
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2 mb-2">
            <Badge className="bg-blue-600 hover:bg-blue-700 text-white text-xs">
              {post.category}
            </Badge>
            {post.tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-gray-700/50 text-gray-300 text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          <h3 className="text-xl font-bold text-white line-clamp-2 hover:text-blue-400 transition-colors">
            {post.title}
          </h3>
        </CardHeader>
        <CardContent>
          <p className="text-white/70 text-sm mb-4 line-clamp-3">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between text-xs text-white/60">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <User size={12} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={12} />
                <span>{post.readTimeMinutes} min</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Calendar size={12} />
              <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}