import { motion } from "framer-motion";
import config from "../config/config.json";
import Menu from "./Menu";
import { ThemeConstants, fmScale } from "../constants";
import { getThemeColor } from "../utils/helper";
const NavBar = () => {
  return (
    <>
      <header className="header">
        <div
          className="top-bar"
          style={{
            background: getThemeColor(
              ThemeConstants.themeDark,
              ThemeConstants.logoBackground
            ),
          }}
        >
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
            <Menu color={ThemeConstants.barMenuColor} size="24px" />
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
