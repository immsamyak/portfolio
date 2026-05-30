import Button from '../components/Button';

const Home = () => {
  const stats = [
    { num: '15+', label: 'Projects Delivered' },
    { num: '3+', label: 'Years Experience' },
    { num: '50+', label: 'Happy Clients' },
    { num: '5.0', label: 'Average Rating' },
  ];

  const techStack = ['Flutter', 'Laravel', 'React', 'Firebase', 'Node.js', 'MySQL', 'Vue.js', 'MERN Stack'];

  const services = [
    { title: 'Mobile App Development', description: 'Cross-platform apps with Flutter for iOS and Android', accent: 'border-neon-pink' },
    { title: 'SaaS Development', description: 'Scalable software solutions with subscription models', accent: 'border-fiery-orange' },
    { title: 'Full-Stack Development', description: 'Complete web applications with modern frameworks', accent: 'border-digital-violet' },
  ];

  const projects = [
    { title: 'Khari Ride', description: 'Complete taxi ecosystem with real-time tracking and payment integration.', tools: 'Flutter / Firebase / Dart / Google Maps', category: 'Mobile App', accent: 'text-shocking-green' },
    { title: 'PubFlow SaaS', description: 'Enterprise financial management with POS integration and multi-tenant architecture.', tools: 'Laravel / Vue.js / MySQL / WebSockets', category: 'SaaS Platform', accent: 'text-fiery-orange' },
    { title: 'Mero Learning LMS', description: 'E-learning ecosystem with course marketplace and instructor monetization.', tools: 'Flutter / Laravel / Firebase / Stripe', category: 'EdTech', accent: 'text-neon-pink' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-shocking-green/5 rounded-full blur-[150px]" />
        <h1 className="text-display font-semibold text-frosted-canvas relative">
          Samyak
        </h1>
        <p className="text-heading-sm font-semibold text-frosted-canvas mt-4 mb-6 relative">
          Full-Stack Developer
        </p>
        <p className="text-body text-faded-steel max-w-xl mb-10 relative">
          Building cross-platform mobile apps, enterprise SaaS, and modern web systems with 3+ years of expertise.
        </p>
        <div className="flex gap-4 flex-wrap justify-center relative">
          <Button to="/contact">Start a project</Button>
          <Button to="/projects" variant="text">View work</Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-20 w-full max-w-[800px] relative">
          {stats.map((s) => (
            <div key={s.label} className="text-center py-6 border border-deep-graphite rounded-card">
              <div className="text-heading-sm font-semibold text-frosted-canvas">{s.num}</div>
              <div className="text-caption text-faded-steel mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-6">
        <div className="max-w-[1200px] mx-auto text-center">
          <p className="text-caption text-faded-steel mb-8">Technologies I work with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((t) => (
              <span key={t} className="text-caption text-frosted-canvas border border-deep-graphite rounded-pill px-5 py-2">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-heading font-semibold text-frosted-canvas mb-4">What I Build</h2>
          <p className="text-body text-faded-steel mb-12 max-w-xl">From concept to deployment, comprehensive digital solutions.</p>
          <div className="grid md:grid-cols-3 gap-4">
            {services.map((s) => (
              <div key={s.title} className={`p-4 rounded-card border-2 ${s.accent} bg-absolute-zero`}>
                <h3 className="text-subheading font-semibold text-frosted-canvas mb-2">{s.title}</h3>
                <p className="text-body-sm text-faded-steel">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-heading font-semibold text-frosted-canvas mb-4">Featured Projects</h2>
          <p className="text-body text-faded-steel mb-12">Real-world applications serving thousands of users.</p>
          <div className="grid md:grid-cols-3 gap-4">
            {projects.map((p) => (
              <div key={p.title} className="p-4 rounded-card border border-deep-graphite">
                <span className={`text-caption ${p.accent} uppercase tracking-wide`}>{p.category}</span>
                <h3 className="text-subheading font-semibold text-frosted-canvas mt-3 mb-2">{p.title}</h3>
                <p className="text-body-sm text-faded-steel mb-4">{p.description}</p>
                <p className="text-caption text-faded-steel">{p.tools}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button to="/projects">View all projects</Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-deep-graphite">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="text-heading font-semibold text-frosted-canvas mb-4">Ready to build something?</h2>
          <p className="text-body text-faded-steel mb-10">Let's turn your ideas into powerful digital solutions.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button to="/contact">Start a conversation</Button>
            <Button to="/services" variant="text">View services</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
