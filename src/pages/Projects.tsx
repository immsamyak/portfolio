import { useState } from 'react';
import Button from '../components/Button';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    { title: 'Khari Ride', category: 'Mobile App', description: 'Taxi-driving app for real-time ride booking and management.', tools: 'Flutter / Firebase / Dart' },
    { title: 'PubFlow', category: 'SaaS', description: 'Financial management software for pubs and hotels with POS integration.', tools: 'Laravel / Vue.js / MySQL' },
    { title: 'Mero Learning LMS', category: 'Web & Mobile', description: 'eLearning platform for online courses with instructor monetization.', tools: 'Flutter / Laravel / Firebase' },
    { title: 'ISCILLA', category: 'Web App', description: 'Multi-professional networking platform for startup founders.', tools: 'MERN Stack / Node.js / React' },
    { title: 'Apartment Management', category: 'Mobile App', description: 'Flutter mobile app with Laravel admin panel for apartment management.', tools: 'Flutter / Laravel' },
    { title: 'E-commerce Platform', category: 'Web App', description: 'MERN stack e-commerce platform with full shopping features.', tools: 'MERN Stack / Node.js / React' },
    { title: 'SMS Platform', category: 'Web App', description: 'Bulk SMS, scheduling, and OTP APIs for businesses in Nepal.', tools: 'Laravel / PHP / MySQL' },
    { title: 'Social Platform', category: 'Mobile App', description: 'Posts, likes, comments, voice messages, and interest-based features.', tools: 'Flutter / Laravel' },
    { title: 'Exam Simulation', category: 'Mobile App', description: 'OMR navigation, timer, past papers, real-time scores, leaderboard.', tools: 'Flutter / GetX / Firebase' },
    { title: 'Class Track', category: 'Desktop App', description: 'Student Management System with records, attendance, marks, reports.', tools: 'Python / MySQL' },
  ];

  const categories = ['All', 'Mobile App', 'Web App', 'Web & Mobile', 'SaaS', 'Desktop App'];
  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  const accents = ['text-shocking-green', 'text-neon-pink', 'text-fiery-orange', 'text-digital-violet', 'text-aqua-glow', 'text-mint-burst'];

  return (
    <div>
      {/* Hero */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-heading-lg font-semibold text-frosted-canvas mb-4">Projects</h1>
          <p className="text-body text-faded-steel">Applications built for clients and personal projects.</p>
        </div>
      </section>

      {/* Filters */}
      <section className="px-6 pb-8">
        <div className="max-w-[1200px] mx-auto flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-caption rounded-pill px-5 py-2 border transition-colors ${
                filter === cat
                  ? 'border-frosted-canvas text-absolute-zero bg-frosted-canvas'
                  : 'border-deep-graphite text-faded-steel hover:border-frosted-canvas hover:text-frosted-canvas'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="pb-20 px-6">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((p, i) => (
            <div key={p.title} className="p-4 rounded-card border border-deep-graphite">
              <span className={`text-caption ${accents[i % accents.length]} uppercase tracking-wide`}>{p.category}</span>
              <h3 className="text-subheading font-semibold text-frosted-canvas mt-3 mb-2">{p.title}</h3>
              <p className="text-body-sm text-faded-steel mb-4">{p.description}</p>
              <p className="text-caption text-faded-steel">{p.tools}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-deep-graphite">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="text-heading font-semibold text-frosted-canvas mb-4">Have a project in mind?</h2>
          <p className="text-body text-faded-steel mb-10">Let's work together to create something great.</p>
          <Button to="/contact">Start a project</Button>
        </div>
      </section>
    </div>
  );
};

export default Projects;
