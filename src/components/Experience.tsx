
import { Calendar, MapPin, Layers } from 'lucide-react';

interface System {
  name: string;
  description: string;
  type: string;
}

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  systems: System[];
  skills: string[];
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Software Developer",
      company: "E&M Tech House",
      location: "Uganda",
      period: "2024 - Present",
      systems: [
        {
          name: "SACCOs Management System",
          description: "Financial management system serving 300+ accounts across Uganda",
          type: "Financial"
        },
        {
          name: "Trade Finance Project",
          description: "Trade finance platform for managing financial transactions and workflows",
          type: "Financial"
        }
      ],
      skills: ["Java", "Spring Boot", "PostgreSQL", "React", "Financial Systems"]
    },
    {
      title: "Software Developer",
      company: "YOUR NEXT HOME ENTERPRISES LIMITED",
      location: "Remote, Nairobi",
      period: "June 2024 - Present",
      systems: [
        {
          name: "AI Property Search System",
          description: "AI-powered property search using NLP to process user queries and retrieve relevant listings",
          type: "Real Estate"
        },
        {
          name: "Property Management API",
          description: "REST API endpoint (/properties/conversation) connecting backend with AI services",
          type: "Backend"
        }
      ],
      skills: ["Spring Boot", "PostgreSQL", "AWS", "NLP", "REST APIs"]
    },
    {
      title: "Software Developer & Team Lead",
      company: "EXPEDITION CODE",
      location: "Remote, Nairobi",
      period: "Sept 2021 - Aug 2024",
      systems: [
        {
          name: "E-Commerce Platform",
          description: "Full-featured e-commerce system with intuitive UI/UX design",
          type: "E-Commerce"
        }
      ],
      skills: ["React.js", "TypeScript", "UI/UX Design", "Team Leadership"]
    },
    {
      title: "Software Developer Attachee",
      company: "Lanstar Technologies",
      location: "On-Site, Nairobi Westlands",
      period: "May 2023 - July 2023",
      systems: [
        {
          name: "Jasper Reports System",
          description: "Report generation system using Jasper Reports with Spring Boot",
          type: "Reporting"
        },
        {
          name: "API Documentation",
          description: "Comprehensive API documentation in Redmine for team collaboration",
          type: "Documentation"
        }
      ],
      skills: ["Jasper Reports", "Spring Boot", "MySQL", "PostgreSQL", "Redmine"]
    },
    {
      title: "Software Developer",
      company: "Enaton Limited Company",
      location: "Remote, Nairobi",
      period: "May 2022 - Sept 2022",
      systems: [
        {
          name: "Multitenancy System",
          description: "Backend APIs for multitenancy architecture using Node.js and Sequelize",
          type: "Backend"
        },
        {
          name: "Frontend Dashboard",
          description: "User interface development using React.js and TypeScript",
          type: "Frontend"
        }
      ],
      skills: ["React.js", "Node.js", "Sequelize", "PostgreSQL", "Digital Ocean"]
    }
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-accent/30 via-background to-primary/5" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">Professional Experience</h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Companies I've worked with and the systems I've built.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Main connecting line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary via-secondary to-primary" />
          
          {experiences.map((experience, index) => (
            <div key={index} className="relative pl-16 md:pl-20 pb-12 last:pb-0">
              {/* Node/Dot on the line */}
              <div className="absolute left-4 md:left-6 w-5 h-5 z-20">
                <div className="w-full h-full rounded-full bg-primary ring-4 ring-background shadow-lg shadow-primary/50" />
              </div>
              
              {/* Connecting stick to content */}
              <div className="absolute left-9 md:left-11 top-2 w-6 md:w-8 h-0.5 bg-linear-to-r from-primary to-primary/30" />
              
              {/* Company Header */}
              <div className="bg-card/50 backdrop-blur-md border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10">
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {experience.title}
                </h3>
                <p className="text-primary font-semibold text-lg mb-2">{experience.company}</p>
                
                <div className="flex flex-wrap gap-4 mb-6 text-sm text-foreground/60">
                  <div className="flex items-center gap-1.5">
                    <MapPin size={14} />
                    <span>{experience.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    <span>{experience.period}</span>
                  </div>
                </div>

                {/* Systems/Projects under this company */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm font-medium text-foreground/80 mb-3">
                    <Layers size={16} className="text-primary" />
                    <span>Systems Built</span>
                  </div>
                  
                  <div className="relative ml-2">
                    {/* Systems connecting line */}
                    <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/50 to-transparent" />
                    
                    {experience.systems.map((system, sysIndex) => (
                      <div key={sysIndex} className="relative pl-8 pb-4 last:pb-0">
                        {/* System node */}
                        <div className="absolute left-0 top-1.5 w-4 h-4">
                          <div className="w-3 h-3 rounded-full bg-secondary ring-2 ring-background" />
                        </div>
                        
                        {/* Connecting stick */}
                        <div className="absolute left-4 top-3 w-3 h-0.5 bg-secondary/50" />
                        
                        <div className="bg-muted/30 rounded-lg p-4 border border-border/30 hover:bg-muted/50 transition-colors">
                          <div className="flex items-start justify-between gap-2 mb-1">
                            <h4 className="font-semibold text-foreground text-sm">{system.name}</h4>
                            <span className="px-2 py-0.5 bg-primary/20 text-primary rounded-full text-xs font-medium shrink-0">
                              {system.type}
                            </span>
                          </div>
                          <p className="text-foreground/60 text-xs">{system.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-border/30">
                  {experience.skills.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="px-2 py-0.5 bg-muted rounded-full text-xs font-medium text-muted-foreground border border-border/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
