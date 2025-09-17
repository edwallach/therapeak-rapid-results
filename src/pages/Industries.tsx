import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const Industries = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Industries We Serve</h1>
            <p className="text-lg text-muted-foreground mb-12">
              Thera Peak Labs Inc. provides specialized testing services across multiple industries.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card p-8 rounded-lg border">
                <h3 className="text-2xl font-semibold mb-4">Healthcare</h3>
                <p className="text-muted-foreground">
                  Clinical diagnostics, pharmaceutical testing, and medical device validation.
                </p>
              </div>
              
              <div className="bg-card p-8 rounded-lg border">
                <h3 className="text-2xl font-semibold mb-4">Food & Beverage</h3>
                <p className="text-muted-foreground">
                  Food safety testing, contamination detection, and quality assurance.
                </p>
              </div>
              
              <div className="bg-card p-8 rounded-lg border">
                <h3 className="text-2xl font-semibold mb-4">Environmental</h3>
                <p className="text-muted-foreground">
                  Water quality testing, soil analysis, and environmental monitoring.
                </p>
              </div>
              
              <div className="bg-card p-8 rounded-lg border">
                <h3 className="text-2xl font-semibold mb-4">Research</h3>
                <p className="text-muted-foreground">
                  Academic research support, clinical trials, and custom testing protocols.
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

export default Industries;