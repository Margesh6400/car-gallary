import React, { useState } from 'react';
import { Eye, Heart, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { Wallpaper } from '../types';

interface WallpaperCardProps {
  wallpaper: Wallpaper;
  compact?: boolean;
}

const WallpaperCard: React.FC<WallpaperCardProps> = ({ wallpaper, compact = false }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="card card-hover h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`relative overflow-hidden ${compact ? 'aspect-[4/3] sm:aspect-[16/9]' : 'aspect-[3/2]'}`}>
        {/* Loading skeleton */}
        {!isLoaded && (
          <motion.div 
            className="absolute inset-0 bg-dark-300 animate-pulse"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
        
        <motion.img
          src={wallpaper.imageUrl}
          alt={wallpaper.title}
          className="w-full h-full object-cover"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ 
            scale: isHovered ? 1.1 : 1,
            opacity: isLoaded ? 1 : 0
          }}
          transition={{ duration: 0.4 }}
          onLoad={() => setIsLoaded(true)}
        />
        
        {/* Mobile touch overlay - always visible on mobile */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/20 to-transparent sm:hidden" />
        
        {/* Desktop hover overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/40 to-transparent hidden sm:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Content overlay */}
        <div className="absolute inset-0 p-3 sm:p-4">
          <div className="h-full flex flex-col justify-between">
            {/* Top content */}
            <motion.div
              className="flex items-start justify-between"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <motion.span 
                className="text-xs font-medium bg-primary-600/90 px-2 py-1 rounded-full text-white shadow-lg"
              >
                {wallpaper.category}
              </motion.span>
              {!compact && (
                <motion.span
                  className="text-xs bg-dark-300/80 backdrop-blur-sm px-2 py-1 rounded-full text-white shadow-lg"
                >
                  {wallpaper.resolution}
                </motion.span>
              )}
            </motion.div>
            
            {/* Bottom content */}
            <div className="space-y-2">
              {!compact && (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="hidden sm:block"
                >
                  <h3 className="font-medium text-white text-sm line-clamp-1">{wallpaper.title}</h3>
                  <p className="text-xs text-gray-300 mt-0.5">{wallpaper.make} {wallpaper.model}</p>
                </motion.div>
              )}
              
              <div className="flex justify-between items-center">
                <div className="flex space-x-3 text-white text-xs">
                  <span className="flex items-center">
                    <Eye size={14} className="mr-1" />
                    {wallpaper.views}
                  </span>
                  <span className="flex items-center">
                    <Heart size={14} className="mr-1" />
                    {wallpaper.likes}
                  </span>
                  <span className="flex items-center">
                    <Download size={14} className="mr-1" />
                    {wallpaper.downloads}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile title - only shown on mobile when not compact */}
      {!compact && (
        <motion.div 
          className="p-3 sm:hidden"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <h3 className="font-medium text-gray-100 text-sm line-clamp-1">{wallpaper.title}</h3>
          <p className="text-xs text-gray-400 mt-0.5">{wallpaper.make} {wallpaper.model}</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default WallpaperCard;