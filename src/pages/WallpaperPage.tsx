import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, Download, Heart, Share2, Info, X } from 'lucide-react';
import Gallery from '../components/Gallery';
import { getWallpaperById, getRelatedWallpapers } from '../data/carData';

const WallpaperPage: React.FC = () => {
  const { wallpaperId } = useParams<{ wallpaperId: string }>();
  const navigate = useNavigate();
  const [showDetails, setShowDetails] = useState(false);
  
  // Get wallpaper and related ones
  const wallpaper = getWallpaperById(wallpaperId || '');
  const relatedWallpapers = wallpaper ? getRelatedWallpapers(wallpaper.id, wallpaper.category) : [];
  
  // If wallpaper doesn't exist, navigate to 404
  React.useEffect(() => {
    if (!wallpaper && wallpaperId) {
      navigate('/not-found');
    }
  }, [wallpaper, wallpaperId, navigate]);
  
  if (!wallpaper) {
    return null;
  }
  
  return (
    <div>
      {/* Wallpaper Showcase */}
      <div className="relative bg-dark-500 overflow-hidden">
        <div className="container-custom py-8">
          <Link 
            to={`/category/${wallpaper.categoryId}`} 
            className="inline-flex items-center text-gray-300 hover:text-white mb-6 transition-colors"
          >
            <ChevronLeft size={20} />
            <span>Back to {wallpaper.category}</span>
          </Link>
          
          <div className="relative overflow-hidden rounded-lg shadow-2xl">
            <img
              src={wallpaper.imageUrl}
              alt={wallpaper.title}
              className="w-full object-cover"
            />
            
            {/* Actions Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 glass-effect">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-white">
                    {wallpaper.title}
                  </h1>
                  <p className="text-gray-300 mt-1">
                    {wallpaper.make} {wallpaper.model} • {wallpaper.year}
                  </p>
                </div>
                
                <div className="flex mt-4 sm:mt-0 space-x-3">
                  <button
                    className="btn btn-secondary flex items-center"
                    onClick={() => setShowDetails(!showDetails)}
                  >
                    <Info size={18} className="mr-2" />
                    Details
                  </button>
                  <button className="btn btn-secondary">
                    <Share2 size={18} />
                  </button>
                  <button className="btn btn-secondary">
                    <Heart size={18} />
                  </button>
                  <a 
                    href={wallpaper.imageUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary flex items-center"
                  >
                    <Download size={18} className="mr-2" />
                    Download
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Details Panel */}
      {showDetails && (
        <div className="bg-dark-300 py-8 animate-fadeIn">
          <div className="container-custom">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-medium">Wallpaper Details</h2>
              <button 
                onClick={() => setShowDetails(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium mb-4">Car Information</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-gray-400">Make:</span>
                    <span>{wallpaper.make}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Model:</span>
                    <span>{wallpaper.model}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Year:</span>
                    <span>{wallpaper.year}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Category:</span>
                    <span>{wallpaper.category}</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-4">Wallpaper Information</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-gray-400">Resolution:</span>
                    <span>{wallpaper.resolution || '1920 × 1080'}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Added:</span>
                    <span>{wallpaper.dateAdded || 'June 15, 2023'}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Views:</span>
                    <span>{wallpaper.views}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Likes:</span>
                    <span>{wallpaper.likes}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Related Wallpapers */}
      <section className="py-16 bg-dark-400">
        <div className="container-custom">
          <h2 className="text-3xl font-medium mb-8">You Might Also Like</h2>
          <Gallery wallpapers={relatedWallpapers} compact={true} />
        </div>
      </section>
    </div>
  );
};

export default WallpaperPage;