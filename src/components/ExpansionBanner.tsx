import { useState } from 'react';
import { X, Globe, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function ExpansionBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-primary via-primary/95 to-primary text-primary-foreground border-b-2 border-primary-foreground/20">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <Globe className="h-5 w-5 flex-shrink-0 animate-pulse" />
            <div className="flex flex-wrap items-center gap-2 text-sm md:text-base">
              <span className="font-semibold">🎉 Exciting News!</span>
              <span className="hidden sm:inline">We're expanding to</span>
              <span className="inline sm:hidden">Expanding to</span>
              <span className="font-bold">Norway & Poland</span>
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-primary-foreground/20 rounded-full text-xs font-medium">
                <span className="inline-block w-1.5 h-1.5 bg-primary-foreground rounded-full animate-pulse"></span>
                Coming Soon
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button 
              variant="secondary" 
              size="sm" 
              asChild
              className="hidden md:inline-flex"
            >
              <Link to="/about" className="flex items-center gap-1">
                Learn More
                <ArrowRight className="h-3 w-3" />
              </Link>
            </Button>
            <button
              onClick={() => setIsVisible(false)}
              className="p-1 hover:bg-primary-foreground/10 rounded-full transition-colors"
              aria-label="Close announcement"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
