import { useState } from 'react';
import Button from '../components/Button';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    { title: 'Khari Ride', category: 'Mobile App', description: 'Taxi-driving app for real-time ride booking and management.', tools: 'Flutter / Firebase / Dart' },
    { title: 'PubFlow', category: 'SaaS', description: 'Financial management software for pubs and hotels with POS integration and real-time insights.', tools: 'Laravel / Vue.js / MySQL' },
    { title: 'Mero Learning LMS', category: 'Web & Mobile', description: 'eLearning platform for online courses with instructor monetization.', tools: 'Flutter / Laravel / Firebase' },
    { title: 'ISCILLA', category: 'Web App', description: 'Multi-professional networking platform for startup founders and independent artists.', tools: 'MERN Stack / Node.js / React' },
    { title: 'Apartment Management System', category: 'Mobile App', description: 'Flutter mobile app with Laravel admin panel for apartment management.', tools: 'Flutter / Laravel' },
    { title: 'E-commerce Platform', category: 'Web App', description: 'MERN stack based e-commerce platform with full shopping features.', tools: 'MERN Stack / Node.js / React' },
    { title: 'SMS Platform for Nepal', category: 'Web App', description: 'Bulk SMS, scheduling, and OTP APIs for businesses in Nepal.', tools: 'Laravel / PHP / MySQL' },
    { title: 'Social Platform', category: 'Mobile App', description: 'Flutter + Laravel app with posts, likes, comments, voice messages, and interest-based features.', tools: 'Flutter / Laravel' },
    { title: 'Exam Simulation System', category: 'Mobile App', description: 'OMR navigation, timer, past papers, real-time scores, leaderboard.', tools: 'Flutter / GetX / Firebase' },
    { title: 'Class Track', category: 'Desktop App', description: 'Student Management System with student records, attendance, marks, and reports.', tools: 'Python / MySQL' },
  ];

  const categories = ['All', 'Mobile App', 'Web App', 'Web & Mobile', 'SaaS', 'Desktop App'];
  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <div>
      {/* Hero */}
      <section className="pt-20 pb-section px-6 lg:px-8">
        <div className="max-w-[1080px] mx-auto">
          <p className="font-mono text-xs text-steel mb-2">// projects</p>
          <h1 className="text-4xl tracking-heading mb-2">Projects</h1>
          <p className="text-steel">A collection of applications built for clients and personal projects.</p>
        </div>
      </section>

      {/* Filters */}
      <section className="px-6 lg:px-8 pb-8">
        <div className="max-w-[1080px] mx-auto flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`font-mono text-xs px-3 py-1.5 border transition-colors ${
                filter === cat
                  ? 'bg-charcoal text-snow border-charcoal'
                  : 'bg-transparent text-steel border-mercury hover:border-charcoal'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="pb-section px-6 lg:px-8">
        <div className="max-w-[1080px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <div key={p.title} className="border-b border-mercury pb-6">
              <span className="font-mono text-[11px] text-amber uppercase tracking-wider">{p.category}</span>
              <h3 className="text-xl mt-2 mb-2">{p.title}</h3>
              <p className="text-sm text-steel mb-3">{p.description}</p>
              <p className="font-mono text-[11px] text-steel">{p.tools}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-section px-6 lg:px-8 bg-snow">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="text-2xl tracking-heading mb-4">Have a project in mind?</h2>
          <p className="text-steel mb-8">Let's work together to create something great.</p>
          <Button to="/contact" variant="primary">Start a project</Button>
        </div>
      </section>
    </div>
  );
};

export default Projects;
