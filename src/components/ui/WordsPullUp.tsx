import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '../../lib/utils';

interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
}

export function WordsPullUp({ text, className, showAsterisk }: WordsPullUpProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const words = text.split(' ');

  return (
    <div ref={ref} className={cn("inline-flex flex-wrap relative", className)}>
      {words.map((word, i) => {
        const isLastWord = i === words.length - 1;
        return (
          <div key={i} className="overflow-hidden inline-block mr-[0.2em] relative">
            <motion.span
              className="inline-block relative"
              initial={{ y: "100%" }}
              animate={isInView ? { y: 0 } : { y: "100%" }}
              transition={{
                delay: i * 0.08,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {word}
              {showAsterisk && isLastWord && (
                <span className="absolute top-[0.65em] -right-[0.3em] text-[0.31em]">
                  *
                </span>
              )}
            </motion.span>
          </div>
        );
      })}
    </div>
  );
}
