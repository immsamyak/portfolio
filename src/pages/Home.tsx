import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';

const Home = () => {
  const featuredProjects = [
    {
      title: 'Khari Ride',
      description: 'Complete taxi ecosystem with driver & customer apps, real-time tracking, and payment integration.',
      tools: ['Flutter', 'Firebase', 'Dart', 'Google Maps'],
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
      demoUrl: '',
      codeUrl: '',
      category: 'Mobile App',
      status: 'Live Production'
    },
    {
      title: 'PubFlow SaaS',
      description: 'Enterprise financial management platform with POS integration, real-time analytics, and multi-tenant architecture.',
      tools: ['Laravel', 'Vue.js', 'MySQL', 'WebSockets'],
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      demoUrl: '',
      codeUrl: '',
      category: 'SaaS Platform',
      status: 'Enterprise'
    },
    {
      title: 'Mero Learning LMS',
      description: 'Full-featured e-learning ecosystem with course marketplace, instructor monetization, and cross-platform access.',
      tools: ['Flutter', 'Laravel', 'Firebase', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
      demoUrl: '',
      codeUrl: '',
      category: 'EdTech Platform',
      status: 'Growing User Base'
    }
  ];

  const achievements = [
    { number: '15+', label: 'Projects Delivered', icon: '🚀' },
    { number: '3+', label: 'Years Experience', icon: '⏳' },
    { number: '50+', label: 'Happy Clients', icon: '😊' },
    { number: '5★', label: 'Average Rating', icon: '⭐' }
  ];

  const techStack = [
    { name: 'Flutter', color: 'from-blue-400 to-blue-600', icon: '📱' },
    { name: 'Laravel', color: 'from-red-400 to-red-600', icon: '🚀' },
    { name: 'React', color: 'from-cyan-400 to-blue-500', icon: '⚛️' },
    { name: 'Firebase', color: 'from-yellow-400 to-orange-500', icon: '🔥' },
    { name: 'Node.js', color: 'from-green-400 to-green-600', icon: '🟢' },
    { name: 'MySQL', color: 'from-orange-400 to-yellow-500', icon: '🗄️' }
  ];

  const services = [
    {
      title: 'Mobile App Development',
      description: 'Cross-platform apps with Flutter for iOS and Android',
      icon: '📱',
      features: ['Real-time features', 'Push notifications', 'Offline support']
    },
    {
      title: 'SaaS Development',
      description: 'Scalable software solutions with subscription models',
      icon: '🏢',
      features: ['Multi-tenancy', 'Analytics dashboard', 'API integration']
    },
    {
      title: 'Full-Stack Development',
      description: 'Complete web applications with modern frameworks',
      icon: '🌐',
      features: ['Responsive design', 'Admin panels', 'Database design']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-12">
            {/* Animated greeting */}
            <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-full border border-indigo-200 dark:border-indigo-700">
              <span className="text-indigo-600 dark:text-indigo-400 font-medium">👋 Welcome to my portfolio</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 dark:from-white dark:via-indigo-200 dark:to-white bg-clip-text text-transparent">
                Hi, I'm{' '}
              </span>
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-pulse">
                Samyak Chaudahry
              </span>
            </h1>
            
            <div className="space-y-4 mb-8">
              <p className="text-2xl sm:text-3xl font-semibold text-slate-700 dark:text-slate-200">
                Full-Stack Developer & Technology Specialist
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
                🚀 Building the future with <span className="font-semibold text-indigo-600">3+ years</span> of expertise in cross-platform mobile apps, enterprise SaaS solutions, and modern web technologies. Currently pursuing Cybersecurity & Networking studies in Malaysia.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button to="/services" size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                🛠️ Explore My Services
              </Button>
              <Button to="/contact" variant="outline" size="lg" className="border-2 border-indigo-300 text-indigo-600 hover:bg-indigo-50 transform hover:scale-105 transition-all duration-300">
                💬 Let's Connect
              </Button>
            </div>
          </div>
          
          {/* Achievement Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20">
                  <div className="text-3xl mb-2 transform group-hover:scale-125 transition-transform duration-300">
                    {achievement.icon}
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-1">
                    {achievement.number}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-300 font-medium">
                    {achievement.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Tech Stack Showcase */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-200 mb-6">
              Powered by cutting-edge technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {techStack.map((tech, index) => (
                <div 
                  key={index} 
                  className="group relative"
                >
                  <div className={`px-6 py-3 bg-gradient-to-r ${tech.color} rounded-full text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 cursor-pointer`}>
                    <span className="mr-2">{tech.icon}</span>
                    {tech.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-indigo-900 dark:from-white dark:to-indigo-200 bg-clip-text text-transparent mb-6">
              What I Can Build For You
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              From concept to deployment, I deliver comprehensive digital solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group relative">
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-slate-200 dark:border-slate-700">
                  <div className="text-4xl mb-4 transform group-hover:scale-125 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-full border border-indigo-200 dark:border-indigo-700">
              <span className="text-indigo-600 dark:text-indigo-400 font-medium">🎯 Featured Work</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 dark:from-white dark:via-indigo-200 dark:to-white bg-clip-text text-transparent mb-6">
              Enterprise-Grade Projects
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Real-world applications serving thousands of users across different industries
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl bg-white dark:bg-slate-800 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4"
              >
                {/* Project status badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-bold rounded-full border border-green-200">
                    {project.status}
                  </span>
                </div>
                
                {/* Image with overlay */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                  
                  {/* Category badge */}
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-white/30">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tools.map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-semibold rounded-lg border border-indigo-200 dark:border-indigo-700 transform hover:scale-105 transition-transform duration-200"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action buttons */}
                  <div className="flex gap-3">
                    <button className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                      📱 View Details
                    </button>
                    <button className="px-4 py-3 border-2 border-indigo-200 dark:border-indigo-700 text-indigo-600 dark:text-indigo-400 rounded-xl font-semibold hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transform hover:scale-105 transition-all duration-300">
                      🔗
                    </button>
                  </div>
                </div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* View all projects */}
          <div className="text-center mt-16">
            <Button 
              to="/projects" 
              variant="outline"
              className="px-12 py-4 text-lg font-bold border-2 border-indigo-300 text-indigo-600 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 hover:text-white hover:border-transparent transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl rounded-xl"
            >
              🚀 Explore All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and turn your ideas into powerful digital solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              to="/contact" 
              className="bg-white text-indigo-600 hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl px-8 py-4 text-lg font-bold"
            >
              💬 Start a Conversation
            </Button>
            <Button 
              to="/services" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 transform hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-bold"
            >
              📋 View Services & Pricing
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
