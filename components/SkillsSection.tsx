"use client";

import { motion } from "framer-motion";
import { 
  Code, Database, Server, Brain, 
  Cloud, Globe, Cog, LineChart,
  Smartphone
} from "lucide-react";
import { skills } from "@/lib/data";

// Map language names to their corresponding devicon names
const languageIconMap: { [key: string]: string } = {
  "Next.js": "nextjs",
  "SQL": "azuresqldatabase",
  "HTML/CSS": "html5",
  "C++": "cplusplus",
  "JavaScript": "javascript",
  "TypeScript": "typescript",
  "Python": "python",
  "Dart": "dart",
  "Flutter": "flutter",
  "n8n": "n8n",
  "Bash": "bash",
  "Java": "java",
  "GraphQL": "graphql"
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and skills I've mastered throughout my career.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillCard 
            title="AI & Machine Learning"
            icon={<Brain className="h-8 w-8 text-chart-1" />}
            skills={skills?.aiml || []}
            delay={0}
          />
          <SkillCard 
            title="Web Development"
            icon={<Globe className="h-8 w-8 text-chart-2" />}
            skills={skills?.web || []}
            delay={0.1}
          />
          <SkillCard 
            title="Infrastructure"
            icon={<Server className="h-8 w-8 text-chart-3" />}
            skills={skills?.infrastructure || []}
            delay={0.2}
          />
          <SkillCard 
            title="Cloud & DevOps"
            icon={<Cloud className="h-8 w-8 text-chart-4" />}
            skills={skills?.cloud || []}
            delay={0.3}
          />
          <SkillCard 
            title="Mobile Development"
            icon={<Smartphone className="h-8 w-8 text-chart-5" />}
            skills={skills?.mobile || []}
            delay={0.4}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-xl font-semibold text-center mb-8">Languages & Technologies</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {(skills?.languages || []).map((skill, index) => (
              <div 
                key={skill}
                className="bg-card rounded-lg p-4 text-center border border-border/50 hover:border-primary/20 transition-all"
              >
                <img
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${languageIconMap[skill] || skill.toLowerCase()}/${languageIconMap[skill] || skill.toLowerCase()}-original.svg`}
                  alt={skill}
                  className="w-8 h-8 mx-auto mb-2"
                  onError={(e) => {
                    e.currentTarget.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${languageIconMap[skill] || skill.toLowerCase()}/${languageIconMap[skill] || skill.toLowerCase()}-plain.svg`;
                  }}
                />
                <span className="text-sm font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface SkillCardProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  delay: number;
}

function SkillCard({ title, icon, skills, delay }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-card rounded-xl p-6 border border-border/50 hover:border-primary/20 transition-all"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="rounded-full p-2 bg-muted">
          {icon}
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <ul className="space-y-2">
        {skills.map((skill) => (
          <li key={skill} className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span className="text-muted-foreground">{skill}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}