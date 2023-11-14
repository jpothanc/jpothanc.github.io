import config from "../../config/config.json";
const Footer = () => {
  return (
    <div className="footer">
      <p>
        &copy; 2023 {config.portfolio.firstname}&nbsp;
        {config.portfolio.secondname}. All Rights Reserved. | Dream, Code,
        Inspire and Innovate.
      </p>
    </div>
  );
};

export default Footer;
