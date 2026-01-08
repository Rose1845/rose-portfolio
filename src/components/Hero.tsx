
import { Button } from "@/components/ui/button";
import { Download, ArrowDown, Code, Coffee, Zap } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const techStack = [
    {
      name: "Java",
      icon: Coffee,
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-500/20",
      description: "Enterprise Applications"
    },
    {
      name: "TypeScript",
      icon: Code,
      color: "from-blue-500 to-blue-700",
      bgColor: "bg-blue-500/20",
      description: "Type-Safe Development"
    },
    {
      name: "JavaScript",
      icon: Zap,
      color: "from-yellow-400 to-yellow-600",
      bgColor: "bg-yellow-500/20",
      description: "Dynamic Web Solutions"
    }
  ];

  return (
    <section className="min-h-screen flex items-center pt-16 bg-linear-to-br from-background to-accent/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-primary font-medium mb-3 animate-fade-in opacity-75" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>Hello, I'm</p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-secondary mb-4 animate-fade-in opacity-75" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              Rose Atieno Odhiambo
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6 animate-fade-in opacity-75" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              Software Engineer
            </h2>
            <p className="text-foreground/80 mb-8 max-w-lg animate-fade-in opacity-75" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
              I create elegant, high-performance applications with Spring Boot, React, Angular, and more.
              Currently working with financial systems and passionate about building scalable and maintainable software solutions.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in opacity-75" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
              <a href="" download className="btn-primary flex items-center gap-2">
                <Download size={18} />
                Download CV
              </a>
              <a href="/RoseAtienoOdhiambo_Resume.pdf" download className="btn-outline flex items-center gap-2">
                <Download size={18} />
                Download Resume
              </a>
              <Button onClick={scrollToProjects} variant="secondary" className="gap-2">
                View My Work <ArrowDown size={18} />
              </Button>
            </div>
          </div>
          
          {/* Tech Stack Dashboard */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Dashboard Container */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl animate-fade-in opacity-75" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                {/* Dashboard Header */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-secondary mb-2">Tech Stack</h3>
                  <div className="w-16 h-1 bg-linear-to-r from-primary to-secondary mx-auto rounded-full"></div>
                </div>

                {/* Tech Cards */}
                <div className="space-y-4">
                  {techStack.map((tech, index) => {
                    const IconComponent = tech.icon;
                    return (
                      <div 
                        key={tech.name}
                        className="group relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-4 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 animate-fade-in opacity-75"
                        style={{ animationDelay: `${0.4 + index * 0.2}s`, animationFillMode: 'forwards' }}
                      >
                        {/* Tech Card Content */}
                        <div className="flex items-center space-x-4">
                          {/* Icon */}
                          <div className={`w-12 h-12 rounded-lg ${tech.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                            <IconComponent className="w-6 h-6 text-foreground" />
                          </div>
                          
                          {/* Tech Info */}
                          <div className="flex-1">
                            <h4 className="font-bold text-secondary group-hover:text-primary transition-colors duration-300">
                              {tech.name}
                            </h4>
                            <p className="text-sm text-foreground/60">{tech.description}</p>
                          </div>
                        </div>

                        {/* Animated Border */}
                        <div className={`absolute inset-0 bg-linear-to-r ${tech.color} opacity-75 group-hover:opacity-20 transition-opacity duration-300 rounded-xl`} />
                      </div>
                    );
                  })}
                </div>

                {/* Dashboard Footer */}
                <div className="mt-6 text-center">
                  <div className="inline-flex items-center space-x-2 text-sm text-foreground/60">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Building Amazing Solutions</span>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full" />
              
              {/* Floating Code Elements */}
              <div className="absolute top-4 -left-8 text-primary/30 animate-bounce" style={{ animationDelay: '1s' }}>
                {'</>'}
              </div>
              <div className="absolute bottom-8 -right-8 text-secondary/30 animate-bounce" style={{ animationDelay: '1.5s' }}>
                {'{}'}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-20">
          <button 
            onClick={() => {
              const aboutSection = document.getElementById('about');
              if (aboutSection) aboutSection.scrollIntoView({ behavior: 'smooth' });
            }}
            className="animate-bounce bg-white rounded-full p-2 shadow-md"
          >
            <ArrowDown size={24} className="text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
