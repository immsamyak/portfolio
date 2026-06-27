import Button from '../components/Button';
import FadeIn from '../components/ui/FadeIn';

const Services = () => {
  const services = [
    { title: 'Mobile App Development', price: '$300 - $800', delivery: '2-4 weeks', description: 'Cross-platform mobile apps using Flutter. Ride-booking, social platforms, e-learning systems.', tools: 'Flutter, Dart, Firebase, GetX' },
    { title: 'Full-Stack Web Development', price: '$400 - $1200', delivery: '2-6 weeks', description: 'Complete web applications using MERN stack or Laravel. E-commerce, SaaS, business systems.', tools: 'Laravel, MERN, Vue.js, MySQL, MongoDB' },
    { title: 'SaaS Development', price: '$800 - $2000', delivery: '4-8 weeks', description: 'Software as a Service platforms with subscription models and multi-tenant architecture.', tools: 'Laravel, Vue.js, MySQL, Stripe, WebSockets' },
    { title: 'E-Learning Platforms', price: '$600 - $1500', delivery: '3-6 weeks', description: 'Learning Management Systems with course creation, instructor monetization, and mobile apps.', tools: 'Flutter, Laravel, Firebase, Payment Gateways' },
    { title: 'Presentation Design', price: '$15 - $50', delivery: '1-3 days', description: 'Professional business and academic presentations with modern layouts and branding.', tools: 'PowerPoint, Figma, Canva' },
    { title: 'Server & DevOps Setup', price: '$100 - $300', delivery: '1-2 weeks', description: 'Server configuration, SSL setup, domain management, and deployment automation.', tools: 'Ubuntu, Apache, cPanel, Cloudflare, SSL' },
  ];

  const process = [
    { num: '01', title: 'Discovery & Planning', description: 'Analyze requirements, define tech stack, create project roadmap.' },
    { num: '02', title: 'Development & Testing', description: 'Build with modern frameworks, regular updates, thorough testing.' },
    { num: '03', title: 'Deployment & Support', description: 'Go live with server setup, SSL, and ongoing maintenance.' },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 px-6 relative">
        <div className="max-w-[1200px] mx-auto relative z-10">
          <FadeIn>
            <h1 className="text-display font-semibold text-frosted-canvas mb-6 leading-[0.9]">Services<span className="text-shocking-green">.</span></h1>
            <p className="text-subheading text-faded-steel max-w-2xl mb-10">3+ years experience in full-stack development, mobile apps, SaaS platforms, and creative services.</p>
            <div className="flex gap-4">
              <a href="https://www.upwork.com/freelancers/~017010af70d435bc3f" target="_blank" rel="noopener noreferrer" className="text-body-sm font-medium text-absolute-zero bg-frosted-canvas border border-frosted-canvas rounded-pill px-8 py-3 hover:shadow-[0_0_20px_rgba(255,252,225,0.3)] transition-all duration-300 active:scale-95">Upwork</a>
              <a href="https://www.fiverr.com/alvysamy/" target="_blank" rel="noopener noreferrer" className="text-body-sm font-medium text-frosted-canvas border border-frosted-canvas/30 rounded-pill px-8 py-3 hover:bg-frosted-canvas hover:text-absolute-zero transition-all duration-300 active:scale-95">Fiverr</a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 px-6 border-t border-deep-graphite/40 bg-absolute-zero/30">
        <div className="max-w-[1200px] mx-auto">
          <FadeIn>
            <h2 className="text-heading-lg font-semibold text-frosted-canvas mb-16">What I Offer</h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <FadeIn key={s.title} delay={(i % 3) * 0.1}>
                <div className="h-full p-8 rounded-card border border-deep-graphite/40 bg-absolute-zero/50 backdrop-blur-md hover:bg-absolute-zero hover:border-shocking-green/30 transition-all duration-300 group flex flex-col">
                  <h3 className="text-heading-sm font-semibold text-frosted-canvas mb-4 group-hover:translate-x-1 transition-transform">{s.title}</h3>
                  <p className="text-body text-faded-steel mb-8 flex-grow">{s.description}</p>
                  <div className="pt-6 border-t border-deep-graphite/40 space-y-3 mt-auto">
                    <div className="flex justify-between items-center">
                      <span className="text-caption text-faded-steel uppercase tracking-wide">Investment</span>
                      <span className="text-caption text-frosted-canvas font-medium">{s.price}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-caption text-faded-steel uppercase tracking-wide">Timeline</span>
                      <span className="text-caption text-frosted-canvas font-medium">{s.delivery}</span>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-caption text-faded-steel uppercase tracking-wide">Tech</span>
                      <span className="text-caption text-shocking-green font-mono">{s.tools.split(',')[0]}</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-32 px-6 border-t border-deep-graphite/40">
        <div className="max-w-[1200px] mx-auto">
          <FadeIn>
            <h2 className="text-heading-lg font-semibold text-frosted-canvas mb-16">How It Works</h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {process.map((p, i) => (
              <FadeIn key={p.num} delay={i * 0.15}>
                <div className="p-10 border border-deep-graphite/40 bg-absolute-zero rounded-card h-full">
                  <span className="text-heading font-semibold text-shocking-green opacity-20">{p.num}</span>
                  <h3 className="text-heading-sm font-semibold text-frosted-canvas mt-8 mb-4">{p.title}</h3>
                  <p className="text-body text-faded-steel">{p.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 border-t border-deep-graphite/40 bg-absolute-zero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-shocking-green/5 via-absolute-zero to-absolute-zero pointer-events-none" />
        <FadeIn>
          <div className="max-w-[600px] mx-auto text-center relative z-10">
            <h2 className="text-heading-lg font-semibold text-frosted-canvas mb-6 leading-tight">Ready to get started?</h2>
            <p className="text-body text-faded-steel mb-12">Let's discuss your project and bring your vision to life.</p>
            <Button to="/contact">Start your project</Button>
          </div>
        </FadeIn>
      </section>
    </div>
  );
};

export default Services;
