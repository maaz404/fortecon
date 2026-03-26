import { motion, useScroll, useTransform, useViewportScroll } from 'framer-motion';
import { useRef } from 'react';

export function ParallaxImage({ src, offset = 50, children }) {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, offset]);

  return (
    <motion.div ref={ref} style={{ y }} className="relative overflow-hidden">
      <img src={src} alt="Parallax" className="w-full h-full object-cover" />
      {children}
    </motion.div>
  );
}

export function ParallaxText({ children, offset = 100 }) {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, offset]);

  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  );
}

export function ScrollReveal({ children, threshold = 0.1 }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 80%', 'start 20%'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

  return (
    <motion.div ref={ref} style={{ opacity, y }}>
      {children}
    </motion.div>
  );
}

export function ParallaxBg({ bgImage, speed = 0.5 }) {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1500], [0, 300 * speed]);

  return (
    <motion.div
      ref={ref}
      style={{
        y,
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="absolute inset-0"
    />
  );
}
