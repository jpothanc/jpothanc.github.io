import { motion } from "framer-motion";
import { shakeVariants } from "../constants";
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
      <div className="card">
        <section className="intro">
          <motion.h3
            className="card-title"
            variants={shakeVariants}
            initial="initial"
            whileHover="animate"
          >
            {helper.getIcon(icon)}
            {title}
          </motion.h3>
          <p className="text">{content}</p>
          <ul>
            {links.map((link, index) => {
              return (
                <li key={index}>
                  <a
                    href="https://medium.com/@kaljessy/react-dependency-injection-using-inversify-b4e1d63abc72"
                    className="my-link"
                    target="_blank"
                  >
                    {link}
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </>
  );
};

export default Links;
