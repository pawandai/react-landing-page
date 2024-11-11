import { FC } from "react";

interface ProfileCardProps {
  name: string;
  role: string;
  profileImage: string;
  quote: string;
}

const ProfileCard: FC<ProfileCardProps> = ({
  name,
  role,
  profileImage,
  quote,
}) => {
  return (
    <div className="flex flex-col items-center px-10 py-5 max-w-2xl mx-auto rounded-2xl">
      {/* Profile Image */}
      <div className="w-32 h-32 rounded-full overflow-hidden shadow-neomorph mb-6">
        <img
          src={profileImage}
          alt={`${name}'s profile`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name and Role */}
      <h3 className="text-2xl font-semibold mb-1">{name}</h3>
      <p className="text-muted-foreground mb-4">{role}</p>

      {/* Quote */}
      <div className="relative px-6 pt-6 rounded-xl max-w-lg text-center">
        <p className="absolute top-1 left-2 text-5xl">“</p>
        <p className="text-lg italic">{quote}</p>
        <p className="absolute bottom-1 right-2 text-5xl">”</p>
      </div>
    </div>
  );
};

export default ProfileCard;
