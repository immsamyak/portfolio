import { useState } from 'react';
import Button from '../components/Button';
import FadeIn from '../components/ui/FadeIn';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    { title: 'Khari Ride', category: 'Mobile App', description: 'Taxi-driving app for real-time ride booking and management with complex geographic routing.', tools: 'Flutter / Firebase / Dart' },
    { title: 'PubFlow', category: 'SaaS', description: 'Financial management software for pubs and hotels with deep POS hardware integration and offline sync capabilities.', tools: 'Laravel / Vue.js / MySQL' },
    { title: 'Mero Learning LMS', category: 'Web & Mobile', description: 'Enterprise eLearning platform for online courses with multi-tier instructor monetization and video DRM.', tools: 'Flutter / Laravel / Firebase' },
    { title: 'ISCILLA', category: 'Web App', description: 'Multi-professional networking platform specifically designed for tech startup founders to find co-founders.', tools: 'MERN Stack / Node.js / React' },
    { title: 'Apartment Management', category: 'Mobile App', description: 'Comprehensive mobile app with an admin panel for seamless apartment management, billing, and maintenance requests.', tools: 'Flutter / Laravel' },
    { title: 'E-commerce Platform', category: 'Web App', description: 'High-performance e-commerce platform with dynamic inventory management and payment gateway aggregation.', tools: 'MERN Stack / Node.js / React' },
    { title: 'SMS Platform', category: 'Web App', description: 'High-throughput bulk SMS, scheduling, and automated OTP verification APIs for businesses in Nepal.', tools: 'Laravel / PHP / MySQL' },
    { title: 'Social Platform', category: 'Mobile App', description: 'Community-driven app featuring posts, likes, voice messages, and algorithmic interest-based feeds.', tools: 'Flutter / Laravel' },
    { title: 'Exam Simulation', category: 'Mobile App', description: 'Real-time OMR navigation, precision timer, past papers, instant scoring, and global leaderboards.', tools: 'Flutter / GetX / Firebase' },
    { title: 'Class Track', category: 'Desktop App', description: 'Offline-first Student Management System tracking attendance, academic marks, and generating detailed reports.', tools: 'Python / MySQL' },
  ];

  const categories = ['All', 'Mobile App', 'Web App', 'Web & Mobile', 'SaaS', 'Desktop App'];
  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 px-6 relative">
        <div className="max-w-[1200px] mx-auto relative z-10">
          <FadeIn>
            <h1 className="text-display font-semibold text-frosted-canvas mb-6 leading-[0.9]">Projects<span className="text-shocking-green">.</span></h1>
            <p className="text-subheading text-faded-steel max-w-2xl">Digital applications built for clients, startups, and personal exploration over the years.</p>
          </FadeIn>
        </div>
      </section>

      {/* Filters */}
      <section className="px-6 pb-12 sticky top-24 z-30 pointer-events-none">
        <div className="max-w-[1200px] mx-auto pointer-events-auto overflow-x-auto no-scrollbar py-2">
          <div className="flex gap-2 w-max">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-caption rounded-pill px-6 py-2.5 transition-all duration-300 border ${
                  filter === cat
                    ? 'border-frosted-canvas text-absolute-zero bg-frosted-canvas shadow-[0_0_15px_rgba(255,252,225,0.4)]'
                    : 'border-deep-graphite/60 text-faded-steel bg-absolute-zero/80 backdrop-blur-md hover:border-frosted-canvas hover:text-frosted-canvas'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="pb-32 px-6">
        <div className="max-w-[1200px] mx-auto columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filtered.map((p, i) => (
            <div key={p.title} className="break-inside-avoid">
              <FadeIn delay={0.1 * (i % 3)}>
                <div className="p-8 rounded-card border border-deep-graphite/40 bg-absolute-zero/50 backdrop-blur-sm hover:bg-absolute-zero hover:border-shocking-green/30 transition-all duration-300 group">
                  <span className="text-caption text-shocking-green uppercase tracking-wide font-medium">{p.category}</span>
                  <h3 className="text-heading-sm font-semibold text-frosted-canvas mt-3 mb-4 group-hover:translate-x-1 transition-transform">{p.title}</h3>
                  <p className="text-body text-faded-steel mb-6">{p.description}</p>
                  <div className="pt-6 border-t border-deep-graphite/30">
                    <p className="text-caption text-faded-steel font-mono">{p.tools}</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 border-t border-deep-graphite/40 bg-absolute-zero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-shocking-green/5 via-absolute-zero to-absolute-zero pointer-events-none" />
        <FadeIn>
          <div className="max-w-[600px] mx-auto text-center relative z-10">
            <h2 className="text-heading-lg font-semibold text-frosted-canvas mb-6 leading-tight">Have a project in mind?</h2>
            <p className="text-body text-faded-steel mb-12">Let's work together to build something exceptional.</p>
            <Button to="/contact">Start a project</Button>
          </div>
        </FadeIn>
      </section>
    </div>
  );
};

export default Projects;
