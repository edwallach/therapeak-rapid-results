import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Mail, MapPin, Phone, Globe } from 'lucide-react';
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
                <h2 className="text-4xl font-bold mb-8 text-center">Global Expansion</h2>
                <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background p-10 md:p-12 rounded-2xl border-2 border-primary/30 shadow-lg">
                  <div className="flex flex-col items-center text-center mb-10">
                    <Globe className="h-16 w-16 text-primary mb-6 animate-pulse" />
                    <h3 className="text-3xl font-bold mb-6">Taking Thera Peak Labs Global</h3>
                    <p className="text-xl text-muted-foreground max-w-4xl mb-4">
                      After securing additional investment from our founders, we are expanding internationally to follow our global customers and serve many more food producers worldwide.
                    </p>
                    <p className="text-lg text-muted-foreground max-w-3xl">
                      We are opening three new state-of-the-art laboratory facilities in key international markets.
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-8 mb-10">
                    <div className="bg-background p-8 rounded-xl border-2 border-primary/30 shadow-md hover:shadow-xl transition-shadow">
                      <div className="flex items-center gap-3 mb-5">
                        <MapPin className="h-8 w-8 text-primary" />
                        <h4 className="text-2xl font-bold">Norway</h4>
                      </div>
                      <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                        Our Norwegian facility will serve the Nordic region with the same high standards of food safety testing and rapid turnaround times.
                      </p>
                      <div className="inline-flex items-center gap-2 text-base font-semibold text-primary px-4 py-2 bg-primary/10 rounded-full">
                        <span className="inline-block w-3 h-3 bg-primary rounded-full animate-pulse"></span>
                        Coming Soon
                      </div>
                    </div>
                    
                    <div className="bg-background p-8 rounded-xl border-2 border-primary/30 shadow-md hover:shadow-xl transition-shadow">
                      <div className="flex items-center gap-3 mb-5">
                        <MapPin className="h-8 w-8 text-primary" />
                        <h4 className="text-2xl font-bold">Poland</h4>
                      </div>
                      <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                        Our Polish location will provide comprehensive food safety testing services for Central and Eastern European markets.
                      </p>
                      <div className="inline-flex items-center gap-2 text-base font-semibold text-primary px-4 py-2 bg-primary/10 rounded-full">
                        <span className="inline-block w-3 h-3 bg-primary rounded-full animate-pulse"></span>
                        Coming Soon
                      </div>
                    </div>
                    
                    <div className="bg-background p-8 rounded-xl border-2 border-primary/30 shadow-md hover:shadow-xl transition-shadow">
                      <div className="flex items-center gap-3 mb-5">
                        <MapPin className="h-8 w-8 text-primary" />
                        <h4 className="text-2xl font-bold">Dubai</h4>
                      </div>
                      <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                        Our Dubai hub will serve the Middle East and surrounding regions, bringing our expertise to new markets globally.
                      </p>
                      <div className="inline-flex items-center gap-2 text-base font-semibold text-primary px-4 py-2 bg-primary/10 rounded-full">
                        <span className="inline-block w-3 h-3 bg-primary rounded-full animate-pulse"></span>
                        Coming Soon
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-primary/10 p-8 md:p-10 rounded-xl border-2 border-primary/30">
                    <h4 className="text-2xl font-bold mb-6 text-center">We Welcome Your Contact</h4>
                    <p className="text-lg text-muted-foreground mb-8 text-center max-w-2xl mx-auto">
                      Are you in Norway, Poland, or Dubai? We are actively seeking connections with:
                    </p>
                    <ul className="space-y-4 text-base mb-8 max-w-3xl mx-auto">
                      <li className="flex items-start gap-3 bg-background/50 p-4 rounded-lg">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <div>
                          <strong className="text-lg">Potential Customers:</strong>
                          <span className="text-muted-foreground"> Food producers and processors looking for reliable testing partners</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3 bg-background/50 p-4 rounded-lg">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <div>
                          <strong className="text-lg">Job Applicants:</strong>
                          <span className="text-muted-foreground"> Qualified laboratory professionals and scientists</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3 bg-background/50 p-4 rounded-lg">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <div>
                          <strong className="text-lg">Vendors:</strong>
                          <span className="text-muted-foreground"> Laboratory equipment and supply providers</span>
                        </div>
                      </li>
                    </ul>
                    <p className="text-lg text-center">
                      Please reach out to <a href="mailto:info@therapeaklab.com" className="text-primary hover:underline font-bold text-xl">info@therapeaklab.com</a> to discuss opportunities.
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
                      <h4 className="text-lg font-semibold mb-1">Dr. Robert Williams</h4>
                      <p className="text-primary font-medium mb-2">Founder & CEO</p>
                      <p className="text-sm text-muted-foreground">
                        Ph.D. in Biochemistry with 25+ years of experience. Founded Thera Peak Labs Inc. in 2012 with a vision for revolutionary diagnostic solutions.
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <h4 className="text-lg font-semibold mb-1">Lisa Anderson</h4>
                      <p className="text-primary font-medium mb-2">Chief Financial Officer</p>
                      <p className="text-sm text-muted-foreground">
                        MBA in Finance with 22+ years in healthcare financial management and strategic planning.
                      </p>
                    </div>
                    
                    <div className="text-center">
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
                      <h4 className="text-lg font-semibold mb-1">Dr. Michel Martinez</h4>
                      <p className="text-primary font-medium mb-2">Laboratory Director</p>
                      <p className="text-sm text-muted-foreground">
                        Ph.D. in Microbiology with 12+ years in clinical laboratory management and pathogen detection.
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <h4 className="text-lg font-semibold mb-1">Michael Chen</h4>
                      <p className="text-primary font-medium mb-2">Senior Research Scientist</p>
                      <p className="text-sm text-muted-foreground">
                        M.S. in Biochemistry with 8+ years specializing in pathogen detection and molecular diagnostics.
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <h4 className="text-lg font-semibold mb-1">Emma Hilger</h4>
                      <p className="text-primary font-medium mb-2">Quality Assurance Manager</p>
                      <p className="text-sm text-muted-foreground">
                        B.S. in Biology with ISO 17025 certification and 5+ years in quality control and compliance.
                      </p>
                    </div>
                    
                    <div className="text-center">
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