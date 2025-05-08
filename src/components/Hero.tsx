import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { categories } from '../data/carData';

const Hero: React.FC = () => {
  // Getting a featured wallpaper
  const featuredImageUrl = "https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  return (
    <div className="relative h-[70vh] md:h-[80vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={featuredImageUrl}
          alt="Featured car"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900/90 to-dark-900/60" />
      </div>

      {/* Content */}
      <div className="container-custom relative h-full flex flex-col justify-center">
        <div className="max-w-2xl animate-fadeIn">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            The Ultimate Car Wallpaper Showcase
          </h1>
          <p className="text-xl text-gray-300 mt-6">
            Explore our high-quality collection of stunning car wallpapers. 
            No downloads. No distractions. Just beautiful cars.
          </p>
          
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/category/featured"
              className="btn btn-primary"
            >
              Browse Collection
            </Link>
            <Link
              to="/category/latest"
              className="btn btn-secondary"
            >
              Latest Additions
            </Link>
          </div>
        </div>
      </div>

      {/* Category Pills */}
      <div className="absolute bottom-0 left-0 right-0 py-6 glass-effect">
        <div className="container-custom">
          <div className="flex items-center overflow-x-auto pb-2 no-scrollbar">
            <span className="text-gray-400 text-sm whitespace-nowrap mr-4">Browse:</span>
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/category/${category.id}`}
                className="whitespace-nowrap px-4 py-1.5 rounded-full bg-dark-200 text-gray-300 text-sm hover:bg-primary-600 hover:text-white transition-colors mr-3"
              >
                {category.name}
              </Link>
            ))}
            <Link
              to="/category"
              className="whitespace-nowrap px-4 py-1.5 rounded-full border border-gray-700 text-gray-300 text-sm hover:border-primary-500 hover:text-primary-500 transition-colors flex items-center"
            >
              View All <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;