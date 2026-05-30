const projects = [
  { name: 'Khari Ride', category: 'Mobile App', description: 'Taxi ecosystem with real-time tracking and payment integration.', tech: 'Flutter / Firebase / Dart', accent: 'text-shocking-green' },
  { name: 'PubFlow', category: 'SaaS', description: 'Financial management with POS integration and real-time analytics.', tech: 'Laravel / Vue.js / MySQL', accent: 'text-fiery-orange' },
  { name: 'Mero Learning LMS', category: 'EdTech', description: 'E-learning ecosystem with course marketplace and instructor monetization.', tech: 'Flutter / Laravel / Firebase', accent: 'text-neon-pink' },
];

const ProjectShowcase = () => (
  <section className="py-20 px-6">
    <div className="max-w-[1200px] mx-auto">
      <h2 className="text-heading font-semibold text-frosted-canvas mb-12">Selected Projects</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {projects.map((p) => (
          <div key={p.name} className="p-4 rounded-card border border-deep-graphite">
            <span className={`text-caption ${p.accent} uppercase tracking-wide`}>{p.category}</span>
            <h3 className="text-subheading font-semibold text-frosted-canvas mt-3 mb-2">{p.name}</h3>
            <p className="text-body-sm text-faded-steel mb-4">{p.description}</p>
            <p className="text-caption text-faded-steel">{p.tech}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectShowcase;
