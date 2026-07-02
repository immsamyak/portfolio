import { useState } from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '../components/ui/FadeIn';
import { WordsPullUpMultiStyle } from '../components/ui/WordsPullUpMultiStyle';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

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
    <div className="pt-24 min-h-screen bg-black text-primary">
      {/* Background Noise */}
      <div className="bg-noise opacity-[0.15]" />

      {/* Hero */}
      <section className="py-24 px-4 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <WordsPullUpMultiStyle 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal max-w-4xl"
            segments={[
              { text: "Digital applications built for", className: "text-primary" },
              { text: "clients and startups.", className: "font-serif italic text-primary" }
            ]}
          />
        </div>
      </section>

      {/* Filters */}
      <section className="px-4 md:px-6 pb-12 sticky top-20 z-30 pointer-events-none">
        <div className="max-w-7xl mx-auto pointer-events-auto overflow-x-auto no-scrollbar py-2">
          <div className="flex gap-2 w-max">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-sm rounded-full px-6 py-2.5 transition-all duration-300 border ${
                  filter === cat
                    ? 'border-primary text-black bg-primary'
                    : 'border-white/10 text-gray-400 bg-black/80 backdrop-blur-md hover:border-primary/50 hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="pb-32 px-4 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
          {filtered.map((p, i) => (
            <div key={p.title} className="break-inside-avoid">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (i % 5), duration: 0.5 }}
                className="bg-[#101010] p-8 rounded-2xl border border-white/5 hover:bg-[#1a1a1a] transition-colors group"
              >
                <span className="text-xs text-primary/50 uppercase tracking-widest font-medium block mb-4">{p.category}</span>
                <h3 className="text-2xl font-normal text-primary mb-4 group-hover:text-white transition-colors">{p.title}</h3>
                <p className="text-sm text-gray-400 mb-8 leading-relaxed">{p.description}</p>
                <div className="pt-6 border-t border-white/5">
                  <p className="text-xs text-primary/40 font-mono tracking-tight">{p.tools}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-4 md:px-6 relative z-10">
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center bg-[#101010] p-12 md:p-24 rounded-[2rem] border border-white/5">
            <h2 className="text-4xl md:text-5xl font-normal text-primary mb-6">Have a project in mind?</h2>
            <p className="text-base text-gray-400 mb-12">Let's work together to build something exceptional.</p>
            <Link to="/contact" className="group inline-flex items-center bg-primary rounded-full pl-6 pr-2 py-2 gap-4 hover:gap-6 transition-all duration-300">
              <span className="text-black font-medium text-sm sm:text-base whitespace-nowrap">Start a project</span>
              <div className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                <ArrowRight className="text-primary w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  );
};

export default Projects;
