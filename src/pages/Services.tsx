import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dna, TestTubes, Microscope, FlaskConical, Droplets, Clock, Leaf, AlertTriangle } from 'lucide-react';

const services = [
  {
    icon: Dna,
    title: 'Whole Genome Sequencing',
    description: 'Complete genome sequencing for microbial identification, strain typing, outbreak investigation, and research applications using industry-leading platforms.',
    methods: 'Illumina (short-read), PacBio (HiFi long-read), Ion Torrent',
    turnaround: '5–10 business days',
    sampleTypes: 'Bacterial isolates, environmental DNA, tissue samples, plant & animal DNA',
    certifications: ['ISO 17025', 'CAP Accredited'],
    price: 'From $250/sample',
  },
  {
    icon: TestTubes,
    title: 'Targeted & Metagenomic Sequencing',
    description: 'Amplicon sequencing, 16S/ITS profiling, and shotgun metagenomics for microbiome analysis, species identification, and biodiversity studies.',
    methods: 'Illumina Amplicon, PacBio Full-length 16S, Ion Torrent Panels',
    turnaround: '7–14 business days',
    sampleTypes: 'Soil, water, food matrices, clinical samples, agricultural samples',
    certifications: ['ISO 17025', 'CLIA Compliant'],
    price: 'From $150/sample',
  },
  {
    icon: Microscope,
    title: 'PCR & Pathogen Detection',
    description: 'Rapid, sensitive detection of Listeria, Salmonella, E. coli, and other pathogens using real-time PCR, qPCR, and traditional culture methods.',
    methods: 'RT-PCR, qPCR, Traditional Culture',
    turnaround: '24–48 hours',
    sampleTypes: 'Food products, environmental swabs, ingredients',
    certifications: ['ISO 17025', 'AOAC Validated'],
    price: 'From $45/test',
  },
  {
    icon: FlaskConical,
    title: 'Environmental Monitoring',
    description: 'Systematic zone-based molecular monitoring programs to identify and eliminate contamination sources throughout your facility.',
    methods: 'Zone 2-4 PCR, ATP Monitoring, Swab Analysis',
    turnaround: '24–72 hours',
    sampleTypes: 'Equipment swabs, floor drains, air samples',
    certifications: ['HACCP Compliant', 'FSMA Ready'],
    price: 'Programs from $200/month',
  },
  {
    icon: Droplets,
    title: 'Product Release Testing',
    description: 'Complete release testing panels and shelf-life validation to ensure product safety and regulatory compliance.',
    methods: 'Full Micro Panel, Challenge Studies',
    turnaround: '48–96 hours',
    sampleTypes: 'Ready-to-eat foods, beverages, supplements',
    certifications: ['FDA Compliant', 'USDA Approved'],
    price: 'From $125/panel',
  },
  {
    icon: Clock,
    title: 'Shelf-Life Studies',
    description: 'Accelerated and real-time shelf-life validation studies to determine optimal product dating and storage conditions.',
    methods: 'Accelerated Testing, Real-time Studies',
    turnaround: '2–12 weeks',
    sampleTypes: 'Packaged products, ingredient blends',
    certifications: ['Good Laboratory Practice'],
    price: 'Contact for pricing',
  },
  {
    icon: Leaf,
    title: 'Allergen Screening',
    description: 'Sensitive molecular detection of major food allergens including gluten, nuts, dairy, and soy.',
    methods: 'ELISA, PCR-based Detection',
    turnaround: '24–48 hours',
    sampleTypes: 'Ingredients, final products, clean surfaces',
    certifications: ['AOAC Validated Methods'],
    price: 'From $35/allergen',
  },
  {
    icon: AlertTriangle,
    title: 'Water Microbiology',
    description: 'Comprehensive potable and process water testing for microbial safety and chemical compliance.',
    methods: 'Coliform, E. coli, Total Plate Count',
    turnaround: '24–48 hours',
    sampleTypes: 'Potable water, process water, ice',
    certifications: ['EPA Certified', 'Safe Drinking Water Act'],
    price: 'From $25/test',
  },
];

export default function Services() {
  return (
    <>
      <title>Sequencing & Molecular Diagnostics Services — Thera Peak Labs</title>
      <meta name="description" content="Advanced genome sequencing, PCR diagnostics, and food safety testing on Illumina, PacBio, and Ion Torrent platforms." />
      
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-accent font-mono text-sm tracking-[0.15em] uppercase mb-4 block">Services</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Sequencing, PCR &<br />Molecular Diagnostics
            </h1>
            <p className="text-lg text-primary-foreground/75 max-w-2xl leading-relaxed">
              From whole genome sequencing to rapid pathogen detection — ISO 17025 accredited services 
              powered by Illumina, PacBio, and Ion Torrent platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="relative overflow-hidden hover:shadow-md transition-all border-border/60 group h-full">
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-accent/0 group-hover:bg-accent transition-all" />
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="h-10 w-10 bg-accent/10 rounded-lg flex items-center justify-center">
                        <Icon className="h-5 w-5 text-accent" />
                      </div>
                      <span className="text-accent font-mono text-xs font-semibold">{service.price}</span>
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{service.description}</p>
                    
                    <div className="space-y-2.5 mb-4 text-sm">
                      <div>
                        <span className="font-medium text-foreground">Methods: </span>
                        <span className="text-muted-foreground">{service.methods}</span>
                      </div>
                      <div>
                        <span className="font-medium text-foreground">Turnaround: </span>
                        <span className="text-accent font-medium">{service.turnaround}</span>
                      </div>
                      <div>
                        <span className="font-medium text-foreground">Sample Types: </span>
                        <span className="text-muted-foreground">{service.sampleTypes}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {service.certifications.map(cert => (
                        <Badge key={cert} variant="secondary" className="text-xs font-mono">{cert}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
