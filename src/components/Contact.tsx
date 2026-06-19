
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/vikas200267",
      icon: <Github className="h-6 w-6" />,
      username: "vikas200267"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/vikas-k-p-5298471a0",
      icon: <Linkedin className="h-6 w-6" />,
      username: "vikas-k-p-5298471a0"
    },
    {
      name: "Email",
      url: "mailto:vikas.kp767@gmail.com",
      icon: <Mail className="h-6 w-6" />,
      username: "vikas.kp767@gmail.com"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Reach out for cybersecurity roles, SOC/VAPT opportunities, cloud security work, or secure product builds.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-secondary/50"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john.doe@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-secondary/50"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-secondary/50 min-h-[150px]"
                />
              </div>
              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <div className="glass-effect p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-6">Connect With Me</h3>
              
              <div className="space-y-6">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary transition-colors"
                  >
                    <div className="p-2 rounded-full bg-secondary">
                      {link.icon}
                    </div>
                    <div>
                      <h4 className="font-medium">{link.name}</h4>
                      <p className="text-sm text-muted-foreground">{link.username}</p>
                    </div>
                  </a>
                ))}

                {/* Resume Download */}
                <div className="pt-4 border-t border-border">
                  <Button asChild className="w-full">
                    <a href="/Vikas-K-P-Resume.pdf" target="_blank" rel="noopener noreferrer">
                      Download Resume
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
