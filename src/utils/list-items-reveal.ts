import { stagger, type Variants } from "motion/react";

export const container: Variants = {
  hidden: {},
  visible: { transition: { delayChildren: stagger(0.32) } }, // 120ms between each child
};

export const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
};

