import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const SampleSubmission = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Sample Submission</h1>
              <p className="text-lg text-muted-foreground">
                Submit your samples for testing with our easy-to-follow process.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle>Quick Submission</CardTitle>
                  <CardDescription>
                    For standard testing services with fast turnaround
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">Submit Standard Sample</Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Custom Testing</CardTitle>
                  <CardDescription>
                    For specialized testing requirements and protocols
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">Request Custom Quote</Button>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-6">Submission Process</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                      1
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Prepare Sample</h3>
                    <p className="text-muted-foreground">
                      Follow our collection guidelines and proper labeling procedures.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                      2
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Submit Online</h3>
                    <p className="text-muted-foreground">
                      Complete our online submission form with sample details.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                      3
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Ship Sample</h3>
                    <p className="text-muted-foreground">
                      Use our provided shipping instructions and tracking.
                    </p>
                  </div>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold mb-6">Important Guidelines</h2>
                <div className="bg-card p-6 rounded-lg border">
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Ensure proper sample collection using sterile techniques</li>
                    <li>• Label samples clearly with unique identifiers</li>
                    <li>• Maintain cold chain requirements during shipping</li>
                    <li>• Include all required documentation with your submission</li>
                    <li>• Contact us for special handling requirements</li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SampleSubmission;