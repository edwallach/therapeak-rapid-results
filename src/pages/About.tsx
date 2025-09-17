import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Crown, Calculator, Settings, Microscope, FlaskConical, Shield, TestTube, Mail, MapPin } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">About Thera Peak Labs Inc.</h1>
            <p className="text-lg text-muted-foreground mb-12">
              Leading the way in precision diagnostics and laboratory testing services.
            </p>
            
            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-semibold mb-6">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  At Thera Peak Labs Inc., we are committed to delivering accurate, reliable, and timely 
                  laboratory testing services that support healthcare professionals, researchers, and 
                  organizations in making informed decisions. Our state-of-the-art facilities and 
                  expert team ensure the highest standards of quality and precision.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold mb-6">Our Expertise</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-card p-6 rounded-lg border">
                    <h3 className="text-lg font-semibold mb-3">Advanced Technology</h3>
                    <p className="text-muted-foreground">
                      Cutting-edge laboratory equipment and methodologies for precise results.
                    </p>
                  </div>
                  <div className="bg-card p-6 rounded-lg border">
                    <h3 className="text-lg font-semibold mb-3">Expert Team</h3>
                    <p className="text-muted-foreground">
                      Highly qualified scientists and technicians with years of experience.
                    </p>
                  </div>
                  <div className="bg-card p-6 rounded-lg border">
                    <h3 className="text-lg font-semibold mb-3">Quality Assurance</h3>
                    <p className="text-muted-foreground">
                      Rigorous quality control processes and industry certifications.
                    </p>
                  </div>
                  <div className="bg-card p-6 rounded-lg border">
                    <h3 className="text-lg font-semibold mb-3">Fast Turnaround</h3>
                    <p className="text-muted-foreground">
                      Efficient processes ensuring quick and reliable test results.
                    </p>
                  </div>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold mb-6">Our Team</h2>
                <p className="text-muted-foreground mb-8">
                  Meet the dedicated professionals behind Thera Peak Labs Inc.'s success.
                </p>
                
                {/* Executive Leadership */}
                <div className="mb-12">
                  <h3 className="text-xl font-semibold mb-6 text-center">Executive Leadership</h3>
                  <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <div className="text-center">
                      <div className="relative mb-4">
                        <div className="w-40 h-40 rounded-full mx-auto bg-primary/10 border-4 border-primary/20 flex items-center justify-center">
                          <Crown className="w-16 h-16 text-primary" />
                        </div>
                      </div>
                      <h4 className="text-lg font-semibold mb-1">Dr. Robert Williams</h4>
                      <p className="text-primary font-medium mb-2">Founder & CEO</p>
                      <p className="text-sm text-muted-foreground">
                        Ph.D. in Biochemistry. Founded Thera Peak Labs Inc. in 2012 with a vision for revolutionary diagnostic solutions.
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="relative mb-4">
                        <div className="w-40 h-40 rounded-full mx-auto bg-primary/10 border-4 border-primary/20 flex items-center justify-center">
                          <Calculator className="w-16 h-16 text-primary" />
                        </div>
                      </div>
                      <h4 className="text-lg font-semibold mb-1">Lisa Anderson</h4>
                      <p className="text-primary font-medium mb-2">Chief Financial Officer</p>
                      <p className="text-sm text-muted-foreground">
                        MBA in Finance with 20+ years in healthcare financial management and strategic planning.
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="relative mb-4">
                        <div className="w-40 h-40 rounded-full mx-auto bg-primary/10 border-4 border-primary/20 flex items-center justify-center">
                          <Settings className="w-16 h-16 text-primary" />
                        </div>
                      </div>
                      <h4 className="text-lg font-semibold mb-1">David Park</h4>
                      <p className="text-primary font-medium mb-2">Chief Operating Officer</p>
                      <p className="text-sm text-muted-foreground">
                        M.S. in Operations Management specializing in laboratory workflow optimization and quality systems.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Laboratory Team */}
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-center">Laboratory Team</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="text-center">
                      <div className="relative mb-4">
                        <div className="w-32 h-32 rounded-full mx-auto bg-primary/10 border-4 border-primary/20 flex items-center justify-center">
                          <Microscope className="w-12 h-12 text-primary" />
                        </div>
                      </div>
                      <h4 className="text-lg font-semibold mb-1">Dr. Sarah Martinez</h4>
                      <p className="text-primary font-medium mb-2">Laboratory Director</p>
                      <p className="text-sm text-muted-foreground">
                        Ph.D. in Microbiology with 15+ years in clinical laboratory management.
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="relative mb-4">
                        <div className="w-32 h-32 rounded-full mx-auto bg-primary/10 border-4 border-primary/20 flex items-center justify-center">
                          <FlaskConical className="w-12 h-12 text-primary" />
                        </div>
                      </div>
                      <h4 className="text-lg font-semibold mb-1">Michael Chen</h4>
                      <p className="text-primary font-medium mb-2">Senior Research Scientist</p>
                      <p className="text-sm text-muted-foreground">
                        M.S. in Biochemistry specializing in pathogen detection and molecular diagnostics.
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="relative mb-4">
                        <div className="w-32 h-32 rounded-full mx-auto bg-primary/10 border-4 border-primary/20 flex items-center justify-center">
                          <Shield className="w-12 h-12 text-primary" />
                        </div>
                      </div>
                      <h4 className="text-lg font-semibold mb-1">Emma Hilger</h4>
                      <p className="text-primary font-medium mb-2">Quality Assurance Manager</p>
                      <p className="text-sm text-muted-foreground">
                        B.S. in Biology with ISO 17025 certification and 8 years in quality control.
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="relative mb-4">
                        <div className="w-32 h-32 rounded-full mx-auto bg-primary/10 border-4 border-primary/20 flex items-center justify-center">
                          <TestTube className="w-12 h-12 text-primary" />
                        </div>
                      </div>
                      <h4 className="text-lg font-semibold mb-1">James Rodriguez</h4>
                      <p className="text-primary font-medium mb-2">Lead Laboratory Technician</p>
                      <p className="text-sm text-muted-foreground">
                        A.S. in Laboratory Science with expertise in sample processing and analysis.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                <div className="bg-card p-6 rounded-lg border">
                  <p className="text-muted-foreground mb-6">
                    Ready to get started? Contact us today to discuss your testing needs 
                    and learn how we can support your organization.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <a href="mailto:info@therapeaklab.com" className="text-foreground hover:text-primary transition-colors">
                        info@therapeaklab.com
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span className="text-foreground">625 S 27th Ave, Phoenix, AZ 85009</span>
                    </div>
                  </div>
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

export default About;