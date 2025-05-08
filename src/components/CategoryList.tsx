import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { categories } from '../data/carData';

const CategoryList: React.FC = () => {
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
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {categories.map((category) => (
        <motion.div key={category.id} variants={item}>
          <Link
            to={`/category/${category.id}`}
            className="group block"
          >
            <motion.div 
              className="card overflow-hidden h-48"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative h-full">
                <motion.img
                  src={category.coverImage}
                  alt={category.name}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/50 to-transparent">
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 p-4"
                    initial={{ y: 10, opacity: 0.8 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="text-xl font-medium text-white">{category.name}</h3>
                    <p className="text-gray-300 text-sm">{category.count} wallpapers</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default CategoryList;