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
      className="w-full"
    >
      {title && (
        <motion.h2 
          className="mb-6 text-2xl font-medium text-gray-100 md:text-3xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
      )}
      
      <motion.div 
        className={`grid gap-4 sm:gap-6 ${
          compact 
            ? 'grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6' 
            : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
        }`}
        variants={container}
      >
        {wallpapers.map((wallpaper) => (
          <motion.div 
            key={wallpaper.id} 
            variants={item}
            className="flex"
          >
            <Link 
              to={`/wallpaper/${wallpaper.id}`}
              className="w-full"
            >
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
          <p className="mb-4 text-lg text-gray-400">No wallpapers found in this collection.</p>
          <Link to="/" className="transition-colors text-primary-500 hover:text-primary-400">
            Browse all collections
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Gallery;