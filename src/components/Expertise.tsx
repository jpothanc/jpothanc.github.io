import { motion } from "framer-motion";
import { ThemeConstants, shakeVariants } from "../constants";
import { IconType } from "react-icons";
import { getIcon, getThemeColor } from "../utils/helper";

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
          background: getThemeColor(
            ThemeConstants.themeDark,
            ThemeConstants.contentBackground
          ),
        }}
      >
        <section
          className="list-text"
          style={{
            color: getThemeColor(
              ThemeConstants.themeDark,
              ThemeConstants.contentTextColor
            ),
          }}
        >
          <motion.h3
            className="flex flex-col gap-1 font-semibold"
            variants={shakeVariants}
            initial="initial"
            whileHover="animate"
            style={{
              color: getThemeColor(
                ThemeConstants.themeDark,
                ThemeConstants.cardTitleColor
              ),
            }}
          >
            {getIcon(icon)}
            {title}
          </motion.h3>
          <ul>
            {items.map((item, index) => {
              return (
                <motion.li
                  className="basic-text"
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <p className="basic-text">{item}</p>
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
