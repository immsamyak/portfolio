import FadeIn from '../components/ui/FadeIn';

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
    { num: '03', title: 'Deployment & Maintenance', description: 'Production deployment, performance optimization, and ongoing technical support.' },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 px-6 relative">
        <div className="max-w-[1200px] mx-auto relative z-10">
          <FadeIn>
            <h1 className="text-display font-semibold text-frosted-canvas mb-6 leading-[0.9]">About Me<span className="text-shocking-green">.</span></h1>
            <p className="text-subheading text-faded-steel max-w-2xl">Full-Stack Developer / Cybersecurity Student / Technology Specialist</p>
          </FadeIn>
        </div>
      </section>

      {/* Bio */}
      <section className="py-24 px-6 border-t border-deep-graphite/40">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-[2fr_1fr] gap-12">
          <div className="space-y-6 text-body text-faded-steel">
            <FadeIn delay={0.1}>
              <p>I am <span className="text-frosted-canvas">Samyak Chaudhary</span>, a dedicated full-stack developer with over 3 years of experience in web and mobile application development, complemented by 2+ years of successful freelancing.</p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p>I specialize in creating scalable SaaS solutions, cross-platform mobile applications, and enterprise-grade web systems. Currently pursuing a Bachelor of Computer Science with a specialization in <span className="text-frosted-canvas">Cybersecurity and Networking</span> at Lincoln University College, Malaysia.</p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p>My expertise spans Flutter mobile development, Laravel web applications, MERN stack solutions, and modern DevOps practices.</p>
            </FadeIn>
          </div>
          <FadeIn delay={0.4} direction="left">
            <div className="border border-deep-graphite/40 bg-absolute-zero/50 backdrop-blur-md rounded-card p-6 shadow-2xl">
              {[
                ['Location', 'Kathmandu, Nepal'],
                ['Study', 'Malaysia'],
                ['Focus', 'Cybersecurity'],
                ['Experience', '3+ years'],
                ['Availability', 'Remote worldwide'],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between py-4 border-b border-deep-graphite/40 last:border-0">
                  <span className="text-caption text-faded-steel tracking-wide uppercase">{k}</span>
                  <span className="text-caption text-frosted-canvas font-medium">{v}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-32 px-6 border-t border-deep-graphite/40 bg-absolute-zero/30">
        <div className="max-w-[1200px] mx-auto">
          <FadeIn>
            <h2 className="text-heading-lg font-semibold text-frosted-canvas mb-16">Development Process</h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {workflow.map((w, i) => (
              <FadeIn key={w.num} delay={i * 0.15}>
                <div className="p-10 border border-deep-graphite/40 bg-absolute-zero rounded-card hover:border-shocking-green/30 transition-colors h-full">
                  <span className="text-heading font-semibold text-shocking-green opacity-20">{w.num}</span>
                  <h3 className="text-heading-sm font-semibold text-frosted-canvas mt-8 mb-4">{w.title}</h3>
                  <p className="text-body text-faded-steel">{w.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-32 px-6 border-t border-deep-graphite/40">
        <div className="max-w-[1200px] mx-auto">
          <FadeIn>
            <h2 className="text-heading-lg font-semibold text-frosted-canvas mb-16">Technical Expertise</h2>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((s, i) => (
              <FadeIn key={s.name} delay={(i % 4) * 0.1}>
                <div className="flex justify-between items-center py-4 px-6 border border-deep-graphite/40 rounded-card bg-absolute-zero hover:border-frosted-canvas/30 transition-colors">
                  <span className="text-body-sm text-frosted-canvas">{s.name}</span>
                  <span className={`text-caption uppercase tracking-wide ${s.level === 'Advanced' ? 'text-shocking-green' : s.level === 'Intermediate' ? 'text-faded-steel' : 'text-deep-graphite'}`}>{s.level}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
