import { useEffect, useRef, useState } from "react";
import { SiSpacex } from "react-icons/si";
import { FiArrowRight, FiMapPin } from "react-icons/fi";

export const SmoothScrollHero: React.FC = () => {
  return (
    <div className="bg-zinc-950">
      <Nav />
      <Hero />
      <Schedule />
    </div>
  );
};

const Nav: React.FC = () => {
  const scrollToSchedule = () => {
    document.getElementById("launch-schedule")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-3 text-white">
      <SiSpacex className="text-3xl mix-blend-difference" />
      <button
        onClick={scrollToSchedule}
        className="flex items-center gap-1 text-xs text-zinc-400"
      >
        LAUNCH SCHEDULE <FiArrowRight />
      </button>
    </nav>
  );
};

const SECTION_HEIGHT = 1500;

const Hero: React.FC = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full"
    >
      <CenterImage />
      <ParallaxImages />
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </div>
  );
};

const CenterImage: React.FC = () => {
  const [clipPath, setClipPath] = useState<string>(
    "polygon(25% 25%, 75% 25%, 75% 75%, 25% 75%)"
  );
  const [backgroundSize, setBackgroundSize] = useState<string>("170%");
  const [opacity, setOpacity] = useState<number>(1);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const clip1 = Math.max(25 - (scrollY / 1500) * 25, 0);
    const clip2 = Math.min(75 + (scrollY / 1500) * 25, 100);

    setClipPath(
      `polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`
    );
    setBackgroundSize(scrollY < SECTION_HEIGHT ? "170%" : "100%");
    setOpacity(
      scrollY < SECTION_HEIGHT + 500 ? 1 - (scrollY - SECTION_HEIGHT) / 500 : 0
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="sticky top-0 h-screen w-full"
      style={{
        clipPath,
        backgroundSize,
        opacity,
        backgroundImage:
          "url(https://images.unsplash.com/photo-1460186136353-977e9d6085a1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

const ParallaxImages: React.FC = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px]">
      <ParallaxImg
        src="https://images.unsplash.com/photo-1484600899469-230e8d1d59c0?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Space launch example"
        start={-200}
        end={200}
        className="w-1/3"
      />
      {/* Additional ParallaxImg components as needed */}
    </div>
  );
};

interface ParallaxImgProps {
  src: string;
  alt: string;
  start: number;
  end: number;
  className: string;
}

const ParallaxImg: React.FC<ParallaxImgProps> = ({
  src,
  alt,
  start,
  end,
  className,
}) => {
  const ref = useRef<HTMLImageElement | null>(null);
  const [transform, setTransform] = useState<string>(
    "translateY(0px) scale(1)"
  );
  const [opacity, setOpacity] = useState<number>(1);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const scrollY = window.scrollY;
        const yPos = Math.min(
          end,
          Math.max(start, (scrollY * (end - start)) / SECTION_HEIGHT)
        );
        const scale = 1 - (scrollY / SECTION_HEIGHT) * 0.15;

        setTransform(`translateY(${yPos}px) scale(${scale})`);
        setOpacity(scrollY > SECTION_HEIGHT ? 0 : 1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [start, end]);

  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      className={className}
      style={{ transform, opacity }}
    />
  );
};

const Schedule: React.FC = () => {
  return (
    <section
      id="launch-schedule"
      className="mx-auto max-w-5xl px-4 py-48 text-white"
    >
      <h1 className="mb-20 text-4xl font-black uppercase text-zinc-50">
        Launch Schedule
      </h1>
      <ScheduleItem title="NG-21" date="Dec 9th" location="Florida" />
      {/* Additional ScheduleItem components */}
    </section>
  );
};

const ScheduleItem: React.FC<ScheduleItemProps> = ({
  title,
  date,
  location,
}) => {
  return (
    <div className="mb-9 flex items-center justify-between border-b border-zinc-800 px-3 pb-9">
      <div>
        <p className="mb-1.5 text-xl text-zinc-50">{title}</p>
        <p className="text-sm uppercase text-zinc-500">{date}</p>
      </div>
      <div className="flex items-center gap-1.5 text-end text-sm uppercase text-zinc-500">
        <p>{location}</p>
        <FiMapPin />
      </div>
    </div>
  );
};

interface ScheduleItemProps {
  title: string;
  date: string;
  location: string;
}
