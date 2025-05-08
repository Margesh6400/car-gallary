import React from 'react';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import CategoryList from '../components/CategoryList';
import { getFeaturedWallpapers, getLatestWallpapers } from '../data/carData';

const Home: React.FC = () => {
  // Get featured and latest wallpapers
  const featuredWallpapers = getFeaturedWallpapers();
  const latestWallpapers = getLatestWallpapers();

  return (
    <div>
      {/* Hero Section */}
      <Hero />
      
      {/* Featured Wallpapers */}
      <section className="py-16 bg-dark-400">
        <div className="container-custom">
          <h2 className="text-3xl font-medium mb-2">Featured Wallpapers</h2>
          <p className="text-gray-400 mb-8">Hand-picked collection of stunning car imagery</p>
          <Gallery wallpapers={featuredWallpapers} />
        </div>
      </section>
      
      {/* Categories */}
      <section className="py-16 bg-dark-300">
        <div className="container-custom">
          <h2 className="text-3xl font-medium mb-2">Browse by Category</h2>
          <p className="text-gray-400 mb-8">Explore our collections organized by car type</p>
          <CategoryList />
        </div>
      </section>
      
      {/* Latest Additions */}
      <section className="py-16 bg-dark-400">
        <div className="container-custom">
          <h2 className="text-3xl font-medium mb-2">Latest Additions</h2>
          <p className="text-gray-400 mb-8">Newly added to our growing collection</p>
          <Gallery wallpapers={latestWallpapers} compact={true} />
        </div>
      </section>
    </div>
  );
};

export default Home;