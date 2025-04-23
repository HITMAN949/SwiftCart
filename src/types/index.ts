export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  stock: number;
  rating: {
    rate: number;
    count: number;
  };
}

export interface CartItem extends Omit<Product, 'rating'> {
  quantity: number;
  imageUrl: string;
} 