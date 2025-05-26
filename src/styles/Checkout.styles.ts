import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 80px auto 0;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 30px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const Header = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 40px;
  grid-column: 1 / -1;
`;

export const FormSection = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  padding: 30px;
`;

export const SectionTitle = styled.h2`
  color: rgb(0,54,61);
  font-size: 1.5rem;
  margin-bottom: 20px;
  border-bottom: 2px solid #eee;
  padding-bottom: 10px;
`;

export const FormSubSection = styled.div`
  margin-bottom: 45px;
  padding: 25px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const FormSubSectionTitle = styled.h3`
  color: rgb(0,54,61);
  font-size: 1.1rem;
  margin-bottom: 20px;
  font-weight: 500;
`;

export const FormGroup = styled.div`
  margin-bottom: 35px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  color: #333;
  font-weight: 500;
  font-size: 0.95rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px;
  border: 2px solid #eee;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.2s;
  background-color: rgb(236, 236, 230);
  color: rgb(0,54,61);
  
  &:focus {
    outline: none;
    border-color: #2ecc71;
    box-shadow: 0 0 0 2px rgba(46, 204, 113, 0.2);
    background-color: white;
  }

  &::placeholder {
    color: rgba(0,54,61,0.6);
  }
`;

export const OrderSummary = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  padding: 30px;
  height: fit-content;
`;

export const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
  
  &:last-child {
    border-bottom: none;
  }
`;

export const SummaryLabel = styled.span`
  color: #666;
`;

export const SummaryValue = styled.span`
  color: #2ecc71;
  font-weight: bold;
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 2px solid #eee;
  font-size: 1.2rem;
  font-weight: bold;

  span:last-child {
    color: #2ecc71;
  }
`;

export const PlaceOrderButton = styled.button`
  width: 100%;
  background: #2ecc71;
  color: white;
  border: none;
  padding: 15px;
  border-radius: 25px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 20px;
  transition: all 0.2s;
  
  &:hover {
    background: #27ae60;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
  }
`;

export const BackButton = styled.button`
  background: none;
  border: 2px solid #2ecc71;
  color: #2ecc71;
  padding: 15px;
  border-radius: 25px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  margin-top: 10px;
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

export const GridContainer = styled.div`
  display: grid;
  gap: 35px;
  margin-bottom: 35px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const TwoColumnGrid = styled(GridContainer)`
  grid-template-columns: 1fr 1fr;
`;

export const ThreeColumnGrid = styled(GridContainer)`
  grid-template-columns: 2fr 1fr 1fr;
`;

// Modal Styles
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 40px;
  border-radius: 12px;
  max-width: 500px;
  width: 90%;
  text-align: center;
  position: relative;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
`;

export const ModalIcon = styled.div`
  width: 70px;
  height: 70px;
  background: #2ecc71;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  color: white;
  font-size: 35px;
`;

export const ModalTitle = styled.h2`
  color: rgb(0,54,61);
  font-size: 1.8rem;
  margin-bottom: 15px;
`;

export const ModalText = styled.p`
  color: #666;
  font-size: 1.1rem;
  margin-bottom: 30px;
  line-height: 1.5;
`;

export const ModalButton = styled.button`
  background: #2ecc71;
  color: white;
  border: none;
  padding: 15px 40px;
  border-radius: 25px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background: #27ae60;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const OrderNumber = styled.div`
  background: rgb(236, 236, 230);
  padding: 12px 25px;
  border-radius: 25px;
  display: inline-block;
  margin-bottom: 25px;
  color: rgb(0,54,61);
  font-weight: 600;
  font-size: 1.1rem;
`; 