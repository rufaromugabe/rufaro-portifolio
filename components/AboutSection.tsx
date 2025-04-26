"use client";

import { motion } from "framer-motion";
import { Award, Calendar, Briefcase, GraduationCap, Mail, Phone, MapPin } from "lucide-react";
import { experience } from "@/lib/data";

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Software Engineering student at Harare Institute of Technology, specializing in 
            mobile and web development with a focus on AI integration.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">My Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a passionate Software Engineering student at Harare Institute of Technology, 
                dedicated to building intuitive, high-impact applications that solve real-world problems.
              </p>
              <p>
                My expertise spans mobile development with Flutter & Dart, web development using 
                Next.js & React, and AI integration leveraging Google's Gemini models and other 
                cutting-edge technologies.
              </p>
              <p>
                As a co-founder of afrAInity Technologies, I lead AI-driven R&D initiatives and 
                ensure successful product delivery through iterative development and strong 
                client collaboration.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:rufarorevmugabe@gmail.com" className="text-muted-foreground hover:text-primary">
                  rufarorevmugabe@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+263779826816" className="text-muted-foreground hover:text-primary">
                  +263 77 982 6816
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">Harare, Zimbabwe</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">Experience</h3>
            <div className="space-y-6">
              {experience.map((item, index) => (
                <div 
                  key={index}
                  className="relative pl-8 border-l border-border pb-6 last:pb-0"
                >
                  <div className="absolute -left-[13px] top-0 bg-background p-1 border border-border rounded-full">
                    {item.type === 'work' ? (
                      <Briefcase className="h-5 w-5 text-primary" />
                    ) : (
                      <GraduationCap className="h-5 w-5 text-primary" />
                    )}
                  </div>
                  <div className="flex items-center gap-2 mb-1 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{item.period}</span>
                  </div>
                  <h4 className="text-lg font-medium">{item.title}</h4>
                  <p className="text-muted-foreground">{item.organization}</p>
                  <p className="mt-2 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold mb-6">Interests & Extras</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card rounded-xl p-6 border border-border/50 hover:border-primary/20 transition-all">
              <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-lg font-medium mb-2">Sports & Activities</h4>
              <p className="text-muted-foreground text-sm">
                Volleyball player, chess enthusiast, and adventure seeker
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-6 border border-border/50 hover:border-primary/20 transition-all">
              <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-lg font-medium mb-2">Languages</h4>
              <p className="text-muted-foreground text-sm">
                Fluent in English and Shona
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-6 border border-border/50 hover:border-primary/20 transition-all">
              <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-lg font-medium mb-2">Fav Quote</h4>
              <p className="text-muted-foreground text-sm">
                Be nice for no reason!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}