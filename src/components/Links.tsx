import { motion } from "framer-motion";
import { shakeVariants } from "../constants";
import {getIcon,link} from "../lib/helper";
import { IconType } from "react-icons";

type Props = {
  title: string;
  icon: IconType;
  content: string;
  links: link[];
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
            {getIcon(icon)}
            {title}
          </motion.h3>
          <p className="text">{content}</p>
          <ul>
            {links.map((link, index) => {
              return (
                <li key={index}>
                  <a href={link.url} className="my-link" target="_blank">
                    {link.name}
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
