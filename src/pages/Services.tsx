import Button from '../components/Button';

const Services = () => {
  const services = [
    { title: 'Mobile App Development', price: '$300 - $800', delivery: '2-4 weeks', description: 'Cross-platform mobile apps using Flutter. From ride-booking apps to social platforms and e-learning systems.', tools: 'Flutter, Dart, Firebase, GetX' },
    { title: 'Full-Stack Web Development', price: '$400 - $1200', delivery: '2-6 weeks', description: 'Complete web applications using MERN stack or Laravel. E-commerce, SaaS platforms, and business management systems.', tools: 'Laravel, MERN, Vue.js, MySQL, MongoDB' },
    { title: 'SaaS Development', price: '$800 - $2000', delivery: '4-8 weeks', description: 'Software as a Service platforms with subscription models, real-time insights, and multi-tenant architecture.', tools: 'Laravel, Vue.js, MySQL, Stripe, WebSockets' },
    { title: 'E-Learning Platforms', price: '$600 - $1500', delivery: '3-6 weeks', description: 'Learning Management Systems with course creation, instructor monetization, and mobile apps.', tools: 'Flutter, Laravel, Firebase, Payment Gateways' },
    { title: 'Presentation Design', price: '$15 - $50', delivery: '1-3 days', description: 'Professional business and academic presentations with modern layouts, branding, and creative elements.', tools: 'PowerPoint, Figma, Canva' },
    { title: 'Server & DevOps Setup', price: '$100 - $300', delivery: '1-2 weeks', description: 'Server configuration, SSL setup, domain management, cPanel/aaPanel setup, and deployment automation.', tools: 'Ubuntu, Apache, cPanel, Cloudflare, SSL' },
  ];

  const process = [
    { num: '01', title: 'Discovery & Planning', description: 'Analyze requirements, define tech stack, create project roadmap.' },
    { num: '02', title: 'Development & Testing', description: 'Build with modern frameworks, regular updates, thorough testing.' },
    { num: '03', title: 'Deployment & Support', description: 'Go live with server setup, SSL, and ongoing maintenance.' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="pt-20 pb-section px-6 lg:px-8">
        <div className="max-w-[1080px] mx-auto">
          <p className="font-mono text-xs text-steel mb-2">// services</p>
          <h1 className="text-4xl tracking-heading mb-4">Services & Freelance Offerings</h1>
          <p className="text-steel max-w-2xl mb-6">3+ years experience in full-stack development, mobile apps, SaaS platforms, and creative services.</p>
          <div className="flex gap-3">
            <a href="https://www.upwork.com/freelancers/~017010af70d435bc3f" target="_blank" rel="noopener noreferrer" className="font-mono text-xs px-4 py-2 border border-mercury hover:border-charcoal transition-colors">Upwork</a>
            <a href="https://www.fiverr.com/alvysamy/" target="_blank" rel="noopener noreferrer" className="font-mono text-xs px-4 py-2 border border-mercury hover:border-charcoal transition-colors">Fiverr</a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-section px-6 lg:px-8 bg-snow">
        <div className="max-w-[1080px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="border-b border-mercury pb-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg">{s.title}</h3>
              </div>
              <p className="text-sm text-steel mb-3">{s.description}</p>
              <div className="font-mono text-xs text-amber mb-2">{s.price} / {s.delivery}</div>
              <div className="font-mono text-[11px] text-steel">{s.tools}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-section px-6 lg:px-8">
        <div className="max-w-[1080px] mx-auto">
          <p className="font-mono text-xs text-steel mb-2">// how it works</p>
          <h2 className="text-2xl tracking-heading mb-10">Process</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {process.map((p) => (
              <div key={p.num}>
                <div className="text-5xl leading-[0.85] tracking-display text-mercury mb-3">{p.num}</div>
                <h3 className="text-base mb-2">{p.title}</h3>
                <p className="text-sm text-steel">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section px-6 lg:px-8 bg-ash text-snow">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="text-2xl tracking-heading mb-4">Ready to get started?</h2>
          <p className="text-steel mb-8">Let's discuss your project and bring your vision to life.</p>
          <Button to="/contact" variant="amber">Start your project</Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
