import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

const Services = () => {
  const services = [
    {
      icon: '�',
      title: 'Mobile App Development',
      price: '$300 - $800',
      description: 'Cross-platform mobile apps using Flutter. From ride-booking apps to social platforms and e-learning systems.',
      deliveryTime: '2-4 weeks',
      tools: ['Flutter', 'Dart', 'Firebase', 'GetX'],
      features: ['Cross-platform', 'Real-time features', 'Push notifications', 'Offline support']
    },
    {
      icon: '🌐',
      title: 'Full-Stack Web Development',
      price: '$400 - $1200',
      description: 'Complete web applications using MERN stack or Laravel. E-commerce, SaaS platforms, and business management systems.',
      deliveryTime: '2-6 weeks',
      tools: ['Laravel', 'MERN Stack', 'Vue.js', 'MySQL', 'MongoDB'],
      features: ['Admin panels', 'User authentication', 'API development', 'Database design']
    },
    {
      icon: '�',
      title: 'SaaS Development',
      price: '$800 - $2000',
      description: 'Software as a Service platforms with subscription models, real-time insights, and multi-tenant architecture.',
      deliveryTime: '4-8 weeks',
      tools: ['Laravel', 'Vue.js', 'MySQL', 'Stripe', 'WebSockets'],
      features: ['Multi-tenancy', 'Subscription billing', 'Real-time dashboards', 'API integration']
    },
    {
      icon: '🎓',
      title: 'E-Learning Platforms',
      price: '$600 - $1500',
      description: 'Learning Management Systems with course creation, instructor monetization, and mobile apps.',
      deliveryTime: '3-6 weeks',
      tools: ['Flutter', 'Laravel', 'Firebase', 'Payment Gateways'],
      features: ['Course marketplace', 'Video streaming', 'Progress tracking', 'Certification']
    },
    {
      icon: '🎨',
      title: 'Presentation Design',
      price: '$15 - $50',
      description: 'Professional business and academic presentations with modern layouts, branding, and creative elements.',
      deliveryTime: '1-3 days',
      tools: ['PowerPoint', 'Figma', 'Canva', 'Adobe Creative Suite'],
      features: ['Custom layouts', 'Brand consistency', 'Interactive elements', 'Multiple formats']
    },
    {
      icon: '🔧',
      title: 'Server & DevOps Setup',
      price: '$100 - $300',
      description: 'Server configuration, SSL setup, domain management, cPanel/aaPanel setup, and deployment automation.',
      deliveryTime: '1-2 weeks',
      tools: ['Ubuntu', 'Apache', 'cPanel', 'Cloudflare', 'SSL'],
      features: ['Server optimization', 'SSL certificates', 'Domain setup', 'Backup solutions']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">
            Services & Freelance Offerings
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-4">
            3+ years experience in full-stack development, mobile apps, SaaS platforms, and creative services. Specializing in Flutter, Laravel, MERN stack, and modern web technologies.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-2">
            <a
              href="https://www.upwork.com/freelancers/~017010af70d435bc3f"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Upwork Profile
            </a>
            <a
              href="https://www.fiverr.com/alvysamy/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-[#1dbf73] text-white rounded-lg font-semibold hover:bg-[#159c5b] transition-colors"
            >
              Fiverr Profile
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} hover className="rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="text-3xl mb-4">{service.icon}</div>
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {service.title}
                  </h3>
                  <span className="text-indigo-600 font-bold text-lg">
                    {service.price}
                  </span>
                </div>
                <p className="text-slate-600 mb-4 flex-grow">
                  {service.description}
                </p>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500">Delivery:</span>
                    <span className="font-medium text-indigo-600">{service.deliveryTime}</span>
                  </div>
                  
                  <div>
                    <p className="text-sm text-slate-500 mb-2">Tools used:</p>
                    <div className="flex flex-wrap gap-1">
                      {service.tools.map((tool, toolIndex) => (
                        <span
                          key={toolIndex}
                          className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm text-slate-500 mb-2">Features:</p>
                    <ul className="text-xs text-slate-600 space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <span className="w-1 h-1 bg-indigo-600 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Discovery & Planning
              </h3>
              <p className="text-slate-600">
                We analyze your requirements, define the tech stack, and create a detailed project roadmap
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Development & Testing
              </h3>
              <p className="text-slate-600">
                I build your solution using modern frameworks with regular updates and thorough testing
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Deployment & Support
              </h3>
              <p className="text-slate-600">
                Your project goes live with server setup, SSL configuration, and ongoing maintenance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Let's discuss your project and bring your vision to life
          </p>
          <Button to="/contact" size="lg">
            Start Your Project
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
