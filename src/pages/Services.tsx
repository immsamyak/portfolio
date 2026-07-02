import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { WordsPullUpMultiStyle } from '../components/ui/WordsPullUpMultiStyle';
import { Link } from 'react-router-dom';

const ServiceCard = ({ 
  title, 
  number, 
  icon, 
  items, 
  delay 
}: { 
  title: string; 
  number: string; 
  icon: string; 
  items: string[]; 
  delay: number 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="bg-[#212121] rounded-2xl p-6 md:p-8 h-full flex flex-col group relative overflow-hidden"
    >
      <div className="flex justify-between items-start mb-8">
        <img src={icon} alt="" className="w-10 h-10 sm:w-12 sm:h-12 rounded opacity-80" />
        <span className="text-gray-500 font-mono text-sm">{number}</span>
      </div>
      
      <h3 className="text-xl sm:text-2xl font-normal text-primary mb-6">{title}</h3>
      
      <ul className="space-y-4 mb-12 flex-grow">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
            <Check className="w-5 h-5 text-primary shrink-0" />
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>

      <Link to="/contact" className="inline-flex items-center gap-2 text-primary text-sm hover:text-white transition-colors mt-auto">
        Learn more <ArrowRight className="w-4 h-4 -rotate-45" />
      </Link>
    </motion.div>
  );
};

const Services = () => {
  return (
    <div className="min-h-screen bg-black relative pt-24 pb-12 px-4 md:px-6">
      {/* Background Noise */}
      <div className="bg-noise opacity-[0.15]" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="mb-16">
          <WordsPullUpMultiStyle 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal"
            segments={[
              { text: "Studio-grade engineering for visionary founders.", className: "text-primary block mb-2" },
              { text: "Built for pure scale. Powered by code.", className: "text-gray-500 block" }
            ]}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 md:gap-1 lg:h-[480px]">
          
          {/* Card 1: Video Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl relative overflow-hidden min-h-[300px] lg:min-h-full"
          >
            <video
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay loop muted playsInline
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
              <span className="text-[#E1E0CC] text-lg md:text-xl font-normal">Your digital canvas.</span>
            </div>
          </motion.div>

          <ServiceCard 
            delay={0.3}
            number="01"
            title="Mobile & SaaS."
            icon="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85"
            items={[
              "Cross-platform Flutter apps",
              "Multi-tenant SaaS architectures",
              "Real-time Firebase integration",
              "Advanced routing & state management"
            ]}
          />

          <ServiceCard 
            delay={0.45}
            number="02"
            title="Enterprise Web."
            icon="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85"
            items={[
              "MERN stack & Laravel systems",
              "Complex E-learning platforms",
              "Payment gateway integration",
              "Dynamic inventory management"
            ]}
          />

          <ServiceCard 
            delay={0.6}
            number="03"
            title="DevOps & Cloud."
            icon="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85"
            items={[
              "Server & SSL configuration",
              "Deployment automation workflows",
              "Cybersecurity best practices",
              "Cloud infrastructure scaling"
            ]}
          />

        </div>
      </div>
    </div>
  );
};

export default Services;
