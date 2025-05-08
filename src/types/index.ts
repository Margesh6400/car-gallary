export interface Category {
  id: string;
  name: string;
  description: string;
  count: number;
  coverImage: string;
}

export interface Wallpaper {
  id: string;
  title: string;
  make: string;
  model: string;
  year: number;
  category: string;
  categoryId: string;
  imageUrl: string;
  views: number;
  likes: number;
  featured?: boolean;
  dateAdded?: string;
  resolution?: string;
}