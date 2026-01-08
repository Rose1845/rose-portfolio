
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Cloud, Wrench, Layers, MessageSquare, Monitor, Zap } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface SkillCategory {
  title: string;
  icon: React.ComponentType<any>;
  skills: Skill[];
  color: string;
  gradient: string;
}

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [animatedSkills, setAnimatedSkills] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedSkills(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const skillCategories: SkillCategory[] = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "text-blue-600",
      gradient: "from-blue-500/20 to-blue-600/30",
      skills: [
        { name: "Java", level: 90, category: "programming" },
        { name: "TypeScript", level: 85, category: "programming" },
        { name: "JavaScript", level: 88, category: "programming" },
        { name: "Node.js", level: 82, category: "programming" }
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: Layers,
      color: "text-green-600",
      gradient: "from-green-500/20 to-green-600/30",
      skills: [
        { name: "Spring Boot", level: 88, category: "frameworks" },
        { name: "React/Next.js", level: 85, category: "frameworks" },
        { name: "Angular", level: 75, category: "frameworks" },
        { name: "Bootstrap", level: 80, category: "frameworks" }
      ]
    },
    {
      title: "Database & Storage",
      icon: Database,
      color: "text-purple-600",
      gradient: "from-purple-500/20 to-purple-600/30",
      skills: [
        { name: "MySQL", level: 85, category: "database" },
        { name: "PostgreSQL", level: 80, category: "database" },
        { name: "MongoDB", level: 78, category: "database" },
        { name: "MariaDB", level: 75, category: "database" }
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: Cloud,
      color: "text-orange-600",
      gradient: "from-orange-500/20 to-orange-600/30",
      skills: [
        { name: "Docker", level: 80, category: "devops" },
        { name: "Kubernetes", level: 70, category: "devops" },
        { name: "AWS (EC2, S3)", level: 75, category: "devops" },
        { name: "Coolify", level: 85, category: "devops" },
        { name: "Pulumi", level: 72, category: "devops" }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      color: "text-red-600",
      gradient: "from-red-500/20 to-red-600/30",
      skills: [
        { name: "Git", level: 90, category: "tools" },
        { name: "GitHub", level: 88, category: "tools" },
        { name: "Jira", level: 80, category: "tools" },
        { name: "Redmine", level: 75, category: "tools" },
        { name: "Postman", level: 85, category: "tools" }
      ]
    },
    {
      title: "Message Brokers",
      icon: MessageSquare,
      color: "text-indigo-600",
      gradient: "from-indigo-500/20 to-indigo-600/30",
      skills: [
        { name: "Apache Kafka", level: 78, category: "messaging" },
        { name: "RabbitMQ", level: 75, category: "messaging" }
      ]
    },
    {
      title: "Architecture & Design",
      icon: Zap,
      color: "text-yellow-600",
      gradient: "from-yellow-500/20 to-yellow-600/30",
      skills: [
        { name: "RESTful API design", level: 88, category: "architecture" },
        { name: "Software Architecture Patterns", level: 82, category: "architecture" },
        { name: "Microservices", level: 80, category: "architecture" }
      ]
    },
    {
      title: "IDEs & Operating Systems",
      icon: Monitor,
      color: "text-teal-600",
      gradient: "from-teal-500/20 to-teal-600/30",
      skills: [
        { name: "VSCode", level: 95, category: "ides" },
        { name: "IntelliJ IDEA", level: 88, category: "ides" },
        { name: "Linux", level: 80, category: "ides" },
        { name: "Windows", level: 90, category: "ides" }
      ]
    }
  ];

  const allSkills = skillCategories.flatMap(category => category.skills);
  const filteredSkills = selectedCategory === 'all' ? allSkills : 
    skillCategories.find(cat => cat.title.toLowerCase().includes(selectedCategory))?.skills || [];

  const categoryFilters = [
    { key: 'all', label: 'All Skills', icon: Layers },
    { key: 'programming', label: 'Programming', icon: Code },
    { key: 'frameworks', label: 'Frameworks', icon: Layers },
    { key: 'database', label: 'Database', icon: Database },
    { key: 'devops', label: 'DevOps', icon: Cloud },
    { key: 'tools', label: 'Tools', icon: Wrench }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-background to-primary/5" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">Technical Expertise</h2>
          <p className="text-foreground/80 max-w-2xl mx-auto mb-8">
            A comprehensive overview of my technical skills and proficiency levels across various technologies, 
            frameworks, and tools that I use to build innovative solutions.
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categoryFilters.map((filter) => {
              const IconComponent = filter.icon;
              return (
                <button
                  key={filter.key}
                  onClick={() => setSelectedCategory(filter.key)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                    selectedCategory === filter.key
                      ? 'bg-primary text-white shadow-lg scale-105'
                      : 'bg-white/10 backdrop-blur-sm text-foreground/70 hover:bg-primary/20 border border-white/20'
                  }`}
                >
                  <IconComponent size={14} />
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Display */}
        {selectedCategory === 'all' ? (
          /* Category Grid View */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="group relative overflow-hidden bg-white/10 backdrop-blur-md border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                  {/* Glassmorphism overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm" />
                  
                  {/* Animated border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[1px] rounded-lg">
                    <div className="w-full h-full bg-white/10 backdrop-blur-md rounded-lg" />
                  </div>

                  <CardContent className="relative p-6 z-10">
                    {/* Category Header */}
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`${category.color} h-6 w-6`} />
                    </div>
                    
                    <h3 className="text-lg font-bold text-secondary mb-4 group-hover:text-primary transition-colors duration-300">
                      {category.title}
                    </h3>
                    
                    {/* Skills in Category */}
                    <div className="space-y-3">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="space-y-1">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-foreground/80">{skill.name}</span>
                          </div>
                          <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
                              style={{ 
                                width: animatedSkills ? `${skill.level}%` : '0%',
                                transitionDelay: `${skillIndex * 100}ms`
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        ) : (
          /* Filtered Skills View */
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredSkills.map((skill, index) => (
                <Card key={index} className="group relative overflow-hidden bg-white/10 backdrop-blur-md border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm" />
                  
                  <CardContent className="relative p-6 z-10">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors duration-300">
                        {skill.name}
                      </h3>
                    </div>
                    
                    {/* Large Skill Bar */}
                    <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary via-primary/80 to-secondary rounded-full transition-all duration-1000 ease-out relative"
                        style={{ 
                          width: animatedSkills ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 150}ms`
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                      </div>
                    </div>
                    
                    {/* Skill Level Indicator */}
                    <div className="mt-3 text-sm text-foreground/60">
                      {skill.level >= 85 ? 'Expert' : skill.level >= 75 ? 'Advanced' : skill.level >= 65 ? 'Intermediate' : 'Beginner'}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Skills Summary */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{allSkills.length}+</div>
                <div className="text-sm text-foreground/60">Technical Skills</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{skillCategories.length}</div>
                <div className="text-sm text-foreground/60">Skill Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  {Math.round(allSkills.reduce((acc, skill) => acc + skill.level, 0) / allSkills.length)}%
                </div>
                <div className="text-sm text-foreground/60">Average Proficiency</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
