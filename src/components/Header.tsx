import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const navigation = [
  { name: 'Services', href: '/services' },
  { name: 'Pathogens', href: '/pathogens' },
  { name: 'Industries', href: '/industries' },
  { name: 'Resources', href: '/resources' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-center sm:justify-end space-x-6 text-sm">
            <a href="tel:+1-800-123-4567" className="flex items-center space-x-1 hover:opacity-80 transition-opacity">
              <Phone className="h-3 w-3" />
              <span>1-800-LABS-TEST</span>
            </a>
            <a href="mailto:info@therapeaklabs.com" className="flex items-center space-x-1 hover:opacity-80 transition-opacity">
              <Mail className="h-3 w-3" />
              <span>info@therapeaklabs.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-accent rounded-sm flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-sm">TP</span>
            </div>
            <span className="font-semibold text-lg text-foreground">Thera Peak Labs</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden sm:flex items-center space-x-4">
            <Button variant="outline" size="sm" asChild>
              <Link to="/contact">Request Quote</Link>
            </Button>
            <Button size="sm" asChild className="bg-accent hover:bg-accent/90">
              <Link to="/sample-submission">Submit Sample</Link>
            </Button>
          </div>

          {/* Mobile menu trigger */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <nav className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="border-t pt-4 space-y-2">
                  <Button variant="outline" size="sm" asChild className="w-full">
                    <Link to="/contact" onClick={() => setIsOpen(false)}>Request Quote</Link>
                  </Button>
                  <Button size="sm" asChild className="w-full bg-accent hover:bg-accent/90">
                    <Link to="/sample-submission" onClick={() => setIsOpen(false)}>Submit Sample</Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}