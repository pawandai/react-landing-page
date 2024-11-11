import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
import About from "../components/About";
import Assessments from "../components/Assesments";

const HomePage = () => {
  return (
    <div className="space-y-12">
      <Hero backgroundImage="/hero.svg" />
      <Navigation />
      <About />
      <Assessments />
      <Footer />
    </div>
  );
};

export default HomePage;
