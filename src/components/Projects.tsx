
import { ExternalLink, Github, Code, Calendar, Users } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  duration?: string;
  team?: string;
  highlights: string[];
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "E-Commerce Platform",
      description: "A comprehensive full-stack e-commerce platform featuring secure payment integration, advanced user authentication, and intuitive product management system.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      duration: "3 months",
      team: "4 developers",
      highlights: ["Real-time inventory management", "Multi-payment gateway integration", "Advanced search & filtering"]
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, seamless file sharing capabilities, and comprehensive team management features.",
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&auto=format&fit=crop",
      tags: ["React", "Firebase", "Tailwind CSS", "Context API"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      duration: "2 months",
      team: "Solo project",
      highlights: ["Real-time collaboration", "Drag & drop interface", "Advanced notification system"]
    },
    {
      title: "Healthcare Dashboard",
      description: "A comprehensive healthcare analytics dashboard featuring patient management, appointment scheduling, and detailed medical data visualization.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop",
      tags: ["TypeScript", "Next.js", "PostgreSQL", "Chart.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      duration: "4 months",
      team: "6 developers",
      highlights: ["HIPAA compliant", "Advanced analytics", "Mobile-responsive design"]
    },
    {
      title: "Finance Tracker",
      description: "A personal finance tracking application with intelligent budget planning, automated expense categorization, and comprehensive visual reports.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop",
      tags: ["Vue.js", "Express", "MySQL", "D3.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      duration: "2.5 months",
      team: "Solo project",
      highlights: ["AI-powered categorization", "Interactive charts", "Export functionality"]
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-background to-accent/10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-foreground/80 max-w-2xl mx-auto mb-8">
            Explore my portfolio of innovative projects that showcase my expertise in full-stack development, 
            modern frameworks, and user-centered design principles.
          </p>
          
          {/* Stats */}
          <div className="flex justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{projects.length}+</div>
              <div className="text-sm text-foreground/60">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">8+</div>
              <div className="text-sm text-foreground/60">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">12+</div>
              <div className="text-sm text-foreground/60">Months Experience</div>
            </div>
          </div>
        </div>
        
        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto relative">
          {/* Main connecting line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary via-secondary to-primary" />
          
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`relative flex items-start mb-12 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Node/Dot on the line */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 mt-6 z-20">
                <div className="w-full h-full bg-primary rounded-full ring-4 ring-background shadow-lg shadow-primary/50 animate-pulse" />
              </div>
              
              {/* Connecting stick/branch */}
              <div 
                className={`absolute top-8 h-0.5 bg-linear-to-r ${
                  index % 2 === 0 
                    ? 'left-10 md:left-1/2 md:ml-2 w-8 md:w-12 from-primary to-primary/30' 
                    : 'left-10 md:right-1/2 md:left-auto md:mr-2 w-8 md:w-12 from-primary/30 to-primary'
                }`}
              />
              
              {/* Content */}
              <div 
                className={`ml-20 md:ml-0 md:w-[calc(50%-3rem)] ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}
              >
                <div className="group relative overflow-hidden bg-card/50 backdrop-blur-md border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10">
                  <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent" />
                    
                    {/* Floating action buttons */}
                    <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-primary/80 backdrop-blur-sm rounded-full hover:bg-primary transition-colors"
                        >
                          <ExternalLink size={14} className="text-primary-foreground" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-secondary/80 backdrop-blur-sm rounded-full hover:bg-secondary transition-colors"
                        >
                          <Github size={14} className="text-secondary-foreground" />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 mb-4 text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Project Meta */}
                  <div className="flex items-center gap-4 mb-3 text-xs text-foreground/50">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={12} />
                      <span>{project.team}</span>
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div className="mb-4">
                    <div className="flex items-center gap-1 text-xs font-semibold text-foreground/60 mb-2">
                      <Code size={12} />
                      <span>Key Features</span>
                    </div>
                    <ul className="space-y-1">
                      {project.highlights.slice(0, 2).map((highlight, idx) => (
                        <li key={idx} className="text-xs text-foreground/50 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 4).map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="px-2 py-0.5 bg-primary/10 rounded-full text-xs font-medium text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2 py-0.5 bg-muted rounded-full text-xs text-muted-foreground">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
