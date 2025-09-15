import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Microscope, FlaskConical, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Microscope,
    title: 'Pathogen Testing',
    description: 'Comprehensive testing for Listeria, Salmonella, and E. coli with rapid results and actionable guidance.',
    methods: 'PCR, Traditional Culture',
    turnaround: '24-48 hours',
  },
  {
    icon: FlaskConical,
    title: 'Environmental Monitoring',
    description: 'Zone-based swab programs to identify and eliminate contamination sources in your facility.',
    methods: 'Zone 2-4 Testing',
    turnaround: '24-72 hours', 
  },
  {
    icon: Droplets,
    title: 'Finished Product Testing',
    description: 'Release testing and shelf-life validation to ensure product safety and compliance.',
    methods: 'Full Panel Available',
    turnaround: '48-96 hours',
  },
];

export function ServicesPreview() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Testing Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From environmental swabs to finished product verification, our methods deliver defensible results with turnaround aligned to your production schedule.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">Methods:</span>
                      <span className="text-muted-foreground">{service.methods}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">Turnaround:</span>
                      <span className="text-accent font-medium">{service.turnaround}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}