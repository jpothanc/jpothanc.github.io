import Avatar from "react-avatar";
// import { CiMenuKebab } from "react-icons/ci";
import { primaryColor } from "../../constants";

type AboutIconMenuProps = {
  onClick: () => void;
};
const AboutIconMenu = ({ onClick }: AboutIconMenuProps) => {
  return (
    <>
      <div
        className="brand-logo hover:brightness-90 transition-all duration-300 "
        onClick={onClick}
      >
        {/* <div className="brand-logo__text">
          <CiMenuKebab size="24" />
        </div> */}
        <Avatar
          name=" &lt; j p / &gt;"
          size="35"
          round={true}
          color={primaryColor}
        />
      </div>
    </>
  );
};

export default AboutIconMenu;
