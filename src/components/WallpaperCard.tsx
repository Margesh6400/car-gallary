import React, { useState } from 'react';
import { Eye, Heart } from 'lucide-react';
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
      className="card card-hover"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden aspect-[16/9]">
        {/* Background blur while loading */}
        {!isLoaded && (
          <motion.div 
            className="absolute inset-0 bg-dark-300"
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
        
        {/* Overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-4 w-full absolute bottom-0">
            <div className="flex justify-between items-center">
              <motion.span 
                className="text-xs font-medium bg-primary-600/90 px-2 py-1 rounded text-white"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {wallpaper.category}
              </motion.span>
              <div className="flex space-x-3 text-white">
                <motion.span 
                  className="flex items-center text-xs"
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                >
                  <Eye size={14} className="mr-1" />
                  {wallpaper.views}
                </motion.span>
                <motion.span 
                  className="flex items-center text-xs"
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                >
                  <Heart size={14} className="mr-1" />
                  {wallpaper.likes}
                </motion.span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {!compact && (
        <motion.div 
          className="p-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <h3 className="font-medium text-gray-100 line-clamp-1">{wallpaper.title}</h3>
          <p className="text-sm text-gray-400 mt-1">{wallpaper.make} {wallpaper.model}</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default WallpaperCard;