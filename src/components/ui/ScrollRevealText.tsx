import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedLetterProps {
  children: React.ReactNode;
  charProgress: number; // 0 to 1 representing position of this char in the text
}

export function AnimatedLetter({ children, charProgress }: AnimatedLetterProps) {
  return (
    <motion.span
      className="inline-block relative"
      // we'll pass the scroll progress from parent
    >
      {children}
    </motion.span>
  );
}

// Actually, it's better to implement the scroll-linked text component entirely.
export function ScrollRevealText({ text, className }: { text: string; className?: string }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2']
  });

  const chars = text.split('');

  return (
    <span ref={containerRef} className={className}>
      {chars.map((char, i) => {
        const start = i / chars.length - 0.1;
        const end = start + 0.15;
        const opacity = useTransform(scrollYProgress, [Math.max(0, start), Math.min(1, end)], [0.2, 1]);
        
        return (
          <motion.span key={i} style={{ opacity }}>
            {char}
          </motion.span>
        );
      })}
    </span>
  );
}
