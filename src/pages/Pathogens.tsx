import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const Pathogens = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Pathogen Testing Services</h1>
            <p className="text-lg text-muted-foreground mb-12">
              Comprehensive pathogen detection and analysis services for various industries and applications.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4">Bacterial Testing</h3>
                <p className="text-muted-foreground">
                  Detection and identification of harmful bacteria in samples.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4">Viral Analysis</h3>
                <p className="text-muted-foreground">
                  Advanced viral detection and characterization services.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4">Fungal Screening</h3>
                <p className="text-muted-foreground">
                  Comprehensive fungal pathogen identification and testing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pathogens;