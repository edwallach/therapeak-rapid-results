import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Mail, MapPin, Phone, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <title>About — Thera Peak Labs Inc.</title>
      <meta name="description" content="ISO 17025 accredited molecular laboratory specializing in genome sequencing and PCR diagnostics on Illumina, PacBio, and Ion Torrent platforms." />

      <Header />
      <main>
        {/* Hero */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <span className="text-accent font-mono text-sm tracking-[0.15em] uppercase mb-4 block">About</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                Advanced Molecular<br />Laboratory
              </h1>
              <p className="text-lg text-primary-foreground/75 leading-relaxed">
                Accredited sequencing and diagnostics on the platforms that define modern genomics.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto space-y-16">
            
            {/* Mission */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Thera Peak Labs delivers precision molecular diagnostics and next-generation sequencing 
                to organizations that require accredited, defensible results. From whole genome sequencing 
                on Illumina, PacBio, and Ion Torrent to rapid PCR pathogen detection, we combine 
                cutting-edge platforms with rigorous quality systems to serve clinical, research, 
                food safety, and agricultural markets worldwide.
              </p>
            </section>
            
            {/* Technology */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Our Technology</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-card p-6 rounded-lg border border-border/60">
                  <h3 className="text-lg font-semibold mb-2">Illumina</h3>
                  <p className="text-sm text-muted-foreground">High-throughput short-read sequencing for WGS, RNA-seq, amplicon, and metagenomic applications.</p>
                </div>
                <div className="bg-card p-6 rounded-lg border border-border/60">
                  <h3 className="text-lg font-semibold mb-2">PacBio HiFi</h3>
                  <p className="text-sm text-muted-foreground">Long-read sequencing for complete genome assembly, structural variant detection, and full-length 16S.</p>
                </div>
                <div className="bg-card p-6 rounded-lg border border-border/60">
                  <h3 className="text-lg font-semibold mb-2">Ion Torrent</h3>
                  <p className="text-sm text-muted-foreground">Rapid semiconductor sequencing for targeted panels, pathogen ID, and time-sensitive clinical applications.</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-card p-6 rounded-lg border border-border/60">
                  <h3 className="text-lg font-semibold mb-2">Real-Time PCR / qPCR</h3>
                  <p className="text-sm text-muted-foreground">Rapid molecular detection with quantitative analysis for pathogen screening, environmental monitoring, and quality control.</p>
                </div>
                <div className="bg-card p-6 rounded-lg border border-border/60">
                  <h3 className="text-lg font-semibold mb-2">Bioinformatics</h3>
                  <p className="text-sm text-muted-foreground">End-to-end computational pipelines for assembly, annotation, variant calling, and metagenomic analysis with publication-ready outputs.</p>
                </div>
              </div>
            </section>

            {/* Global Expansion */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Global Expansion</h2>
              <div className="bg-secondary p-8 md:p-10 rounded-xl border border-border/60">
                <div className="flex items-start gap-4 mb-8">
                  <Globe className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-3">Following Our Customers Worldwide</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Backed by additional investment from our founders, we're opening new laboratories 
                      in key international markets to serve our growing global customer base with the same 
                      accredited quality and rapid turnaround they depend on.
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  {[
                    { city: 'Norway', region: 'Nordic & Northern Europe' },
                    { city: 'Poland', region: 'Central & Eastern Europe' },
                    { city: 'Dubai', region: 'Middle East & Africa' },
                  ].map(loc => (
                    <div key={loc.city} className="bg-card p-5 rounded-lg border border-border/60">
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="h-4 w-4 text-accent" />
                        <h4 className="text-lg font-bold">{loc.city}</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">{loc.region}</p>
                      <span className="inline-flex items-center gap-1.5 mt-3 text-xs font-mono text-accent">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                        Coming Soon
                      </span>
                    </div>
                  ))}
                </div>

                <div className="bg-card p-6 rounded-lg border border-border/60">
                  <h4 className="font-semibold mb-3">Connect With Us</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    We're seeking customers, laboratory professionals, and equipment vendors in these regions.
                  </p>
                  <a href="mailto:info@therapeaklab.com" className="text-accent hover:underline font-semibold">
                    info@therapeaklab.com
                  </a>
                </div>
              </div>
            </section>
            
            {/* Team */}
            <section>
              <h2 className="text-2xl font-bold mb-8">Our Team</h2>
              
              <div className="mb-10">
                <h3 className="text-sm font-mono text-accent tracking-[0.15em] uppercase mb-6">Executive Leadership</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    { name: 'Dr. Robert Williams', role: 'Founder & CEO', bio: 'Ph.D. in Biochemistry with 25+ years of experience. Founded Thera Peak Labs in 2012.' },
                    { name: 'Lisa Anderson', role: 'Chief Financial Officer', bio: 'MBA in Finance with 22+ years in healthcare financial management.' },
                    { name: 'David Park', role: 'Chief Operating Officer', bio: 'M.S. in Operations Management with 15+ years in laboratory workflow optimization.' },
                  ].map(person => (
                    <div key={person.name}>
                      <h4 className="font-semibold mb-1">{person.name}</h4>
                      <p className="text-accent text-sm font-medium mb-2">{person.role}</p>
                      <p className="text-sm text-muted-foreground">{person.bio}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-mono text-accent tracking-[0.15em] uppercase mb-6">Laboratory Team</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    { name: 'Dr. Michel Martinez', role: 'Laboratory Director', bio: 'Ph.D. in Microbiology, 12+ years in clinical lab management.' },
                    { name: 'Michael Chen', role: 'Senior Research Scientist', bio: 'M.S. in Biochemistry, 8+ years in molecular diagnostics.' },
                    { name: 'Emma Hilger', role: 'Quality Assurance Manager', bio: 'B.S. in Biology, ISO 17025 certified, 5+ years in QC.' },
                    { name: 'James Rodriguez', role: 'Lead Lab Technician', bio: 'A.S. in Laboratory Science, 3+ years in sample processing.' },
                  ].map(person => (
                    <div key={person.name}>
                      <h4 className="font-semibold mb-1">{person.name}</h4>
                      <p className="text-accent text-sm font-medium mb-2">{person.role}</p>
                      <p className="text-sm text-muted-foreground">{person.bio}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            
            {/* Contact */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Contact</h2>
              <div className="bg-card p-6 rounded-lg border border-border/60 space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-accent" />
                  <a href="tel:+16812068144" className="text-foreground hover:text-accent transition-colors">+1 (681) 206-8144</a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-accent" />
                  <a href="mailto:info@therapeaklab.com" className="text-foreground hover:text-accent transition-colors">info@therapeaklab.com</a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-accent" />
                  <span className="text-muted-foreground">625 S 27th Ave, Phoenix, AZ 85009</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
