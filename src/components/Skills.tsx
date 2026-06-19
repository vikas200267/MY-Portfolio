import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Cloud, Code2, Database, ShieldCheck, Wrench } from 'lucide-react';

const Skills = () => {
  const categories = [
    { icon: <Code2 className="h-6 w-6" />, title: 'Languages', skills: ['C', 'C++', 'Python', 'JavaScript', 'TypeScript'] },
    { icon: <ShieldCheck className="h-6 w-6" />, title: 'Cyber Security', skills: ['Network Security', 'Web App Security', 'Cloud Security', 'VAPT', 'SOC Fundamentals', 'OWASP ZAP', 'Nmap', 'Wireshark', 'Nessus', 'Burp Suite', 'PCI-DSS', 'NIST'] },
    { icon: <Cloud className="h-6 w-6" />, title: 'Cloud & Platforms', skills: ['AWS', 'GCP', 'Azure', 'AWS Bedrock', 'AWS Lambda', 'DynamoDB', 'Linux', 'RHCSA'] },
    { icon: <Brain className="h-6 w-6" />, title: 'AI / ML', skills: ['Machine Learning', 'XGBoost', 'RAG', 'Generative AI', 'Prompt Engineering', 'AI-assisted Workflows'] },
    { icon: <Database className="h-6 w-6" />, title: 'Backend & Data', skills: ['Django', 'FastAPI', 'REST APIs', 'SQLite', 'JWT', 'AES-256 Concepts'] },
    { icon: <Wrench className="h-6 w-6" />, title: 'Engineering Tools', skills: ['GitHub', 'VMware Workstation', 'ESXi 7.0', 'pfSense', 'ReactJS', 'Blockchain', 'Aiken', 'Shell'] },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            A security-first toolkit spanning network defense, VAPT fundamentals, cloud platforms, AI systems, and full-stack project delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((c) => (
            <Card key={c.title} className="glass-effect hover-scale">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-cyan-400/10 text-cyan-300">{c.icon}</div>
                  <h3 className="text-lg font-semibold">{c.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {c.skills.map((s) => (
                    <Badge key={s} variant="secondary" className="text-xs">{s}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
