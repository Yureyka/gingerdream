import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import styles from "./Animated.module.scss";

export const Animated = ({
  children,
  delay = 0.3,
  duration = 0.7,
  variants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  },
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} className={styles.wrapper}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={controls}
        transition={{ duration: duration, delay: delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};
