import { Shield, Clock, CheckCircle, Award } from 'lucide-react';

const trustMetrics = [
  {
    icon: Shield,
    title: 'ISO 17025 Accredited',
    description: 'Certified laboratory testing',
  },
  {
    icon: Clock,
    title: '24-48 Hour TAT',
    description: 'Rapid turnaround times',
  },
  {
    icon: CheckCircle,
    title: '99.7% On-Time Rate',
    description: 'Reliable delivery',
  },
  {
    icon: Award,
    title: 'AOAC Validated',
    description: 'Proven methodologies',
  },
];

export function TrustStrip() {
  return (
    <section className="py-12 bg-lab-blue border-b">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {trustMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="h-12 w-12 bg-accent rounded-full flex items-center justify-center mb-3">
                  <Icon className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="font-semibold text-sm mb-1 text-lab-blue-foreground">{metric.title}</h3>
                <p className="text-xs text-muted-foreground">{metric.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}