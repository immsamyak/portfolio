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
    { num: '01', title: 'Requirements Analysis', description: 'Comprehensive project assessment, technical requirements gathering, and solution architecture planning.' },
    { num: '02', title: 'Development & Implementation', description: 'Agile development using modern frameworks with continuous integration, testing, and client communication.' },
    { num: '03', title: 'Deployment & Maintenance', description: 'Production deployment, performance optimization, and ongoing technical support and maintenance.' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="pt-20 pb-section px-6 lg:px-8">
        <div className="max-w-[1080px] mx-auto">
          <p className="font-mono text-xs text-steel mb-2">// about</p>
          <h1 className="text-4xl tracking-heading mb-2">About Me</h1>
          <p className="text-steel">Full-Stack Developer / Cybersecurity Student / Technology Specialist</p>
        </div>
      </section>

      {/* Bio */}
      <section className="py-section px-6 lg:px-8 bg-snow">
        <div className="max-w-[1080px] mx-auto grid md:grid-cols-[2fr_1fr] gap-10">
          <div className="space-y-4 text-base leading-relaxed">
            <p>I am Samyak Chaudhary, a dedicated full-stack developer with over 3 years of experience in web and mobile application development, complemented by 2+ years of successful freelancing. I specialize in creating scalable SaaS solutions, cross-platform mobile applications, and enterprise-grade web systems.</p>
            <p>Currently pursuing Bachelor of Computer Science & IT with a specialization in Cybersecurity and Networking at Lincoln University College, Malaysia. This academic foundation strengthens my technical expertise in secure application development.</p>
            <p>My expertise spans Flutter mobile development, Laravel web applications, MERN stack solutions, and modern DevOps practices. I have successfully delivered projects ranging from taxi booking systems to e-learning platforms and financial management software.</p>
          </div>
          <ul className="space-y-0">
            {[
              ['Location', 'Kathmandu, Nepal'],
              ['Study', 'Malaysia'],
              ['Focus', 'Cybersecurity'],
              ['Experience', '3+ years'],
              ['Availability', 'Remote worldwide'],
            ].map(([k, v]) => (
              <li key={k} className="flex justify-between py-3 border-b border-powder font-mono text-xs">
                <span className="text-steel">{k}</span>
                <span className="text-charcoal">{v}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-section px-6 lg:px-8">
        <div className="max-w-[1080px] mx-auto">
          <p className="font-mono text-xs text-steel mb-2">// process</p>
          <h2 className="text-2xl tracking-heading mb-10">Development Process</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {workflow.map((w) => (
              <div key={w.num}>
                <div className="text-5xl leading-[0.85] tracking-display text-mercury mb-3">{w.num}</div>
                <h3 className="text-base mb-2">{w.title}</h3>
                <p className="text-sm text-steel">{w.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-section px-6 lg:px-8 bg-snow">
        <div className="max-w-[1080px] mx-auto">
          <p className="font-mono text-xs text-steel mb-2">// technical expertise</p>
          <h2 className="text-2xl tracking-heading mb-10">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-0">
            {skills.map((s) => (
              <div key={s.name} className="flex justify-between items-center py-3 border-b border-powder">
                <span className="text-sm">{s.name}</span>
                <span className="font-mono text-[11px] text-steel">{s.level}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
