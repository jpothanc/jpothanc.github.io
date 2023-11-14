import { ThemeConstants } from "../constants";
import { getThemeColor } from "../utils/helper";

const Contact = () => {
  return (
    <div
      className="card"
      style={{
        background: getThemeColor(
          ThemeConstants.themeDark,
          ThemeConstants.contentBackground
        ),
      }}
    >
      Contact
    </div>
  );
};

export default Contact;
