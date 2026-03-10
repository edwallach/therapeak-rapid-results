import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Dna, Microscope, Leaf, FlaskConical, Stethoscope, Building2 } from 'lucide-react';

const industries = [
  {
    icon: Stethoscope,
    title: 'Clinical & Healthcare',
    description: 'Whole genome sequencing for pathogen ID, antimicrobial resistance profiling, outbreak investigation, and clinical diagnostics support.',
  },
  {
    icon: Building2,
    title: 'Food & Beverage',
    description: 'Pathogen detection, environmental monitoring, allergen screening, and product release testing for food producers and processors.',
  },
  {
    icon: Dna,
    title: 'Genomics Research',
    description: 'WGS, RNA-seq, and metagenomic sequencing for academic and commercial research — with bioinformatics support and publication-ready data.',
  },
  {
    icon: Leaf,
    title: 'Agriculture & Animal Health',
    description: 'Plant and animal DNA sequencing, soil microbiome profiling, and pathogen surveillance for agricultural applications.',
  },
  {
    icon: FlaskConical,
    title: 'Environmental & Water',
    description: 'Environmental DNA (eDNA) analysis, water microbiology, and microbial community profiling for environmental monitoring and compliance.',
  },
  {
    icon: Microscope,
    title: 'Pharmaceutical & Biotech',
    description: 'Contamination testing, quality control sequencing, and custom molecular assay development for pharma and biotech companies.',
  },
];

const Industries = () => {
  return (
    <div className="min-h-screen bg-background">
      <title>Industries We Serve — Thera Peak Labs</title>
      <meta name="description" content="Molecular diagnostics and sequencing services for healthcare, food safety, genomics research, agriculture, and pharma industries." />

      <Header />
      <main>
        {/* Hero */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <span className="text-accent font-mono text-sm tracking-[0.15em] uppercase mb-4 block">Industries</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                Molecular Solutions<br />Across Industries
              </h1>
              <p className="text-lg text-primary-foreground/75 leading-relaxed">
                From clinical diagnostics to agricultural genomics — our sequencing and PCR platforms serve organizations that demand precision, speed, and accredited results.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {industries.map((industry, index) => {
                const Icon = industry.icon;
                return (
                  <div key={index} className="bg-card p-8 rounded-lg border border-border/60 hover:shadow-md transition-all group">
                    <div className="h-11 w-11 bg-accent/10 rounded-lg flex items-center justify-center mb-5">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{industry.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{industry.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Industries;
