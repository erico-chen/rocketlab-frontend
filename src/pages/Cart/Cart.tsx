import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { CartItem } from '../../types/Product';
import Navbar from '../../components/Navbar/Navbar';
import {
  Container,
  Header,
  CartList,
  CartItemContainer,
  CartItemImage,
  CartItemInfo,
  CartItemName,
  CartItemPrice,
  CartItemControls,
  CartItemQuantity,
  QuantityDisplay,
  QuantityButton,
  RemoveButton,
  CartSummary,
  CartTotal,
  BackButton,
  CheckoutButton
} from '../../styles/Cart.styles';

interface CartPageProps {
  cart: CartItem[];
  updateQuantity: (productId: number, change: number) => void;
  removeFromCart: (productId: number) => void;
}

const Cart: React.FC<CartPageProps> = ({ cart, updateQuantity, removeFromCart }) => {
  const navigate = useNavigate();
  
  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleSearch = () => {
    navigate('/');
  };

  return (
    <>
      <Navbar cart={cart} onSearch={handleSearch} />
      <Container>
        <Header>Shopping Cart</Header>
        {cart.length === 0 ? (
          <CartList>
            <p style={{ textAlign: 'center', padding: '20px' }}>Your cart is empty</p>
          </CartList>
        ) : (
          <>
            <CartList>
              {cart.map(item => (
                <CartItemContainer key={item.id}>
                  <CartItemImage src={item.image} alt={item.name} />
                  <CartItemInfo>
                    <CartItemName>{item.name}</CartItemName>
                    <CartItemControls>
                      <CartItemQuantity>
                        <QuantityButton 
                          onClick={() => updateQuantity(item.id, -1)}
                          disabled={item.quantity <= 1}
                        >
                          -
                        </QuantityButton>
                        <QuantityDisplay>{item.quantity}</QuantityDisplay>
                        <QuantityButton 
                          onClick={() => updateQuantity(item.id, 1)}
                        >
                          +
                        </QuantityButton>
                      </CartItemQuantity>
                      <RemoveButton onClick={() => removeFromCart(item.id)}>
                        ×
                      </RemoveButton>
                    </CartItemControls>
                  </CartItemInfo>
                  <CartItemPrice>${(item.price * item.quantity).toFixed(2)}</CartItemPrice>
                </CartItemContainer>
              ))}
            </CartList>
            <CartSummary>
              <CartTotal>Total: ${getCartTotal().toFixed(2)}</CartTotal>
              <div style={{ marginTop: '20px' }}>
                <BackButton onClick={() => navigate('/')}>
                  Continue Shopping
                </BackButton>
                <CheckoutButton onClick={() => navigate('/checkout')}>
                  Proceed to Checkout
                </CheckoutButton>
              </div>
            </CartSummary>
          </>
        )}
      </Container>
    </>
  );
};

export default Cart;