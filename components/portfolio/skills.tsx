const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "VS Code", "Figma", "Vercel", "GitHub"],
  },
  {
    category: "Backend Basics",
    items: ["Node.js", "REST APIs", "PostgreSQL", "MongoDB", "Prisma"],
  },
  {
    category: "Soft Skills",
    items: ["Problem Solving", "Team Collaboration", "Communication", "Adaptability", "Quick Learner"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-medium text-primary uppercase tracking-wide mb-12">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 shadow-sm"
            >
              <h3 className="text-foreground font-semibold mb-4">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm rounded-lg border border-border/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
