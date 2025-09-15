import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import teamDirector from '@/assets/team-director.jpg';
import teamScientist from '@/assets/team-scientist.jpg';
import teamQAManager from '@/assets/team-qa-manager.jpg';
import teamTechnician from '@/assets/team-technician.jpg';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">About Thera Peak Labs</h1>
            <p className="text-lg text-muted-foreground mb-12">
              Leading the way in precision diagnostics and laboratory testing services.
            </p>
            
            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-semibold mb-6">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  At Thera Peak Labs, we are committed to delivering accurate, reliable, and timely 
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
                  Meet the dedicated professionals behind Thera Peak Labs' success.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="relative mb-4">
                      <img 
                        src={teamDirector} 
                        alt="Dr. Sarah Martinez - Laboratory Director"
                        className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-primary/20"
                      />
                    </div>
                    <h3 className="text-lg font-semibold mb-1">Dr. Sarah Martinez</h3>
                    <p className="text-primary font-medium mb-2">Laboratory Director</p>
                    <p className="text-sm text-muted-foreground">
                      Ph.D. in Microbiology with 15+ years in clinical laboratory management.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="relative mb-4">
                      <img 
                        src={teamScientist} 
                        alt="Michael Chen - Senior Research Scientist"
                        className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-primary/20"
                      />
                    </div>
                    <h3 className="text-lg font-semibold mb-1">Michael Chen</h3>
                    <p className="text-primary font-medium mb-2">Senior Research Scientist</p>
                    <p className="text-sm text-muted-foreground">
                      M.S. in Biochemistry specializing in pathogen detection and molecular diagnostics.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="relative mb-4">
                      <img 
                        src={teamQAManager} 
                        alt="Emma Thompson - Quality Assurance Manager"
                        className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-primary/20"
                      />
                    </div>
                    <h3 className="text-lg font-semibold mb-1">Emma Thompson</h3>
                    <p className="text-primary font-medium mb-2">Quality Assurance Manager</p>
                    <p className="text-sm text-muted-foreground">
                      B.S. in Biology with ISO 17025 certification and 8 years in quality control.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="relative mb-4">
                      <img 
                        src={teamTechnician} 
                        alt="James Rodriguez - Lead Laboratory Technician"
                        className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-primary/20"
                      />
                    </div>
                    <h3 className="text-lg font-semibold mb-1">James Rodriguez</h3>
                    <p className="text-primary font-medium mb-2">Lead Laboratory Technician</p>
                    <p className="text-sm text-muted-foreground">
                      A.S. in Laboratory Science with expertise in sample processing and analysis.
                    </p>
                  </div>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                <div className="bg-card p-6 rounded-lg border">
                  <p className="text-muted-foreground">
                    Ready to get started? Contact us today to discuss your testing needs 
                    and learn how we can support your organization.
                  </p>
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