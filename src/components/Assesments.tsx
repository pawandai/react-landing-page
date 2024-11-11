import { ArrowRight } from "lucide-react";
import Card from "./Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./CardCarousel";
import Container from "./Container";
import CustomButton from "./CustomButton";
import SearchBar from "./SearchBar";
import { useOnScreen } from "../hooks/useOnScreen";

const Assessments = () => {
  const [ref, isVisible] = useOnScreen();

  return (
    <div
      id="assesments"
      className="min-h-[80vh] flex items-center justify-center"
    >
      <Container
        className={isVisible ? "animate-slideUp" : "opacity-0"}
        ref={ref}
      >
        <h2 className="h2 text-center">Assessments</h2>
        <SearchBar placeholder="Type something here" />
        <p className="sm:hidden text-center text-lg text-blue-600">
          Swipe for more
        </p>
        <div className="mx-auto">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-sm lg:max-w-3xl"
          >
            <CarouselContent>
              <CarouselItem className="lg:basis-1/2">
                <Card
                  title="Assessment 1"
                  content={<p>This is the main content area.</p>}
                  footer={
                    <div className="flex items-center justify-between">
                      <CustomButton>Take a test</CustomButton>
                      <CustomButton variant="outline">Learn More</CustomButton>
                    </div>
                  }
                  imageSrc="/hero.png"
                  imageAlt="Product Image"
                />
              </CarouselItem>
              <CarouselItem className="lg:basis-1/2">
                <Card
                  title="Assessment 2"
                  content={<p>This is the main content area.</p>}
                  footer={
                    <div className="flex items-center justify-between">
                      <CustomButton>Take a test</CustomButton>
                      <CustomButton variant="outline">Learn More</CustomButton>
                    </div>
                  }
                  imageSrc="/hero.png"
                  imageAlt="Product Image"
                />
              </CarouselItem>
              <CarouselItem className="lg:basis-1/2">
                <Card
                  title="Assessment 3"
                  content={<p>This is the main content area.</p>}
                  footer={
                    <div className="flex items-center justify-between">
                      <CustomButton>Take a test</CustomButton>
                      <CustomButton variant="outline">Learn More</CustomButton>
                    </div>
                  }
                  imageSrc="/hero.png"
                  imageAlt="Product Image"
                />
              </CarouselItem>
              <CarouselItem className="lg:basis-1/2">
                <Card
                  title="Assessment 4"
                  content={<p>This is the main content area.</p>}
                  footer={
                    <div className="flex items-center justify-between">
                      <CustomButton>Take a test</CustomButton>
                      <CustomButton variant="outline">Learn More</CustomButton>
                    </div>
                  }
                  imageSrc="/hero.png"
                  imageAlt="Product Image"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
        <CustomButton className="w-fit mx-auto text-blue-600" variant="link">
          See all assesments &nbsp; <ArrowRight className="h-4 w-4" />
        </CustomButton>
      </Container>
    </div>
  );
};

export default Assessments;
