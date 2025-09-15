import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const Resources = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Resources & Documentation</h1>
            <p className="text-lg text-muted-foreground mb-12">
              Access helpful guides, protocols, and technical documentation.
            </p>
            
            <div className="space-y-8">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4">Sample Submission Guidelines</h3>
                <p className="text-muted-foreground mb-4">
                  Step-by-step instructions for proper sample collection and submission.
                </p>
                <button className="text-primary hover:underline">Download PDF</button>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4">Testing Protocols</h3>
                <p className="text-muted-foreground mb-4">
                  Detailed protocols for various testing methodologies and procedures.
                </p>
                <button className="text-primary hover:underline">View Protocols</button>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4">Quality Standards</h3>
                <p className="text-muted-foreground mb-4">
                  Information about our quality assurance standards and certifications.
                </p>
                <button className="text-primary hover:underline">Learn More</button>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4">FAQ</h3>
                <p className="text-muted-foreground mb-4">
                  Frequently asked questions about our services and processes.
                </p>
                <button className="text-primary hover:underline">View FAQ</button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;