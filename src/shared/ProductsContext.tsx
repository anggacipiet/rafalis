import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';
import { Product } from './products';

interface ProductsContextProps {
  products: Product[];
  error: string | null;
}

const ProductsContext = createContext<ProductsContextProps | undefined>(undefined);

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductsProvider');
  }
  return context;
};

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products');
        setProducts(response.data);
      } catch (err) {
        setError('Failed to load products');
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ products, error }}>
      {children}
    </ProductsContext.Provider>
  );
};
