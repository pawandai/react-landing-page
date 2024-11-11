import { FC, useEffect, useState } from "react";
import "tailwindcss/tailwind.css";
import Container from "./Container";
import CustomButton from "./CustomButton";
import { Calendar } from "lucide-react";
import LearnMore from "./LearnMore";

interface HeroProps {
  backgroundImage: string;
}

const Hero: FC<HeroProps> = ({ backgroundImage }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden" id="home">
      <div
        className="absolute inset-0 bg-cover bg-fixed bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPositionY: `-${scrollY * 0.4}px`,
          filter: "brightness(0.7)",
          opacity: 0.4,
        }}
      />
      <Container className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="h1 font-bold animate-fade-in-up flex flex-col gap-2">
          <span>Digital tool for,</span>
          <span>Psychological Assessments</span>
        </h1>
        <p className="text-lg md:text-xl animate-fade-in-up-1">
          For further clinical evaluation and research, the APA is offering a
          number of “emerging measures” in Section III of DSM-5-TR. These
          patient assessment measures were developed to be administered at the
          initial patient interview and to monitor treatment progress...
        </p>
        <CustomButton
          size="lg"
          iconRight={<Calendar />}
          className="animate-fade-in-up-2"
        >
          Book an appointment
        </CustomButton>
        <LearnMore label="Scroll for more" className="animate-fade-in-up-3" />
      </Container>

      {/* Skewed Bottom Section */}
      <div className="bg-background p-6 -skew-y-6 md:-skew-y-3 h-32 md:h-40 -mt-12 md:-mt-16 z-10" />
    </div>
  );
};

export default Hero;
