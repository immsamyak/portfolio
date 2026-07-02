import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '../../lib/utils';

interface TextSegment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: TextSegment[];
  className?: string;
}

export function WordsPullUpMultiStyle({ segments, className }: WordsPullUpMultiStyleProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  
  // Flatten all words across segments so we can stagger them sequentially
  let globalWordIndex = 0;

  return (
    <div ref={ref} className={cn("inline-flex flex-wrap justify-center", className)}>
      {segments.map((segment, segmentIndex) => {
        const words = segment.text.split(' ');
        return (
          <span key={segmentIndex} className={cn("inline-flex flex-wrap mr-[0.3em]", segment.className)}>
            {words.map((word, wordIndex) => {
              const currentIndex = globalWordIndex++;
              return (
                <div key={wordIndex} className="overflow-hidden inline-block mr-[0.25em] relative">
                  <motion.span
                    className="inline-block"
                    initial={{ y: "100%" }}
                    animate={isInView ? { y: 0 } : { y: "100%" }}
                    transition={{
                      delay: currentIndex * 0.08,
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {word}
                  </motion.span>
                </div>
              );
            })}
          </span>
        );
      })}
    </div>
  );
}
