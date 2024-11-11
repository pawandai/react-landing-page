import { LiaLinkedin } from "react-icons/lia";
import Container from "./Container";
import ProfileCard from "./ProfileCard";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div id="about" className="h-[80vh] flex items-center justify-center">
      <Container className="items-center justify-center gap-0">
        <ProfileCard
          name="Dr. Manpreet"
          role="MBBS"
          profileImage="/profile_picture.png"
          quote="Taken & built upon one of the most trusted & authentic public repository from APA's DSM-5-TR Online Assessment Measures."
        />
        <Link
          to="https://www.linkedin.com/in/withlovemissmp/"
          className="inline-flex px-4 py-1 items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none bg-transparent border border-gray-200 hover:bg-gray-100"
        >
          LinkedIn <LiaLinkedin className="h-8 w-8" />
        </Link>
      </Container>
    </div>
  );
};

export default About;
