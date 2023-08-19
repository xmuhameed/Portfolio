'use client'
import React, { Children } from 'react'
import { motion, useAnimationControls, transform } from 'framer-motion';

export function TextSpan () {
    const sensitive = " Mohamed".split("");
    return (
    sensitive.map((l, i) => {
    return <SensitiveText key={i}>{l}</SensitiveText>;
})
);
}

export const SensitiveText = ({ Children }) => {
  const controls = useAnimationControls();
  const rubberBand = () => {
    controls.start({
      transform: [
        "scale3d(1, 1, 1)",
        "scale3d(1.4, .55, 1)",
        "scale3d(.75, 1.25, 1)",
        "scale3d(1.25, .85, 1)",
        "scale3d(.9, 1.05, 1)",
        "scale3d(1, 1, 1)",
      ]
    });
  };
  return (
    <motion.span
      animate={controls}
      onMouseOver={() => rubberBand()}
    >
      {Children}
    </motion.span>
  );
};