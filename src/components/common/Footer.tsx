import config from "../../config/config.json";
import Counter from "../Counter";
const Footer = () => {
  return (
    <>
      <section className="fixed bottom-0 
      text-yellow-200 text-xs text-center pb-5 hover:brightness-75 transition-all duration-300">
        <p>
          &copy; 2023 {config.portfolio.firstname}&nbsp;
          {config.portfolio.secondname}. All Rights Reserved. | Dream, Code,
          Inspire and Innovate.
        </p>
      </section>
      <Counter />
    </>
  );
};

export default Footer;
