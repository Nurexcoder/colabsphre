import * as React from "react"
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';

export const CollabSphereLogo = ({ size = 32 }) => (
  <motion.div
    className="relative"
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-label="CollabSphere Logo"
      xmlns="http://www.w3.org/2000/svg"
      className="relative z-10"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <motion.circle 
        cx="24" 
        cy="24" 
        r="22" 
        fill="#2563eb" 
        opacity="0.12"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.circle 
        cx="24" 
        cy="24" 
        r="16" 
        fill="#2563eb" 
        opacity="0.18"
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }}
      />
      <motion.circle 
        cx="24" 
        cy="24" 
        r="10" 
        fill="#2563eb"
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
      />
      <motion.g
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <motion.circle 
          cx="36" 
          cy="16" 
          r="4" 
          fill="#38bdf8"
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.1 }}
        />
        <motion.circle 
          cx="12" 
          cy="32" 
          r="4" 
          fill="#38bdf8"
          animate={{ y: [0, 2, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
        />
        <motion.circle 
          cx="36" 
          cy="32" 
          r="2.5" 
          fill="#a5b4fc"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, delay: 0.5 }}
        />
        <motion.circle 
          cx="12" 
          cy="16" 
          r="2.5" 
          fill="#a5b4fc"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, delay: 0.7 }}
        />
      </motion.g>
    </motion.svg>
    
    <motion.div
      className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/30 to-cyan-400/30 blur-md"
      animate={{ 
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.6, 0.3]
      }}
      transition={{ duration: 3, repeat: Infinity }}
    />
  </motion.div>
);