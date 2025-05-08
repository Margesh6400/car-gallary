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
  // Split wallpapers into columns for masonry layout
  const getColumnsCount = () => {
    if (typeof window === 'undefined') return 4;
    if (window.innerWidth < 640) return 1;  // mobile
    if (window.innerWidth < 768) return 2;  // tablet
    if (window.innerWidth < 1024) return 3; // small desktop
    if (window.innerWidth < 1280) return 4; // medium desktop
    return 5; // large desktop
  };

  const organizeIntoColumns = (items: Wallpaper[]) => {
    const columns = Array.from({ length: getColumnsCount() }, () => [] as Wallpaper[]);
    items.forEach((item, index) => {
      columns[index % columns.length].push(item);
    });
    return columns;
  };

  const columns = organizeIntoColumns(wallpapers);

  return (
    <motion.div
      initial="hidden"
      animate="show"
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
      
      <div className="w-full">
        {wallpapers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {columns.map((column, columnIndex) => (
              <div key={columnIndex} className="flex flex-col gap-4">
                {column.map((wallpaper) => (
                  <motion.div 
                    key={wallpaper.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Link 
                      to={`/wallpaper/${wallpaper.id}`}
                      className="block w-full"
                    >
                      <WallpaperCard wallpaper={wallpaper} compact={compact} />
                    </Link>
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        ) : (
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
      </div>
    </motion.div>
  );
};

export default Gallery;