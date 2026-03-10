import { useState } from 'react';
import { X, Globe, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function ExpansionBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative bg-accent text-accent-foreground shadow-sm">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <Globe className="h-5 w-5 flex-shrink-0" />
            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-1 sm:gap-2 text-sm">
              <span className="font-bold">Going Global</span>
              <span className="hidden sm:inline">·</span>
              <span className="font-medium">New labs opening in Norway, Poland & Dubai</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button 
              variant="secondary" 
              size="sm"
              asChild
              className="hidden md:inline-flex font-semibold text-xs"
            >
              <Link to="/about" className="flex items-center gap-1.5">
                Learn More
                <ArrowRight className="h-3 w-3" />
              </Link>
            </Button>
            <button
              onClick={() => setIsVisible(false)}
              className="p-1 hover:bg-accent-foreground/20 rounded-full transition-colors"
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
