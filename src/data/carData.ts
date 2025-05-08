import { Category, Wallpaper } from '../types';

// Define categories
export const categories: Category[] = [
  {
    id: 'vintage',
    name: 'Vintage',
    description: 'Classic cars from the past, beautifully preserved and photographed.',
    count: 12,
    coverImage: 'https://images.pexels.com/photos/2127039/pexels-photo-2127039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'german',
    name: 'German',
    description: 'Precision-engineered vehicles from Germany\'s top manufacturers.',
    count: 8,
    coverImage: 'https://images.pexels.com/photos/892522/pexels-photo-892522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'sports',
    name: 'Sports',
    description: 'High-performance sports cars built for speed and excitement.',
    count: 10,
    coverImage: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'luxury',
    name: 'Luxury',
    description: 'Elegant luxury vehicles representing the pinnacle of automotive comfort.',
    count: 6,
    coverImage: 'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'concept',
    name: 'Concept',
    description: 'Futuristic concept cars pushing the boundaries of automotive design.',
    count: 5,
    coverImage: 'https://images.pexels.com/photos/3954431/pexels-photo-3954431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'jdm',
    name: 'JDM',
    description: 'Japanese domestic market vehicles with distinctive style and performance.',
    count: 7,
    coverImage: 'https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'muscle',
    name: 'Muscle',
    description: 'American muscle cars with raw power and aggressive styling.',
    count: 9,
    coverImage: 'https://images.pexels.com/photos/1213294/pexels-photo-1213294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'featured',
    name: 'Featured',
    description: 'Our hand-picked selection of stunning automotive photography.',
    count: 15,
    coverImage: 'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
];

// Define wallpapers
export const wallpapers: Wallpaper[] = [
  // Vintage Cars
  {
    id: 'vintage-1',
    title: 'Classic Roadster on Country Road',
    make: 'Mercedes-Benz',
    model: '300SL',
    year: 1955,
    category: 'Vintage',
    categoryId: 'vintage',
    imageUrl: 'https://images.pexels.com/photos/2127039/pexels-photo-2127039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    views: 5243,
    likes: 843,
    downloads: 2156,
    featured: true,
    dateAdded: 'April 12, 2023',
    resolution: '2400 × 1600'
  },
  {
    id: 'vintage-2',
    title: 'Shiny Blue Classic in the City',
    make: 'Chevrolet',
    model: 'Bel Air',
    year: 1957,
    category: 'Vintage',
    categoryId: 'vintage',
    imageUrl: 'https://images.pexels.com/photos/1073695/pexels-photo-1073695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    views: 4127,
    likes: 736,
    downloads: 1890,
    featured: false,
    dateAdded: 'May 3, 2023',
    resolution: '2000 × 1333'
  },
  {
    id: 'vintage-3',
    title: 'Red Classic Parked on Street',
    make: 'Ford',
    model: 'Mustang',
    year: 1965,
    category: 'Vintage',
    categoryId: 'vintage',
    imageUrl: 'https://images.pexels.com/photos/1213294/pexels-photo-1213294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    views: 6012,
    likes: 924,
    downloads: 2301,
    featured: true,
    dateAdded: 'March 17, 2023',
    resolution: '2400 × 1600'
  },
  
  // German Cars
  {
    id: 'german-1',
    title: 'Modern German Engineering',
    make: 'BMW',
    model: 'M4',
    year: 2022,
    category: 'German',
    categoryId: 'german',
    imageUrl: 'https://images.pexels.com/photos/892522/pexels-photo-892522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    views: 7865,
    likes: 1243,
    downloads: 3102,
    featured: true,
    dateAdded: 'June 8, 2023',
    resolution: '2560 × 1707'
  },
  {
    id: 'german-2',
    title: 'Silver Performance Sedan',
    make: 'Mercedes-Benz',
    model: 'AMG GT',
    year: 2021,
    category: 'German',
    categoryId: 'german',
    imageUrl: 'https://images.pexels.com/photos/3608542/pexels-photo-3608542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    views: 5632,
    likes: 897,
    downloads: 2789,
    featured: false,
    dateAdded: 'July 22, 2023',
    resolution: '2400 × 1600'
  },
  {
    id: 'german-3',
    title: 'Black German Luxury',
    make: 'Audi',
    model: 'RS7',
    year: 2023,
    category: 'German',
    categoryId: 'german',
    imageUrl: 'https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    views: 4912,
    likes: 802,
    downloads: 2450,
    featured: true,
    dateAdded: 'August 5, 2023',
    resolution: '2560 × 1707'
  },
  {
    id: 'german-4',
    title: 'Modern Performance Coupe',
    make: 'Mercedes-Benz',
    model: 'AMG GT R',
    year: 2023,
    category: 'German',
    categoryId: 'german',
    imageUrl: 'https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-7fe0-61f7-a6ab-97872909e84f/raw?se=2025-05-08T14%3A06%3A05Z&sp=r&sv=2024-08-04&sr=b&scid=00000000-0000-0000-0000-000000000000&skoid=61180a4f-34a9-42b7-b76d-9ca47d89946d&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-08T12%3A45%3A55Z&ske=2025-05-09T12%3A45%3A55Z&sks=b&skv=2024-08-04&sig=F3jkVr2yLGqcYO03WJFjhcGVBjGaTUGxDwfTLG6NoPE%3D',
    views: 4521,
    likes: 892,
    downloads: 1756,
    featured: true,
    dateAdded: 'May 8, 2023',
    resolution: '2560 × 1707'
  },
  
  // Sports Cars
  {
    id: 'sports-1',
    title: 'Red Italian Masterpiece',
    make: 'Ferrari',
    model: '488 GTB',
    year: 2020,
    category: 'Sports',
    categoryId: 'sports',
    imageUrl: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    views: 9543,
    likes: 1876,
    downloads: 3501,
    featured: true,
    dateAdded: 'February 14, 2023',
    resolution: '2800 × 1867'
  },
  {
    id: 'sports-2',
    title: 'Orange Hypercar in Motion',
    make: 'McLaren',
    model: '720S',
    year: 2022,
    category: 'Sports',
    categoryId: 'sports',
    imageUrl: 'https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    views: 8762,
    likes: 1543,
    downloads: 2890,
    featured: true,
    dateAdded: 'January 30, 2023',
    resolution: '2560 × 1707'
  },
  {
    id: 'sports-3',
    title: 'Blue Performance Supercar',
    make: 'Lamborghini',
    model: 'Huracán',
    year: 2021,
    category: 'Sports',
    categoryId: 'sports',
    imageUrl: 'https://images.pexels.com/photos/3136673/pexels-photo-3136673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    views: 7621,
    likes: 1342,
    downloads: 3105,
    featured: false,
    dateAdded: 'May 17, 2023',
    resolution: '2400 × 1600'
  },
  
  // Luxury Cars
  {
    id: 'luxury-1',
    title: 'Ultimate Luxury Sedan',
    make: 'Rolls-Royce',
    model: 'Ghost',
    year: 2022,
    category: 'Luxury',
    categoryId: 'luxury',
    imageUrl: 'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    views: 6321,
    likes: 1087,
    downloads: 2950,
    featured: true,
    dateAdded: 'April 29, 2023',
    resolution: '2560 × 1707'
  },
  {
    id: 'luxury-2',
    title: 'British Luxury Excellence',
    make: 'Bentley',
    model: 'Continental GT',
    year: 2023,
    category: 'Luxury',
    categoryId: 'luxury',
    imageUrl: 'https://images.pexels.com/photos/13123600/pexels-photo-13123600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    views: 5897,
    likes: 943,
    downloads: 2780,
    featured: false,
    dateAdded: 'May 12, 2023',
    resolution: '2400 × 1600'
  },
  
  // Concept Cars
  {
    id: 'concept-1',
    title: 'Future of Automotive Design',
    make: 'Concept',
    model: 'Vision GT',
    year: 2025,
    category: 'Concept',
    categoryId: 'concept',
    imageUrl: 'https://images.pexels.com/photos/3954431/pexels-photo-3954431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    views: 7845,
    likes: 1456,
    downloads: 3200,
    featured: true,
    dateAdded: 'June 2, 2023',
    resolution: '2800 × 1867'
  },
  
  // JDM Cars
  {
    id: 'jdm-1',
    title: 'Iconic Japanese Performance',
    make: 'Nissan',
    model: 'GT-R',
    year: 2020,
    category: 'JDM',
    categoryId: 'jdm',
    imageUrl: 'https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    views: 8624,
    likes: 1672,
    downloads: 3300,
    featured: true,
    dateAdded: 'March 8, 2023',
    resolution: '2560 × 1707'
  },
  
  // Muscle Cars
  {
    id: 'muscle-1',
    title: 'American Muscle Power',
    make: 'Dodge',
    model: 'Challenger',
    year: 2021,
    category: 'Muscle',
    categoryId: 'muscle',
    imageUrl: 'https://images.pexels.com/photos/1082655/pexels-photo-1082655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    views: 7219,
    likes: 1324,
    downloads: 2500,
    featured: false,
    dateAdded: 'July 4, 2023',
    resolution: '2400 × 1600'
  },
  {
    id: 'muscle-2',
    title: 'Raw American Horsepower',
    make: 'Ford',
    model: 'Shelby GT500',
    year: 2022,
    category: 'Muscle',
    categoryId: 'muscle',
    imageUrl: 'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    views: 6852,
    likes: 1289,
    downloads: 2650,
    featured: true,
    dateAdded: 'June 15, 2023',
    resolution: '2560 × 1707'
  },
];

// Helper functions to get data
export const getCategoryById = (categoryId: string): Category | undefined => {
  return categories.find(category => category.id === categoryId);
};

export const getWallpaperById = (wallpaperId: string): Wallpaper | undefined => {
  return wallpapers.find(wallpaper => wallpaper.id === wallpaperId);
};

export const getWallpapersByCategory = (categoryId: string): Wallpaper[] => {
  return wallpapers.filter(wallpaper => wallpaper.categoryId === categoryId);
};

export const getFeaturedWallpapers = (): Wallpaper[] => {
  return wallpapers.filter(wallpaper => wallpaper.featured).slice(0, 6);
};

export const getLatestWallpapers = (): Wallpaper[] => {
  // Simulating latest wallpapers by taking a random subset
  return [...wallpapers]
    .sort(() => Math.random() - 0.5)
    .slice(0, 8);
};

export const getRelatedWallpapers = (wallpaperId: string, category: string): Wallpaper[] => {
  // Get wallpapers from the same category, excluding the current one
  return wallpapers
    .filter(wallpaper => wallpaper.category === category && wallpaper.id !== wallpaperId)
    .slice(0, 4);
};