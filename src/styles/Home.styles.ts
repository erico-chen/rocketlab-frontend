import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;
  margin-top: 80px;
`;

export const CartIconContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const CartCount = styled.span`
  background-color: #2ecc71;
  color: white;
  border-radius: 50%;
  padding: 2px 8px;
  font-size: 0.8rem;
  position: absolute;
  top: -8px;
  right: -8px;
`;

export const Header = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 40px;
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 340px);
  gap: 50px;
  padding: 20px;
  justify-content: center;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 340px);
    gap: 40px;
  }

  @media (max-width: 800px) {
    grid-template-columns: 340px;
    gap: 30px;
  }
`;

export const ProductCard = styled.div`
  border: none;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  background: rgb(0,54,61);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 340px;
  margin-bottom: 10px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.3);
  }
`;

export const ImageContainer = styled.div`
  width: 300px;
  height: 300px;
  margin: 0 auto 15px auto;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(0,54,61);
`;

export const ProductImage = styled.img`
  max-width: 280px;
  max-height: 280px;
  width: auto;
  height: auto;
  object-fit: contain;
  object-position: center;
  border-radius: 8px;
`;

export const ProductContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 180px;
`;

export const ProductName = styled.h2`
  font-size: 1.2rem;
  margin: 10px 0;
  color: #ffffff;
  font-weight: 600;
`;

export const ProductPrice = styled.p`
  font-size: 1.2rem;
  color: rgb(169,253,172);
  font-weight: bold;
  margin: 8px 0;
  text-shadow: 0 1px 2px rgba(0,0,0,0.1);
`;

export const ProductDescription = styled.p`
  color: rgba(255,255,255,0.8);
  font-size: 0.9rem;
  line-height: 1.4;
  margin: 12px 0;
  flex-grow: 1;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const BuyButton = styled.button`
  background-color: rgb(169,253,172);
  color: rgb(0,54,61);
  border: none;
  padding: 12px 25px;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.2s;
  font-weight: 600;
  width: 80%;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);

  &:hover {
    background-color: rgba(169,253,172,0.9);
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0,0,0,0.3);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const CartDropdown = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 50px;
  right: 0;
  width: 300px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  padding: 20px;
  display: ${props => props.isOpen ? 'block' : 'none'};
  z-index: 1000;
  max-height: 400px;
  overflow-y: auto;
`;

export const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  
  &:last-child {
    border-bottom: none;
  }
`;

export const CartItemImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 10px;
`;

export const CartItemInfo = styled.div`
  flex: 1;
`;

export const CartItemName = styled.h3`
  font-size: 0.9rem;
  margin: 0;
  color: #333;
`;

export const CartItemPrice = styled.p`
  font-size: 0.9rem;
  color: #2ecc71;
  margin: 5px 0;
`;

export const CartItemQuantity = styled.span`
  font-size: 0.8rem;
  color: #666;
`;

export const CartTotal = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 2px solid #eee;
  text-align: right;
  font-weight: bold;
  font-size: 1.1rem;
`;

export const EmptyCart = styled.p`
  text-align: center;
  color: #666;
  margin: 20px 0;
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  color: #e74c3c;
  cursor: pointer;
  padding: 5px;
  margin-left: 10px;
  font-size: 0.8rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const ViewCartButton = styled.button`
  width: 100%;
  background: #2ecc71;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 15px;
  font-size: 1rem;
  
  &:hover {
    background: #27ae60;
  }
`;

export const ProductDetails = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,54,61,0.95);
  padding: 20px;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.3s ease;
  overflow-y: auto;
  color: white;
  text-align: left;

  /* Scrollbar styling */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(169,253,172,0.1);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgb(169,253,172);
    border-radius: 3px;
  }
`;

export const DetailSection = styled.div`
  margin-bottom: 15px;
`;

export const DetailTitle = styled.h3`
  color: rgb(169,253,172);
  font-size: 1.1rem;
  margin: 10px 0;
`;

export const DetailText = styled.p`
  font-size: 0.9rem;
  margin: 5px 0;
  color: rgba(255,255,255,0.9);
`;

export const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 5px 0;

  li {
    padding: 3px 0;
    font-size: 0.9rem;
    color: rgba(255,255,255,0.9);
    
    &:before {
      content: "•";
      color: rgb(169,253,172);
      padding-right: 8px;
    }
  }
`;

export const NutritionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
  font-size: 0.85rem;
  color: rgba(255,255,255,0.9);
`;

export const BrandName = styled.p`
  color: rgb(169,253,172);
  font-weight: 600;
  font-size: 0.9rem;
  margin: 0 0 10px 0;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-top: auto;
`;

export const InfoButton = styled.button`
  background-color: transparent;
  color: rgb(169,253,172);
  border: 1px solid rgb(169,253,172);
  padding: 6px 12px;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 0.8rem;
  font-weight: 500;
  width: 60%;
  letter-spacing: 0.5px;

  &:hover {
    background-color: rgba(169,253,172,0.1);
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;

export const ModalContent = styled.div`
  position: relative;
  background: rgb(0,54,61);
  padding: 30px;
  border-radius: 12px;
  max-width: 600px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  z-index: 1001;
  box-shadow: 0 4px 20px rgba(0,0,0,0.3);
  color: white;

  /* Scrollbar styling */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(169,253,172,0.1);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgb(169,253,172);
    border-radius: 3px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: rgb(169,253,172);
  font-size: 24px;
  cursor: pointer;
  padding: 5px;
  line-height: 1;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.1);
    color: rgba(169,253,172,0.8);
  }
`; 