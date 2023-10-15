import { motion } from "framer-motion";
import { fmScale } from "../constants";
import * as helper from "../lib/helper";
import { IconType } from "react-icons";

type Props = {
  title: string;
  icon: IconType;
  content: string;
  links: string[];
};

const Links = ({ title, content, icon, links }: Props) => {
  return (
    <>
      <motion.div
        className="card"
        variants={fmScale}
        initial="initial"
        // whileHover="animate"
      >
        <section className="intro">
          <h3 className="card-title">
            {helper.getIcon(icon)}
            {title}
          </h3>
          <p className="text">{content}</p>
          <ul>
            {links.map((link, index) => {
              return (
                <motion.li
                  key={index}
                  initial="initial"
                  whileInView="animate"
                  custom={index}
                  viewport={{
                    once: true,
                  }}
                >
                  <a
                    href="https://medium.com/@kaljessy/react-dependency-injection-using-inversify-b4e1d63abc72"
                    className="my-link"
                    target="_blank"
                  >
                    {link}
                  </a>
                </motion.li>
              );
            })}
          </ul>
        </section>
      </motion.div>
    </>
  );
};

export default Links;
