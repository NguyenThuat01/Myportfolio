import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Dashboard",
    description:
      "A responsive admin dashboard for managing products, orders, and analytics. Built with React, TypeScript, and Tailwind CSS.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team workspaces.",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Socket.io"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Weather Application",
    description:
      "A clean weather app featuring location-based forecasts, interactive maps, and beautiful weather visualizations.",
    tags: ["React", "OpenWeather API", "Mapbox", "CSS Modules"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Portfolio Template",
    description:
      "A customizable portfolio template for developers with dark mode support, smooth animations, and excellent performance.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "MDX"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-medium text-primary uppercase tracking-wide mb-12">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300"
            >
              <h3 className="text-foreground font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <Button variant="ghost" size="sm" asChild className="h-8 px-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="h-4 w-4 mr-1.5" />
                    Code
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild className="h-8 px-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} live demo`}
                  >
                    <ExternalLink className="h-4 w-4 mr-1.5" />
                    Live
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
