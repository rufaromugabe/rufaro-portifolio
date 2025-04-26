"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Lock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projects } from "@/lib/data";

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my technical projects across mobile apps, web applications, 
            AI integrations, and more.
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="w-full mb-12">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger 
                value="all" 
                onClick={() => setActiveCategory("all")}
              >
                All
              </TabsTrigger>
              <TabsTrigger 
                value="mobile" 
                onClick={() => setActiveCategory("mobile")}
              >
                Mobile Apps
              </TabsTrigger>
              <TabsTrigger 
                value="web" 
                onClick={() => setActiveCategory("web")}
              >
                Web Apps
              </TabsTrigger>
              <TabsTrigger 
                value="aiml" 
                onClick={() => setActiveCategory("aiml")}
              >
                AI/ML
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="mobile" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="web" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="aiml" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: any;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-card rounded-xl overflow-hidden border border-border/50 transition-all duration-300 hover:shadow-lg hover:border-primary/20 group"
    >
      <div className="h-48 bg-muted relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background/5"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-4xl font-bold text-primary/30">{project.title.charAt(0)}</div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex gap-2 mb-3">
          {project.tech.map((tech: string) => (
            <Badge key={tech} variant="secondary">{tech}</Badge>
          ))}
        </div>
        <div className="flex items-center gap-2 mb-2">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          {project.private && (
            <Lock className="h-4 w-4 text-muted-foreground" />
          )}
        </div>
        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
        <div className="flex gap-4">
          {project.github && (
            <Button variant="outline" size="sm" asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                Code
              </a>
            </Button>
          )}
          {project.demo && (
            <Button size="sm" asChild>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}