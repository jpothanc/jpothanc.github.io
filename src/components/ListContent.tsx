import { motion } from "framer-motion";
import { fmScale } from "../constants";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCoffee,
  faPlus,
  faMinus,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";

// Add the imported icons to the library
library.add(faCoffee, faPlus, faMinus, faPlusCircle);

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
        whileHover="animate"
      >
        <section className="intro">
          <img
            src="https://images.unsplash.com/photo-1570211776091-c19f426d37af?auto=format&fit=crop&w=70&q=100"
            alt="logo"
            className="logo"
          />
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
