import { FC } from "react";
import { useOnScreen } from "../hooks/useOnScreen";

type ProductCardProps = {
  title: string;
  originalPrice: string;
  discountPrice: string;
  imageUrl: string;
};

const ProductCard: FC<ProductCardProps> = ({
  title,
  originalPrice,
  discountPrice,
  imageUrl,
}) => {
  const [ref, isVisible] = useOnScreen();

  return (
    <div
      ref={ref}
      className={`transition-transform transform hover:scale-105 rounded-lg shadow-lg p-4 bg-white text-center ${
        isVisible ? "animate-slideUp" : "opacity-0"
      }`}
    >
      <img
        src={imageUrl}
        alt={title}
        className="rounded-lg mb-4 w-full h-48 object-cover"
      />
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-2">
        <span className="line-through text-gray-500">{originalPrice}</span>{" "}
        <span className="text-red-500 font-bold">{discountPrice}</span>
      </p>
      <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
        Shop at 50% off
      </button>
    </div>
  );
};

export default ProductCard;
