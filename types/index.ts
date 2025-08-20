import { ReactNode } from 'react';

// Define the types for the cosmetics product
export interface Product {
  id: string; // Unique identifier for the product
  name: string; // Name of the product
  description: string; // Description of the product
  price: number; // Price of the product
  imageUrl: string; // URL for the product image
  category: string; // Category of the product (e.g., lipstick, foundation)
}

// Define the types for the cart item
export interface CartItem {
  product: Product; // Product details
  quantity: number; // Quantity of the product in the cart
}

// Define the types for user information
export interface User {
  id: string; // Unique identifier for the user
  name: string; // User's name
  email: string; // User's email address
  address: string; // User's shipping address
}

// Define the types for the context provider
export interface AppContextType {
  user: User | null; // Current user information
  cart: CartItem[]; // List of items in the cart
  addToCart: (product: Product, quantity: number) => void; // Function to add item to cart
  removeFromCart: (productId: string) => void; // Function to remove item from cart
}

// Default export for easier imports
export default {};