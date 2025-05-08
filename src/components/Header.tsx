import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { categories } from '../data/carData';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Handle scroll event to change header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        isScrolled 
          ? 'bg-dark-300/40 backdrop-blur-md shadow-lg border-b border-white/10' 
          : 'bg-gradient-to-b from-dark-900/50 to-transparent backdrop-blur-sm'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 50, damping: 20 }}
    >
      <div className="py-4 container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="/" 
              className="relative flex items-center space-x-3 text-white group"
            >
              <div className="relative">
                {/* Logo Background Effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-600 to-primary-400 blur-2xl opacity-20 animate-pulse" />
                
                {/* Custom SVG Logo */}
                <motion.div
                  className="relative z-10 p-3 border rounded-full bg-gradient-to-br from-dark-800 to-dark-900 border-primary-500/20"
                  animate={{
                    rotate: [0, -5, 5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {/* Speed Lines */}
                  <div className="absolute inset-0 -m-1">
                    <motion.div
                      className="w-full h-full border-2 border-dashed rounded-full border-primary-400/30"
                      animate={{ rotate: [0, 360] }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  </div>

                  {/* Custom Car SVG */}
                  <div className="relative w-7 h-7">
                    <motion.svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full"
                    >
                      <motion.path
                        d="M3 12h18"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        className="text-primary-400"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{
                          duration: 1.5,
                          ease: "easeInOut",
                          delay: 0.2
                        }}
                      />
                      <motion.path
                        d="M16.5 7.5L19 12l-2.5 4.5M7.5 7.5L5 12l2.5 4.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary-400"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{
                          duration: 1.5,
                          ease: "easeInOut",
                          delay: 0.4
                        }}
                      />
                      <motion.path
                        d="M7.5 12c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5-4.5-2-4.5-4.5z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="text-primary-400"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{
                          duration: 2,
                          ease: "easeInOut",
                          delay: 0.6
                        }}
                      />
                      <motion.circle
                        cx="12"
                        cy="12"
                        r="2"
                        fill="currentColor"
                        className="text-primary-400"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          duration: 0.5,
                          ease: "backOut",
                          delay: 1
                        }}
                      />
                    </motion.svg>

                    {/* Accent Dot */}
                    <motion.div
                      className="absolute w-2 h-2 rounded-full -right-1 -top-1 bg-primary-400"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    />
                  </div>
                </motion.div>
              </div>
              
              {/* Logo Text */}
              <div className="flex items-baseline space-x-1">
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-primary-300 via-primary-400 to-primary-300 bg-clip-text">
                    Torque
                  </span>
                  {/* Animated underline */}
                  <motion.div 
                    className="absolute -bottom-0.5 left-0 h-[2px] bg-primary-500/50"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                      delay: 0.5
                    }}
                  />
                </motion.div>
                <motion.span
                  className="text-2xl font-medium text-white/90"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  View
                </motion.span>
              </div>
            </Link>
          </motion.div>
          
          {/* Desktop Navigation */}
          <nav className="items-center hidden space-x-8 md:flex">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-sm font-medium transition-all duration-300 hover:text-primary-400 relative group ${
                  isActive ? 'text-primary-500' : 'text-white/90'
                }`
              }
            >
              <motion.span
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                className="relative"
              >
                Home
                <span className="absolute bottom-0 left-0 right-0 h-px transition-transform duration-300 scale-x-0 bg-gradient-to-r from-transparent via-primary-500 to-transparent group-hover:scale-x-100" />
              </motion.span>
            </NavLink>
            
            {/* Categories Dropdown */}
            <div className="relative">
              <motion.button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center text-sm font-medium transition-all duration-300 hover:text-primary-400 text-white/90"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                Categories 
                <motion.div
                  animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-4 h-4 ml-1" />
                </motion.div>
              </motion.button>
              
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div 
                    className="absolute right-0 w-48 mt-2 overflow-hidden border shadow-lg top-full rounded-xl bg-dark-200/80 backdrop-blur-lg border-white/5"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <div className="py-1">
                      {categories.map((category, index) => (
                        <motion.div
                          key={category.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <NavLink
                            to={`/category/${category.id}`}
                            className={({ isActive }) =>
                              `block px-4 py-2 text-sm hover:bg-white/5 transition-all duration-300 ${
                                isActive 
                                  ? 'text-primary-400 bg-dark-300/50' 
                                  : 'text-white/90 hover:text-primary-400'
                              }`
                            }
                          >
                            {category.name}
                          </NavLink>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6 text-gray-100" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6 text-gray-100" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav 
            className="border-b md:hidden bg-dark-300/80 backdrop-blur-lg border-white/5"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.div 
              className="py-4 space-y-4 container-custom"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <motion.div
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 text-base font-medium transition-all duration-300 ${
                      isActive ? 'text-primary-400 bg-white/5 px-4 rounded-lg' : 'text-white/90 hover:text-primary-400'
                    }`
                  }
                >
                  Home
                </NavLink>
              </motion.div>
              
              <div className="py-2 border-t border-white/10">
                <p className="px-2 mb-2 text-sm text-gray-400">Categories</p>
                <div className="space-y-1">
                  {categories.map((category, index) => (
                    <motion.div
                      key={category.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ x: 10 }}
                    >
                      <NavLink
                        to={`/category/${category.id}`}
                        className={({ isActive }) =>
                          `block py-2 px-4 text-base font-medium transition-all duration-300 ${
                            isActive 
                              ? 'text-primary-400 bg-white/5 rounded-lg' 
                              : 'text-white/90 hover:text-primary-400 hover:bg-white/5 rounded-lg'
                          }`
                        }
                      >
                        {category.name}
                      </NavLink>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;