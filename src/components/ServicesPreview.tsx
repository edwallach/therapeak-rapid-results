import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dna, TestTubes, Microscope, FlaskConical, Droplets, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Dna,
    title: 'Whole Genome Sequencing',
    description: 'Complete genome sequencing for microbial ID, strain typing, outbreak investigation, and research — on Illumina, PacBio HiFi, and Ion Torrent.',
    platforms: ['Illumina', 'PacBio', 'Ion Torrent'],
    turnaround: '5–10 days',
  },
  {
    icon: TestTubes,
    title: 'Targeted & Metagenomic Sequencing',
    description: 'Amplicon sequencing, 16S/ITS profiling, and shotgun metagenomics for microbiome analysis, species ID, and biodiversity studies.',
    platforms: ['16S/ITS', 'Shotgun', 'Amplicon'],
    turnaround: '7–14 days',
  },
  {
    icon: Microscope,
    title: 'PCR & Pathogen Detection',
    description: 'Real-time PCR and qPCR for rapid, sensitive detection of pathogens including Listeria, Salmonella, and E. coli.',
    platforms: ['qPCR', 'RT-PCR', 'Culture'],
    turnaround: '24–48 hrs',
  },
  {
    icon: FlaskConical,
    title: 'Environmental Monitoring',
    description: 'Systematic zone-based molecular monitoring to identify and eliminate contamination sources in facilities.',
    platforms: ['Zone 2-4', 'ATP', 'Swab PCR'],
    turnaround: '24–72 hrs',
  },
  {
    icon: Droplets,
    title: 'Product & Water Testing',
    description: 'Release testing panels, shelf-life validation, and comprehensive water microbiology for safety and compliance.',
    platforms: ['Full Panel', 'EPA Methods'],
    turnaround: '48–96 hrs',
  },
];

export function ServicesPreview() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-accent font-mono text-sm tracking-[0.15em] uppercase mb-3 block">Capabilities</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sequencing · PCR · Diagnostics</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Advanced molecular services across genomics, food safety, environmental monitoring, and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="relative overflow-hidden hover:shadow-md transition-all border-border/60 group">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-accent/0 group-hover:bg-accent transition-all" />
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-10 w-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <span className="text-accent font-mono text-xs">{service.turnaround}</span>
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{service.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {service.platforms.map(p => (
                      <Badge key={p} variant="secondary" className="text-xs font-mono">{p}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
            <Link to="/services" className="flex items-center gap-2">
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
