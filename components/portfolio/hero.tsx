"use client";

import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6">
          <p className="text-primary font-medium tracking-wide uppercase text-sm">
            Hello, I'm
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight text-balance">
            Thuat Nguyen
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">
            Web Developer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            I build accessible, pixel-perfect digital experiences for the web.
            Passionate about clean code, modern technologies, and creating
            interfaces that users love.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button asChild>
              <a href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Get in Touch
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#projects">
                <FileText className="mr-2 h-4 w-4" />
                View Projects
              </a>
            </Button>
          </div>
          <div className="flex items-center gap-4 pt-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:alex@example.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
