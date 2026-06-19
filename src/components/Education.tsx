import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, GraduationCap } from 'lucide-react';

const Education = () => {
  const coursework = [
    'Computer Networks', 'Network Security', 'Web Application Security', 'Cloud Security',
    'Cryptography', 'Operating Systems', 'Database Management Systems', 'VAPT Fundamentals',
    'SOC Fundamentals', 'Software Engineering',
  ];

  const education = [
    {
      title: 'Bachelor of Engineering in CSE (Cyber Security)',
      school: 'RNS Institute of Technology (RNSIT)',
      year: '2026',
      score: 'CGPA: 8.0',
    },
    {
      title: 'Diploma in Computer Science and Engineering',
      school: 'Sri Krishna Polytechnic',
      year: '2023',
      score: 'CGPA: 9.0',
    },
  ];

  const certifications = [
    { name: 'RHCSA - Red Hat Linux', issuer: 'Red Hat' },
    { name: 'Google Cloud Cybersecurity Certificate', issuer: 'Google Cloud' },
    { name: 'Gen AI Academy', issuer: 'Hack2Skill' },
    { name: 'Practical Cyber-Security for Cyber-Security Practitioners', issuer: 'NPTEL' },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Certifications</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="glass-effect overflow-hidden hover-scale">
            <div className="h-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500" />
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="mr-4 p-3 rounded-full bg-secondary">
                  <GraduationCap className="h-8 w-8 text-cyan-300" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">Academic Path</h3>
                  <div className="space-y-5">
                    {education.map((item) => (
                      <div key={item.title} className="border-b border-border pb-4 last:border-none">
                        <h4 className="font-semibold">{item.title}</h4>
                        <p className="text-cyan-200">{item.school}</p>
                        <p className="text-sm text-muted-foreground">{item.year} - {item.score}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5">
                    <p className="text-sm font-semibold mb-2">Relevant Coursework</p>
                    <div className="flex flex-wrap gap-2">
                      {coursework.map((c) => (
                        <Badge key={c} variant="secondary" className="text-xs">{c}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-effect overflow-hidden hover-scale">
            <div className="h-2 bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400" />
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="mr-4 p-3 rounded-full bg-secondary">
                  <Award className="h-8 w-8 text-cyan-300" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">Certifications</h3>
                  <div className="space-y-3">
                    {certifications.map((c) => (
                      <div key={c.name} className="border-b border-border pb-2 last:border-none">
                        <h4 className="font-medium text-sm">{c.name}</h4>
                        <p className="text-xs text-muted-foreground">{c.issuer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
