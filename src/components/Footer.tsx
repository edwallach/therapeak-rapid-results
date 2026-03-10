import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Mail, MapPin, Phone } from 'lucide-react';
import theraPeakLogo from '@/assets/thera-peak-logo-new.png';

const footerLinks = {
  sequencing: [
    { name: 'Whole Genome Sequencing', href: '/services' },
    { name: 'Metagenomic Sequencing', href: '/services' },
    { name: 'Targeted Amplicon', href: '/services' },
    { name: '16S/ITS Profiling', href: '/services' },
  ],
  diagnostics: [
    { name: 'PCR & qPCR', href: '/services' },
    { name: 'Pathogen Detection', href: '/services' },
    { name: 'Environmental Monitoring', href: '/services' },
    { name: 'Water Microbiology', href: '/services' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Industries', href: '/industries' },
    { name: 'Sample Submission', href: '/sample-submission' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Quality Statement', href: '/quality' },
  ],
};

export function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src={theraPeakLogo} alt="Thera Peak Labs Logo" className="h-14 w-auto" />
            </div>
            <p className="text-primary-foreground/70 mb-6 max-w-md text-sm leading-relaxed">
              ISO 17025 accredited molecular laboratory delivering precision genome sequencing, 
              PCR diagnostics, and food safety testing on Illumina, PacBio, and Ion Torrent platforms.
            </p>
            
            <div id="contact-info" className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-accent" />
                <a href="tel:+16812068144" className="hover:text-accent transition-colors">+1 (681) 206-8144</a>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-accent" />
                <a href="mailto:info@therapeaklab.com" className="hover:text-accent transition-colors">info@therapeaklab.com</a>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-accent" />
                <span>625 S 27th Ave, Phoenix, AZ 85009</span>
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <p className="text-sm font-medium">Accreditations:</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="border-primary-foreground/20 text-primary-foreground text-xs font-mono">ISO 17025</Badge>
                <Badge variant="outline" className="border-primary-foreground/20 text-primary-foreground text-xs font-mono">AOAC</Badge>
                <Badge variant="outline" className="border-primary-foreground/20 text-primary-foreground text-xs font-mono">CAP</Badge>
                <Badge variant="outline" className="border-primary-foreground/20 text-primary-foreground text-xs font-mono">FDA</Badge>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm">Sequencing</h3>
            <ul className="space-y-2">
              {footerLinks.sequencing.map(link => (
                <li key={link.name}>
                  <Link to={link.href} className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm">Diagnostics</h3>
            <ul className="space-y-2">
              {footerLinks.diagnostics.map(link => (
                <li key={link.name}>
                  <Link to={link.href} className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm">Company</h3>
            <ul className="space-y-2 mb-6">
              {footerLinks.company.map(link => (
                <li key={link.name}>
                  <Link to={link.href} className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
            <h3 className="font-semibold mb-4 text-sm">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map(link => (
                <li key={link.name}>
                  <Link to={link.href} className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/50 text-sm">
            © 2012 Thera Peak Labs Inc. All rights reserved.
          </p>
          <span className="text-primary-foreground/40 text-xs mt-4 md:mt-0 font-mono">
            Illumina · PacBio · Ion Torrent
          </span>
        </div>
      </div>
    </footer>
  );
}
