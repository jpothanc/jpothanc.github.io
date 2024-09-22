import { Icon } from "@iconify/react/dist/iconify.js";
import { getIconBySkill } from "../../utils/helper";

const IconLink = ({
  skill,
  link,
  color,
  onClick,
  customStyle,
}: {
  skill: string;
  link?: string;
  color?: string;
  onClick?: () => void;
  customStyle?: string;
}) => {
  const iconElement = (
    <Icon
      icon={getIconBySkill(skill)}
      style={{ fontSize: "1.2rem", color }}
      onClick={onClick}
    />
  );

  return (
    <span
      className={`text-white/50 mt-1  mb-1 hover:border-white/504 shadow-md 
                     hover:scale-110 hover:shadow-theme-dark-primary 
                     transition-all duration-300  ${customStyle}`}
    >
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          {iconElement}
        </a>
      ) : (
        iconElement
      )}
    </span>
  );
};

export default IconLink;
