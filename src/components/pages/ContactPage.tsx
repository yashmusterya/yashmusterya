import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useToast } from '@/hooks/use-toast';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_tt5e8sg', // service ID
        'template_lm91bre', // template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Yash Musterya',
        },
        'lyUaPD5TapWe7HfjH' // public key
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-3 sm:p-4 md:p-6">
      <div className="w-full max-w-2xl mx-auto">
        <div className="text-center mb-4 sm:mb-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mb-2 sm:mb-3">
            Get In Touch
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
            Have a project in mind? Let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 w-full">
          {/* Contact Information */}
          <div className="space-y-3 sm:space-y-4">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader className="pb-2 sm:pb-3">
                <CardTitle className="text-sm sm:text-base md:text-lg text-foreground">Let's Connect</CardTitle>
                <CardDescription className="text-xs sm:text-sm text-muted-foreground">
                  Ready to turn your ideas into reality? Reach out and let's start building.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 sm:space-y-3 pt-0">
                <div className="flex items-center gap-2 sm:gap-3 text-muted-foreground hover:text-foreground transition-colors text-xs sm:text-sm">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                  <span>musteryay@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 text-muted-foreground hover:text-foreground transition-colors text-xs sm:text-sm">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                  <span>+91 9867684002</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 text-muted-foreground hover:text-foreground transition-colors text-xs sm:text-sm">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                  <span>Thane, Maharashtra, India</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader className="pb-2 sm:pb-3">
                <CardTitle className="text-sm sm:text-base md:text-lg text-foreground">Response Time</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-xs sm:text-sm text-muted-foreground">
                  I typically respond within <span className="text-primary font-semibold">24 hours</span>.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader className="pb-2 sm:pb-3">
              <CardTitle className="text-sm sm:text-base md:text-lg text-foreground">Send Message</CardTitle>
              <CardDescription className="text-xs sm:text-sm text-muted-foreground">
                Fill out the form below and I'll get back to you ASAP.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  <div className="space-y-1">
                    <Label htmlFor="name" className="text-xs sm:text-sm">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-background/50 h-8 sm:h-9 text-xs sm:text-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="email" className="text-xs sm:text-sm">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-background/50 h-8 sm:h-9 text-xs sm:text-sm"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="subject" className="text-xs sm:text-sm">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="bg-background/50 h-8 sm:h-9 text-xs sm:text-sm"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="message" className="text-xs sm:text-sm">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or idea..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    className="bg-background/50 resize-none text-xs sm:text-sm"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full h-8 sm:h-9 text-xs sm:text-sm" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-3 w-3 sm:h-4 sm:w-4 border-b-2 border-current mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};