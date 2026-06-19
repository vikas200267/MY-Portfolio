import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, MapPin, School, Shield, TrendingUp } from 'lucide-react';

const About = () => {
  const quickFacts = [
    { icon: <GraduationCap className="h-5 w-5 text-cyan-300" />, label: 'B.E. CSE (Cyber Security)' },
    { icon: <School className="h-5 w-5 text-cyan-300" />, label: 'RNS Institute of Technology' },
    { icon: <TrendingUp className="h-5 w-5 text-cyan-300" />, label: 'CGPA: 8.0' },
    { icon: <MapPin className="h-5 w-5 text-cyan-300" />, label: 'Bengaluru, Karnataka' },
  ];

  const interests = [
    'Network Security', 'Web Application Security', 'Cloud Security', 'VAPT',
    'SOC Fundamentals', 'AI Security', 'Blockchain', 'Secure Full-Stack Apps'
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who Am I</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hi, I am <span className="text-foreground font-semibold">Vikas K P</span>, a recent
              B.E. Cyber Security graduate from RNS Institute of Technology with a strong foundation
              in network security, web application security, cloud security, VAPT, and SOC fundamentals.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I build practical security-focused systems, including AI-powered phishing detection,
              blockchain wallet prototypes, civic AI platforms, and virtualized firewall environments.
              My work combines secure engineering habits with Python, C++, Linux, cloud services,
              and hands-on security tools.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am focused on cybersecurity roles where I can investigate threats, harden systems,
              build reliable tooling, and keep learning across cloud security, AI-assisted defense,
              and modern software engineering.
            </p>

            <div>
              <h3 className="text-xl font-semibold mb-3 mt-8">Current Focus</h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((i) => (
                  <Badge key={i} variant="secondary" className="text-sm">{i}</Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="glass-effect p-6">
              <div className="mb-4 flex items-center gap-3">
                <Shield className="h-5 w-5 text-cyan-300" />
                <h3 className="text-lg font-semibold">Quick Facts</h3>
              </div>
              <ul className="space-y-3">
                {quickFacts.map((f) => (
                  <li key={f.label} className="flex items-center gap-3 text-muted-foreground">
                    {f.icon}<span>{f.label}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="glass-effect p-6">
              <h3 className="text-lg font-semibold mb-4">Open To</h3>
              <div className="flex flex-wrap gap-2">
                {['Cyber Security Roles', 'SOC Analyst Roles', 'VAPT Internships', 'Cloud Security', 'Full-Stack Security Projects'].map((o) => (
                  <Badge key={o} className="bg-cyan-400/15 text-cyan-200 border border-cyan-300/30 hover:bg-cyan-400/25">{o}</Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
