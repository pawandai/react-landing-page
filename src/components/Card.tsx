import React from "react";

interface CardProps {
  title: string;
  description?: string;
  content: React.ReactNode;
  footer?: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  content,
  footer,
  imageSrc,
  imageAlt,
}) => {
  return (
    <div className="max-w-sm p-4 rounded-lg border border-border transition-shadow duration-300">
      {imageSrc && (
        <div className="mb-4">
          <img
            src={imageSrc}
            alt={imageAlt || "Card Image"}
            className="w-full h-48 object-cover rounded-md"
          />
        </div>
      )}
      <div className="border-b pb-4 mb-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        {description && <p className="text-muted-foreground">{description}</p>}
      </div>
      <div className="text-muted-foreground">{content}</div>
      {footer && <div className="pt-4 mt-4 border-t">{footer}</div>}
    </div>
  );
};

export default Card;
