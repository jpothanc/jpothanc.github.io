import { motion } from "framer-motion";
import config from "../config/config.json";
import Menu from "./ToolBar";
import { ThemeConstants, fmScale } from "../constants";
import { getThemeColor } from "../utils/helper";
type Props = { 
  pageInfo: string;
}; 
const NavBar = ({ pageInfo} :Props) => {
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
          <div className="top-bar__pageInfo">{pageInfo}</div>

          <div className="top-bar__content">
            <motion.a
              href="#"
              className="logo"
              variants={fmScale}
              initial="initial"
              whileHover="animate"
            >
              <img src="Jessish.jpg" alt="logo" className="logo" />
              <span className="logo__text">
                {config.portfolio.firstname}&nbsp;{config.portfolio.secondname}
              </span>
            </motion.a>
            <span className="logo__desc">{config.portfolio.introBadge}</span>
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
