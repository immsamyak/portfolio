import Button from '../components/Button';

const Services = () => {
  const services = [
    { title: 'Mobile App Development', price: '$300 - $800', delivery: '2-4 weeks', description: 'Cross-platform mobile apps using Flutter. Ride-booking, social platforms, e-learning systems.', tools: 'Flutter, Dart, Firebase, GetX', accent: 'border-neon-pink' },
    { title: 'Full-Stack Web Development', price: '$400 - $1200', delivery: '2-6 weeks', description: 'Complete web applications using MERN stack or Laravel. E-commerce, SaaS, business systems.', tools: 'Laravel, MERN, Vue.js, MySQL, MongoDB', accent: 'border-fiery-orange' },
    { title: 'SaaS Development', price: '$800 - $2000', delivery: '4-8 weeks', description: 'Software as a Service platforms with subscription models and multi-tenant architecture.', tools: 'Laravel, Vue.js, MySQL, Stripe, WebSockets', accent: 'border-shocking-green' },
    { title: 'E-Learning Platforms', price: '$600 - $1500', delivery: '3-6 weeks', description: 'Learning Management Systems with course creation, instructor monetization, and mobile apps.', tools: 'Flutter, Laravel, Firebase, Payment Gateways', accent: 'border-digital-violet' },
    { title: 'Presentation Design', price: '$15 - $50', delivery: '1-3 days', description: 'Professional business and academic presentations with modern layouts and branding.', tools: 'PowerPoint, Figma, Canva', accent: 'border-aqua-glow' },
    { title: 'Server & DevOps Setup', price: '$100 - $300', delivery: '1-2 weeks', description: 'Server configuration, SSL setup, domain management, and deployment automation.', tools: 'Ubuntu, Apache, cPanel, Cloudflare, SSL', accent: 'border-mint-burst' },
  ];

  const process = [
    { num: '01', title: 'Discovery & Planning', description: 'Analyze requirements, define tech stack, create project roadmap.', accent: 'text-shocking-green' },
    { num: '02', title: 'Development & Testing', description: 'Build with modern frameworks, regular updates, thorough testing.', accent: 'text-fiery-orange' },
    { num: '03', title: 'Deployment & Support', description: 'Go live with server setup, SSL, and ongoing maintenance.', accent: 'text-digital-violet' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-heading-lg font-semibold text-frosted-canvas mb-4">Services</h1>
          <p className="text-body text-faded-steel max-w-2xl mb-8">3+ years experience in full-stack development, mobile apps, SaaS platforms, and creative services.</p>
          <div className="flex gap-3">
            <a href="https://www.upwork.com/freelancers/~017010af70d435bc3f" target="_blank" rel="noopener noreferrer" className="text-caption text-frosted-canvas border border-frosted-canvas rounded-pill px-5 py-2 hover:bg-frosted-canvas hover:text-absolute-zero transition-colors">Upwork</a>
            <a href="https://www.fiverr.com/alvysamy/" target="_blank" rel="noopener noreferrer" className="text-caption text-frosted-canvas border border-frosted-canvas rounded-pill px-5 py-2 hover:bg-frosted-canvas hover:text-absolute-zero transition-colors">Fiverr</a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6 border-t border-deep-graphite">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => (
            <div key={s.title} className={`p-4 rounded-card border-2 ${s.accent} bg-absolute-zero`}>
              <h3 className="text-subheading font-semibold text-frosted-canvas mb-2">{s.title}</h3>
              <p className="text-body-sm text-faded-steel mb-4">{s.description}</p>
              <p className="text-caption text-frosted-canvas mb-1">{s.price} / {s.delivery}</p>
              <p className="text-caption text-faded-steel">{s.tools}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-6 border-t border-deep-graphite">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-heading font-semibold text-frosted-canvas mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {process.map((p) => (
              <div key={p.num} className="p-4 border border-deep-graphite rounded-card">
                <span className={`text-heading-lg font-semibold ${p.accent} opacity-40`}>{p.num}</span>
                <h3 className="text-subheading font-semibold text-frosted-canvas mt-4 mb-2">{p.title}</h3>
                <p className="text-body-sm text-faded-steel">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-deep-graphite">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="text-heading font-semibold text-frosted-canvas mb-4">Ready to get started?</h2>
          <p className="text-body text-faded-steel mb-10">Let's discuss your project and bring your vision to life.</p>
          <Button to="/contact">Start your project</Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
