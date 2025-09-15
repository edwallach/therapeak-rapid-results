import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Mail, MapPin } from 'lucide-react';
import theraPeakLogo from '@/assets/thera-peak-logo-final.png';

const footerLinks = {
  services: [
    { name: 'Pathogen Testing', href: '/services' },
    { name: 'Environmental Monitoring', href: '/services' },
    { name: 'Finished Product Testing', href: '/services' },
    { name: 'Shelf-Life Studies', href: '/services' },
  ],
  pathogens: [
    { name: 'Listeria Testing', href: '/pathogens' },
    { name: 'Salmonella Testing', href: '/pathogens' },
    { name: 'E. coli Testing', href: '/pathogens' },
    { name: 'Allergen Testing', href: '/services' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Accreditations', href: '/about' },
    { name: 'Sample Submission', href: '/sample-submission' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Quality Statement', href: '/quality' },
    { name: 'Chain of Custody', href: '/chain-of-custody' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={theraPeakLogo} 
                alt="Thera Peak Labs Logo" 
                className="h-14 w-auto"
              />
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              ISO 17025 accredited food safety laboratory providing rapid pathogen testing and environmental monitoring for food producers nationwide.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4" />
                <span>info@therapeaklabs.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4" />
                <span>625 S 27th Ave, Phoenix, AZ 85009</span>
              </div>
            </div>

            {/* Accreditations */}
            <div className="mt-6 space-y-2">
              <p className="text-sm font-medium">Accreditations & Certifications:</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="border-primary-foreground/20 text-primary-foreground">
                  ISO 17025
                </Badge>
                <Badge variant="outline" className="border-primary-foreground/20 text-primary-foreground">
                  AOAC Validated
                </Badge>
                <Badge variant="outline" className="border-primary-foreground/20 text-primary-foreground">
                  FDA Registered
                </Badge>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Testing */}
          <div>
            <h3 className="font-semibold mb-4">Testing</h3>
            <ul className="space-y-2">
              {footerLinks.pathogens.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 mb-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/80 text-sm">
            © 2012 Thera Peak Labs. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span className="text-primary-foreground/60 text-sm">
              Emergency Testing: 24/7 Hotline Available
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}