export enum CategoryId {
  ALL = 'all',
  FURNITURE = 'furniture',
  LIGHTING = 'lighting',
  PLANTS_VASES = 'plants_vases',
  TEXTILES_DECOR = 'textiles_decor',
}

export interface CategoryShowcaseItem {
  id: string;
  title: string;
  categoryId: CategoryId;
  imageSrc: string;
}

export interface ColorOption {
  id: string;
  label: string;
  swatchClass: string;
}

export interface Product {
  id: string;
  title: string;
  category: CategoryId;
  categoryLabel: string;
  materialLabel: string;
  price: number;
  originalPrice?: number;
  discountPercent?: number;
  rating?: string;
  dimensions: string;
  stockLabel: string;
  shortDescription: string;
  highlights: string[];
  imageSrc: string;
  cropClass: string;
  studioBgClass: string;
  colors: ColorOption[];
  featuredInHero?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor: string;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  content: string[];
  cropClass: string;
  imageSrc?: string;
}

export interface Testimonial {
  id: string;
  author: string;
  roleAndCity: string;
  purchasedItem: string;
  quote: string;
}
