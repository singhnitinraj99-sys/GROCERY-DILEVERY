import { Globe, Mail, MapPin, Phone, Share2 } from "lucide-react";
import bakery from "./bakery.png.jpeg";
import fruitsVegetables from "./fruits_vegetables.png.jpeg";
import deliveryTruck from "./delivery_truck.svg";
import dairy_eggs from "./dairy_eggs.png.jpeg";
import drinks from "./drinks.png.jpeg";
import pantry_staples from "./pantry_staples.png.jpeg";
import snacks from "./snacks.png.jpeg";
import frozen_foods from "./frozen_foods.png.jpeg";
import personal_care from "./personal_care.jpg.jpeg";
import baby_care from "./baby_care.jpg.jpeg";
import meat_seafood from "./meat_seafood.jpg.jpeg";

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

export const categoriesData = [
  { slug: "fruits-vegetables", name: "Fruits & Vegetables", image: fruitsVegetables },
    { slug: "personal-care", name: "Personal Care", image: personal_care },
    { slug: "pantry-staples", name: "Pantry Staples", image: pantry_staples },
    { slug: "bakery", name: "Bakery", image: bakery },
    { slug: "beverages", name: "Beverages", image: drinks },
    { slug: "meat-seafood", name: "Meat & Seafood", image: meat_seafood },
    { slug: "snacks", name: "Snacks", image: snacks },
    { slug: "frozen-foods", name: "Frozen Foods", image: frozen_foods },
    { slug: "baby-care", name: "Baby Care", image: baby_care },
    { slug: "dairy-eggs", name: "Dairy & Eggs", image: dairy_eggs },
];

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

// Minimal dummy products to be used by example data above
export const dummyProducts = [
  {
    id: "prod_apple_001",
    name: "Fresh Apples",
    description: "Crisp, juicy apples sourced locally.",
    price: 3.5,
    originalPrice: 4.0,
    image: fruitsVegetables,
    category: "fruits-vegetables",
    unit: "1 kg",
    stock: 50,
    isOrganic: true,
    rating: 4.6,
    reviewCount: 24,
    discount: 12,
    createdAt: "2026-06-01T00:00:00.000Z"
  },
  {
    id: "prod_bread_001",
    name: "Bakery Bread",
    description: "Freshly baked loaf, soft and flavorful.",
    price: 2.5,
    originalPrice: 3.0,
    image: bakery,
    category: "bakery",
    unit: "1 loaf",
    stock: 30,
    isOrganic: false,
    rating: 4.4,
    reviewCount: 12,
    discount: 15,
    createdAt: "2026-06-02T00:00:00.000Z"
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
