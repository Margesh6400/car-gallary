import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Download, Users, Image, Star, ChevronDown } from 'lucide-react';
import { categories, getFeaturedWallpapers } from '../data/carData';

const Hero: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const featuredImages = getFeaturedWallpapers().slice(0, 5);  // Get first 5 featured wallpapers
  
  // Image rotation effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === featuredImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, [featuredImages.length]);

  const stats = [
    { icon: <Download className="w-5 h-5" />, value: "10K+", label: "Downloads" },
    { icon: <Users className="w-5 h-5" />, value: "5K+", label: "Users" },
    { icon: <Image className="w-5 h-5" />, value: "1K+", label: "Wallpapers" },
    { icon: <Star className="w-5 h-5" />, value: "4.9", label: "Rating" },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Dynamic Background */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative h-full">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              src={featuredImages[currentImageIndex].imageUrl}
              alt={featuredImages[currentImageIndex].title}
              className="object-cover w-full h-full"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            />
          </AnimatePresence>
          {/* Multiple gradient overlays for depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900/95 via-dark-900/80 to-dark-900/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent" />
        </div>
      </motion.div>

      {/* Image Navigation Dots */}
      <div className="absolute z-10 transform -translate-x-1/2 bottom-32 left-1/2">
        <div className="flex space-x-2">
          {featuredImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentImageIndex === index 
                  ? 'bg-primary-500 w-4' 
                  : 'bg-gray-400/50 hover:bg-gray-400'
              }`}
              aria-label={`Switch to image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative min-h-screen container-custom">
        <div className="grid h-full gap-12 pt-32 pb-48 lg:grid-cols-2">
          {/* Left Column - Main Content */}
          <motion.div 
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
                  Discover
                </span>
                <span className="block mt-2 text-white">
                  Stunning Car
                </span>
                <span className="block mt-2 text-gray-400">
                  Wallpapers
                </span>
              </h1>
            </motion.div>

            <motion.p 
              className="max-w-xl mt-8 text-xl text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Explore our curated collection of high-resolution automotive wallpapers.
              From classic beauties to modern supercars.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/category/featured"
                  className="inline-flex items-center px-8 py-4 space-x-2 font-medium text-white transition-colors duration-300 rounded-full shadow-lg bg-primary-500 hover:bg-primary-600 hover:shadow-primary-500/25"
                >
                  <span>Explore Collection</span>
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/category/latest"
                  className="inline-flex items-center px-8 py-4 space-x-2 font-medium text-gray-300 transition-all duration-300 border border-gray-700 rounded-full hover:bg-white/5 hover:border-gray-500"
                >
                  <span>Latest Additions</span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Stats Section */}
            <motion.div 
              className="grid grid-cols-2 gap-6 mt-12 sm:grid-cols-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="p-4 text-center border border-gray-800 rounded-xl bg-dark-800/50 backdrop-blur-sm"
                  whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.1)" }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div
                    className="inline-flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-primary-500/10 text-primary-400"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {stat.icon}
                  </motion.div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Decorative Elements */}
          <motion.div 
            className="relative items-center justify-center hidden lg:flex"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Add decorative elements here if needed */}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute transform -translate-x-1/2 bottom-24 left-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-6 h-6 text-gray-400" />
      </motion.div>

      {/* Category Pills */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 py-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="container-custom">
          <div className="flex items-center pb-2 overflow-x-auto no-scrollbar">
            <motion.span 
              className="mr-4 text-sm text-gray-400 whitespace-nowrap"
              whileHover={{ color: "#fff" }}
            >
              Browse:
            </motion.span>
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={`/category/${category.id}`}
                  className="whitespace-nowrap px-4 py-1.5 rounded-full bg-dark-800/50 backdrop-blur-sm text-gray-300 text-sm hover:bg-primary-600 hover:text-white transition-all duration-300 mr-3 border border-gray-800/50 hover:border-primary-500/50"
                >
                  {category.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/category"
                className="whitespace-nowrap px-4 py-1.5 rounded-full border border-gray-700 text-gray-300 text-sm hover:border-primary-500 hover:text-primary-500 transition-all duration-300 flex items-center backdrop-blur-sm"
              >
                View All <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;