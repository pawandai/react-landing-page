import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
import CustomButton from "../components/CustomButton";
import About from "../components/About";

const HomePage = () => {
  return (
    <div className="space-y-12">
      <Hero backgroundImage="/hero.svg" />
      <Navigation />
      <About />
      <div className="h-screen flex items-center justify-center">
        <CustomButton>Open Sheet</CustomButton>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
