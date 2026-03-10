import { Button } from '@/components/ui/button';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { TrustStrip } from '@/components/TrustStrip';
import { ServicesPreview } from '@/components/ServicesPreview';
import { ProcessSteps } from '@/components/ProcessSteps';
import { ExpansionBanner } from '@/components/ExpansionBanner';
import { ArrowRight, Dna, Microscope, FlaskConical } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-lab.jpg';

const Index = () => {
  return (
    <>
      <title>Thera Peak Labs Inc. — Advanced Sequencing & Molecular Diagnostics</title>
      <meta 
        name="description" 
        content="ISO 17025 accredited molecular laboratory offering whole genome sequencing, targeted NGS, PCR diagnostics, and food safety testing on Illumina, PacBio & Ion Torrent platforms." 
      />
      <meta property="og:title" content="Thera Peak Labs Inc. — Sequencing & Molecular Diagnostics" />
      <meta property="og:description" content="Whole genome sequencing, metagenomics, PCR diagnostics on Illumina, PacBio & Ion Torrent" />

      <Header />
      <ExpansionBanner />
      
      {/* Hero Section */}
      <section className="relative min-h-[650px] flex items-center overflow-hidden bg-primary">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        {/* Subtle DNA helix pattern overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-[hsl(200,50%,18%)]" />
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 max-w-[60px] bg-accent" />
              <span className="text-accent font-mono text-sm tracking-[0.2em] uppercase">Illumina · PacBio · Ion Torrent</span>
              <div className="h-px flex-1 max-w-[60px] bg-accent" />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] text-primary-foreground tracking-tight">
              Precision Sequencing<br />
              <span className="text-accent">& Molecular Diagnostics</span>
            </h1>
            <p className="text-lg md:text-xl mb-10 text-primary-foreground/75 max-w-3xl leading-relaxed">
              From whole genome sequencing to real-time PCR — we deliver accredited, defensible results 
              across genomics, metagenomics, pathogen detection, and food safety. Powered by 
              industry-leading platforms.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8" asChild>
                <Link to="/services" className="flex items-center gap-2">
                  Explore Services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link to="/about">Our Technology</Link>
              </Button>
            </div>

            {/* Platform badges */}
            <div className="mt-14 flex flex-wrap items-center gap-6 pt-8 border-t border-primary-foreground/10">
              <div className="flex items-center gap-3">
                <Dna className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/60 text-sm">Whole Genome Sequencing</span>
              </div>
              <div className="flex items-center gap-3">
                <Microscope className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/60 text-sm">Real-Time PCR & qPCR</span>
              </div>
              <div className="flex items-center gap-3">
                <FlaskConical className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/60 text-sm">Metagenomic Analysis</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustStrip />
      <ServicesPreview />
      <ProcessSteps />

      {/* Final CTA Section */}
      <section id="contact-deadline" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to start your project?</h2>
          <p className="text-xl mb-8 text-primary-foreground/75 max-w-2xl mx-auto">
            Talk to a scientist today about sequencing, diagnostics, or custom testing protocols.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8" asChild>
            <a href="mailto:info@therapeaklab.com" className="flex items-center gap-2">
              Contact Our Team
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Index;
