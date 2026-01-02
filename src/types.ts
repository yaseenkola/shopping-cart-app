// TypeScript types for our application

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface DeliveryAddress {
  street: string;
  apartment: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}
