
import React from 'react';
import Card from '../components/Card';


const About = () => {
  const skills = [
    { name: 'Flutter', level: 'Advanced' },
    { name: 'Dart', level: 'Advanced' },
    { name: 'Java', level: 'Intermediate' },
    { name: 'Kotlin', level: 'Intermediate' },
    { name: 'C#', level: 'Intermediate' },
    { name: 'C++', level: 'Intermediate' },
    { name: 'Laravel', level: 'Advanced' },
    { name: 'Node.js', level: 'Intermediate' },
    { name: 'React', level: 'Intermediate' },
    { name: 'MERN Stack', level: 'Intermediate' },
    { name: 'PHP', level: 'Intermediate' },
    { name: 'MySQL', level: 'Intermediate' },
    { name: 'Firebase', level: 'Intermediate' },
    { name: 'Xamarin', level: 'Beginner' },
    { name: 'Django', level: 'Beginner' },
    { name: 'Cybersecurity', level: 'Fundamentals' },
    { name: 'AI Integration', level: 'Intermediate' },
    { name: 'API Development', level: 'Intermediate' },
    { name: 'Presentation Design', level: 'Advanced' },
    { name: 'Server & Cloud', level: 'Intermediate' },
  ];

  const workflow = [
    {
      step: '1',
      title: 'Consultation & Planning',
      description: 'Discuss project goals, requirements, and vision. Plan architecture and tech stack.'
    },
    {
      step: '2',
      title: 'Design & Development',
      description: 'Build web and mobile apps using modern frameworks, with a focus on security and performance.'
    },
    {
      step: '3',
      title: 'Testing & Launch',
      description: 'Test, deploy, and provide ongoing support for your project.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">
            About Me
          </h1>
          <p className="text-xl text-slate-600">
            Web & App Developer | Cybersecurity Student | Tech Enthusiast
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Who I Am
            </h2>
            <div className="prose text-slate-600 leading-relaxed space-y-4">
              <p>
                Hi! I'm <b>Samyak Chaudahry</b>, a passionate developer with 3+ years of experience in full-stack web and mobile app development, and 2+ years as a freelancer. I love building SaaS products, AI-powered apps, and exploring cybersecurity and creative storytelling.
              </p>
              <p>
                <b>Education:</b> Currently pursuing Bachelor of Computer Science & IT (Cybersecurity and Networking) at Lincoln University College, Malaysia (1st Semester, 130 credit hours total).
              </p>
              <p>
                <b>Location:</b> Kathmandu, Nepal (studying in Malaysia)
              </p>
              <p>
                <b>Languages:</b> English, Nepali, Hindi
              </p>
              <p>
                <b>Interests:</b> Building SaaS products, AI-powered apps, cybersecurity, creative storytelling, and exploring authentic places.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              My Workflow
            </h2>
            <p className="text-lg text-slate-600">
              How I bring ideas to life through design, development, and deployment
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {workflow.map((item, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Skills & Tools
            </h2>
            <p className="text-lg text-slate-600">
              Technologies and tools I use to create amazing web and app experiences
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="p-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-slate-900">
                    {skill.name}
                  </h3>
                  <span className="text-sm text-indigo-600 font-medium">
                    {skill.level}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
