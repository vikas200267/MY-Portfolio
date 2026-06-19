import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Building2, Github, Shield, ShieldAlert, Wallet } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'PhishGuard',
      subtitle: 'AI-Powered Phishing Detection System',
      description: 'Developed an AI phishing detection system that identifies malicious URLs using machine learning and live threat-intelligence APIs.',
      technologies: ['Python', 'Django', 'ReactJS', 'XGBoost', 'PhishTank API', 'Google Safe Browsing API', 'urlscan.io'],
      features: ['Real-time URL analysis', 'XGBoost detection', 'Threat-intel enrichment', 'Confidence scoring'],
      icon: <ShieldAlert className="h-8 w-8 text-cyan-300" />,
      timeline: 'Nov 2025 - Jan 2026',
    },
    {
      title: 'Hyperion',
      subtitle: 'AI-Ready Blockchain Crypto Wallet',
      description: 'Built a prototype crypto wallet for secure asset management, AI-assisted trading, rewards, and decentralized risk hedging.',
      technologies: ['TypeScript', 'Python', 'Blockchain', 'JavaScript', 'Aiken', 'Shell'],
      features: ['Secure wallet flows', 'AI trading support', 'Milestone rewards', 'Risk hedging concepts'],
      icon: <Wallet className="h-8 w-8 text-cyan-300" />,
      timeline: 'Hackathon Project',
    },
    {
      title: 'CivicBridge AI',
      subtitle: 'AI-Powered Citizen Service Platform',
      description: 'Created an AI civic platform for multilingual policy translation, eligibility checking, application tracking, and citizen support.',
      technologies: ['Python', 'FastAPI', 'AWS Bedrock', 'AWS Lambda', 'DynamoDB', 'SQLite', 'JWT', 'RAG'],
      features: ['RAG policy assistant', 'Zero-Trust access', 'RBAC', 'AES-256 encrypted offline sync'],
      icon: <Building2 className="h-8 w-8 text-cyan-300" />,
      timeline: 'Hackathon Project',
    },
    {
      title: 'Distributed Firewall',
      subtitle: 'Virtual Data-Center Security Lab',
      description: 'Implemented a distributed firewall inside a virtualized environment to control network traffic at the hypervisor level.',
      technologies: ['VMware Workstation', 'ESXi 7.0', 'pfSense Firewall', 'Virtualization', 'Networking'],
      features: ['Network segmentation', 'Firewall policies', 'Virtual routing', 'Granular traffic control'],
      icon: <Shield className="h-8 w-8 text-cyan-300" />,
      timeline: 'Mar 2023 - May 2023',
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Resume-backed security, AI, cloud, and blockchain projects presented as product-style case studies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <Card key={p.title} className="glass-effect hover-scale h-full flex flex-col overflow-hidden">
              <div className="h-1.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500" />
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-cyan-400/10 shrink-0">{p.icon}</div>
                  <div>
                    <CardTitle className="text-xl">{p.title}</CardTitle>
                    <p className="text-sm text-cyan-200">{p.subtitle}</p>
                    <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{p.timeline}</p>
                  </div>
                </div>
                <CardDescription className="text-muted-foreground mt-3">{p.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Highlights</p>
                  <div className="flex flex-wrap gap-2">
                    {p.features.map((f) => (
                      <Badge key={f} className="bg-cyan-400/15 text-cyan-200 border border-cyan-300/30 hover:bg-cyan-400/25 text-xs">{f}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {p.technologies.map((t) => (
                      <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button size="sm" variant="outline" asChild>
                  <a href="https://github.com/vikas200267" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />GitHub
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
