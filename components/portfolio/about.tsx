export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-medium text-primary uppercase tracking-wide mb-8">
          About
        </h2>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p className="text-lg">
            I'm a developer passionate about crafting accessible, pixel-perfect user
            interfaces that blend thoughtful design with robust engineering. My
            favorite work lies at the intersection of design and development,
            creating experiences that not only look great but are meticulously
            built for performance and usability.
          </p>
          <p className="text-lg">
            Currently, I'm focused on building responsive web applications using{" "}
            <span className="text-foreground font-medium">React</span>,{" "}
            <span className="text-foreground font-medium">TypeScript</span>, and{" "}
            <span className="text-foreground font-medium">Next.js</span>. I
            specialize in creating component libraries, implementing design
            systems, and ensuring web accessibility standards are met.
          </p>
          <p className="text-lg">
            When I'm not coding, you'll find me exploring new technologies,
            contributing to open-source projects, or writing technical articles
            to share knowledge with the developer community.
          </p>
        </div>
      </div>
    </section>
  );
}
