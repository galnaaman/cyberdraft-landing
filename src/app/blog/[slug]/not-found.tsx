import { Button } from "@/components/ui/button";
import { FileQuestion, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function BlogPostNotFound() {
  return (
    <div className="min-h-screen relative">
      {/* Cybersecurity-themed background */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900 via-cyan-900 to-indigo-900 opacity-90"></div>
      <div className="fixed inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_black_70%)]"></div>
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="text-center max-w-md">
          {/* 404 Icon */}
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto bg-red-500/20 rounded-full flex items-center justify-center mb-4">
              <FileQuestion size={48} className="text-red-400" />
            </div>
            <h1 className="text-6xl font-bold text-white mb-2 drop-shadow-2xl">404</h1>
            <h2 className="text-2xl font-bold text-white mb-4 drop-shadow-lg">Article Not Found</h2>
          </div>
          
          {/* Error Message */}
          <p className="text-white/80 mb-8 leading-relaxed">
            The cybersecurity article you're looking for has been moved, deleted, or never existed. 
            Our security protocols are tight, but this page slipped through the cracks.
          </p>
          
          {/* Action Buttons */}
          <div className="space-y-4">
            <Link href="/blog">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 shadow-lg w-full">
                <ArrowLeft size={16} className="mr-2" />
                Back to Blog
              </Button>
            </Link>
            
            <Link href="/">
              <Button 
                variant="outline" 
                className="bg-black/40 border-white/30 text-white hover:bg-black/60 px-8 py-3 w-full"
              >
                Go to Homepage
              </Button>
            </Link>
          </div>
          
          {/* Additional Help */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-white/60 text-sm mb-4">
              Looking for something specific?
            </p>
            <div className="space-y-2 text-sm">
              <Link href="/blog" className="block text-cyan-400 hover:text-cyan-300 transition-colors">
                Browse All Articles
              </Link>
              <Link href="/#features" className="block text-cyan-400 hover:text-cyan-300 transition-colors">
                View Our Features
              </Link>
              <Link href="/#community" className="block text-cyan-400 hover:text-cyan-300 transition-colors">
                Join Our Community
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}