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
    { title: 'Mobile App Development', description: 'Cross-platform apps with Flutter for iOS and Android', features: ['Real-time features', 'Push notifications', 'Offline support'] },
    { title: 'SaaS Development', description: 'Scalable software solutions with subscription models', features: ['Multi-tenancy', 'Analytics dashboard', 'API integration'] },
    { title: 'Full-Stack Development', description: 'Complete web applications with modern frameworks', features: ['Responsive design', 'Admin panels', 'Database design'] },
  ];

  const projects = [
    { title: 'Khari Ride', description: 'Complete taxi ecosystem with driver and customer apps, real-time tracking, and payment integration.', tools: ['Flutter', 'Firebase', 'Dart', 'Google Maps'], category: 'Mobile App' },
    { title: 'PubFlow SaaS', description: 'Enterprise financial management platform with POS integration, real-time analytics, and multi-tenant architecture.', tools: ['Laravel', 'Vue.js', 'MySQL', 'WebSockets'], category: 'SaaS Platform' },
    { title: 'Mero Learning LMS', description: 'Full-featured e-learning ecosystem with course marketplace, instructor monetization, and cross-platform access.', tools: ['Flutter', 'Laravel', 'Firebase', 'Stripe'], category: 'EdTech' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-sage/30 rounded-full blur-[120px]" />
        <h1 className="text-[clamp(48px,10vw,100px)] leading-[0.85] tracking-display mb-6">
          Samyak<br />Chaudhary
        </h1>
        <p className="text-lg text-steel max-w-xl mb-10">
          Full-Stack Developer and Technology Specialist building cross-platform mobile apps, enterprise SaaS, and modern web systems.
        </p>
        <div className="flex gap-3 flex-wrap justify-center">
          <Button to="/contact" variant="amber">Start a project</Button>
          <Button to="/projects" variant="ghost">View work</Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mt-16 w-full max-w-[800px]">
          {stats.map((s) => (
            <div key={s.label} className="text-center py-6">
              <div className="text-3xl tracking-heading mb-1">{s.num}</div>
              <div className="font-mono text-xs text-steel">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-section px-6 lg:px-8">
        <div className="max-w-[1080px] mx-auto text-center">
          <p className="font-mono text-xs text-steel mb-6">// technologies</p>
          <div className="flex flex-wrap justify-center gap-2">
            {techStack.map((t) => (
              <span key={t} className="font-mono text-xs px-3 py-1.5 bg-snow border border-mercury">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-section px-6 lg:px-8 bg-snow">
        <div className="max-w-[1080px] mx-auto">
          <p className="font-mono text-xs text-steel mb-2">// services</p>
          <h2 className="text-2xl tracking-heading mb-10">What I Build</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="border-b border-mercury pb-6">
                <h3 className="text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-steel mb-4">{s.description}</p>
                <ul className="space-y-1">
                  {s.features.map((f) => (
                    <li key={f} className="text-xs text-steel flex items-center gap-2">
                      <span className="w-1 h-1 bg-charcoal rounded-full" />{f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-section px-6 lg:px-8">
        <div className="max-w-[1080px] mx-auto">
          <p className="font-mono text-xs text-steel mb-2">// selected work</p>
          <h2 className="text-2xl tracking-heading mb-10">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((p) => (
              <div key={p.title} className="border-b border-mercury pb-6">
                <span className="font-mono text-[11px] text-amber uppercase tracking-wider">{p.category}</span>
                <h3 className="text-xl mt-2 mb-2">{p.title}</h3>
                <p className="text-sm text-steel mb-3">{p.description}</p>
                <p className="font-mono text-[11px] text-steel">{p.tools.join(' / ')}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button to="/projects" variant="primary">View all projects</Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section px-6 lg:px-8 bg-ash text-snow">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="text-2xl tracking-heading mb-4">Ready to build something?</h2>
          <p className="text-steel mb-8">Let's discuss your project and turn ideas into powerful digital solutions.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Button to="/contact" variant="amber">Start a conversation</Button>
            <Button to="/services" variant="ghost">View services</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
