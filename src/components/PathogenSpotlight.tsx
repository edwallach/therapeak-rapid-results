import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Zap, Shield } from 'lucide-react';

const pathogens = [
  {
    name: 'Listeria monocytogenes',
    icon: AlertTriangle,
    description: 'Routine zone 2–4 swabbing and finished product testing with ISO and AOAC validated methods.',
    riskLevel: 'High Risk',
    riskColor: 'destructive',
    industries: ['Ready-to-eat', 'Deli meats', 'Dairy'],
    method: 'PCR + Culture confirmation',
  },
  {
    name: 'Salmonella spp.',
    icon: Zap,
    description: 'Comprehensive testing across all food matrices with rapid molecular and traditional methods.',
    riskLevel: 'Critical',
    riskColor: 'warning',
    industries: ['Poultry', 'Eggs', 'Produce'],
    method: 'Real-time PCR',
  },
  {
    name: 'E. coli O157:H7',
    icon: Shield,
    description: 'Targeted testing for pathogenic strains with advanced molecular identification capabilities.',
    riskLevel: 'Severe',
    riskColor: 'destructive',
    industries: ['Ground beef', 'Leafy greens', 'Raw milk'],
    method: 'Multiplex PCR',
  },
];

export function PathogenSpotlight() {
  return (
    <section className="py-16 bg-lab-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-lab-blue-foreground">Pathogen Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized testing protocols for the most critical foodborne pathogens affecting your industry.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pathogens.map((pathogen, index) => {
            const Icon = pathogen.icon;
            return (
              <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-shadow bg-background">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="h-10 w-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <Badge 
                      variant={pathogen.riskColor as "destructive" | "secondary" | "outline"}
                      className="text-xs"
                    >
                      {pathogen.riskLevel}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg leading-tight">{pathogen.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-sm">{pathogen.description}</p>
                  <div className="space-y-3">
                    <div>
                      <span className="font-medium text-sm">Primary Industries:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {pathogen.industries.map((industry) => (
                          <Badge key={industry} variant="outline" className="text-xs">
                            {industry}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="font-medium text-sm">Method:</span>
                      <span className="text-accent text-sm ml-2 font-medium">{pathogen.method}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}