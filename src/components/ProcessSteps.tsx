import { Card, CardContent } from '@/components/ui/card';
import { Package, Truck, FlaskConical, FileText } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Sample Prep',
    description: 'We provide collection kits with detailed protocols — or work with your existing sample prep workflows.',
    icon: Package,
    details: 'DNA/RNA extraction, library prep, chain of custody',
  },
  {
    number: '02', 
    title: 'Ship',
    description: 'Temperature-controlled shipping with expedited courier options and real-time tracking.',
    icon: Truck,
    details: 'Pre-paid labels, insulated packaging, dry ice available',
  },
  {
    number: '03',
    title: 'Sequence & Analyze',
    description: 'Samples processed on Illumina, PacBio, or Ion Torrent with integrated bioinformatics pipelines.',
    icon: FlaskConical,
    details: 'ISO 17025 accredited · AOAC & CAP validated methods',
  },
  {
    number: '04',
    title: 'Report',
    description: 'Publication-ready reports with full bioinformatics output, variant calls, and actionable interpretation.',
    icon: FileText,
    details: 'FASTQ, BAM, VCF deliverables · Custom reporting available',
  },
];

export function ProcessSteps() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-accent font-mono text-sm tracking-[0.15em] uppercase mb-3 block">Workflow</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">From Sample to Insight</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A streamlined process with expert guidance at every stage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="relative text-center hover:shadow-md transition-shadow border-border/60">
                <CardContent className="pt-8 pb-6">
                  <div className="text-5xl font-bold text-accent/15 mb-3 font-mono">{step.number}</div>
                  <div className="h-14 w-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{step.description}</p>
                  <p className="text-xs text-accent font-medium font-mono">{step.details}</p>
                </CardContent>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-accent/30"></div>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
