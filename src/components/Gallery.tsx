import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import WallpaperCard from './WallpaperCard';
import { Wallpaper } from '../types';

interface GalleryProps {
  wallpapers: Wallpaper[];
  title?: string;
  compact?: boolean;
}

const Gallery: React.FC<GalleryProps> = ({ wallpapers, title, compact = false }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={container}
    >
      {title && (
        <motion.h2 
          className="text-2xl md:text-3xl font-medium mb-6 text-gray-100"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
      )}
      
      <motion.div 
        className={`grid grid-cols-1 ${compact ? 'sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'sm:grid-cols-2 lg:grid-cols-3'} gap-6`}
        variants={container}
      >
        {wallpapers.map((wallpaper) => (
          <motion.div key={wallpaper.id} variants={item}>
            <Link to={`/wallpaper/${wallpaper.id}`}>
              <WallpaperCard wallpaper={wallpaper} compact={compact} />
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {wallpapers.length === 0 && (
        <motion.div 
          className="flex flex-col items-center justify-center py-20 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gray-400 text-lg mb-4">No wallpapers found in this collection.</p>
          <Link to="/" className="text-primary-500 hover:text-primary-400 transition-colors">
            Browse all collections
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Gallery;