import FadeIn from '../components/ui/FadeIn';
import { WordsPullUpMultiStyle } from '../components/ui/WordsPullUpMultiStyle';
import { ScrollRevealText } from '../components/ui/ScrollRevealText';

const About = () => {
  const skills = [
    { name: 'Flutter', level: 'Advanced' },
    { name: 'Laravel', level: 'Advanced' },
    { name: 'MERN Stack', level: 'Intermediate' },
    { name: 'Cybersecurity', level: 'Fundamentals' },
    { name: 'API Development', level: 'Intermediate' },
    { name: 'Server & Cloud', level: 'Intermediate' },
  ];

  return (
    <div className="pt-24 pb-12 px-4 md:px-6 min-h-screen bg-black">
      {/* Inner Card container matching Prisma style */}
      <div className="max-w-6xl mx-auto bg-[#101010] rounded-[2rem] p-8 md:p-16 lg:p-24 flex flex-col items-center justify-center text-center min-h-[80vh]">
        
        <FadeIn>
          <span className="text-primary text-[10px] sm:text-xs uppercase tracking-widest font-medium mb-12 block">
            Cybersecurity & Development
          </span>
        </FadeIn>

        <WordsPullUpMultiStyle 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-4xl mx-auto leading-[0.95] sm:leading-[0.9] text-primary"
          segments={[
            { text: "I am Samyak Chaudhary,", className: "font-normal" },
            { text: "a full-stack developer.", className: "font-serif italic text-primary" },
            { text: "I have skills in Flutter, Laravel, and enterprise architecture.", className: "font-normal" }
          ]}
        />

        <div className="mt-16 sm:mt-24 max-w-2xl mx-auto">
          <ScrollRevealText 
            className="text-primary text-xs sm:text-sm md:text-base leading-relaxed"
            text="Over the last 3 years, I have worked extensively with clients across the globe, crafting cross-platform applications and robust web platforms. Currently pursuing a specialization in Cybersecurity, I am passionate about writing secure, performant code that solves real-world challenges. Together, we can build digital solutions that not only look cinematic, but scale gracefully under pressure."
          />
        </div>

        <div className="mt-24 w-full max-w-4xl border-t border-white/5 pt-16">
          <FadeIn>
            <h3 className="text-sm uppercase tracking-widest text-primary/50 mb-8">Core Expertise</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((s) => (
                <span key={s.name} className="px-6 py-3 rounded-full border border-white/10 text-primary text-sm hover:bg-white/5 transition-colors">
                  {s.name}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default About;
