import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import Gallery from '../components/Gallery';
import { getWallpapersByCategory, getCategoryById } from '../data/carData';

const CategoryPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();
  
  // Get category and its wallpapers
  const category = getCategoryById(categoryId || '');
  const wallpapers = getWallpapersByCategory(categoryId || '');
  
  // If category doesn't exist, navigate to 404
  React.useEffect(() => {
    if (!category && categoryId) {
      navigate('/not-found');
    }
  }, [category, categoryId, navigate]);
  
  if (!category) {
    return null;
  }
  
  return (
    <div>
      {/* Category Header */}
      <div className="relative h-64 md:h-96 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={category.coverImage}
            alt={category.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900/90 to-dark-900/60" />
        </div>
        
        <div className="container-custom relative h-full flex flex-col justify-center">
          <Link 
            to="/" 
            className="inline-flex items-center text-gray-300 hover:text-white mb-4 transition-colors"
          >
            <ChevronLeft size={20} />
            <span>Back to Collections</span>
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            {category.name}
          </h1>
          <p className="text-xl text-gray-300 mt-3">
            {category.description}
          </p>
        </div>
      </div>
      
      {/* Wallpapers Grid */}
      <section className="py-16 bg-dark-400">
        <div className="container-custom">
          <Gallery 
            wallpapers={wallpapers} 
            title={`${wallpapers.length} Wallpapers in this Collection`} 
          />
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;