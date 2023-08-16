"use client";

import { primaryColor } from "@/constants";
import { motion } from "framer-motion";

const draw = {
  hidden: { fill: `${primaryColor}00`, pathLength: 0 },
  visible: {
    fill: `${primaryColor}FF`,
    pathLength: 1,
    transition: { duration: 0.8 },
  },
  hover: {
    fill: `${primaryColor}99`,
    pathLength: 0,
    transition: { duration: 0.5 },
  },
};

type Props = {};

export function Logo({}: Props) {
  return (
    <div className='stroke-2'>
      <motion.svg
        initial='hidden'
        whileInView='visible'
        whileHover='hover'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 575.57 635.27'
      >
        <motion.g>
          <motion.polygon
            className='stroke-primary'
            strokeWidth='20'
            variants={draw}
            transition={{ duration: 2 }}
            points='278.5 145 481.85 366.92 481.85 302.82 481.85 203.8 385.04 147.66 287.78 91.51 287.34 91.95 355.87 22.55 431.9 66.31 575.57 149.42 575.57 302.82 575.57 469.05 481.85 523.42 278.5 297.08 278.5 466.83 184.79 412.9 184.79 198.94 278.5 145'
          />
          <polygon
            className='fill-foreground'
            points='238.27 108.31 217.94 119.8 93.72 190.98 93.72 302.82 93.72 415.11 190.97 470.8 287.78 526.95 385.04 470.8 404.5 459.76 404.5 568.07 287.78 635.27 144.11 552.15 0 469.05 0 302.82 0 136.6 171.08 38.46 238.27 0 238.27 108.31'
          />
        </motion.g>
      </motion.svg>
    </div>
  );
}
