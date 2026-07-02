import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { WordsPullUp } from '../components/ui/WordsPullUp';

const Home = () => {
  return (
    <div className="w-full h-screen p-4 md:p-6 bg-black">
      <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden bg-[#101010]">
        {/* Background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4" type="video/mp4" />
        </video>

        {/* Overlays */}
        <div className="noise-overlay opacity-[0.7] mix-blend-overlay pointer-events-none z-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 z-0 pointer-events-none" />

        {/* Hero Content aligned bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-10 px-6 pb-8 md:pb-12 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4 items-end">
            
            {/* Left: Giant Heading */}
            <div className="md:col-span-8">
              <WordsPullUp 
                text="Samyak" 
                showAsterisk={true}
                className="text-[26vw] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw] font-medium leading-[0.85] tracking-[-0.07em] text-primary"
              />
            </div>

            {/* Right: Description & CTA */}
            <div className="md:col-span-4 flex flex-col gap-6 md:gap-8 pb-4">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-primary/70 text-xs sm:text-sm md:text-base leading-[1.2]"
              >
                Samyak is a full-stack developer and technology specialist bound not by place or labels, but by passion and hunger to unlock potential through robust digital solutions.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link to="/projects" className="group inline-flex items-center bg-primary rounded-full pl-6 pr-2 py-2 gap-4 hover:gap-6 transition-all duration-300">
                  <span className="text-black font-medium text-sm sm:text-base whitespace-nowrap">View projects</span>
                  <div className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <ArrowRight className="text-primary w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </Link>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
