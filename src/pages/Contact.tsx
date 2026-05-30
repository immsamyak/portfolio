import { useState } from 'react';

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
      const res = await fetch('https://formspree.io/f/xblyknaw', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name: formData.name, message: formData.message, _replyto: formData.email }),
      });
      if (res.ok) { setStatus('sent'); setFormData({ name: '', email: '', message: '' }); }
      else throw new Error();
    } catch { setStatus('error'); }
  };

  return (
    <div>
      {/* Hero */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-heading-lg font-semibold text-frosted-canvas mb-4">Get In Touch</h1>
          <p className="text-body text-faded-steel">Have a project in mind? Let's discuss how we can work together.</p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20 px-6 border-t border-deep-graphite pt-16">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <input
                type="text" name="name" placeholder="Name" required
                value={formData.name} onChange={handleChange}
                className="w-full bg-transparent border-b border-faded-steel text-frosted-canvas text-body py-3 outline-none focus:border-frosted-canvas transition-colors placeholder:text-faded-steel"
              />
            </div>
            <div>
              <input
                type="email" name="email" placeholder="Email" required
                value={formData.email} onChange={handleChange}
                className="w-full bg-transparent border-b border-faded-steel text-frosted-canvas text-body py-3 outline-none focus:border-frosted-canvas transition-colors placeholder:text-faded-steel"
              />
            </div>
            <div>
              <textarea
                name="message" placeholder="Project details" required rows={4}
                value={formData.message} onChange={handleChange}
                className="w-full bg-transparent border-b border-faded-steel text-frosted-canvas text-body py-3 outline-none focus:border-frosted-canvas transition-colors placeholder:text-faded-steel resize-vertical"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full text-body-sm text-frosted-canvas border border-frosted-canvas rounded-pill py-4 px-6 hover:bg-frosted-canvas hover:text-absolute-zero transition-colors disabled:opacity-50"
            >
              {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Message sent' : 'Send Message'}
            </button>
            {status === 'error' && <p className="text-caption text-fiery-orange">Something went wrong. Try again or email directly.</p>}
          </form>

          {/* Info */}
          <div className="space-y-10">
            <div>
              <h3 className="text-subheading font-semibold text-frosted-canvas mb-4">Let's Connect</h3>
              <p className="text-body-sm text-faded-steel mb-6">Whether you need a mobile app, web platform, or complete SaaS solution, I'm ready to help bring your vision to life.</p>
              <div className="border border-deep-graphite rounded-card overflow-hidden">
                {[
                  ['samyakchy1@gmail.com', 'mailto:samyakchy1@gmail.com'],
                  ['github.com/immsamyak', 'https://github.com/immsamyak'],
                  ['linkedin.com/in/samyakchy', 'https://www.linkedin.com/in/samyakchy/'],
                  ['Upwork', 'https://www.upwork.com/freelancers/~017010af70d435bc3f'],
                  ['Fiverr', 'https://www.fiverr.com/alvysamy/'],
                ].map(([label, href]) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="block text-body-sm text-faded-steel py-3 px-4 border-b border-deep-graphite last:border-0 hover:text-frosted-canvas transition-colors">
                    {label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-subheading font-semibold text-frosted-canvas mb-4">What to Expect</h3>
              <ul className="space-y-3">
                {['Quick response within 24 hours', 'Free consultation to discuss your project', 'Transparent pricing and timeline', 'Regular updates throughout development'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-body-sm text-faded-steel">
                    <span className="w-1.5 h-1.5 bg-shocking-green rounded-full shrink-0" />{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
