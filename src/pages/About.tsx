
import React from 'react';
import Card from '../components/Card';


const About = () => {
  const skills = [
    { name: 'Flutter', level: 'Advanced', icon: '📱', color: 'from-blue-500 to-cyan-500' },
    { name: 'Dart', level: 'Advanced', icon: '🎯', color: 'from-blue-600 to-blue-700' },
    { name: 'Laravel', level: 'Advanced', icon: '🚀', color: 'from-red-500 to-orange-500' },
    { name: 'MERN Stack', level: 'Intermediate', icon: '⚛️', color: 'from-green-500 to-teal-500' },
    { name: 'React', level: 'Intermediate', icon: '⚛️', color: 'from-cyan-500 to-blue-500' },
    { name: 'Node.js', level: 'Intermediate', icon: '🟢', color: 'from-green-600 to-green-700' },
    { name: 'PHP', level: 'Intermediate', icon: '🐘', color: 'from-purple-500 to-indigo-500' },
    { name: 'MySQL', level: 'Intermediate', icon: '🗄️', color: 'from-orange-500 to-yellow-500' },
    { name: 'Firebase', level: 'Intermediate', icon: '🔥', color: 'from-yellow-500 to-orange-500' },
    { name: 'Java', level: 'Intermediate', icon: '☕', color: 'from-red-600 to-red-700' },
    { name: 'Kotlin', level: 'Intermediate', icon: '🤖', color: 'from-purple-600 to-pink-600' },
    { name: 'API Development', level: 'Intermediate', icon: '🔌', color: 'from-indigo-500 to-purple-500' },
    { name: 'Server & Cloud', level: 'Intermediate', icon: '☁️', color: 'from-gray-500 to-slate-600' },
    { name: 'Cybersecurity', level: 'Fundamentals', icon: '🔐', color: 'from-red-500 to-pink-500' },
    { name: 'AI Integration', level: 'Intermediate', icon: '🤖', color: 'from-purple-500 to-blue-500' },
    { name: 'Presentation Design', level: 'Advanced', icon: '🎨', color: 'from-pink-500 to-rose-500' },
  ];

  const workflow = [
    {
      step: '1',
      title: 'Requirements Analysis',
      description: 'Comprehensive project assessment, technical requirements gathering, and solution architecture planning.'
    },
    {
      step: '2',
      title: 'Development & Implementation',
      description: 'Agile development using modern frameworks with continuous integration, testing, and client communication.'
    },
    {
      step: '3',
      title: 'Deployment & Maintenance',
      description: 'Production deployment, performance optimization, and ongoing technical support and maintenance.'
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
            Full-Stack Developer | Cybersecurity Student | Technology Specialist
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Professional Background
            </h2>
            <div className="prose text-slate-600 leading-relaxed space-y-4">
              <p>
                I am <b>Samyak Chaudhary</b>, a dedicated full-stack developer with over 3 years of experience in web and mobile application development, complemented by 2+ years of successful freelancing. I specialize in creating scalable SaaS solutions, cross-platform mobile applications, and enterprise-grade web systems.
              </p>
              <p>
                <b>Education:</b> Currently pursuing Bachelor of Computer Science & IT with a specialization in Cybersecurity and Networking at Lincoln University College, Malaysia. This academic foundation strengthens my technical expertise in secure application development.
              </p>
              <p>
                <b>Professional Focus:</b> My expertise spans Flutter mobile development, Laravel web applications, MERN stack solutions, and modern DevOps practices. I have successfully delivered projects ranging from taxi booking systems to e-learning platforms and financial management software.
              </p>
              <p>
                <b>Technical Competencies:</b> Cross-platform mobile development, full-stack web development, SaaS architecture, API design, database optimization, server configuration, and cybersecurity implementation.
              </p>
              <p>
                <b>Location:</b> Based in Kathmandu, Nepal, with international study experience in Malaysia. Available for remote collaboration worldwide.
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
              Development Process
            </h2>
            <p className="text-lg text-slate-600">
              My systematic approach to delivering high-quality software solutions
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 bg-clip-text text-transparent mb-6">
              Technical Expertise
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Core technologies and frameworks I leverage to build robust software solutions
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105"
              >
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Glowing border effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>
                
                <div className="relative p-6">
                  {/* Icon with animated background */}
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 group-hover:from-white group-hover:to-slate-100 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6">
                    <span className="text-2xl transform transition-transform duration-500 group-hover:scale-125">
                      {skill.icon}
                    </span>
                  </div>
                  
                  {/* Skill name */}
                  <h3 className="text-lg font-bold text-slate-900 text-center mb-3 group-hover:text-indigo-900 transition-colors duration-300">
                    {skill.name}
                  </h3>
                  
                  {/* Level badge */}
                  <div className="flex justify-center">
                    <span className={`inline-flex items-center px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                      skill.level === 'Advanced' 
                        ? 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 group-hover:from-green-200 group-hover:to-emerald-200' 
                        : skill.level === 'Intermediate'
                        ? 'bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 group-hover:from-blue-200 group-hover:to-indigo-200'
                        : 'bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-800 group-hover:from-orange-200 group-hover:to-yellow-200'
                    }`}>
                      {skill.level}
                    </span>
                  </div>
                  
                  {/* Progress bar */}
                  <div className="mt-4 w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 transform origin-left ${
                        skill.level === 'Advanced' ? 'w-full' : skill.level === 'Intermediate' ? 'w-3/4' : 'w-1/2'
                      } group-hover:scale-x-110`}
                    ></div>
                  </div>
                </div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom decorative element */}
          <div className="flex justify-center mt-12">
            <div className="flex space-x-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className={`w-3 h-3 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 animate-pulse`} style={{animationDelay: `${i * 200}ms`}}></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
