import { useEffect, useState } from "react";
import Container from "./Container";

const Banner = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container className="relative h-screen">
      <div
        className="absolute top-0 left-0 w-full h-[60vh] bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/hero.svg')`,
          backgroundAttachment: "fixed",
          backgroundPositionY: `-${scrollY * 0.4}px`,
          backgroundSize: "70vw",
        }}
      >
        <div className="w-full h-full flex flex-col justify-center items-center bg-background/50">
          <h1 className="h1 flex flex-col items-center justify-center gap-4">
            <span className="italic">#TalkToMissMp's</span>
            <span>Digital tool for,</span>
            <span>Psychological Assessments</span>
          </h1>
          {/* <p className="lead">{subtitle}</p> */}
        </div>
      </div>
    </Container>
  );
};

export default Banner;
