import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Microscope, FlaskConical, Droplets, Clock, Leaf, AlertTriangle } from 'lucide-react';

const services = [
  {
    icon: Microscope,
    title: 'Pathogen Testing',
    description: 'Comprehensive detection of Listeria, Salmonella, E. coli, and other foodborne pathogens using advanced molecular methods.',
    methods: 'PCR, qPCR, Traditional Culture',
    turnaround: '24-48 hours',
    sampleTypes: 'Food products, Environmental swabs, Ingredients',
    certifications: ['ISO 17025', 'AOAC Validated'],
    price: 'Starting at $45/test',
  },
  {
    icon: FlaskConical,
    title: 'Environmental Monitoring',
    description: 'Systematic zone-based swab programs to identify and eliminate contamination sources throughout your facility.',
    methods: 'Zone 2-4 Testing, ATP Monitoring',
    turnaround: '24-72 hours',
    sampleTypes: 'Equipment swabs, Floor drains, Air samples',
    certifications: ['HACCP Compliant', 'FSMA Ready'],
    price: 'Programs from $200/month',
  },
  {
    icon: Droplets,
    title: 'Finished Product Testing',
    description: 'Complete release testing panels and shelf-life validation to ensure product safety and regulatory compliance.',
    methods: 'Full Micro Panel, Challenge Studies',
    turnaround: '48-96 hours',
    sampleTypes: 'Ready-to-eat foods, Beverages, Supplements',
    certifications: ['FDA Compliant', 'USDA Approved'],
    price: 'Starting at $125/panel',
  },
  {
    icon: Clock,
    title: 'Shelf-Life Studies',
    description: 'Accelerated and real-time shelf-life validation studies to determine optimal product dating and storage conditions.',
    methods: 'Accelerated Testing, Real-time Studies',
    turnaround: '2-12 weeks',
    sampleTypes: 'Packaged products, Ingredient blends',
    certifications: ['Good Laboratory Practice'],
    price: 'Contact for pricing',
  },
  {
    icon: Leaf,
    title: 'Allergen Screening', 
    description: 'Sensitive detection of major food allergens including gluten, nuts, dairy, and soy to prevent cross-contamination.',
    methods: 'ELISA, PCR-based Detection',
    turnaround: '24-48 hours',
    sampleTypes: 'Ingredients, Final products, Clean surfaces',
    certifications: ['AOAC Validated Methods'],
    price: 'Starting at $35/allergen',
  },
  {
    icon: AlertTriangle,
    title: 'Water Testing',
    description: 'Comprehensive potable and process water testing for microbial safety and chemical compliance.',
    methods: 'Coliform, E. coli, Total Plate Count',
    turnaround: '24-48 hours', 
    sampleTypes: 'Potable water, Process water, Ice',
    certifications: ['EPA Certified', 'Safe Drinking Water Act'],
    price: 'Starting at $25/test',
  },
];

export default function Services() {
  return (
    <>
      <title>Food Safety Testing Services - Thera Peak Labs Inc.</title>
      <meta name="description" content="Comprehensive food safety testing services including pathogen detection, environmental monitoring, and finished product testing with rapid turnaround times." />
      
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Testing Services</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            From environmental swabs to finished product verification, our methods deliver defensible results with turnaround aligned to your production schedule.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-shadow h-full">
                  <CardHeader>
                    <div className="h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <div className="text-accent font-semibold">{service.price}</div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    
                    <div className="space-y-3 mb-4">
                      <div>
                        <span className="font-medium text-sm">Methods:</span>
                        <p className="text-sm text-muted-foreground">{service.methods}</p>
                      </div>
                      <div>
                        <span className="font-medium text-sm">Turnaround:</span>
                        <span className="text-accent font-medium text-sm ml-2">{service.turnaround}</span>
                      </div>
                      <div>
                        <span className="font-medium text-sm">Sample Types:</span>
                        <p className="text-sm text-muted-foreground">{service.sampleTypes}</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <span className="font-medium text-sm mb-2 block">Certifications:</span>
                      <div className="flex flex-wrap gap-1">
                        {service.certifications.map((cert) => (
                          <Badge key={cert} variant="outline" className="text-xs">
                            {cert}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-lab-blue">
        <div className="container mx-auto px-4">
          <div className="bg-background rounded-lg p-8 text-center shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Download our sample submission guidelines or speak with a scientist about your specific testing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <Link to="/contact">Request a Quote</Link>
              </Button>
              <Button variant="outline" size="lg">
                Download Sample Kit Instructions
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}