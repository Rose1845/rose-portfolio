
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">About Me</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-12">
          <div className="relative">
            <div className="w-full aspect-[4/5] rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop" 
                alt="Rose Atieno Odhiambo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 md:w-32 md:h-32 bg-primary/10 rounded-lg"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 md:w-32 md:h-32 bg-secondary/10 rounded-lg"></div>
          </div>
          <div>
            <h3 className="section-subtitle">Passionate Software Engineer</h3>
            <p className="text-foreground/80 mb-6">
              Hello! I'm Rose Atieno Odhiambo, a Software Engineer with expertise in both frontend and backend development. I specialize in building robust applications using Spring Boot, React, Angular, and various cloud technologies. With a background in computer science from Egerton University, I'm equipped with the knowledge and skills to tackle complex technical challenges.
            </p>
            <p className="text-foreground/80 mb-6">
              My experience spans across various domains, from financial systems at E & M Technology House to real estate solutions at YOUR NEXT HOME ENTERPRISES. I pride myself on being a quick learner who adapts to new technologies and environments while maintaining a strong focus on delivering high-quality software.
            </p>
            <p className="text-foreground/80 mb-8">
              I'm passionate about creating clean, efficient code and user-friendly interfaces. When I'm not coding, you can find me mentoring junior developers, exploring new technologies, or participating in tech communities to expand my knowledge and network.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <span className="text-primary font-bold text-lg">3+</span>
                <span className="text-muted-foreground text-sm">Years of Experience</span>
              </div>
              <div className="flex flex-col">
                <span className="text-primary font-bold text-lg">10+</span>
                <span className="text-muted-foreground text-sm">Projects Completed</span>
              </div>
              <div className="flex flex-col">
                <span className="text-primary font-bold text-lg">5+</span>
                <span className="text-muted-foreground text-sm">Happy Clients</span>
              </div>
              <div className="flex flex-col">
                <span className="text-primary font-bold text-lg">4+</span>
                <span className="text-muted-foreground text-sm">Technologies Mastered</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
