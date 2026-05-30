const About = () => {
  const skills = [
    { name: 'Flutter', level: 'Advanced' },
    { name: 'Dart', level: 'Advanced' },
    { name: 'Laravel', level: 'Advanced' },
    { name: 'MERN Stack', level: 'Intermediate' },
    { name: 'React', level: 'Intermediate' },
    { name: 'Node.js', level: 'Intermediate' },
    { name: 'PHP', level: 'Intermediate' },
    { name: 'MySQL', level: 'Intermediate' },
    { name: 'Firebase', level: 'Intermediate' },
    { name: 'Java', level: 'Intermediate' },
    { name: 'Kotlin', level: 'Intermediate' },
    { name: 'API Development', level: 'Intermediate' },
    { name: 'Server & Cloud', level: 'Intermediate' },
    { name: 'Cybersecurity', level: 'Fundamentals' },
    { name: 'AI Integration', level: 'Intermediate' },
    { name: 'Presentation Design', level: 'Advanced' },
  ];

  const workflow = [
    { num: '01', title: 'Requirements Analysis', description: 'Comprehensive project assessment, technical requirements gathering, and solution architecture planning.', accent: 'text-shocking-green' },
    { num: '02', title: 'Development & Implementation', description: 'Agile development using modern frameworks with continuous integration, testing, and client communication.', accent: 'text-fiery-orange' },
    { num: '03', title: 'Deployment & Maintenance', description: 'Production deployment, performance optimization, and ongoing technical support.', accent: 'text-digital-violet' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-heading-lg font-semibold text-frosted-canvas mb-4">About Me</h1>
          <p className="text-body text-faded-steel">Full-Stack Developer / Cybersecurity Student / Technology Specialist</p>
        </div>
      </section>

      {/* Bio */}
      <section className="py-16 px-6 border-t border-deep-graphite">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-[2fr_1fr] gap-12">
          <div className="space-y-5 text-body text-faded-steel">
            <p>I am <span className="text-frosted-canvas">Samyak Chaudhary</span>, a dedicated full-stack developer with over 3 years of experience in web and mobile application development, complemented by 2+ years of successful freelancing.</p>
            <p>I specialize in creating scalable SaaS solutions, cross-platform mobile applications, and enterprise-grade web systems. Currently pursuing Bachelor of Computer Science with a specialization in <span className="text-frosted-canvas">Cybersecurity and Networking</span> at Lincoln University College, Malaysia.</p>
            <p>My expertise spans Flutter mobile development, Laravel web applications, MERN stack solutions, and modern DevOps practices.</p>
          </div>
          <div className="border border-deep-graphite rounded-card p-4">
            {[
              ['Location', 'Kathmandu, Nepal'],
              ['Study', 'Malaysia'],
              ['Focus', 'Cybersecurity'],
              ['Experience', '3+ years'],
              ['Availability', 'Remote worldwide'],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between py-3 border-b border-deep-graphite last:border-0">
                <span className="text-caption text-faded-steel">{k}</span>
                <span className="text-caption text-frosted-canvas">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-16 px-6 border-t border-deep-graphite">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-heading font-semibold text-frosted-canvas mb-12">Development Process</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {workflow.map((w) => (
              <div key={w.num} className="p-4 border border-deep-graphite rounded-card">
                <span className={`text-heading-lg font-semibold ${w.accent} opacity-40`}>{w.num}</span>
                <h3 className="text-subheading font-semibold text-frosted-canvas mt-4 mb-2">{w.title}</h3>
                <p className="text-body-sm text-faded-steel">{w.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 px-6 border-t border-deep-graphite">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-heading font-semibold text-frosted-canvas mb-12">Technical Expertise</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {skills.map((s) => (
              <div key={s.name} className="flex justify-between items-center py-3 px-4 border border-deep-graphite rounded-card">
                <span className="text-body-sm text-frosted-canvas">{s.name}</span>
                <span className={`text-caption ${s.level === 'Advanced' ? 'text-shocking-green' : s.level === 'Intermediate' ? 'text-faded-steel' : 'text-deep-graphite'}`}>{s.level}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
