'use client';

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBalanceScale, FaArrowLeft } from 'react-icons/fa';

interface HeroSectionProps {
  onCtaClick?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const handleCtaClick = () => {
    if (onCtaClick) {
      onCtaClick();
    }
  };

  return (
    <section 
      dir="rtl" 
      className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100"
      ref={ref}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-pattern"></div>
      </div>

      {/* Background Blur Elements */}
      <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-primary opacity-20 blur-3xl"></div>
      <div className="absolute top-1/2 -left-32 h-96 w-96 rounded-full bg-secondary opacity-15 blur-3xl"></div>
      
      {/* Main Content Container */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          className="w-full max-w-4xl text-center"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Icon */}
          <motion.div 
            variants={itemVariants} 
            className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-neomorphic"
          >
            <FaBalanceScale className="h-12 w-12 text-primary" />
          </motion.div>

          {/* Headline */}
          <motion.h1 
            variants={itemVariants}
            className="mb-6 font-heading text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl"
          >
            משרד עורכי דין מוביל בישראל
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            variants={itemVariants}
            className="mb-10 text-xl text-gray-600 md:text-2xl"
          >
            חווית לקוח מושלמת בכל ביקור
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={itemVariants}>
            <button
              onClick={handleCtaClick}
              className="glassmorphic-button group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-primary to-primary/80 px-8 py-4 text-lg font-medium text-white transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <span className="relative flex items-center gap-2">
                קבע תור עכשיו
                <FaArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              </span>
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3"
          >
            {[
              { title: 'מקצועיות', description: 'צוות מומחים בעל ניסיון רב' },
              { title: 'אמינות', description: 'שירות אישי ויחס מכבד' },
              { title: 'הצלחה', description: 'תוצאות מוכחות לאורך שנים' }
            ].map((item, index) => (
              <div 
                key={index} 
                className="rounded-xl bg-white bg-opacity-50 p-6 shadow-neomorphic backdrop-blur-sm transition-all duration-300 hover:shadow-neomorphic-hover"
              >
                <h3 className="mb-2 text-xl font-bold text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;