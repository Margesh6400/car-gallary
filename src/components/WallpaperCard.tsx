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
      className="relative overflow-hidden rounded-xl bg-dark-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Loading skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-dark-300 animate-pulse" />
      )}

      <div className="relative">
        <motion.div
          animate={{
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={wallpaper.imageUrl}
            alt={wallpaper.title}
            className="object-cover w-full"
            onLoad={() => setIsLoaded(true)}
            style={{ display: isLoaded ? 'block' : 'none' }}
          />
        </motion.div>

        {/* Overlay gradients */}
        <div 
          className={`absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/30 to-transparent transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0 sm:opacity-70'
          }`}
        />

        {/* Content overlay */}
        <div className="absolute inset-0 p-3">
          <div className="flex flex-col justify-between h-full">
            {/* Top content */}
            <div className="flex items-start justify-between">
              <motion.span 
                className="px-2 py-1 text-xs font-medium text-white rounded-full shadow-lg bg-primary-600/90 backdrop-blur-sm"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {wallpaper.category}
              </motion.span>
              {!compact && wallpaper.resolution && (
                <motion.span
                  className="px-2 py-1 text-xs text-white rounded-full shadow-lg bg-dark-300/80 backdrop-blur-sm"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {wallpaper.resolution}
                </motion.span>
              )}
            </div>

            {/* Bottom content */}
            <motion.div 
              className="space-y-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {!compact && (
                <div className={`transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0 sm:opacity-100'}`}>
                  <h3 className="text-sm font-medium text-white line-clamp-1">
                    {wallpaper.title}
                  </h3>
                  <p className="text-xs text-gray-300 mt-0.5">
                    {wallpaper.make} {wallpaper.model}
                  </p>
                </div>
              )}

              <div className={`flex justify-between items-center transition-opacity duration-300 ${
                isHovered ? 'opacity-100' : 'opacity-0 sm:opacity-100'
              }`}>
                <div className="flex space-x-3 text-xs text-white">
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
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WallpaperCard;