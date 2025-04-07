'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';
import { Link } from 'react-scroll';

interface NavItem {
  id: string;
  label: string;
}

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const navItems: NavItem[] = [
    { id: 'home', label: 'דף הבית' },
    { id: 'about', label: 'אודות' },
    { id: 'services', label: 'שירותים' },
    { id: 'team', label: 'הצוות שלנו' },
    { id: 'testimonials', label: 'המלצות' },
    { id: 'contact', label: 'צור קשר' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.header
      className={`fixed top-0 right-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-neomorphic py-2'
          : 'bg-transparent py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      dir="rtl"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="h-12 w-auto relative">
              <div className="h-full w-40 bg-gradient-to-l from-primary to-secondary rounded-md flex items-center justify-center text-white font-bold">
                משרד עורכי דין דלתא
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 space-x-reverse">
            {navItems.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="relative px-4 py-2 mx-1 text-gray-800 hover:text-primary transition-colors duration-300 cursor-pointer text-sm font-medium rounded-md hover:bg-gray-100/50"
                  aria-label={item.label}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Contact Button */}
          <motion.div
            className="hidden md:block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="tel:+972123456789"
              className="glassmorphism-button flex items-center space-x-2 space-x-reverse px-5 py-2 rounded-md bg-primary/90 text-white transition-all duration-300 hover:shadow-lg"
              aria-label="התקשר אלינו"
            >
              <FiPhone className="ml-2" />
              <span>התקשר עכשיו</span>
            </a>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              className="p-2 rounded-full bg-white/80 shadow-neomorphic text-gray-800 focus:outline-none"
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
              aria-label={isOpen ? 'סגור תפריט' : 'פתח תפריט'}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden absolute top-full right-0 left-0 bg-white/95 backdrop-blur-md shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    to={item.id}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="px-4 py-3 text-gray-800 hover:text-primary hover:bg-gray-100/50 rounded-md transition-colors duration-300"
                    onClick={toggleMenu}
                    aria-label={item.label}
                  >
                    {item.label}
                  </Link>
                ))}
                <a
                  href="tel:+972123456789"
                  className="flex items-center justify-center space-x-2 space-x-reverse px-4 py-3 bg-primary/90 text-white rounded-md shadow-sm"
                  aria-label="התקשר אלינו"
                >
                  <FiPhone className="ml-2" />
                  <span>התקשר עכשיו</span>
                </a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default NavBar;