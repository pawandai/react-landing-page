import { FC } from "react";

type SectionHeaderProps = {
  title: string;
  subtitle: string;
};

const SectionHeader: FC<SectionHeaderProps> = ({ title, subtitle }) => (
  <div className="text-center py-8 sticky top-0">
    <h2 className="text-3xl font-bold text-gray-700">{title}</h2>
    <p className="text-lg text-gray-500">{subtitle}</p>
  </div>
);

export default SectionHeader;
