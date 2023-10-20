import { motion } from "framer-motion";
import config from "../config.json";
import Menu from "./Menu";
import { fmScale } from "../constants";
const NavBar = () => {
  return (
    <>
      <header className="header">
        <div className="top-bar">
          <div className="top-bar__content">
            <motion.a
              href="#"
              className="logo"
              variants={fmScale}
              initial="initial"
              whileHover="animate"
            >
              <img src="Jessish.jpg" alt="logo" className="logo" />
              <span className="logo__text">{config.portfolio.name}</span>
            </motion.a>
            <span className="logo__desc">{config.portfolio.IntroBadge}</span>
          </div>
        </div>
        <div className="bottom-bar">
          <div className="bottom-bar__content">
            <Menu color="barMenuColor" size="24px" />
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
