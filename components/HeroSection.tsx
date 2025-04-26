"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDownCircle, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-10">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-primary font-medium mb-2">Hello, I'm</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Rufaro Mugabe
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-6">
            Software Engineering student at HIT, specializing in mobile and web development 
            with a passion for AI integration.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <Button size="lg" asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
          <div className="flex gap-6">
            <a
              href="https://github.com/rufaromugabe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/rufaromugabe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com/rufaromugabe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hidden md:block relative"
        >
          <div className="absolute -top-16 -left-16 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-8 -right-8 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Rufaro Mugabe"
              className="w-full h-[600px] object-cover object-center rounded-2xl"
              style={{
                WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
                maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-background/60 to-background rounded-2xl"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <pre className="text-sm"><code><span className="text-blue-400">class</span> <span className="text-green-400">Developer</span> {`{
  `}<span className="text-yellow-400">constructor</span>() {`{
    `}<span className="text-purple-400">this</span>.<span className="text-blue-400">name</span> = <span className="text-orange-400">"Rufaro Mugabe"</span>;
    <span className="text-purple-400">this</span>.<span className="text-blue-400">education</span> = <span className="text-orange-400">"BTech Software Engineering @ HIT"</span>;
    <span className="text-purple-400">this</span>.<span className="text-blue-400">skills</span> = [
      <span className="text-orange-400">"Flutter & Dart"</span>,
      <span className="text-orange-400">"Next.js & React"</span>,
      <span className="text-orange-400">"Google Gemini AI"</span>,
      <span className="text-orange-400">"Firebase & FastAPI"</span>
    ];
  

  <span className="text-yellow-400">buildSolution</span>(<span className="text-blue-400">challenge</span>) {`{
    `}<span className="text-purple-400">return</span> <span className="text-purple-400">this</span>.<span className="text-blue-400">skills</span>
      .<span className="text-yellow-400">combine</span>(<span className="text-blue-400">innovation</span>)
      .<span className="text-yellow-400">with</span>(<span className="text-blue-400">passion</span>)
      .<span className="text-yellow-400">create</span>(<span className="text-orange-400">"impactful solutions"</span>);


<span className="text-purple-400">export</span> <span className="text-purple-400">default</span> <span className="text-purple-400">new</span> <span className="text-green-400">Developer</span>();</code></pre>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDownCircle className="h-8 w-8 text-primary/70" />
      </div>
    </section>
  );
}