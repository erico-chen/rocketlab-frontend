import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Product, CartItem } from '../../types/Product';
import { sampleProducts } from '../../data/products';
import Navbar from '../../components/Navbar/Navbar';
import ProductCardComponent from '../../components/ProductCard';
import {
  Container,
  ProductGrid,
} from '../../styles/Home.styles';

interface HomeProps {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  removeFromCart: (productId: number) => void;
}

const Home: React.FC<HomeProps> = ({ cart, setCart, removeFromCart }) => {
  const [filteredProducts, setFilteredProducts] = useState(sampleProducts);
  const navigate = useNavigate();

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const handleSearch = (query: string) => {
    const lowercaseQuery = query.toLowerCase();
    const filtered = sampleProducts.filter(product => 
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.description.toLowerCase().includes(lowercaseQuery)
    );
    setFilteredProducts(filtered);
  };

  return (
    <>
      <Navbar cart={cart} onSearch={handleSearch} />
      <Container>
        <ProductGrid>
          {filteredProducts.map((product) => (
            <ProductCardComponent
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </ProductGrid>
      </Container>
    </>
  );
};

export default Home;