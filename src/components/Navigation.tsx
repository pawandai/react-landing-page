import { FC, useState } from "react";
import { Link } from "react-scroll";

interface NavLink {
  label: string;
  to: string;
}

const links: NavLink[] = [
  { label: "Home", to: "home" },
  { label: "About", to: "about" },
  { label: "Services", to: "services" },
  { label: "Portfolio", to: "portfolio" },
  { label: "Contact", to: "contact" },
];

const Navigation: FC = () => {
  const [activeLink, setActiveLink] = useState<string>("");

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 py-4 flex justify-center">
        {/* Centered Navigation Links */}
        <div className="space-x-8 flex">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              smooth={true}
              offset={-70}
              onSetActive={() => setActiveLink(link.label)}
              className={`text-lg font-semibold cursor-pointer transition-colors duration-200 
                          ${
                            activeLink === link.label
                              ? "text-blue-500 border-b-2 border-blue-500"
                              : "text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
                          }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
