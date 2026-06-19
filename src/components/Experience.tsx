import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Radar } from 'lucide-react';

const Experience = () => {
  const focusAreas = [
    'VAPT Fundamentals', 'SOC Fundamentals', 'Threat Intelligence APIs', 'URL Analysis',
    'Zero-Trust Security', 'RBAC', 'Virtual Firewalls', 'Cloud AI Services',
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Security Experience</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
        </div>

        <Card className="glass-effect hover-scale overflow-hidden max-w-4xl mx-auto">
          <div className="h-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500" />
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="p-4 rounded-2xl bg-cyan-400/10 text-cyan-300 self-start">
                <Briefcase className="h-8 w-8" />
              </div>
              <div className="flex-1">
                <div className="mb-3">
                  <h3 className="text-2xl font-bold">Hands-on Cybersecurity Project Work</h3>
                  <p className="text-lg text-cyan-200">AI detection, cloud security, and virtual infrastructure labs</p>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  Built and documented cybersecurity projects that combine threat detection,
                  machine learning, cloud AI services, secure authentication, and network
                  segmentation. The work demonstrates practical exposure to phishing defense,
                  threat-intelligence integration, Zero-Trust controls, and virtualized firewall
                  design.
                </p>
                <div className="mb-5 rounded-lg border border-white/10 bg-white/[0.03] p-4">
                  <div className="mb-2 flex items-center gap-2 text-sm font-semibold">
                    <Radar className="h-4 w-4 text-cyan-300" /> Resume Signal
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Recent B.E. Cyber Security graduate with a foundation in network security,
                    web application security, cloud security, VAPT, and SOC fundamentals.
                  </p>
                </div>
                <p className="text-sm font-semibold mb-2">Focus Areas</p>
                <div className="flex flex-wrap gap-2">
                  {focusAreas.map((s) => (
                    <Badge key={s} variant="secondary" className="text-xs">{s}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Experience;
