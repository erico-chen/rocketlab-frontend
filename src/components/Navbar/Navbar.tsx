import React, { useState } from 'react';
import { FaShoppingCart, FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import type { CartItem } from '../../types/Product';

const NavbarContainer = styled.nav`
  background: rgb(0,54,61);
  padding: 1rem 2rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StoreName = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  color: rgb(169,253,172);
  margin: 0;
  cursor: pointer;
  text-shadow: 0 2px 4px rgba(0,0,0,0.2);
  
  &:hover {
    color: rgba(169,253,172,0.8);
    transform: scale(1.02);
  }
  transition: all 0.2s ease;
`;

const SearchContainer = styled.div`
  position: relative;
  width: 40%;
  max-width: 500px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 12px 45px 12px 20px;
  border: 2px solid rgba(255,255,255,0.1);
  border-radius: 25px;
  font-size: 1rem;
  outline: none;
  transition: all 0.2s;
  background: rgba(255,255,255,0.1);
  color: white;
  
  &::placeholder {
    color: rgba(255,255,255,0.6);
  }
  
  &:focus {
    border-color: rgb(169,253,172);
    background: rgba(255,255,255,0.15);
    box-shadow: 0 0 10px rgba(169,253,172,0.3);
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255,255,255,0.6);
  pointer-events: none;
`;

const CartContainer = styled.div`
  position: relative;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(169,253,172,0.1);
    transform: scale(1.05);
  }
`;

const CartCount = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  background: rgb(169,253,172);
  color: rgb(0,54,61);
  border-radius: 50%;
  padding: 2px 8px;
  font-size: 0.8rem;
  font-weight: bold;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
`;

interface NavbarProps {
  cart: CartItem[];
  onSearch: (query: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ cart, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <NavbarContainer>
      <NavContent>
        <StoreName onClick={() => navigate('/')}>V-Store</StoreName>
        
        <SearchContainer>
          <form onSubmit={handleSearch}>
            <SearchInput
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <SearchIcon>
              <FaSearch />
            </SearchIcon>
          </form>
        </SearchContainer>

        <CartContainer onClick={() => navigate('/cart')}>
          <FaShoppingCart size={24} color="rgb(169,253,172)" />
          {getTotalItems() > 0 && <CartCount>{getTotalItems()}</CartCount>}
        </CartContainer>
      </NavContent>
    </NavbarContainer>
  );
};

export default Navbar; 