import type { Product } from '../types/Product';
import salmonImage from '../assets/salmon.png';
import avocadoImage from '../assets/avocado.png';
import coffeeImage from '../assets/coffee.png';
import mozzarelaImage from '../assets/mozzarela.png';
import berriesImage from '../assets/berries.png';
import cheeseImage from '../assets/cheese.png';
import quinoaImage from '../assets/quinoa.png';
import honeyImage from '../assets/honey.png';
import chocolateImage from '../assets/chocolate.png';
import sourdoughBreadImage from '../assets/sourdough-bread.png';
import oliveOilImage from '../assets/oliver-oil.png';
import balsamicVinegarImage from '../assets/balsamic-vinegar.png';


export const sampleProducts: Product[] = [
  {
    id: 1,
    name: "Organic Avocados",
    price: 4.99,
    image: avocadoImage,
    description: "Ripe and ready to eat, pack of 2",
    brand: "Nature's Best Organic",
    detailedDescription: {
      about: "Premium Hass avocados grown in sustainable farms in California. Each avocado is carefully hand-picked at peak ripeness to ensure the best flavor and texture.",
      features: [
        "USDA Certified Organic",
        "Non-GMO",
        "Sustainably farmed",
        "Perfectly ripened",
        "Medium size (170-200g each)"
      ],
      nutritionFacts: {
        servingSize: "1/3 medium avocado (50g)",
        calories: "80",
        totalFat: "8g",
        saturatedFat: "1g",
        transFat: "0g",
        cholesterol: "0mg",
        sodium: "0mg",
        totalCarbohydrate: "4g",
        dietaryFiber: "3g",
        sugars: "0g",
        protein: "1g",
        vitamins: [
          "Vitamin K: 11% DV",
          "Folate: 10% DV",
          "Vitamin C: 4% DV",
          "Potassium: 6% DV"
        ]
      },
      storage: "Store at room temperature until ripe, then refrigerate for up to 3 days."
    }
  },
  {
    id: 2,
    name: "Artisan Sourdough Bread",
    price: 6.99,
    image: sourdoughBreadImage,
    description: "Freshly baked crusty loaf",
    brand: "Artisan Bakehouse",
    detailedDescription: {
      about: "Handcrafted sourdough bread made with our 100-year-old starter. Each loaf is fermented for 24 hours and baked in a traditional stone oven for the perfect crust and texture.",
      features: [
        "Natural fermentation",
        "No commercial yeast",
        "Stone-baked",
        "Made fresh daily",
        "Authentic sourdough starter"
      ],
      nutritionFacts: {
        servingSize: "1 slice (57g)",
        calories: "160",
        totalFat: "2g",
        saturatedFat: "0g",
        transFat: "0g",
        cholesterol: "0mg",
        sodium: "380mg",
        totalCarbohydrate: "29g",
        dietaryFiber: "2g",
        sugars: "0g",
        protein: "5g",
        vitamins: [
          "Iron: 8% DV",
          "Thiamin: 15% DV",
          "Folate: 10% DV",
          "Niacin: 10% DV"
        ]
      },
      storage: "Best consumed within 2-3 days. Store in paper bag at room temperature or freeze for up to 3 months."
    }
  },
  {
    id: 3,
    name: "Premium Ground Coffee",
    price: 14.99,
    image: coffeeImage,
    description: "Dark roast, 100% Arabica beans, 12oz",
    brand: "Mountain Peak Coffee",
    detailedDescription: {
      about: "Single-origin Arabica beans from the highlands of Colombia, carefully roasted to bring out rich, bold flavors with notes of dark chocolate and caramel.",
      features: [
        "100% Arabica beans",
        "Single-origin Colombian",
        "Dark roast",
        "Small-batch roasted",
        "Fair Trade Certified"
      ],
      nutritionFacts: {
        servingSize: "1 cup brewed (240ml)",
        calories: "2",
        totalFat: "0g",
        saturatedFat: "0g",
        transFat: "0g",
        cholesterol: "0mg",
        sodium: "5mg",
        totalCarbohydrate: "0g",
        dietaryFiber: "0g",
        sugars: "0g",
        protein: "0.3g",
        vitamins: [
          "Niacin: 2% DV",
          "Pantothenic Acid: 6% DV",
          "Riboflavin: 1% DV"
        ]
      },
      storage: "Store in an airtight container in a cool, dark place. Best used within 3 weeks of roasting date."
    }
  },
  {
    id: 4,
    name: "Fresh Mozzarella",
    price: 5.99,
    image: mozzarelaImage,
    description: "Italian-style, locally made, 8oz",
    brand: "Dairy Dell Creamery",
    detailedDescription: {
      about: "Handcrafted fresh mozzarella made daily from local dairy farm milk. Our traditional stretching technique creates the perfect texture and mild, creamy flavor.",
      features: [
        "Made from local milk",
        "No artificial ingredients",
        "Handcrafted daily",
        "Traditional method",
        "Hormone-free milk"
      ],
      nutritionFacts: {
        servingSize: "1oz (28g)",
        calories: "70",
        totalFat: "5g",
        saturatedFat: "3g",
        transFat: "0g",
        cholesterol: "20mg",
        sodium: "170mg",
        totalCarbohydrate: "1g",
        dietaryFiber: "0g",
        sugars: "0g",
        protein: "6g",
        vitamins: [
          "Calcium: 15% DV",
          "Vitamin A: 4% DV",
          "Vitamin B12: 8% DV"
        ]
      },
      storage: "Keep refrigerated. Best consumed within 5 days of opening."
    }
  },
  {
    id: 5,
    name: "Wild Caught Salmon",
    price: 12.99,
    image: salmonImage,
    description: "Premium fillet, per pound",
    brand: "Pacific Northwest Seafood",
    detailedDescription: {
      about: "Wild-caught Alaskan salmon, sustainably harvested from the pristine waters of the Pacific Northwest. Known for its rich flavor and vibrant color.",
      features: [
        "Wild-caught",
        "Never frozen",
        "Sustainably harvested",
        "Premium quality",
        "Rich in omega-3"
      ],
      nutritionFacts: {
        servingSize: "4oz (113g)",
        calories: "234",
        totalFat: "14g",
        saturatedFat: "3g",
        transFat: "0g",
        cholesterol: "63mg",
        sodium: "58mg",
        totalCarbohydrate: "0g",
        dietaryFiber: "0g",
        sugars: "0g",
        protein: "23g",
        vitamins: [
          "Vitamin D: 100% DV",
          "Vitamin B12: 100% DV",
          "Omega-3: 2,300mg"
        ]
      },
      storage: "Keep refrigerated. Cook or freeze within 2 days of purchase."
    }
  },
  {
    id: 6,
    name: "Organic Mixed Berries",
    price: 6.99,
    image: berriesImage,
    description: "Strawberries, blueberries, raspberries mix",
    brand: "Berry Fresh Farms",
    detailedDescription: {
      about: "A colorful mix of organic berries picked at peak ripeness. Our berries are grown without pesticides and carefully selected for the perfect balance of sweetness.",
      features: [
        "USDA Certified Organic",
        "Triple washed",
        "Ready to eat",
        "No pesticides",
        "Peak season harvest"
      ],
      nutritionFacts: {
        servingSize: "1 cup (150g)",
        calories: "85",
        totalFat: "0.5g",
        saturatedFat: "0g",
        transFat: "0g",
        cholesterol: "0mg",
        sodium: "0mg",
        totalCarbohydrate: "20g",
        dietaryFiber: "8g",
        sugars: "12g",
        protein: "1g",
        vitamins: [
          "Vitamin C: 85% DV",
          "Fiber: 32% DV",
          "Antioxidants: High"
        ]
      },
      storage: "Keep refrigerated. Best consumed within 5-7 days."
    }
  },
  {
    id: 7,
    name: "Extra Virgin Olive Oil",
    price: 19.99,
    image: oliveOilImage,
    description: "Cold-pressed Italian olive oil, 500ml",
    brand: "Tuscan Gold",
    detailedDescription: {
      about: "Premium extra virgin olive oil from century-old olive groves in Tuscany. Cold-pressed within hours of harvest to preserve its exceptional flavor and nutritional benefits.",
      features: [
        "First cold-pressed",
        "Single estate",
        "Unfiltered",
        "Low acidity (<0.3%)",
        "Protected designation of origin"
      ],
      nutritionFacts: {
        servingSize: "1 tbsp (15ml)",
        calories: "120",
        totalFat: "14g",
        saturatedFat: "2g",
        transFat: "0g",
        cholesterol: "0mg",
        sodium: "0mg",
        totalCarbohydrate: "0g",
        dietaryFiber: "0g",
        sugars: "0g",
        protein: "0g",
        vitamins: [
          "Vitamin E: 10% DV",
          "Vitamin K: 8% DV",
          "Polyphenols: High"
        ]
      },
      storage: "Store in a cool, dark place. Best used within 18 months of harvest date."
    }
  },
  {
    id: 8,
    name: "Aged Balsamic Vinegar",
    price: 16.99,
    image: balsamicVinegarImage,
    description: "12-year aged, from Modena, 250ml",
    brand: "Modena Heritage",
    detailedDescription: {
      about: "Traditional balsamic vinegar aged for 12 years in wooden barrels. Made from reduced grape must in Modena, Italy, following centuries-old traditions.",
      features: [
        "12-year aging",
        "Traditional wooden barrels",
        "DOP certified",
        "100% grape must",
        "No added sugars"
      ],
      nutritionFacts: {
        servingSize: "1 tbsp (15ml)",
        calories: "20",
        totalFat: "0g",
        saturatedFat: "0g",
        transFat: "0g",
        cholesterol: "0mg",
        sodium: "10mg",
        totalCarbohydrate: "5g",
        dietaryFiber: "0g",
        sugars: "4g",
        protein: "0g",
        vitamins: [
          "Antioxidants: High",
          "Minerals: 2% DV",
          "Polyphenols: Present"
        ]
      },
      storage: "Store at room temperature. No expiration date when properly stored."
    }
  },
  {
    id: 9,
    name: "Organic Quinoa",
    price: 8.99,
    image: quinoaImage,
    description: "Premium white quinoa, 1lb bag",
    brand: "Ancient Harvest",
    detailedDescription: {
      about: "Organic white quinoa sourced from small-scale farmers in the Andean highlands. Known for its light, fluffy texture and nutty flavor.",
      features: [
        "USDA Certified Organic",
        "Fair Trade",
        "Pre-rinsed",
        "Gluten-free",
        "Complete protein"
      ],
      nutritionFacts: {
        servingSize: "1/4 cup dry (45g)",
        calories: "170",
        totalFat: "2g",
        saturatedFat: "0g",
        transFat: "0g",
        cholesterol: "0mg",
        sodium: "0mg",
        totalCarbohydrate: "31g",
        dietaryFiber: "3g",
        sugars: "0g",
        protein: "6g",
        vitamins: [
          "Iron: 15% DV",
          "Magnesium: 30% DV",
          "Zinc: 10% DV"
        ]
      },
      storage: "Store in an airtight container in a cool, dry place for up to 1 year."
    }
  },
  {
    id: 10,
    name: "Artisanal Cheese Selection",
    price: 24.99,
    image: cheeseImage,
    description: "Curated selection of four premium cheeses",
    brand: "Fromagerie Select",
    detailedDescription: {
      about: "A carefully curated selection of artisanal cheeses from renowned cheese makers. Includes aged cheddar, soft brie, blue cheese, and aged gouda.",
      features: [
        "Handcrafted cheeses",
        "Award-winning selection",
        "Perfect for entertaining",
        "Various milk types",
        "Aged varieties"
      ],
      nutritionFacts: {
        servingSize: "1oz (28g)",
        calories: "110",
        totalFat: "9g",
        saturatedFat: "5g",
        transFat: "0g",
        cholesterol: "30mg",
        sodium: "170mg",
        totalCarbohydrate: "1g",
        dietaryFiber: "0g",
        sugars: "0g",
        protein: "7g",
        vitamins: [
          "Calcium: 20% DV",
          "Vitamin B12: 15% DV",
          "Vitamin A: 6% DV"
        ]
      },
      storage: "Keep refrigerated. Best consumed within 5-7 days of opening."
    }
  },
  {
    id: 11,
    name: "Raw Honey",
    price: 9.99,
    image: honeyImage,
    description: "Local wildflower honey, 16oz jar",
    brand: "Bee's Bounty",
    detailedDescription: {
      about: "Raw, unfiltered honey collected from local wildflower meadows. Each batch captures the unique floral essence of the season.",
      features: [
        "Raw and unfiltered",
        "Local wildflowers",
        "Never heated",
        "Small-batch",
        "Contains natural pollen"
      ],
      nutritionFacts: {
        servingSize: "1 tbsp (21g)",
        calories: "60",
        totalFat: "0g",
        saturatedFat: "0g",
        transFat: "0g",
        cholesterol: "0mg",
        sodium: "0mg",
        totalCarbohydrate: "17g",
        dietaryFiber: "0g",
        sugars: "17g",
        protein: "0g",
        vitamins: [
          "Antioxidants: Present",
          "Enzymes: Active",
          "Minerals: Trace"
        ]
      },
      storage: "Store at room temperature. Crystallization is natural and preserves raw honey properties."
    }
  },
  {
    id: 12,
    name: "Dark Chocolate Bar",
    price: 4.99,
    image: chocolateImage,
    description: "72% cacao, single origin, 3.5oz",
    brand: "Cacao Origins",
    detailedDescription: {
      about: "Single-origin dark chocolate made from ethically sourced cacao beans from Ecuador. Carefully crafted to highlight complex flavor notes of berries and nuts.",
      features: [
        "72% cacao content",
        "Single-origin beans",
        "Fair Trade certified",
        "Bean-to-bar process",
        "Small-batch crafted"
      ],
      nutritionFacts: {
        servingSize: "1oz (28g)",
        calories: "170",
        totalFat: "12g",
        saturatedFat: "7g",
        transFat: "0g",
        cholesterol: "0mg",
        sodium: "0mg",
        totalCarbohydrate: "13g",
        dietaryFiber: "3g",
        sugars: "7g",
        protein: "2g",
        vitamins: [
          "Iron: 8% DV",
          "Magnesium: 16% DV",
          "Antioxidants: High"
        ]
      },
      storage: "Store in a cool, dry place between 65-70°F. Best consumed within 12 months."
    }
  }
]; 