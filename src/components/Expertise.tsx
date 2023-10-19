import { motion } from "framer-motion";
import { shakeVariants } from "../constants";
import { IconType } from "react-icons";
import { getIcon, getThemeColor } from "../lib/helper";

type Prop = {
  title: string;
  items: string[];
  icon: IconType;
};

const ListContent = ({ title, items, icon }: Prop) => {
  return (
    <>
      <div
        className="card"
        style={{
          background: getThemeColor("dark", "contentBackground"),
        }}
      >
        <section
          className="list-text"
          style={{
            color: getThemeColor("dark", "contentTextColor"),
          }}
        >
          <motion.h3
            className="card-title"
            variants={shakeVariants}
            initial="initial"
            whileHover="animate"
            style={{
              color: getThemeColor("dark", "cardTitleColor"),
            }}
          >
            {getIcon(icon)}
            {title}
          </motion.h3>
          <ul>
            {items.map((item, index) => {
              return (
                <motion.li
                  className="text"
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <p className="text">{item}</p>
                </motion.li>
              );
            })}
          </ul>
        </section>
      </div>
    </>
  );
};

export default ListContent;
