import React, { useState } from 'react';
import type { Product } from '../types/Product';
import {
  ProductCard as StyledCard,
  ImageContainer,
  ProductImage,
  ProductName,
  ProductPrice,
  ProductDescription,
  BuyButton,
  DetailSection,
  DetailTitle,
  DetailText,
  FeaturesList,
  NutritionGrid,
  BrandName,
  ButtonGroup,
  InfoButton,
  Modal,
  ModalOverlay,
  ModalContent,
  CloseButton,
  ProductContent,
} from '../styles/Home.styles';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <StyledCard>
        <ImageContainer>
          <ProductImage src={product.image} alt={product.name} />
        </ImageContainer>
        <ProductContent>
          <ProductName>{product.name}</ProductName>
          <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
          <ProductDescription>{product.description}</ProductDescription>
          <ButtonGroup>
            <BuyButton onClick={() => onAddToCart(product)}>Add to Cart</BuyButton>
            <InfoButton onClick={() => setIsModalOpen(true)}>Information</InfoButton>
          </ButtonGroup>
        </ProductContent>
      </StyledCard>

      {isModalOpen && (
        <Modal>
          <ModalOverlay onClick={() => setIsModalOpen(false)} />
          <ModalContent>
            <CloseButton onClick={() => setIsModalOpen(false)}>&times;</CloseButton>
            <BrandName>{product.brand}</BrandName>
            
            <DetailSection>
              <DetailTitle>About</DetailTitle>
              <DetailText>{product.detailedDescription.about}</DetailText>
            </DetailSection>

            <DetailSection>
              <DetailTitle>Features</DetailTitle>
              <FeaturesList>
                {product.detailedDescription.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </FeaturesList>
            </DetailSection>

            <DetailSection>
              <DetailTitle>Nutrition Facts</DetailTitle>
              <DetailText>Serving Size: {product.detailedDescription.nutritionFacts.servingSize}</DetailText>
              <NutritionGrid>
                <DetailText>Calories: {product.detailedDescription.nutritionFacts.calories}</DetailText>
                <DetailText>Total Fat: {product.detailedDescription.nutritionFacts.totalFat}</DetailText>
                <DetailText>Saturated Fat: {product.detailedDescription.nutritionFacts.saturatedFat}</DetailText>
                <DetailText>Trans Fat: {product.detailedDescription.nutritionFacts.transFat}</DetailText>
                <DetailText>Cholesterol: {product.detailedDescription.nutritionFacts.cholesterol}</DetailText>
                <DetailText>Sodium: {product.detailedDescription.nutritionFacts.sodium}</DetailText>
                <DetailText>Total Carbs: {product.detailedDescription.nutritionFacts.totalCarbohydrate}</DetailText>
                <DetailText>Dietary Fiber: {product.detailedDescription.nutritionFacts.dietaryFiber}</DetailText>
                <DetailText>Sugars: {product.detailedDescription.nutritionFacts.sugars}</DetailText>
                <DetailText>Protein: {product.detailedDescription.nutritionFacts.protein}</DetailText>
              </NutritionGrid>
              <DetailTitle>Vitamins</DetailTitle>
              <FeaturesList>
                {product.detailedDescription.nutritionFacts.vitamins.map((vitamin, index) => (
                  <li key={index}>{vitamin}</li>
                ))}
              </FeaturesList>
            </DetailSection>

            <DetailSection>
              <DetailTitle>Storage</DetailTitle>
              <DetailText>{product.detailedDescription.storage}</DetailText>
            </DetailSection>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default ProductCard; 