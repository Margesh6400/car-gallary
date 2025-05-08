import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, Download, Heart, Share2, Info, X } from 'lucide-react';
import Gallery from '../components/Gallery';
import DownloadModal from '../components/DownloadModal';
import { getWallpaperById, getRelatedWallpapers } from '../data/carData';

const WallpaperPage: React.FC = () => {
  const { wallpaperId } = useParams<{ wallpaperId: string }>();
  const navigate = useNavigate();
  const [showDetails, setShowDetails] = useState(false);
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageHeight, setImageHeight] = useState<number | null>(null);
  
  // Get wallpaper and related ones
  const wallpaper = getWallpaperById(wallpaperId || '');
  const relatedWallpapers = wallpaper ? getRelatedWallpapers(wallpaper.id, wallpaper.category) : [];
  
  // Handle image load and resize
  useEffect(() => {
    const updateImageHeight = () => {
      if (!imageLoaded) return;
      
      const headerHeight = 80; // Approximate header height
      const containerPadding = 64; // py-8 * 2 = 64px
      const availableHeight = window.innerHeight - headerHeight - containerPadding;
      
      setImageHeight(availableHeight);
    };

    window.addEventListener('resize', updateImageHeight);
    updateImageHeight();

    return () => window.removeEventListener('resize', updateImageHeight);
  }, [imageLoaded]);

  // If wallpaper doesn't exist, navigate to 404
  useEffect(() => {
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
          
          <div className="relative overflow-hidden rounded-lg shadow-2xl bg-dark-400">
            {/* Loading skeleton */}
            {!imageLoaded && (
              <div className="absolute inset-0 bg-dark-300 animate-pulse" />
            )}
            
            <div 
              className="relative flex items-center justify-center"
              style={{ 
                height: imageHeight ? `${imageHeight}px` : '70vh',
                minHeight: '400px',
                maxHeight: '80vh'
              }}
            >
              <img
                src={wallpaper.imageUrl}
                alt={wallpaper.title}
                className="w-full h-full object-contain"
                onLoad={() => setImageLoaded(true)}
                style={{ opacity: imageLoaded ? 1 : 0 }}
              />
            </div>
            
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
                  <button
                    onClick={() => setShowDownloadModal(true)}
                    className="btn btn-primary flex items-center"
                  >
                    <Download size={18} className="mr-2" />
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Download Modal */}
      <DownloadModal
        wallpaper={wallpaper}
        isOpen={showDownloadModal}
        onClose={() => setShowDownloadModal(false)}
      />
      
      {/* Details Panel */}
      {showDetails && (
        <div className="py-8 bg-dark-300 animate-fadeIn">
          <div className="container-custom">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-medium">Wallpaper Details</h2>
              <button 
                onClick={() => setShowDetails(false)}
                className="text-gray-400 transition-colors hover:text-white"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-lg font-medium">Car Information</h3>
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
                <h3 className="mb-4 text-lg font-medium">Wallpaper Information</h3>
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