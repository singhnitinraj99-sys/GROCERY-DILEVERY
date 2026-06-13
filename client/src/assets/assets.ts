import { Globe, Mail, MapPin, Phone, Share2 } from "lucide-react";
import bakery from "./bakery.png.jpeg";
import dairyEggs from "./dairy_eggs.png.jpeg";
import drinks from "./drinks.png.jpeg";
import frozenFoods from "./frozen_foods.png.jpeg";
import fruitsVegetables from "./fruits_vegetables.png.jpeg";
import meatSeafood from "./meat_seafood.jpg.jpeg";
import pantryStaples from "./pantry_staples.png.jpeg";
import personalCare from "./personal_care.jpg.jpeg";
import snacks from "./snacks.png.jpeg";
import heroImage from "./hero.png";
import deliveryTruck from "./delivery_truck.svg";

export const footerData = {
  brand: {
    name: "Fresh Grocer",
    description: "Delivering fresh groceries to your home with speed and care.",
    socials: [
      { icon: Globe, link: "https://instagram.com" },
      { icon: Share2, link: "https://facebook.com" },
      { icon: Mail, link: "https://twitter.com" }
    ]
  },
  sections: [
    {
      title: "Shop",
      links: [
        { label: "Fruits & Vegetables", to: "/products/fruits" },
        { label: "Dairy & Eggs", to: "/products/dairy" },
        { label: "Snacks", to: "/products/snacks" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", to: "/about" },
        { label: "Careers", to: "/careers" },
        { label: "Blog", to: "/blog" }
      ]
    }
  ],
  contact: [
    { icon: MapPin, text: "123 Grocery Lane, Your City" },
    { icon: Phone, text: "+1 (234) 567-8901" },
    { icon: Mail, text: "hello@freshgrocer.com" }
  ],
  bottom: {
    copyright: "© 2026 Fresh Grocer. All rights reserved.",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" }
    ]
  }
};

export const appPromoBannerData = {
  title: "Download the Fresh Grocer App",
  description: "Shop faster, save more, and get groceries delivered right from your phone. Download now for exclusive app-only offers.",
};

export const deliveryTruckImage = deliveryTruck;

export const heroSectionData = {
  description: "Get fresh, organic groceries delivered to your doorstep in minutes. Supporting local farmers and sustainable practices.",
  hero_features: [
    {
      title: "Fast Delivery",
      desc: "Get groceries within 30 minutes"
    },
    {
      title: "Fresh Quality",
      desc: "Handpicked fresh produce daily"
    },
    {
      title: "Best Prices",
      desc: "Competitive rates & discounts"
    },
    {
      title: "Easy Ordering",
      desc: "Simple, seamless checkout process"
    }
  ]
};

export const statusColors: Record<string, string> = {
  Placed: "bg-yellow-100 text-yellow-800",
  "Out for Delivery": "bg-blue-100 text-blue-800",
  Delivered: "bg-green-100 text-green-800"
};

export const dummyProducts = [
  {
    id: "1",
    name: "Fresh Apples",
    description: "Crisp, juicy apples picked at peak ripeness.",
    price: 3.5,
    originalPrice: 4.5,
    image: fruitsVegetables,
    category: "fruits",
    unit: "1 kg",
    stock: 25,
    isOrganic: true,
    rating: 4.5,
    reviewCount: 32,
    discount: 20,
    createdAt: "2026-06-01T00:00:00.000Z"
  },
  {
    id: "2",
    name: "Bakery Bread",
    description: "Fresh baked bread with a soft center and crispy crust.",
    price: 2.5,
    originalPrice: 3.0,
    image: bakery,
    category: "bakery",
    unit: "1 loaf",
    stock: 18,
    isOrganic: false,
    rating: 4.4,
    reviewCount: 18,
    discount: 16,
    createdAt: "2026-06-02T00:00:00.000Z"
  },
  {
    id: "3",
    name: "Dairy Eggs",
    description: "Large, farm-fresh eggs with excellent quality.",
    price: 3.75,
    originalPrice: 4.25,
    image: dairyEggs,
    category: "dairy",
    unit: "12 pcs",
    stock: 40,
    isOrganic: true,
    rating: 4.8,
    reviewCount: 26,
    discount: 12,
    createdAt: "2026-06-03T00:00:00.000Z"
  },
  {
    id: "4",
    name: "Refreshing Drinks",
    description: "Chilled beverages perfect for any meal.",
    price: 2.99,
    originalPrice: 3.5,
    image: drinks,
    category: "drinks",
    unit: "1 liter",
    stock: 50,
    isOrganic: false,
    rating: 4.3,
    reviewCount: 22,
    discount: 14,
    createdAt: "2026-06-04T00:00:00.000Z"
  },
  {
    id: "5",
    name: "Frozen Snacks",
    description: "Tasty frozen snacks ready in minutes.",
    price: 5.0,
    originalPrice: 6.0,
    image: frozenFoods,
    category: "frozen",
    unit: "500 g",
    stock: 35,
    isOrganic: false,
    rating: 4.1,
    reviewCount: 12,
    discount: 17,
    createdAt: "2026-06-05T00:00:00.000Z"
  },
  {
    id: "6",
    name: "Meat & Seafood",
    description: "High-quality meat and seafood selections.",
    price: 12.99,
    originalPrice: 15.5,
    image: meatSeafood,
    category: "meat",
    unit: "1 kg",
    stock: 20,
    isOrganic: false,
    rating: 4.7,
    reviewCount: 40,
    discount: 16,
    createdAt: "2026-06-06T00:00:00.000Z"
  },
  {
    id: "7",
    name: "Pantry Staples",
    description: "Essential pantry items for everyday cooking.",
    price: 8.25,
    originalPrice: 9.5,
    image: pantryStaples,
    category: "pantry",
    unit: "varies",
    stock: 100,
    isOrganic: false,
    rating: 4.2,
    reviewCount: 15,
    discount: 13,
    createdAt: "2026-06-07T00:00:00.000Z"
  },
  {
    id: "8",
    name: "Personal Care",
    description: "Daily personal care products for every home.",
    price: 6.5,
    originalPrice: 7.5,
    image: personalCare,
    category: "personal-care",
    unit: "1 pack",
    stock: 22,
    isOrganic: false,
    rating: 4.0,
    reviewCount: 19,
    discount: 13,
    createdAt: "2026-06-08T00:00:00.000Z"
  },
  {
    id: "9",
    name: "Snack Treats",
    description: "Crunchy snacks that are perfect for sharing.",
    price: 3.15,
    originalPrice: 3.75,
    image: snacks,
    category: "snacks",
    unit: "250 g",
    stock: 60,
    isOrganic: false,
    rating: 4.4,
    reviewCount: 29,
    discount: 16,
    createdAt: "2026-06-09T00:00:00.000Z"
  },
  {
    id: "10",
    name: "Hero Picks",
    description: "Featured top-quality products for your home.",
    price: 4.99,
    originalPrice: 5.99,
    image: heroImage,
    category: "featured",
    unit: "assorted",
    stock: 45,
    isOrganic: false,
    rating: 4.6,
    reviewCount: 38,
    discount: 17,
    createdAt: "2026-06-10T00:00:00.000Z"
  }
];

export const dummyDashboardOrdersData = [
  {
    id: "order_001",
    user: "user_1",
    items: [
      {
        product: dummyProducts[0],
        name: "Fresh Apples",
        image: fruitsVegetables,
        price: 3.5,
        quantity: 2,
        unit: "1 kg"
      },
      {
        product: dummyProducts[1],
        name: "Bakery Bread",
        image: bakery,
        price: 2.5,
        quantity: 1,
        unit: "1 loaf"
      }
    ],
    shippingAddress: {
      id: "address_001",
      label: "Home",
      address: "123 Grocery Lane",
      city: "Your City",
      state: "Your State",
      zip: "12345",
      isDefault: true,
      lat: 37.7749,
      lng: -122.4194
    },
    paymentMethod: "Credit Card",
    subtotal: 9.5,
    deliveryFee: 3.0,
    tax: 0.75,
    total: 13.25,
    status: "Out for Delivery",
    statusHistory: [
      {
        status: "Out for Delivery",
        timestamp: "2026-06-08T08:00:00.000Z",
        note: "Order placed"
      }
    ],
    deliveryPartner: {
      name: "Sam Wilson",
      phone: "+1234567890",
      vehicleType: "Bike"
    },
    deliveryOtp: "4512",
    isPaid: true,
    createdAt: "2026-06-08T08:00:00.000Z"
  }
];

export const dummyAddressData = [
  {
    id: "address_001",
    label: "Home",
    address: "123 Grocery Lane",
    city: "Your City",
    state: "Your State",
    zip: "12345",
    isDefault: true,
    lat: 37.7749,
    lng: -122.4194
  },
  {
    id: "address_002",
    label: "Work",
    address: "456 Market Street",
    city: "Cityville",
    state: "StateName",
    zip: "67890",
    isDefault: false,
    lat: 37.7849,
    lng: -122.4094
  }
];
