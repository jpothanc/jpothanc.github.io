import config from "../../config/config.json";
import Counter from "../Counter";
const Footer = () => {
  return (
    <div className="footer">
      <p>
        &copy; 2023 {config.portfolio.firstname}&nbsp;
        {config.portfolio.secondname}. All Rights Reserved. | Dream, Code,
        Inspire and Innovate.
      </p>
      <Counter />
    </div>
  );
};

export default Footer;
