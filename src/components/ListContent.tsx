import { motion } from "framer-motion";
import { fmScale } from "../constants";

import { FaSkiing } from "react-icons/fa";

type Prop = {
  title: string;
  list: string[];
};

const ListContent = ({ title, list }: Prop) => {
  return (
    <>
      <motion.div
        className="card"
        variants={fmScale}
        initial="initial"
        //whileHover="animate"
      >
        <section className="intro">
          <h3 className="card-title">
            <FaSkiing size={28} />
            {title}
          </h3>
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
      </motion.div>
    </>
  );
};

export default ListContent;
