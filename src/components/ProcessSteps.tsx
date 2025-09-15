import { Card, CardContent } from '@/components/ui/card';
import { Package, Truck, FlaskConical, FileText } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Collect',
    description: 'Use provided sampling kits or your own collection methods following our detailed protocols.',
    icon: Package,
    details: 'Sampling kits, instructions, and chain of custody forms provided',
  },
  {
    number: '02', 
    title: 'Ship',
    description: 'Secure packaging with temperature control and expedited courier service to our facility.',
    icon: Truck,
    details: 'Pre-paid shipping labels and insulated packaging included',
  },
  {
    number: '03',
    title: 'Test',
    description: 'Advanced PCR and culture methods performed by certified microbiologists in our accredited lab.',
    icon: FlaskConical,
    details: 'ISO 17025 accredited testing with AOAC validated methods',
  },
  {
    number: '04',
    title: 'Report',
    description: 'Detailed results with interpretation, corrective actions, and regulatory compliance guidance.',
    icon: FileText,
    details: 'Digital reports with clear action items if positive results detected',
  },
];

export function ProcessSteps() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Simple 4-Step Process</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Clear actions at each step, with expert guidance if a positive result is found.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="relative text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-6">
                  {/* Step number */}
                  <div className="text-6xl font-bold text-accent/20 mb-4">{step.number}</div>
                  
                  {/* Icon */}
                  <div className="h-16 w-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{step.description}</p>
                  <p className="text-xs text-accent font-medium">{step.details}</p>
                </CardContent>

                {/* Connector line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border"></div>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}