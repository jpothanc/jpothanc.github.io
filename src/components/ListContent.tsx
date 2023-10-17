import { motion } from "framer-motion";
import { shakeVariants } from "../constants";

import { FaSkiing } from "react-icons/fa";

type Prop = {
  title: string;
  list: string[];
};

const ListContent = ({ title, list }: Prop) => {
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
            <FaSkiing size={28} />
            {title}
          </motion.h3>
          <ul>
            {list.map((l, index) => {
              return (
                <motion.li
                  className="text"
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <p className="text">{l}</p>
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
