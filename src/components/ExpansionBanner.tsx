import { useState } from 'react';
import { X, Globe, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function ExpansionBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-[hsl(142,70%,45%)] via-[hsl(142,70%,50%)] to-[hsl(142,70%,45%)] text-white border-b-4 border-white/30 shadow-lg">
      <div className="container mx-auto px-4 py-5 md:py-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-1 min-w-0">
            <Globe className="h-7 w-7 md:h-8 md:w-8 flex-shrink-0 animate-pulse" />
            <div className="flex flex-wrap items-center gap-2 md:gap-3 text-base md:text-xl">
              <span className="font-bold text-lg md:text-2xl">🎉 Exciting News!</span>
              <span className="hidden sm:inline font-medium">We're expanding to</span>
              <span className="inline sm:hidden font-medium">Expanding to</span>
              <span className="font-extrabold text-lg md:text-2xl">Norway & Poland</span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm md:text-base font-bold border border-white/30">
                <span className="inline-block w-2 h-2 bg-white rounded-full animate-pulse"></span>
                Coming Soon
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button 
              variant="secondary" 
              size="default"
              asChild
              className="hidden md:inline-flex font-semibold"
            >
              <Link to="/about" className="flex items-center gap-1.5">
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <button
              onClick={() => setIsVisible(false)}
              className="p-1.5 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Close announcement"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
