import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Quote Request Submitted",
        description: "We'll contact you within 24 hours to discuss your testing needs.",
      });
    }, 1000);
  };

  return (
    <>
      <title>Contact Thera Peak Labs - Request Food Safety Testing Quote</title>
      <meta name="description" content="Contact Thera Peak Labs for rapid food safety testing services. Request a quote or speak with our food safety experts about your testing needs." />
      
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Our Lab</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Ready to ensure your food safety? Get a personalized quote or speak directly with our microbiology experts.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="text-muted-foreground text-lg">
                  Our food safety experts are standing by to help you choose the right testing protocols for your products and facility.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-muted-foreground">1-800-LABS-TEST (1-800-522-7837)</p>
                    <p className="text-sm text-muted-foreground">Monday - Friday, 8:00 AM - 6:00 PM EST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">info@therapeaklabs.com</p>
                    <p className="text-sm text-muted-foreground">Response within 4 hours during business hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Laboratory Address</h3>
                    <p className="text-muted-foreground">
                      1234 Science Drive<br />
                      Research Park, CA 90210
                    </p>
                    <p className="text-sm text-muted-foreground">Sample drop-off: 8:00 AM - 4:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Emergency Testing</h3>
                    <p className="text-muted-foreground">24/7 emergency hotline available</p>
                    <p className="text-sm text-muted-foreground">Additional fees apply for after-hours processing</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Request a Quote</CardTitle>
                <p className="text-muted-foreground">
                  Tell us about your testing needs and we'll provide a detailed quote within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" name="firstName" required />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" name="lastName" required />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="company">Company *</Label>
                    <Input id="company" name="company" required />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" name="email" type="email" required />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone *</Label>
                      <Input id="phone" name="phone" type="tel" required />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="testType">Test Needed *</Label>
                    <Select name="testType" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select testing type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pathogen">Pathogen Testing</SelectItem>
                        <SelectItem value="environmental">Environmental Monitoring</SelectItem>
                        <SelectItem value="finished-product">Finished Product Testing</SelectItem>
                        <SelectItem value="shelf-life">Shelf-Life Studies</SelectItem>
                        <SelectItem value="allergen">Allergen Testing</SelectItem>
                        <SelectItem value="water">Water Testing</SelectItem>
                        <SelectItem value="other">Other / Multiple</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="sampleType">Sample Type</Label>
                      <Input id="sampleType" name="sampleType" placeholder="e.g., Ready-to-eat salads" />
                    </div>
                    <div>
                      <Label htmlFor="volume">Monthly Volume</Label>
                      <Select name="volume">
                        <SelectTrigger>
                          <SelectValue placeholder="Expected tests/month" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1-10 tests</SelectItem>
                          <SelectItem value="11-50">11-50 tests</SelectItem>
                          <SelectItem value="51-100">51-100 tests</SelectItem>
                          <SelectItem value="100+">100+ tests</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="urgency">Timeline</Label>
                    <Select name="urgency">
                      <SelectTrigger>
                        <SelectValue placeholder="When do you need results?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">Standard (24-48 hours)</SelectItem>
                        <SelectItem value="rush">Rush (Same day/Next day)</SelectItem>
                        <SelectItem value="emergency">Emergency (Within hours)</SelectItem>
                        <SelectItem value="flexible">Flexible timeline</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Additional Details</Label>
                    <Textarea 
                      id="message" 
                      name="message"
                      placeholder="Tell us more about your specific requirements, current challenges, or questions..."
                      rows={4}
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="consent" name="consent" required />
                    <Label htmlFor="consent" className="text-sm">
                      I consent to being contacted by Thera Peak Labs regarding my testing needs. *
                    </Label>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-accent hover:bg-accent/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Request Quote'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}