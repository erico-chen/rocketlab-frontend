export interface NutritionFacts {
  servingSize: string;
  calories: string;
  totalFat: string;
  saturatedFat: string;
  transFat: string;
  cholesterol: string;
  sodium: string;
  totalCarbohydrate: string;
  dietaryFiber: string;
  sugars: string;
  protein: string;
  vitamins: string[];
}

export interface DetailedDescription {
  about: string;
  features: string[];
  nutritionFacts: NutritionFacts;
  storage: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  brand: string;
  detailedDescription: DetailedDescription;
}

export interface CartItem extends Product {
  quantity: number;
} 