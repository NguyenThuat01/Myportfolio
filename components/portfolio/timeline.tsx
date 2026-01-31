const experiences = [
  
  {
    type: "education",
    title: "B.Sc. Computer Science",
    organization: "FPT University",
    period: "2020 — 2025",
    description:
      "Studying computer science fundamentals, data structures, algorithms, and software engineering principles. Active member of the coding club.",
    skills: ["Java", "React JS", "Data Structures", "Algorithms"],
  },
 
];

export function Timeline() {
  return (
    <section id="experience" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-medium text-primary uppercase tracking-wide mb-12">
          Experience & Education
        </h2>
        <div className="space-y-8">
          {experiences.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className="relative pl-8 border-l-2 border-border hover:border-primary/50 transition-colors"
            >
              <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary/20 border-2 border-primary" />
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <h3 className="text-foreground font-semibold">{item.title}</h3>
                  <span className="text-muted-foreground text-sm">
                    {item.period}
                  </span>
                </div>
                <p className="text-primary text-sm font-medium mb-3">
                  {item.organization}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
