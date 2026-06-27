import { useState } from 'react';
import FadeIn from '../components/ui/FadeIn';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://formspree.io/f/meebkjqy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name: formData.name, message: formData.message, _replyto: formData.email }),
      });
      if (res.ok) { setStatus('sent'); setFormData({ name: '', email: '', message: '' }); }
      else throw new Error();
    } catch { setStatus('error'); }
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 px-6 relative">
        <div className="max-w-[1200px] mx-auto relative z-10">
          <FadeIn>
            <h1 className="text-display font-semibold text-frosted-canvas mb-6 leading-[0.9]">Get In Touch<span className="text-shocking-green">.</span></h1>
            <p className="text-subheading text-faded-steel max-w-2xl">Have a project in mind? Let's discuss how we can work together to build something exceptional.</p>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="pb-32 px-6 border-t border-deep-graphite/40 pt-24">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[1fr_1fr] gap-20">
          {/* Form */}
          <FadeIn delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="relative group">
                <input
                  type="text" name="name" placeholder="Name" required
                  value={formData.name} onChange={handleChange}
                  className="w-full bg-transparent border-b border-deep-graphite/60 text-frosted-canvas text-body py-4 outline-none focus:border-shocking-green transition-colors placeholder:text-faded-steel/50"
                />
              </div>
              <div className="relative group">
                <input
                  type="email" name="email" placeholder="Email" required
                  value={formData.email} onChange={handleChange}
                  className="w-full bg-transparent border-b border-deep-graphite/60 text-frosted-canvas text-body py-4 outline-none focus:border-shocking-green transition-colors placeholder:text-faded-steel/50"
                />
              </div>
              <div className="relative group">
                <textarea
                  name="message" placeholder="Project details" required rows={5}
                  value={formData.message} onChange={handleChange}
                  className="w-full bg-transparent border-b border-deep-graphite/60 text-frosted-canvas text-body py-4 outline-none focus:border-shocking-green transition-colors placeholder:text-faded-steel/50 resize-vertical"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full text-body-sm text-absolute-zero bg-frosted-canvas border border-frosted-canvas rounded-pill py-5 px-6 hover:shadow-[0_0_20px_rgba(255,252,225,0.3)] transition-all duration-300 active:scale-95 disabled:opacity-50 font-medium"
              >
                {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Message sent' : 'Send Message'}
              </button>
              {status === 'error' && <p className="text-caption text-fiery-orange">Something went wrong. Try again or email directly.</p>}
            </form>
          </FadeIn>

          {/* Info */}
          <div className="space-y-16">
            <FadeIn delay={0.3} direction="left">
              <div>
                <h3 className="text-heading-sm font-semibold text-frosted-canvas mb-6">Let's Connect</h3>
                <p className="text-body text-faded-steel mb-8">Whether you need a mobile app, web platform, or complete SaaS solution, I'm ready to help bring your vision to life.</p>
                <div className="border border-deep-graphite/40 rounded-card overflow-hidden bg-absolute-zero/50 backdrop-blur-sm">
                  {[
                    ['samyakchy1@gmail.com', 'mailto:samyakchy1@gmail.com'],
                    ['github.com/immsamyak', 'https://github.com/immsamyak'],
                    ['linkedin.com/in/samyakchy', 'https://www.linkedin.com/in/samyakchy/'],
                    ['Upwork', 'https://www.upwork.com/freelancers/~017010af70d435bc3f'],
                    ['Fiverr', 'https://www.fiverr.com/alvysamy/'],
                  ].map(([label, href]) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="block text-body-sm text-faded-steel py-4 px-6 border-b border-deep-graphite/40 last:border-0 hover:bg-absolute-zero hover:text-shocking-green transition-colors">
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.4} direction="left">
              <div>
                <h3 className="text-heading-sm font-semibold text-frosted-canvas mb-6">What to Expect</h3>
                <ul className="space-y-4">
                  {['Quick response within 24 hours', 'Free consultation to discuss your project', 'Transparent pricing and timeline', 'Regular updates throughout development'].map((item) => (
                    <li key={item} className="flex items-center gap-4 text-body text-faded-steel">
                      <span className="w-2 h-2 bg-shocking-green rounded-full shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
