import { Dna, Microscope, Cpu, Award } from 'lucide-react';

const trustMetrics = [
  {
    icon: Dna,
    title: 'NGS Platforms',
    description: 'Illumina, PacBio & Ion Torrent',
  },
  {
    icon: Microscope,
    title: 'ISO 17025 Accredited',
    description: 'Certified molecular laboratory',
  },
  {
    icon: Cpu,
    title: 'Bioinformatics',
    description: 'End-to-end data analysis',
  },
  {
    icon: Award,
    title: 'AOAC / CAP Validated',
    description: 'Proven methodologies',
  },
];

export function TrustStrip() {
  return (
    <section className="py-10 bg-secondary border-b border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {trustMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={index} className="flex items-center gap-4">
                <div className="h-11 w-11 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-foreground">{metric.title}</h3>
                  <p className="text-xs text-muted-foreground">{metric.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
