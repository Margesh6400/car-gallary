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
    coverImage: 'https://sdmntprpolandcentral.oaiusercontent.com/files/00000000-becc-620a-ae28-8c7b285f26f3/raw?se=2025-05-08T16%3A53%3A12Z&sp=r&sv=2024-08-04&sr=b&scid=00000000-0000-0000-0000-000000000000&skoid=30ec2761-8f41-44db-b282-7a0f8809659b&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-07T19%3A53%3A22Z&ske=2025-05-08T19%3A53%3A22Z&sks=b&skv=2024-08-04&sig=qqtX2G8fVkwECF%2BLPjfSVByQAuUcNkuCx1IamUaXeho%3D'
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
    imageUrl: 'https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-505c-61f7-bb4f-98e48c69a036/raw?se=2025-05-08T17%3A06%3A53Z&sp=r&sv=2024-08-04&sr=b&scid=00000000-0000-0000-0000-000000000000&skoid=bbd22fc4-f881-4ea4-b2f3-c12033cf6a8b&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-08T10%3A53%3A19Z&ske=2025-05-09T10%3A53%3A19Z&sks=b&skv=2024-08-04&sig=R78b9pDtdadPNiEjVQzwaUhpyZe4WbGclBrQw5pj7m8%3D',
    views: 5243,
    likes: 843,
    downloads: 2156,
    featured: true,
    dateAdded: 'April 12, 2023',
    resolution: '2400 × 1600'
  },
  {
    id: 'vintage-2',
    title: 'Rolls-Royce Silver Cloud in the City',
    make: 'Rolls-Royce',
    model: 'Silver Cloud',
    year: 1960,
    category: 'Vintage',
    categoryId: 'vintage',
    imageUrl: 'https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-81bc-61f7-ab22-3c6353021534/raw?se=2025-05-08T17%3A06%3A53Z&sp=r&sv=2024-08-04&sr=b&scid=00000000-0000-0000-0000-000000000000&skoid=bbd22fc4-f881-4ea4-b2f3-c12033cf6a8b&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-08T13%3A12%3A08Z&ske=2025-05-09T13%3A12%3A08Z&sks=b&skv=2024-08-04&sig=vv8S37Pn8z%2B9uVvRMZW0l06KDan%2BXRmyH/o2%2Bphazpk%3D',
    views: 4127,
    likes: 736,
    downloads: 1890,
    featured: false,
    dateAdded: 'May 3, 2023',
    resolution: '2000 × 1333'
  },
  {
    id: 'vintage-3',
    title: 'Red Ford Mustang Classic',
    make: 'Ford',
    model: 'Mustang',
    year: 1965,
    category: 'Vintage',
    categoryId: 'vintage',
    imageUrl: 'https://sdmntprcentralus.oaiusercontent.com/files/00000000-79c4-61f5-936a-b732e4545e77/raw?se=2025-05-08T17%3A06%3A53Z&sp=r&sv=2024-08-04&sr=b&scid=ab545064-e88b-5e23-b05a-b2695617041f&skoid=de76bc29-7017-43d4-8d90-7a49512bae0f&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-07T18%3A04%3A16Z&ske=2025-05-08T18%3A04%3A16Z&sks=b&skv=2024-08-04&sig=eI/aF0ZhoiACf6dsuQP%2BM1%2BEPvA9/75tGXWiimkAD0M%3D',
    views: 6012,
    likes: 924,
    downloads: 2301,
    featured: true,
    dateAdded: 'March 17, 2023',
    resolution: '2400 × 1600'
  },
  {
    id: 'vintage-4',
    title: 'Rolls-Royce Phantom Drophead',
    make: 'Rolls-Royce',
    model: 'Phantom Drophead',
    year: 1962,
    category: 'Vintage',
    categoryId: 'vintage',
    imageUrl: 'https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-81bc-61f7-ab22-3c6353021534/raw?se=2025-05-08T17%3A06%3A53Z&sp=r&sv=2024-08-04&sr=b&scid=00000000-0000-0000-0000-000000000000&skoid=bbd22fc4-f881-4ea4-b2f3-c12033cf6a8b&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-08T13%3A12%3A08Z&ske=2025-05-09T13%3A12%3A08Z&sks=b&skv=2024-08-04&sig=vv8S37Pn8z%2B9uVvRMZW0l06KDan%2BXRmyH/o2%2Bphazpk%3D',
    views: 3500,
    likes: 700,
    downloads: 1200,
    featured: false,
    dateAdded: 'May 8, 2024',
    resolution: '2048 × 2048'
  },
  {
    id: 'vintage-5',
    title: 'Rolls-Royce Corniche Convertible',
    make: 'Rolls-Royce',
    model: 'Corniche Convertible',
    year: 1971,
    category: 'Vintage',
    categoryId: 'vintage',
    imageUrl: 'https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-7914-61f7-9a8a-103fb840ebdd/raw?se=2025-05-08T17%3A06%3A53Z&sp=r&sv=2024-08-04&sr=b&scid=00000000-0000-0000-0000-000000000000&skoid=bbd22fc4-f881-4ea4-b2f3-c12033cf6a8b&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-08T15%3A51%3A27Z&ske=2025-05-09T15%3A51%3A27Z&sks=b&skv=2024-08-04&sig=ITj9CrWUluSb0TIIOyS5VuEhn9NThOITbGTXHCSuyiM%3D',
    views: 3200,
    likes: 650,
    downloads: 1100,
    featured: false,
    dateAdded: 'May 8, 2024',
    resolution: '2048 × 2048'
  },
  {
    id: 'vintage-6',
    title: 'Rolls-Royce Silver Shadow',
    make: 'Rolls-Royce',
    model: 'Silver Shadow',
    year: 1967,
    category: 'Vintage',
    categoryId: 'vintage',
    imageUrl: 'https://sdmntprwestcentralus.oaiusercontent.com/files/00000000-0d6c-61fb-9587-69d23154c6da/raw?se=2025-05-08T17%3A06%3A53Z&sp=r&sv=2024-08-04&sr=b&scid=93c17aed-3413-5bd7-a2b2-0889055b0ca3&skoid=de76bc29-7017-43d4-8d90-7a49512bae0f&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-08T10%3A23%3A53Z&ske=2025-05-09T10%3A23%3A53Z&sks=b&skv=2024-08-04&sig=gsqEp7iFJKe%2BPIF5jKmlp50tQ0RJNnQW6AbhbjNQt0c%3D',
    views: 3000,
    likes: 600,
    downloads: 1000,
    featured: false,
    dateAdded: 'May 8, 2024',
    resolution: '2048 × 2048'
  },
  {
    id: 'vintage-7',
    title: 'Ferrari 250 GT California Spyder',
    make: 'Ferrari',
    model: '250 GT California Spyder',
    year: 1961,
    category: 'Vintage',
    categoryId: 'vintage',
    imageUrl: 'https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-8cbc-61f7-9d91-e08c59c8ab7e/raw?se=2025-05-08T17%3A06%3A54Z&sp=r&sv=2024-08-04&sr=b&scid=00000000-0000-0000-0000-000000000000&skoid=bbd22fc4-f881-4ea4-b2f3-c12033cf6a8b&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-08T13%3A12%3A08Z&ske=2025-05-09T13%3A12%3A08Z&sks=b&skv=2024-08-04&sig=c71A2lZ4SU4eOePFXQI29EHkeurh%2Bt19bbyZzar9dh8%3D',
    views: 3400,
    likes: 720,
    downloads: 1200,
    featured: false,
    dateAdded: 'May 8, 2024',
    resolution: '2048 × 2048'
  },
  {
    id: 'vintage-8',
    title: 'Lamborghini Miura P400',
    make: 'Lamborghini',
    model: 'Miura P400',
    year: 1967,
    category: 'Vintage',
    categoryId: 'vintage',
    imageUrl: 'https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-a7b8-61f7-979b-646ecf379914/raw?se=2025-05-08T17%3A06%3A54Z&sp=r&sv=2024-08-04&sr=b&scid=00000000-0000-0000-0000-000000000000&skoid=bbd22fc4-f881-4ea4-b2f3-c12033cf6a8b&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-08T10%3A29%3A03Z&ske=2025-05-09T10%3A29%3A03Z&sks=b&skv=2024-08-04&sig=1aFyBsMmgNDOdifI81v%2BuvvN%2BY/ljmwqaAGW2KQgg%2BM%3D',
    views: 3300,
    likes: 700,
    downloads: 1100,
    featured: false,
    dateAdded: 'May 8, 2024',
    resolution: '2048 × 2048'
  },
  {
    id: 'vintage-9',
    title: 'Lamborghini 350 GT',
    make: 'Lamborghini',
    model: '350 GT',
    year: 1965,
    category: 'Vintage',
    categoryId: 'vintage',
    imageUrl: 'https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-886c-61f7-bd4a-1923c8016dd6/raw?se=2025-05-08T17%3A06%3A54Z&sp=r&sv=2024-08-04&sr=b&scid=00000000-0000-0000-0000-000000000000&skoid=bbd22fc4-f881-4ea4-b2f3-c12033cf6a8b&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-08T12%3A23%3A19Z&ske=2025-05-09T12%3A23%3A19Z&sks=b&skv=2024-08-04&sig=nGzF9/aqHD7F6753dg1YcZF7MBwOJB9dIZpjwmkuzOo%3D',
    views: 3200,
    likes: 680,
    downloads: 1050,
    featured: false,
    dateAdded: 'May 8, 2024',
    resolution: '2048 × 2048'
  },
  
  // German Cars
  {
    id: 'german-1',
    title: 'Audi R8 V10 Performance',
    make: 'Audi',
    model: 'R8 V10 Performance',
    year: 2022,
    category: 'German',
    categoryId: 'german',
    imageUrl: 'https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-a970-61f7-b554-685d76e89a2a/raw?se=2025-05-08T16%3A53%3A12Z&sp=r&sv=2024-08-04&sr=b&scid=d0f1b1d9-dd7c-5e9c-8222-0827f66a261a&skoid=b53ae837-f585-4db7-b46f-2d0322fce5a9&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-08T01%3A28%3A02Z&ske=2025-05-09T01%3A28%3A02Z&sks=b&skv=2024-08-04&sig=VOpwfphUD/lfAe7Clcde6SQrMK0zGQs%2BDsarmGpmybw%3D',
    views: 7865,
    likes: 1243,
    downloads: 3102,
    featured: true,
    dateAdded: 'June 8, 2023',
    resolution: '2560 × 1707'
  },
  {
    id: 'german-2',
    title: 'BMW 3 Series Touring White',
    make: 'BMW',
    model: '3 Series Touring',
    year: 2021,
    category: 'German',
    categoryId: 'german',
    imageUrl: 'https://sdmntprpolandcentral.oaiusercontent.com/files/00000000-becc-620a-ae28-8c7b285f26f3/raw?se=2025-05-08T16%3A53%3A12Z&sp=r&sv=2024-08-04&sr=b&scid=00000000-0000-0000-0000-000000000000&skoid=30ec2761-8f41-44db-b282-7a0f8809659b&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-07T19%3A53%3A22Z&ske=2025-05-08T19%3A53%3A22Z&sks=b&skv=2024-08-04&sig=qqtX2G8fVkwECF%2BLPjfSVByQAuUcNkuCx1IamUaXeho%3D',
    views: 5632,
    likes: 897,
    downloads: 2789,
    featured: false,
    dateAdded: 'July 22, 2023',
    resolution: '2400 × 1600'
  },
  {
    id: 'german-3',
    title: 'Audi Q8 e-tron Black',
    make: 'Audi',
    model: 'Q8 e-tron',
    year: 2023,
    category: 'German',
    categoryId: 'german',
    imageUrl: 'https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-50b0-61f7-b350-0bb593998d0b/raw?se=2025-05-08T16%3A53%3A12Z&sp=r&sv=2024-08-04&sr=b&scid=00000000-0000-0000-0000-000000000000&skoid=30ec2761-8f41-44db-b282-7a0f8809659b&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-07T17%3A49%3A08Z&ske=2025-05-08T17%3A49%3A08Z&sks=b&skv=2024-08-04&sig=pEnsnn8F59nI5yoVN7SQnz5zcSuc2pS3TRqiq5Ky08E%3D',
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
  {
    id: 'german-5',
    title: 'Cyberpunk BMW in Neon Night',
    make: 'BMW',
    model: 'M5',
    year: 2023,
    category: 'German',
    categoryId: 'german',
    imageUrl: 'https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-82f8-61f7-9318-1f70faabecf3/raw?se=2025-05-08T14%3A06%3A05Z&sp=r&sv=2024-08-04&sr=b&scid=00000000-0000-0000-0000-000000000000&skoid=61180a4f-34a9-42b7-b76d-9ca47d89946d&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-08T12%3A45%3A55Z&ske=2025-05-09T12%3A45%3A55Z&sks=b&skv=2024-08-04&sig=Ud7YxPT5BueMB0mP%2B9/FCYhbfu/nbNSFz3c5Q5Vu7GE%3D', // You'll need to save the image to your project
    views: 3865,
    likes: 982,
    downloads: 1543,
    featured: true,
    dateAdded: 'May 8, 2025',
    resolution: '2048 × 2048'
  },
  {
    id: 'german-6',
    title: 'BMW M3 Competition Blue',
    make: 'BMW',
    model: 'M3 Competition',
    year: 2022,
    category: 'German',
    categoryId: 'german',
    imageUrl: 'https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-f6ec-61f7-a91c-184ccce5b9ce/raw?se=2025-05-08T14%3A06%3A06Z&sp=r&sv=2024-08-04&sr=b&scid=00000000-0000-0000-0000-000000000000&skoid=61180a4f-34a9-42b7-b76d-9ca47d89946d&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-08T10%3A39%3A25Z&ske=2025-05-09T10%3A39%3A25Z&sks=b&skv=2024-08-04&sig=bE59tL1YvZqc/hgUtTSLnPEJ%2Bm/7DjWxbtnA6t9XiOo%3D',
    views: 3600,
    likes: 780,
    downloads: 1500,
    featured: false,
    dateAdded: 'May 8, 2024',
    resolution: '2048 × 2048'
  },
  {
    id: 'german-7',
    title: 'Audi RS6 Avant Grey',
    make: 'Audi',
    model: 'RS6 Avant',
    year: 2023,
    category: 'German',
    categoryId: 'german',
    imageUrl: 'https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-363c-61f7-ac05-8f55a6342874/raw?se=2025-05-08T14%3A06%3A06Z&sp=r&sv=2024-08-04&sr=b&scid=b29328c5-5b6c-58b1-9fc3-c05355aa220b&skoid=51916beb-8d6a-49b8-8b29-ca48ed86557e&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-08T01%3A17%3A30Z&ske=2025-05-09T01%3A17%3A30Z&sks=b&skv=2024-08-04&sig=4exhPDauZ20iTkoyRZFA2iAvs79oUgYdm1SQXnoNPbo%3D',
    views: 3400,
    likes: 720,
    downloads: 1300,
    featured: false,
    dateAdded: 'May 8, 2024',
    resolution: '2048 × 2048'
  },
  {
    id: 'german-8',
    title: 'Mercedes-Benz S-Class Black',
    make: 'Mercedes-Benz',
    model: 'S-Class',
    year: 2023,
    category: 'German',
    categoryId: 'german',
    imageUrl: 'https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-331c-61f7-b736-22369eba5c3c/raw?se=2025-05-08T14%3A58%3A25Z&sp=r&sv=2024-08-04&sr=b&scid=37d311e2-ad5e-5f4e-a497-4245b1564633&skoid=51916beb-8d6a-49b8-8b29-ca48ed86557e&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-08T01%3A13%3A50Z&ske=2025-05-09T01%3A13%3A50Z&sks=b&skv=2024-08-04&sig=3AJ%2BJttVcM2fgTw3l8RER4f2S74epl191AnMfn7UYo0%3D',
    views: 3300,
    likes: 700,
    downloads: 1200,
    featured: false,
    dateAdded: 'May 8, 2024',
    resolution: '2048 × 2048'
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
  {
    id: 'sports-4',
    title: 'Ferrari SF90 Stradale Red',
    make: 'Ferrari',
    model: 'SF90 Stradale',
    year: 2023,
    category: 'Sports',
    categoryId: 'sports',
    imageUrl: 'https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-ca90-61f7-b277-b7238479ecec/raw?se=2025-05-08T14%3A06%3A05Z&sp=r&sv=2024-08-04&sr=b&scid=6e318280-fd5d-57fc-a33d-94e87a2b5f6d&skoid=51916beb-8d6a-49b8-8b29-ca48ed86557e&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-08T01%3A16%3A30Z&ske=2025-05-09T01%3A16%3A30Z&sks=b&skv=2024-08-04&sig=EFKvIbMhGn%2BT72ayYefLquFM4HmLmyAL9cZqNUdflT8%3D',
    views: 3200,
    likes: 670,
    downloads: 1400,
    featured: false,
    dateAdded: 'May 8, 2024',
    resolution: '2560 × 1707'
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
    title: 'Lexus RX 500h F SPORT Performance',
    make: 'Lexus',
    model: 'RX 500h F SPORT',
    year: 2023,
    category: 'Luxury',
    categoryId: 'luxury',
    imageUrl: 'https://sdmntpreastus2.oaiusercontent.com/files/00000000-960c-61f6-8bdd-8c3c6abfc46e/raw?se=2025-05-08T16%3A53%3A13Z&sp=r&sv=2024-08-04&sr=b&scid=00000000-0000-0000-0000-000000000000&skoid=30ec2761-8f41-44db-b282-7a0f8809659b&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-08T10%3A38%3A30Z&ske=2025-05-09T10%3A38%3A30Z&sks=b&skv=2024-08-04&sig=Ru0HxwlJyTqX0QWvaQuHTvc2/TkGPUhC5G1ES6EY%2Bgo%3D',
    views: 5897,
    likes: 943,
    downloads: 2780,
    featured: false,
    dateAdded: 'May 12, 2023',
    resolution: '2400 × 1600'
  },
  {
    id: 'luxury-3',
    title: 'Lexus LC500 Silver Coupe',
    make: 'Lexus',
    model: 'LC500',
    year: 2022,
    category: 'Luxury',
    categoryId: 'luxury',
    imageUrl: 'https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-394c-61f7-8bd2-617243a9a101/raw?se=2025-05-08T14%3A06%3A05Z&sp=r&sv=2024-08-04&sr=b&scid=8577fe91-9534-5ee0-a09a-d086f1ea89b8&skoid=51916beb-8d6a-49b8-8b29-ca48ed86557e&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-08T01%3A15%3A04Z&ske=2025-05-09T01%3A15%3A04Z&sks=b&skv=2024-08-04&sig=KgoXHG8au0VQZP5S8rqdmELlCx8/qaG/xvwXN/ZZJ0g%3D',
    views: 4100,
    likes: 850,
    downloads: 2000,
    featured: false,
    dateAdded: 'May 8, 2024',
    resolution: '2560 × 1707'
  },
  {
    id: 'luxury-4',
    title: 'Lexus LC500 Convertible Blue',
    make: 'Lexus',
    model: 'LC500 Convertible',
    year: 2022,
    category: 'Luxury',
    categoryId: 'luxury',
    imageUrl: 'https://sdmntprwestus.oaiusercontent.com/files/00000000-b39c-6230-bebe-6b2bf1df3503/raw?se=2025-05-08T16%3A53%3A13Z&sp=r&sv=2024-08-04&sr=b&scid=50c42822-be99-511a-af36-69c58a93ea9d&skoid=b53ae837-f585-4db7-b46f-2d0322fce5a9&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-08T01%3A24%3A39Z&ske=2025-05-09T01%3A24%3A39Z&sks=b&skv=2024-08-04&sig=zQ6IL1180Yu1zTqTXfgd%2B3cFRpYmEOSUYSWkSGWyvZA%3D',
    views: 2100,
    likes: 480,
    downloads: 550,
    featured: false,
    dateAdded: 'May 8, 2024',
    resolution: '2048 × 2048'
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
  {
    id: 'concept-2',
    title: 'BMW Vision Next Concept',
    make: 'BMW',
    model: 'Vision Next',
    year: 2024,
    category: 'Concept',
    categoryId: 'concept',
    imageUrl: 'https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-5a28-61f7-900f-e91173d471b9/raw?se=2025-05-08T14%3A06%3A05Z&sp=r&sv=2024-08-04&sr=b&scid=65eebaa7-427a-50be-a426-92b6ebc430e4&skoid=51916beb-8d6a-49b8-8b29-ca48ed86557e&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-08T12%3A19%3A44Z&ske=2025-05-09T12%3A19%3A44Z&sks=b&skv=2024-08-04&sig=kqyqv5RR2v6gXIjG%2BF6UlvvZKVi8m2uvgqks9JkI/EU%3D',
    views: 3500,
    likes: 700,
    downloads: 1200,
    featured: false,
    dateAdded: 'May 8, 2024',
    resolution: '2560 × 1707'
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
  {
    id: 'german-9',
    title: 'BMW i8 Roadster Orange',
    make: 'BMW',
    model: 'i8 Roadster',
    year: 2021,
    category: 'German',
    categoryId: 'german',
    imageUrl: 'https://sdmntprwestus.oaiusercontent.com/files/00000000-ebd0-6230-8283-4f386918c6b5/raw?se=2025-05-08T14%3A58%3A39Z&sp=r&sv=2024-08-04&sr=b&scid=0b705260-fbd3-5872-b4a7-55a18bf183bc&skoid=51916beb-8d6a-49b8-8b29-ca48ed86557e&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-08T01%3A17%3A34Z&ske=2025-05-09T01%3A17%3A34Z&sks=b&skv=2024-08-04&sig=tUcNlMkdW3CYPzQfXqRUKY72fG3NJ1v4aIXWbtW%2B5xU%3D',
    views: 3200,
    likes: 690,
    downloads: 1200,
    featured: false,
    dateAdded: 'May 8, 2024',
    resolution: '2048 × 2048'
  },
  {
    id: 'german-10',
    title: 'BMW X6 M Competition White',
    make: 'BMW',
    model: 'X6 M Competition',
    year: 2022,
    category: 'German',
    categoryId: 'german',
    imageUrl: 'https://sdmntprwestus.oaiusercontent.com/files/00000000-039c-6230-979d-8c705a05b714/raw?se=2025-05-08T14%3A58%3A58Z&sp=r&sv=2024-08-04&sr=b&scid=137ebb6e-7a97-5357-8dab-4f14e46d4f5f&skoid=51916beb-8d6a-49b8-8b29-ca48ed86557e&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-08T01%3A16%3A19Z&ske=2025-05-09T01%3A16%3A19Z&sks=b&skv=2024-08-04&sig=FV89OUj0vHXtKSZR/cI2qraxbMWlLFciv0w4zlXrj%2BQ%3D',
    views: 3100,
    likes: 670,
    downloads: 1100,
    featured: false,
    dateAdded: 'May 8, 2024',
    resolution: '2048 × 2048'
  },
  {
    id: 'german-11',
    title: 'BMW Z4 Convertible Blue',
    make: 'BMW',
    model: 'Z4 Convertible',
    year: 2023,
    category: 'German',
    categoryId: 'german',
    imageUrl: 'https://sdmntprwestus.oaiusercontent.com/files/00000000-15c4-6230-b3fe-3feeb1f797c9/raw?se=2025-05-08T14%3A58%3A58Z&sp=r&sv=2024-08-04&sr=b&scid=68bdb798-5beb-5e17-a092-951f6c572833&skoid=51916beb-8d6a-49b8-8b29-ca48ed86557e&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-08T11%3A06%3A49Z&ske=2025-05-09T11%3A06%3A49Z&sks=b&skv=2024-08-04&sig=Y5763ml/XMpdjA4yCzK7UHIp9tSsuv0cISY0ibaaFzw%3D',
    views: 3000,
    likes: 650,
    downloads: 1000,
    featured: false,
    dateAdded: 'May 8, 2024',
    resolution: '2048 × 2048'
  },
  {
    id: 'german-12',
    title: 'BMW 7 Series Black',
    make: 'BMW',
    model: '7 Series',
    year: 2023,
    category: 'German',
    categoryId: 'german',
    imageUrl: 'https://sdmntprwestus.oaiusercontent.com/files/00000000-ae50-6230-a23f-a595270aa911/raw?se=2025-05-08T14%3A58%3A58Z&sp=r&sv=2024-08-04&sr=b&scid=00000000-0000-0000-0000-000000000000&skoid=61180a4f-34a9-42b7-b76d-9ca47d89946d&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-08T12%3A45%3A51Z&ske=2025-05-09T12%3A45%3A51Z&sks=b&skv=2024-08-04&sig=PR1Tovyp8FQgDiMJflvlud1EItrQj%2B/9d/UmgRUJZjo%3D',
    views: 2950,
    likes: 640,
    downloads: 950,
    featured: false,
    dateAdded: 'May 8, 2024',
    resolution: '2048 × 2048'
  },
  {
    id: 'german-13',
    title: 'BMW X5 M50i Silver',
    make: 'BMW',
    model: 'X5 M50i',
    year: 2022,
    category: 'German',
    categoryId: 'german',
    imageUrl: 'https://sdmntprwestus.oaiusercontent.com/files/00000000-6f18-6230-8b01-8ae8070ceccc/raw?se=2025-05-08T14%3A58%3A58Z&sp=r&sv=2024-08-04&sr=b&scid=e9414ecd-e06c-512b-9dad-83555aac9015&skoid=51916beb-8d6a-49b8-8b29-ca48ed86557e&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-08T01%3A15%3A09Z&ske=2025-05-09T01%3A15%3A09Z&sks=b&skv=2024-08-04&sig=kb%2B7%2BYNhaBSa9P6TMjNZiyWLm4IEj2U7SPOvlvqbqy0%3D',
    views: 2850,
    likes: 620,
    downloads: 900,
    featured: false,
    dateAdded: 'May 8, 2024',
    resolution: '2048 × 2048'
  },
  {
    id: 'german-14',
    title: 'BMW 5 Series Touring Blue',
    make: 'BMW',
    model: '5 Series Touring',
    year: 2021,
    category: 'German',
    categoryId: 'german',
    imageUrl: 'https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-e97c-622f-ae13-fbee3373ddda/raw?se=2025-05-08T14%3A58%3A58Z&sp=r&sv=2024-08-04&sr=b&scid=00000000-0000-0000-0000-000000000000&skoid=61180a4f-34a9-42b7-b76d-9ca47d89946d&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-08T11%3A47%3A57Z&ske=2025-05-09T11%3A47%3A57Z&sks=b&skv=2024-08-04&sig=keSc2yUbkpfmzmBXv6yQQxbGe5mlvfyROLS1ljiOQis%3D',
    views: 2750,
    likes: 600,
    downloads: 850,
    featured: false,
    dateAdded: 'May 8, 2024',
    resolution: '2048 × 2048'
  },
  {
    id: 'german-15',
    title: 'BMW M5 Competition Black',
    make: 'BMW',
    model: 'M5 Competition',
    year: 2022,
    category: 'German',
    categoryId: 'german',
    imageUrl: 'https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-92e4-622f-970c-3ae42ecf3af3/raw?se=2025-05-08T14%3A59%3A00Z&sp=r&sv=2024-08-04&sr=b&scid=00000000-0000-0000-0000-000000000000&skoid=61180a4f-34a9-42b7-b76d-9ca47d89946d&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-08T12%3A17%3A33Z&ske=2025-05-09T12%3A17%3A33Z&sks=b&skv=2024-08-04&sig=ZOsQBgfZboo3KahV05CDPoZtbZ4xOkN7dJNHRX%2B5ioc%3D',
    views: 2650,
    likes: 590,
    downloads: 800,
    featured: false,
    dateAdded: 'May 8, 2024',
    resolution: '2048 × 2048'
  },
  {
    id: 'german-16',
    title: 'Audi A7 Sportback Silver',
    make: 'Audi',
    model: 'A7 Sportback',
    year: 2022,
    category: 'German',
    categoryId: 'german',
    imageUrl: 'https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-0e28-61f7-9087-4c96aa666e42/raw?se=2025-05-08T16%3A53%3A12Z&sp=r&sv=2024-08-04&sr=b&scid=00000000-0000-0000-0000-000000000000&skoid=30ec2761-8f41-44db-b282-7a0f8809659b&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-08T12%3A13%3A16Z&ske=2025-05-09T12%3A13%3A16Z&sks=b&skv=2024-08-04&sig=69WpUKiqwzsjLki5TAUV7iwxFEv5pgzwkvltOEKyhOg%3D',
    views: 2500,
    likes: 550,
    downloads: 700,
    featured: false,
    dateAdded: 'May 8, 2024',
    resolution: '2048 × 2048'
  },
  {
    id: 'german-17',
    title: 'Audi TT RS Coupe Red',
    make: 'Audi',
    model: 'TT RS Coupe',
    year: 2021,
    category: 'German',
    categoryId: 'german',
    imageUrl: 'https://sdmntprpolandcentral.oaiusercontent.com/files/00000000-60f4-620a-a4d6-7b1154431953/raw?se=2025-05-08T16%3A53%3A12Z&sp=r&sv=2024-08-04&sr=b&scid=34aab627-c48f-5483-ad12-0b6de9f90795&skoid=b53ae837-f585-4db7-b46f-2d0322fce5a9&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-08T11%3A03%3A23Z&ske=2025-05-09T11%3A03%3A23Z&sks=b&skv=2024-08-04&sig=1Vg8kFel19BJ8p342c2Zgsh6yv8P8cA%2BmufokhQ1E98%3D',
    views: 2200,
    likes: 500,
    downloads: 600,
    featured: false,
    dateAdded: 'May 8, 2024',
    resolution: '2048 × 2048'
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