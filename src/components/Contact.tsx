import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  ArrowUpRight,
} from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/rose-atieno-odhiambo-5038b420a",
      description: "Connect with me professionally",
      color: "text-blue-600",
      bgColor: "bg-gradient-to-br from-blue-500/20 to-blue-600/30",
      hoverColor: "hover:from-blue-500/30 hover:to-blue-600/40",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/Rose1845",
      description: "Check out my code repositories",
      color: "text-gray-800",
      bgColor: "bg-gradient-to-br from-gray-700/20 to-gray-800/30",
      hoverColor: "hover:from-gray-700/30 hover:to-gray-800/40",
    },
    {
      name: "X (Twitter)",
      icon: Twitter,
      url: "https://x.com/@nyaugenya001",
      description: "Follow me for tech insights",
      color: "text-black",
      bgColor: "bg-gradient-to-br from-gray-800/20 to-black/30",
      hoverColor: "hover:from-gray-800/30 hover:to-black/40",
    },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">Connect With Me</h2>
          <p className="text-foreground/80 max-w-2xl mx-auto mb-12">
            Let's connect and collaborate! You can find me on these platforms
            where I share my work, insights, and connect with the tech
            community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-0 bg-white/10 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer"
              >
                {/* Glassmorphism overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm" />

                {/* Animated border */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[1px] rounded-lg">
                  <div className="w-full h-full bg-white/10 backdrop-blur-md rounded-lg" />
                </div>

                <CardContent className="relative p-8 text-center z-10">
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {/* Icon container with glassmorphism */}
                    <div
                      className={`${social.bgColor} ${social.hoverColor} w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500 backdrop-blur-sm border border-white/20 shadow-lg`}
                    >
                      <IconComponent
                        className={`${social.color} h-12 w-12 group-hover:scale-110 transition-transform duration-300`}
                      />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors duration-300">
                      {social.name}
                    </h3>
                    <p className="text-foreground/70 text-sm mb-4 leading-relaxed">
                      {social.description}
                    </p>

                    {/* Hover indicator */}
                    <div className="flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="text-xs text-primary font-medium mr-1">
                        Visit Profile
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </div>
                  </a>

                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Contact information section */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
            <p className="text-foreground/60 mb-6 text-lg">
              Or reach out directly:
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="mailto:odhiamborose466@gmail.com"
                className="group flex items-center gap-3 text-primary hover:text-primary/80 transition-all duration-300 font-medium text-lg hover:scale-105"
              >
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                odhiamborose466@gmail.com
              </a>
              <span className="hidden sm:block text-foreground/40 text-2xl">
                •
              </span>
              <a
                href="tel:+254757764865"
                className="group flex items-center gap-3 text-primary hover:text-primary/80 transition-all duration-300 font-medium text-lg hover:scale-105"
              >
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                +254 757 764 865
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
