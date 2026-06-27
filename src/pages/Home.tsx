import Button from '../components/Button';
import FadeIn from '../components/ui/FadeIn';

const Home = () => {
  const stats = [
    { num: '15+', label: 'Projects Delivered' },
    { num: '3+', label: 'Years Experience' },
    { num: '50+', label: 'Happy Clients' },
    { num: '5.0', label: 'Average Rating' },
  ];

  const techStack = ['Flutter', 'Laravel', 'React', 'Firebase', 'Node.js', 'MySQL', 'Vue.js', 'MERN Stack'];

  const services = [
    { title: 'Mobile App Development', description: 'Cross-platform apps with Flutter for iOS and Android, focusing on performance and native feel.' },
    { title: 'SaaS Development', description: 'Scalable software solutions with robust subscription models and multi-tenant architectures.' },
    { title: 'Full-Stack Development', description: 'Complete, modern web applications built from scratch to handle heavy traffic.' },
  ];

  const projects = [
    { title: 'Khari Ride', description: 'Complete taxi ecosystem with real-time tracking and payment integration.', tools: 'Flutter / Firebase / Dart', category: 'Mobile App' },
    { title: 'PubFlow SaaS', description: 'Enterprise financial management with POS integration and multi-tenant architecture.', tools: 'Laravel / Vue.js / MySQL', category: 'SaaS Platform' },
    { title: 'Mero Learning LMS', description: 'E-learning ecosystem with course marketplace and instructor monetization.', tools: 'Flutter / Laravel / Stripe', category: 'EdTech' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="min-h-[100dvh] flex items-center px-6 relative overflow-hidden pt-32 pb-16">
        <div className="absolute top-1/4 right-0 w-[800px] h-[600px] bg-shocking-green/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-[1200px] mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <FadeIn delay={0.1}>
              <h1 className="text-display font-semibold text-frosted-canvas leading-[0.9]">
                Samyak<span className="text-shocking-green">.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-heading-sm font-semibold text-frosted-canvas mt-6 mb-6">
                Full-Stack Developer
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-body text-faded-steel max-w-md mb-10">
                Building cross-platform mobile apps, enterprise SaaS, and modern web systems with rigorous engineering standards.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="flex gap-4 flex-wrap">
                <Button to="/contact">Start a project</Button>
                <Button to="/projects" variant="text">View work</Button>
              </div>
            </FadeIn>
          </div>
          <div className="hidden md:grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <FadeIn key={s.label} delay={0.3 + (i * 0.1)} direction="left">
                <div className="p-8 border border-deep-graphite/40 bg-absolute-zero/40 backdrop-blur-md rounded-card hover:border-shocking-green/30 transition-colors">
                  <div className="text-heading font-semibold text-frosted-canvas">{s.num}</div>
                  <div className="text-caption text-faded-steel mt-2 uppercase tracking-wide">{s.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-32 px-6 border-t border-deep-graphite/20">
        <FadeIn>
          <div className="max-w-[1200px] mx-auto">
            <p className="text-caption text-faded-steel mb-8 uppercase tracking-wide">Technologies & Tools</p>
            <div className="flex flex-wrap gap-3">
              {techStack.map((t) => (
                <span key={t} className="text-caption text-frosted-canvas border border-deep-graphite/60 rounded-pill px-6 py-3 bg-absolute-zero hover:border-frosted-canvas transition-colors">{t}</span>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Services Preview */}
      <section className="py-32 px-6">
        <div className="max-w-[1200px] mx-auto">
          <FadeIn>
            <h2 className="text-heading-lg font-semibold text-frosted-canvas mb-4">What I Build</h2>
            <p className="text-body text-faded-steel mb-20 max-w-xl">From concept to deployment, comprehensive digital solutions designed for scale.</p>
          </FadeIn>
          <div className="grid md:grid-cols-12 gap-6">
            {services.map((s, i) => (
              <div key={s.title} className={i === 0 ? 'md:col-span-8' : (i === 1 ? 'md:col-span-4' : 'md:col-span-12')}>
                <FadeIn delay={i * 0.15}>
                  <div className="h-full p-10 rounded-card border border-deep-graphite/40 bg-absolute-zero hover:bg-absolute-zero/80 transition-colors relative group overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-shocking-green/20 group-hover:bg-shocking-green transition-colors" />
                    <h3 className="text-heading-sm font-semibold text-frosted-canvas mb-4">{s.title}</h3>
                    <p className="text-body text-faded-steel">{s.description}</p>
                  </div>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-32 px-6">
        <div className="max-w-[1200px] mx-auto">
          <FadeIn>
            <h2 className="text-heading-lg font-semibold text-frosted-canvas mb-4">Featured Work</h2>
            <p className="text-body text-faded-steel mb-20">Real-world applications serving thousands of users.</p>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <div key={p.title} className={i === 0 ? 'md:col-span-2' : 'md:col-span-1'}>
                <FadeIn delay={i * 0.15}>
                  <div className="p-10 rounded-card border border-deep-graphite/40 hover:border-shocking-green/30 transition-colors bg-absolute-zero">
                    <span className="text-caption text-shocking-green uppercase tracking-wide">{p.category}</span>
                    <h3 className="text-heading-sm font-semibold text-frosted-canvas mt-4 mb-4">{p.title}</h3>
                    <p className="text-body text-faded-steel mb-6 max-w-lg">{p.description}</p>
                    <p className="text-caption text-faded-steel font-mono">{p.tools}</p>
                  </div>
                </FadeIn>
              </div>
            ))}
          </div>
          <FadeIn delay={0.4}>
            <div className="mt-20">
              <Button to="/projects">Explore all projects</Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 px-6 border-t border-deep-graphite/40 bg-absolute-zero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-shocking-green/5 via-absolute-zero to-absolute-zero pointer-events-none" />
        <FadeIn>
          <div className="max-w-[800px] mx-auto text-center relative z-10">
            <h2 className="text-display font-semibold text-frosted-canvas mb-8 leading-[0.9]">Ready to build?</h2>
            <p className="text-subheading text-faded-steel mb-12">Let's turn your ideas into powerful digital solutions.</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button to="/contact">Start a conversation</Button>
              <Button to="/services" variant="text">View services</Button>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
};

export default Home;
