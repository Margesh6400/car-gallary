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
    <div className="relative">
      {/* Hero Section */}
      <Hero />
      
      {/* Featured Wallpapers */}
      <section className="relative py-16 bg-dark-400">
        <div className="container-custom">
          <h2 className="mb-2 text-3xl font-medium">Featured Wallpapers</h2>
          <p className="mb-8 text-gray-400">Hand-picked collection of stunning car imagery</p>
          <Gallery wallpapers={featuredWallpapers} />
        </div>
      </section>
      
      {/* Categories */}
      <section className="relative py-16 bg-dark-300">
        <div className="container-custom">
          <h2 className="mb-2 text-3xl font-medium">Browse by Category</h2>
          <p className="mb-8 text-gray-400">Explore our collections organized by car type</p>
          <CategoryList />
        </div>
      </section>
      
      {/* Latest Additions */}
      <section className="relative py-16 bg-dark-400">
        <div className="container-custom">
          <h2 className="mb-2 text-3xl font-medium">Latest Additions</h2>
          <p className="mb-8 text-gray-400">Newly added to our growing collection</p>
          <Gallery wallpapers={latestWallpapers} compact={true} />
        </div>
      </section>
    </div>
  );
};

export default Home;