import { useInView } from "react-intersection-observer";
import { motion, Variants } from "framer-motion";

export function useScrollAnimation(threshold: number = 0.2) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold });

  const animationVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return { ref, inView, animationVariants };
}