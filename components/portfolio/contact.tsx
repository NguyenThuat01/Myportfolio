"use client";

import React from "react"

import { useState } from "react";
import { Mail, Send, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-medium text-primary uppercase tracking-wide mb-4">
          Contact
        </h2>
        <p className="text-2xl md:text-3xl font-medium text-foreground mb-4 text-balance">
          If you would like to discuss a project or just say hi, I'm always down
          to chat.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Name
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="bg-card/50 backdrop-blur-sm border-border/50"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="bg-card/50 backdrop-blur-sm border-border/50"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Your message..."
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                className="bg-card/50 backdrop-blur-sm border-border/50 resize-none"
              />
            </div>
            <Button type="submit" className="w-full sm:w-auto">
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </Button>
          </form>
          <div className="space-y-8">
            <div>
              <h3 className="text-foreground font-semibold mb-4">
                Get in Touch
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:thuatnn0916@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  thuatnn0916@gmail.com
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-foreground font-semibold mb-4">
                Social Links
              </h3>
              <div className="flex items-center gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6">
              <p className="text-muted-foreground text-sm leading-relaxed">
                I'm currently open to new opportunities, including internships
                and full-time positions. Feel free to reach out if you think we
                could work together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
