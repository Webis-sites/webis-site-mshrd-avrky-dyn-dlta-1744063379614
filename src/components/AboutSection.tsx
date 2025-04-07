'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FaBalanceScale, FaRegClock, FaRegHandshake, FaUserMd } from 'react-icons/fa';

interface StatisticProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const Statistic: React.FC<StatisticProps> = ({ icon, value, label }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white bg-opacity-10 backdrop-blur-md rounded-xl shadow-neomorphic">
      <div className="text-primary text-3xl mb-2">{icon}</div>
      <div className="text-3xl font-bold mb-1">{value}</div>
      <div className="text-secondary text-sm">{label}</div>
    </div>
  );
};

const AboutSection: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="about-section py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-50 to-gray-100 rtl" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <motion.div variants={itemVariants} className="order-2 lg:order-1">
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 border-r-4 border-primary pr-4"
            >
              אודות משרד עורכי דין דלתא
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-gray-700 mb-6 leading-relaxed">
              משרד עורכי דין דלתא הוקם בשנת 2005 והתמחה מאז בייצוג לקוחות בתחום הבריאות. המשרד שלנו מביא ניסיון של למעלה מ-18 שנים בטיפול בסוגיות משפטיות מורכבות עבור מוסדות רפואיים, רופאים, וארגוני בריאות.
            </motion.p>
            
            <motion.p variants={itemVariants} className="text-gray-700 mb-6 leading-relaxed">
              הצוות המקצועי שלנו כולל עורכי דין בעלי מומחיות ייחודית בחוקי הבריאות, רגולציה רפואית, רשלנות רפואית, וזכויות מטופלים. אנו מחויבים לספק ייעוץ משפטי ברמה הגבוהה ביותר תוך הבנה מעמיקה של האתגרים הייחודיים בסקטור הבריאות.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="p-6 bg-white bg-opacity-20 backdrop-blur-md rounded-xl shadow-neomorphic mb-6"
            >
              <h3 className="text-xl font-bold mb-3 text-gray-800">הגישה שלנו</h3>
              <p className="text-gray-700 leading-relaxed">
                אנו מאמינים בגישה אישית ומותאמת לכל לקוח, תוך הבנה שכל מקרה הוא ייחודי ודורש פתרונות מותאמים. המשרד שלנו משלב מומחיות משפטית עם הבנה מעמיקה של עולם הרפואה, מה שמאפשר לנו לספק ייעוץ וייצוג אפקטיבי במיוחד.
              </p>
            </motion.div>
            
            <motion.button 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white py-3 px-8 rounded-lg shadow-neomorphic-button hover:shadow-neomorphic-button-hover transition-all duration-300"
            >
              צור קשר לייעוץ ראשוני
            </motion.button>
          </motion.div>
          
          {/* Image & Statistics */}
          <motion.div variants={itemVariants} className="order-1 lg:order-2 space-y-8">
            <div className="relative">
              <div className="absolute inset-0 bg-primary bg-opacity-10 rounded-2xl transform rotate-3"></div>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="relative overflow-hidden rounded-2xl shadow-neomorphic"
              >
                <img 
                  src="/images/law-office.jpg" 
                  alt="משרד עורכי דין דלתא" 
                  className="w-full h-auto object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                <div className="absolute bottom-0 right-0 p-6">
                  <p className="text-white text-xl font-bold">מומחים בחוק הבריאות</p>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 gap-4"
            >
              <Statistic 
                icon={<FaRegClock />} 
                value="18+" 
                label="שנות ניסיון" 
              />
              <Statistic 
                icon={<FaUserMd />} 
                value="200+" 
                label="לקוחות בתחום הרפואה" 
              />
              <Statistic 
                icon={<FaBalanceScale />} 
                value="95%" 
                label="הצלחה בתיקים" 
              />
              <Statistic 
                icon={<FaRegHandshake />} 
                value="500+" 
                label="תיקים שטופלו" 
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;