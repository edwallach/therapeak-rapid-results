import { Button } from '@/components/ui/button';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { TrustStrip } from '@/components/TrustStrip';
import { ServicesPreview } from '@/components/ServicesPreview';
import { ProcessSteps } from '@/components/ProcessSteps';
import { ExpansionBanner } from '@/components/ExpansionBanner';
import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-lab.jpg';

const Index = () => {
  return (
    <>
      {/* SEO Meta Tags */}
       <title>Thera Peak Labs Inc. - Food Safety Testing & Genome Sequencing</title>
      <meta 
        name="description" 
        content="ISO 17025 accredited laboratory specializing in food safety testing and all-purpose genome sequencing using Illumina, PacBio, and Ion Torrent platforms." 
      />
      <meta property="og:title" content="Thera Peak Labs Inc. - Food Safety & Genomics" />
      <meta property="og:description" content="Food safety testing and advanced genome sequencing services using Illumina, PacBio, and Ion Torrent" />

      <Header />
      <ExpansionBanner />
      
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center bg-gradient-to-r from-primary to-primary/90 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative container mx-auto px-4 text-center text-primary-foreground">
          <div className="max-w-4xl mx-auto">
           <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Food Safety Testing & Advanced Genome Sequencing
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
              From pathogen detection to whole-genome sequencing — powered by Illumina, PacBio, and Ion Torrent platforms. Fast, reliable, accredited results.
            </p>
            <div className="flex justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <TrustStrip />
      <ServicesPreview />
      <ProcessSteps />

      {/* Final CTA Section */}
      <section id="contact-deadline" className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need results on a deadline?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Talk to a scientist today about expedited testing options and emergency protocols.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Index;
