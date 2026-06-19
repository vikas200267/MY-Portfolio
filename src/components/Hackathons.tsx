import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Blocks, Trophy } from 'lucide-react';

const Hackathons = () => {
  const events = [
    {
      icon: <Blocks className="h-7 w-7 text-cyan-300" />,
      title: 'Cardano Hackathon',
      platform: 'Hack2Skill',
      project: 'Hyperion',
      description: 'AI-ready blockchain crypto wallet prototype with secure asset management, AI-assisted trading, activity rewards, and decentralized risk-hedging concepts.',
      tags: ['Blockchain', 'Web3', 'AI', 'TypeScript', 'Python', 'Aiken'],
    },
    {
      icon: <Trophy className="h-7 w-7 text-cyan-300" />,
      title: 'AI for Bharat Hackathon',
      platform: 'Hack2Skill',
      project: 'CivicBridge AI',
      description: 'AI citizen-service platform using multilingual translation, eligibility checks, RAG policy support, and Zero-Trust security for civic access.',
      tags: ['Generative AI', 'AWS Bedrock', 'FastAPI', 'RAG', 'JWT', 'RBAC'],
    },
  ];

  const timeline = ['Registration', 'Team Formation', 'Ideation', 'Development', 'Submission', 'Final Presentation'];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Hackathons</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Two focused Hack2Skill builds across blockchain, civic AI, full-stack engineering, and security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((e) => (
            <Card key={e.title} className="glass-effect hover-scale h-full">
              <CardContent className="p-6">
                <div className="p-3 rounded-xl bg-cyan-400/10 w-fit mb-4">{e.icon}</div>
                <h3 className="text-lg font-bold mb-1">{e.title}</h3>
                <p className="text-sm text-cyan-200 mb-1">{e.platform}</p>
                <p className="text-sm font-semibold mb-3">{e.project}</p>
                <p className="text-sm text-muted-foreground mb-4">{e.description}</p>
                <div className="flex flex-wrap gap-2">
                  {e.tags.map((t) => (
                    <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 rounded-lg border border-white/10 bg-white/[0.03] p-5">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Build Timeline</p>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-6">
            {timeline.map((step, index) => (
              <div key={step} className="rounded-md border border-cyan-300/20 bg-cyan-400/10 p-3 text-center">
                <p className="text-xs text-muted-foreground">0{index + 1}</p>
                <p className="text-sm text-cyan-100">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hackathons;
