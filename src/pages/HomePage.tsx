import SectionHeader from "../components/SectionHeader";
import ProductCard from "../components/ProductCard";
import SocialMediaGallery from "../components/SocialMediaGallery";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import { useState } from "react";
import { CloseMenu, MobileMenu } from "../components/MobileMenu";
import Navigation from "../components/Navigation";

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const bedProducts = [
    {
      title: "House Bed",
      originalPrice: "$599.99",
      discountPrice: "$300",
      imageUrl: "/images/house-bed.jpg",
    },
    {
      title: "Teepee Bed",
      originalPrice: "$699.99",
      discountPrice: "$300",
      imageUrl: "/images/teepee-bed.jpg",
    },
    // Add more product data here
  ];

  const beddingProducts = [
    {
      title: "Jungle Bedding Set",
      originalPrice: "$149.99",
      discountPrice: "$75",
      imageUrl: "/images/jungle-bedding.jpg",
    },
    {
      title: "Memphis Bedding Set",
      originalPrice: "$149.99",
      discountPrice: "$75",
      imageUrl: "/images/memphis-bedding.jpg",
    },
    // Add more bedding product data here
  ];

  const socialImages = [
    { url: "/images/social1.jpg", caption: "Stylish kids room" },
    { url: "/images/social2.jpg", caption: "Perfect for playtime" },
    // Add more social media images here
  ];

  return (
    <div className="space-y-12">
      <Hero backgroundImage="/hero.svg" />
      {/* <Banner /> */}
      <Navigation />

      <div className="h-screen flex items-center justify-center">
        <button
          onClick={() => setIsMenuOpen(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Open Sheet
        </button>

        <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
          <CloseMenu onClose={() => setIsMenuOpen(false)} />
          <h2 className="text-xl font-bold mb-4">Sheet Content</h2>
          <p>This is an example of a custom Sheet component.</p>
        </MobileMenu>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
