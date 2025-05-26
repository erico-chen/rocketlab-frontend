import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { CartItem } from '../../types/Product';
import Navbar from '../../components/Navbar/Navbar';
import {
  Container,
  Header,
  FormSection,
  SectionTitle,
  FormSubSection,
  FormSubSectionTitle,
  FormGroup,
  Label,
  Input,
  OrderSummary,
  SummaryItem,
  SummaryLabel,
  SummaryValue,
  Total,
  PlaceOrderButton,
  BackButton,
  TwoColumnGrid,
  ThreeColumnGrid,
  ModalOverlay,
  ModalContent,
  ModalIcon,
  ModalTitle,
  ModalText,
  ModalButton,
  OrderNumber
} from '../../styles/Checkout.styles';

interface CheckoutProps {
  cart: CartItem[];
  clearCart: () => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  zipCode: string;
  country: string;
}

const Checkout: React.FC<CheckoutProps> = ({ cart, clearCart }) => {
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    country: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const getSubtotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getShipping = () => {
    return getSubtotal() > 100 ? 0 : 10;
  };

  const getTotal = () => {
    return getSubtotal() + getShipping();
  };

  const generateOrderNumber = () => {
    const timestamp = Date.now().toString().slice(-6);
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `ORD-${timestamp}-${random}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newOrderNumber = generateOrderNumber();
    setOrderNumber(newOrderNumber);
    setShowConfirmation(true);
  };

  const handleSearch = () => {
    navigate('/');
  };

  const isFormValid = () => {
    return Object.values(formData).every(value => value.trim() !== '');
  };

  const handleConfirmationClose = () => {
    setShowConfirmation(false);
    clearCart();
    navigate('/');
  };

  return (
    <>
      <Navbar cart={cart} onSearch={handleSearch} />
      <Container>
        <Header>Checkout</Header>
        
        <form onSubmit={handleSubmit}>
          <FormSection>
            <SectionTitle>Shipping Information</SectionTitle>
            
            <FormSubSection>
              <FormSubSectionTitle>Personal Details</FormSubSectionTitle>
              <TwoColumnGrid>
                <FormGroup>
                  <Label>First Name</Label>
                  <Input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Enter your first name"
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label>Last Name</Label>
                  <Input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Enter your last name"
                    required
                  />
                </FormGroup>
              </TwoColumnGrid>

              <FormGroup>
                <Label>Email</Label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  required
                />
              </FormGroup>
            </FormSubSection>

            <FormSubSection>
              <FormSubSectionTitle>Shipping Address</FormSubSectionTitle>
              <FormGroup>
                <Label>Street Address</Label>
                <Input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Enter your street address"
                  required
                />
              </FormGroup>

              <ThreeColumnGrid>
                <FormGroup>
                  <Label>City</Label>
                  <Input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="Enter your city"
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label>ZIP Code</Label>
                  <Input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    placeholder="Enter ZIP code"
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label>Country</Label>
                  <Input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    placeholder="Enter country"
                    required
                  />
                </FormGroup>
              </ThreeColumnGrid>
            </FormSubSection>
          </FormSection>
        </form>

        <OrderSummary>
          <SectionTitle>Order Summary</SectionTitle>
          
          <SummaryItem>
            <SummaryLabel>Items ({cart.reduce((total, item) => total + item.quantity, 0)})</SummaryLabel>
            <SummaryValue>${getSubtotal().toFixed(2)}</SummaryValue>
          </SummaryItem>
          
          <SummaryItem>
            <SummaryLabel>Shipping</SummaryLabel>
            <SummaryValue>
              {getShipping() === 0 ? 'Free' : `$${getShipping().toFixed(2)}`}
            </SummaryValue>
          </SummaryItem>
          
          <Total>
            <span>Total</span>
            <span>${getTotal().toFixed(2)}</span>
          </Total>

          <PlaceOrderButton 
            type="submit"
            disabled={!isFormValid() || cart.length === 0}
            onClick={handleSubmit}
          >
            Place Order
          </PlaceOrderButton>
          
          <BackButton type="button" onClick={() => navigate('/cart')}>
            Back to Cart
          </BackButton>
        </OrderSummary>
      </Container>

      {showConfirmation && (
        <ModalOverlay>
          <ModalContent>
            <ModalIcon>✓</ModalIcon>
            <ModalTitle>Order Confirmed!</ModalTitle>
            <OrderNumber>Order #{orderNumber}</OrderNumber>
            <ModalText>
              Thank you for your purchase! We've sent a confirmation email with your order details.
              <br />
              You will receive shipping updates soon.
            </ModalText>
            <ModalButton onClick={handleConfirmationClose}>
              Finish
            </ModalButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default Checkout; 