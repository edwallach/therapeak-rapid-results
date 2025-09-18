import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Mail, MapPin, Phone } from 'lucide-react';
import teamCEO from '@/assets/team-ceo-new.jpg';
import teamCFO from '@/assets/team-cfo-new.jpg';
import teamCOO from '@/assets/team-coo-new.jpg';
import teamLabDirector from '@/assets/team-lab-director-new.jpg';
import teamResearchScientist from '@/assets/team-research-scientist-new.jpg';
import teamQAManager from '@/assets/team-qa-manager-new.jpg';
import teamLabTechnician from '@/assets/team-lab-technician-new.jpg';
const About = () => {
  return <div className="min-h-screen bg-background">
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
                        <img 
                          src={teamCEO} 
                          alt="Dr. Robert Williams - Founder & CEO" 
                          className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-primary/20"
                        />
                      </div>
                      <h4 className="text-lg font-semibold mb-1">Dr. Robert Williams</h4>
                      <p className="text-primary font-medium mb-2">Founder & CEO</p>
                      <p className="text-sm text-muted-foreground">
                        Ph.D. in Biochemistry with 25+ years of experience. Founded Thera Peak Labs Inc. in 2012 with a vision for revolutionary diagnostic solutions.
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="relative mb-4">
                        <img 
                          src={teamCFO} 
                          alt="Lisa Anderson - Chief Financial Officer" 
                          className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-primary/20"
                        />
                      </div>
                      <h4 className="text-lg font-semibold mb-1">Lisa Anderson</h4>
                      <p className="text-primary font-medium mb-2">Chief Financial Officer</p>
                      <p className="text-sm text-muted-foreground">
                        MBA in Finance with 22+ years in healthcare financial management and strategic planning.
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="relative mb-4">
                        <img 
                          src={teamCOO} 
                          alt="David Park - Chief Operating Officer" 
                          className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-primary/20"
                        />
                      </div>
                      <h4 className="text-lg font-semibold mb-1">David Park</h4>
                      <p className="text-primary font-medium mb-2">Chief Operating Officer</p>
                      <p className="text-sm text-muted-foreground">
                        M.S. in Operations Management with 15+ years specializing in laboratory workflow optimization and quality systems.
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
                        <img 
                          src={teamLabDirector} 
                          alt="Dr. Michel Martinez - Laboratory Director" 
                          className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-primary/20"
                        />
                      </div>
                      <h4 className="text-lg font-semibold mb-1">Dr. Michel Martinez</h4>
                      <p className="text-primary font-medium mb-2">Laboratory Director</p>
                      <p className="text-sm text-muted-foreground">
                        Ph.D. in Microbiology with 12+ years in clinical laboratory management and pathogen detection.
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="relative mb-4">
                        <img 
                          src={teamResearchScientist} 
                          alt="Michael Chen - Senior Research Scientist" 
                          className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-primary/20"
                        />
                      </div>
                      <h4 className="text-lg font-semibold mb-1">Michael Chen</h4>
                      <p className="text-primary font-medium mb-2">Senior Research Scientist</p>
                      <p className="text-sm text-muted-foreground">
                        M.S. in Biochemistry with 8+ years specializing in pathogen detection and molecular diagnostics.
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="relative mb-4">
                        <img 
                          src={teamQAManager} 
                          alt="Emma Hilger - Quality Assurance Manager" 
                          className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-primary/20"
                        />
                      </div>
                      <h4 className="text-lg font-semibold mb-1">Emma Hilger</h4>
                      <p className="text-primary font-medium mb-2">Quality Assurance Manager</p>
                      <p className="text-sm text-muted-foreground">
                        B.S. in Biology with ISO 17025 certification and 5+ years in quality control and compliance.
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="relative mb-4">
                        <img 
                          src={teamLabTechnician} 
                          alt="James Rodriguez - Lead Laboratory Technician" 
                          className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-primary/20"
                        />
                      </div>
                      <h4 className="text-lg font-semibold mb-1">James Rodriguez</h4>
                      <p className="text-primary font-medium mb-2">Lead Laboratory Technician</p>
                      <p className="text-sm text-muted-foreground">
                        A.S. in Laboratory Science with 3+ years of expertise in sample processing and analysis.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                <div className="bg-card p-6 rounded-lg border space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href="tel:+16812068144" className="text-primary hover:underline">+1 (681) 206-8144</a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:info@therapeaklab.com" className="text-primary hover:underline">info@therapeaklab.com</a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-muted-foreground">625 S 27th Ave, Phoenix, AZ 85009</p>
                    </div>
                  </div>
                </div>
              </section>
              
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
};
export default About;