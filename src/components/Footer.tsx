import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Instagram, Twitter, Facebook, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="pt-12 pb-8 bg-dark-500">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-8 mb-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center mb-4 space-x-2 text-white">
              <Car className="h-7 w-7 text-primary-500" strokeWidth={1.5} />
              <span className="text-lg font-bold">New.Bold</span>
            </Link>
            <p className="text-sm text-gray-400">
              The ultimate car wallpaper showcase. No downloads. No distractions. Just beautiful cars.
            </p>
            <div className="flex mt-6 space-x-4">
              <a href="#" className="text-gray-400 transition-colors hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 transition-colors hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 transition-colors hover:text-white">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-medium text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/category/vintage" className="text-gray-400 transition-colors hover:text-white">
                  Vintage Cars
                </Link>
              </li>
              <li>
                <Link to="/category/german" className="text-gray-400 transition-colors hover:text-white">
                  German Cars
                </Link>
              </li>
              <li>
                <Link to="/category/sports" className="text-gray-400 transition-colors hover:text-white">
                  Sports Cars
                </Link>
              </li>
              <li>
                <Link to="/category/luxury" className="text-gray-400 transition-colors hover:text-white">
                  Luxury Cars
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-4 font-medium text-white">Join Our Newsletter</h4>
            <p className="mb-4 text-sm text-gray-400">
              Get notified when we add new wallpapers to our collection.
            </p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 text-gray-100 bg-dark-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-primary-500"
              />
              <button
                type="submit"
                className="px-4 py-2 text-white transition-colors bg-primary-600 rounded-r-md hover:bg-primary-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 mt-8 text-center border-t border-gray-800">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} New.Bold. All rights reserved.
          </p>
          <p className="flex items-center justify-center mt-2 text-xs text-gray-500">
            Made with <Heart className="w-3 h-3 mx-1 text-red-500" /> for car enthusiasts
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;