import { getAllPosts, getFeaturedPosts, blogCategories } from "@/lib/blog-data";
import { Button } from "@/components/ui/button";
import BlogPostCard from "@/components/BlogPostCard";

export default function BlogPage() {
  const allPosts = getAllPosts();
  const featuredPosts = getFeaturedPosts();
  const recentPosts = allPosts.slice(0, 6);

  return (
    <div className="min-h-screen relative">
      {/* Cybersecurity-themed background matching homepage */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900 via-cyan-900 to-indigo-900 opacity-90"></div>
      <div className="fixed inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_black_70%)]"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Header Section */}
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
              Cybersecurity
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Insights</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto drop-shadow-lg">
              Expert analysis, threat intelligence, and cutting-edge security strategies 
              from our team of cybersecurity professionals.
            </p>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <Button 
                variant="outline" 
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
              >
                All Articles
              </Button>
              {blogCategories.map((category) => (
                <Button 
                  key={category}
                  variant="outline" 
                  className="bg-black/20 border-blue-500/30 text-white/80 hover:bg-blue-500/20 hover:text-white backdrop-blur-sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts Section */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 drop-shadow-lg">Featured Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {featuredPosts.map((post) => (
                <BlogPostCard key={post.id} post={post} featured={true} />
              ))}
            </div>
          </div>
        </section>

        {/* Recent Posts Section */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 drop-shadow-lg">Latest Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {recentPosts.map((post) => (
                <BlogPostCard key={post.id} post={post} compact={true} />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-black/60 backdrop-blur-md rounded-2xl p-12 border border-blue-500/30 shadow-2xl shadow-black/70">
              <h2 className="text-3xl font-bold text-white mb-4 drop-shadow-lg">
                Stay Ahead of Cyber Threats
              </h2>
              <p className="text-white/80 mb-8 text-lg">
                Get the latest cybersecurity insights, threat intelligence, and expert analysis 
                delivered directly to your inbox.
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