import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 80px auto 0;
  padding: 20px;
`;

export const Header = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 40px;
`;

export const CartList = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  padding: 20px;
`;

export const CartItemContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto auto;
  align-items: center;
  gap: 20px;
  padding: 20px;
  border-bottom: 1px solid #eee;
  
  &:last-child {
    border-bottom: none;
  }
`;

export const CartItemImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
`;

export const CartItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const CartItemName = styled.h3`
  font-size: 1.2rem;
  margin: 0;
  color: #333;
`;

export const CartItemPrice = styled.p`
  font-size: 1.1rem;
  color: #2ecc71;
  margin: 0;
  font-weight: bold;
  text-align: right;
`;

export const CartItemControls = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const CartItemQuantity = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const QuantityDisplay = styled.span`
  background: rgb(0,54,61);
  color: white;
  min-width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  font-weight: bold;
  font-size: 1rem;
`;

export const QuantityButton = styled.button`
  background: rgb(0,54,61);
  border: none;
  border-radius: 25px;
  padding: 8px 15px;
  cursor: pointer;
  transition: all 0.2s;
  color: white;
  font-weight: bold;
  
  &:hover {
    background: rgba(0,54,61,0.9);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  color: #e74c3c;
  cursor: pointer;
  padding: 8px;
  font-size: 1.2rem;
  line-height: 1;
  transition: all 0.2s;
  border-radius: 50%;
  
  &:hover {
    background: rgba(231, 76, 60, 0.1);
    color: #c0392b;
  }
`;

export const CartSummary = styled.div`
  margin-top: 20px;
  padding: 25px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  text-align: right;
`;

export const CartTotal = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
  margin: 0;
  color: #333;
`;

export const BackButton = styled.button`
  background: none;
  border: 2px solid #2ecc71;
  color: #2ecc71;
  padding: 12px 25px;
  border-radius: 25px;
  cursor: pointer;
  margin-right: 15px;
  font-weight: 600;
  transition: all 0.2s;
  
  &:hover {
    background: #2ecc71;
    color: white;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const CheckoutButton = styled.button`
  background: #2ecc71;
  border: none;
  color: white;
  padding: 12px 25px;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s;
  
  &:hover {
    background: #27ae60;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`; 