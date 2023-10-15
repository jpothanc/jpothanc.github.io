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
          <FaSkiing size={28} color="white" />
          {title}
          <p className="text">
            <ul>
              {list.map((l, index) => {
                return (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {l}
                    <br></br>
                    <br></br>
                  </motion.li>
                );
              })}
            </ul>
          </p>
        </section>
      </motion.div>
    </>
  );
};

export default ListContent;
