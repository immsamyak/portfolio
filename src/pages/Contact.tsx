import { useState } from 'react';
import FadeIn from '../components/ui/FadeIn';
import { WordsPullUpMultiStyle } from '../components/ui/WordsPullUpMultiStyle';
import { ArrowRight } from 'lucide-react';

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
    <div className="pt-24 min-h-screen bg-black text-primary relative">
      {/* Background Noise */}
      <div className="bg-noise opacity-[0.15]" />

      {/* Hero */}
      <section className="py-24 px-4 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <WordsPullUpMultiStyle 
            className="text-5xl md:text-7xl font-normal max-w-4xl"
            segments={[
              { text: "Let's build", className: "text-primary" },
              { text: "something exceptional.", className: "font-serif italic text-primary block sm:inline sm:ml-4" }
            ]}
          />
        </div>
      </section>

      {/* Content */}
      <section className="pb-32 px-4 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-24">
          
          {/* Form */}
          <FadeIn delay={0.2}>
            <form onSubmit={handleSubmit} className="bg-[#101010] p-8 md:p-12 rounded-[2rem] border border-white/5 space-y-8">
              <div>
                <input
                  type="text" name="name" placeholder="Name" required
                  value={formData.name} onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/10 text-primary text-base py-4 outline-none focus:border-primary transition-colors placeholder:text-gray-600"
                />
              </div>
              <div>
                <input
                  type="email" name="email" placeholder="Email" required
                  value={formData.email} onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/10 text-primary text-base py-4 outline-none focus:border-primary transition-colors placeholder:text-gray-600"
                />
              </div>
              <div>
                <textarea
                  name="message" placeholder="Project details" required rows={4}
                  value={formData.message} onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/10 text-primary text-base py-4 outline-none focus:border-primary transition-colors placeholder:text-gray-600 resize-none"
                />
              </div>
              
              <button
                type="submit"
                disabled={status === 'sending'}
                className="group w-full inline-flex items-center justify-between bg-primary rounded-full pl-8 pr-2 py-2 mt-8 disabled:opacity-50 transition-all"
              >
                <span className="text-black font-medium text-base">
                  {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Message sent' : 'Send Inquiry'}
                </span>
                <div className="bg-black rounded-full w-10 h-10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <ArrowRight className="text-primary w-5 h-5" />
                </div>
              </button>
              {status === 'error' && <p className="text-xs text-red-400 mt-4">Something went wrong. Try again or email directly.</p>}
            </form>
          </FadeIn>

          {/* Info */}
          <div className="space-y-12 mt-8 lg:mt-0">
            <FadeIn delay={0.3} direction="left">
              <div>
                <h3 className="text-sm uppercase tracking-widest text-primary/50 mb-8 font-medium">Connect</h3>
                <div className="flex flex-col gap-6">
                  {[
                    ['Email', 'samyakchy1@gmail.com', 'mailto:samyakchy1@gmail.com'],
                    ['GitHub', 'github.com/immsamyak', 'https://github.com/immsamyak'],
                    ['LinkedIn', 'linkedin.com/in/samyakchy', 'https://www.linkedin.com/in/samyakchy/'],
                    ['Upwork', 'Upwork Profile', 'https://www.upwork.com/freelancers/~017010af70d435bc3f'],
                  ].map(([label, text, href]) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="group flex justify-between items-end border-b border-white/10 pb-4 hover:border-primary/50 transition-colors">
                      <span className="text-xl text-primary font-normal">{text}</span>
                      <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-primary transition-colors -rotate-45" />
                    </a>
                  ))}
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4} direction="left">
              <div className="bg-[#101010] rounded-[2rem] p-8 border border-white/5">
                <h3 className="text-sm uppercase tracking-widest text-primary/50 mb-6 font-medium">Availability</h3>
                <p className="text-base text-gray-400 leading-relaxed mb-6">
                  Currently accepting new projects and freelance opportunities. Based in Malaysia, working with clients globally.
                </p>
                <div className="flex items-center gap-3 text-sm text-primary">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  Available for work
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
