"use client";

import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";

interface ShareButtonProps {
  title: string;
  excerpt: string;
}

export function ShareButton({ title, excerpt }: ShareButtonProps) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title,
        text: excerpt,
        url: window.location.href
      });
    }
  };

  return (
    <Button 
      variant="outline" 
      className="bg-black/40 border-white/30 text-white hover:bg-black/60"
      onClick={handleShare}
    >
      <Share2 size={16} className="mr-2" />
      Share Article
    </Button>
  );
}