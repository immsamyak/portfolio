import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { WordsPullUp } from '../components/ui/WordsPullUp';

const Home = () => {
  const highlights = [
    { label: 'Projects Delivered', value: '35+' },
    { label: 'Years Building', value: '3+' },
    { label: 'Domains Worked In', value: '8+' },
  ];

  const focusAreas = [
    {
      title: 'Web Platforms',
      description: 'Scalable product builds for startups and businesses with performance-first architecture.',
    },
    {
      title: 'Mobile Experiences',
      description: 'Cross-platform Flutter applications focused on speed, reliability, and retention.',
    },
    {
      title: 'Secure Engineering',
      description: 'Practical cybersecurity practices embedded into day-to-day product development.',
    },
  ];

  const process = [
    { step: 'Discover', text: 'Understand goals, users, technical constraints, and growth expectations.' },
    { step: 'Build', text: 'Ship production-ready features with iterative feedback and transparent progress.' },
    { step: 'Scale', text: 'Optimize architecture, monitoring, and security for long-term maintainability.' },
  ];

  return (
    <div className="w-full min-h-screen bg-black text-primary">
      <section className="h-screen p-4 md:p-6">
        <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden bg-[#101010]">
          <video
            className="absolute inset-0 w-full h-full object-cover z-0"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4" type="video/mp4" />
          </video>

          <div className="noise-overlay opacity-[0.7] mix-blend-overlay pointer-events-none z-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 z-0 pointer-events-none" />

          <div className="absolute bottom-0 left-0 right-0 z-10 px-6 pb-8 md:pb-12 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4 items-end">
              <div className="md:col-span-8">
                <WordsPullUp
                  text="Samyak"
                  showAsterisk={true}
                  className="text-[26vw] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw] font-medium leading-[0.85] tracking-[-0.07em] text-primary"
                />
              </div>

              <div className="md:col-span-4 flex flex-col gap-6 md:gap-8 pb-4">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="text-primary/70 text-xs sm:text-sm md:text-base leading-[1.4]"
                >
                  Full-stack developer blending product engineering and cybersecurity thinking to build practical digital systems for businesses and startups.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link to="/projects" className="group inline-flex items-center bg-primary rounded-full pl-6 pr-2 py-2 gap-4 hover:gap-6 transition-all duration-300">
                    <span className="text-black font-medium text-sm sm:text-base whitespace-nowrap">View projects</span>
                    <div className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <ArrowRight className="text-primary w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-6 pb-8 md:pb-10">
        <div className="max-w-7xl mx-auto grid gap-4 md:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.label} className="bg-[#101010] rounded-2xl p-6 border border-white/5">
              <p className="text-3xl md:text-4xl text-primary">{item.value}</p>
              <p className="text-sm text-primary/60 mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 md:px-6 py-10 md:py-14">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-4xl mb-8">What I build</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {focusAreas.map((item) => (
              <div key={item.title} className="bg-[#101010] rounded-2xl p-6 border border-white/5 hover:border-primary/20 transition-colors">
                <h3 className="text-lg md:text-xl mb-3">{item.title}</h3>
                <p className="text-sm text-primary/60 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 md:px-6 py-10 md:py-14 pb-16">
        <div className="max-w-7xl mx-auto bg-[#101010] rounded-[2rem] p-6 md:p-10 border border-white/5">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
            <h2 className="text-2xl md:text-4xl">How I work</h2>
            <Link to="/contact" className="group inline-flex items-center text-sm text-primary hover:text-white transition-colors">
              Start a conversation <ArrowRight className="w-4 h-4 ml-2 -rotate-45" />
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {process.map((item) => (
              <div key={item.step} className="rounded-2xl bg-black/30 p-5 border border-white/5">
                <p className="text-xs uppercase tracking-widest text-primary/50 mb-3">{item.step}</p>
                <p className="text-sm text-primary/70 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
