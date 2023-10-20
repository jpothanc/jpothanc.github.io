import { motion } from "framer-motion";
import { fmOpacitySlow } from "../constants";
import {
  FaGithub,
  FaLinkedin,
  FaPersonRunning,
  FaHouseChimneyWindow,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { getThemeColor } from "../lib/helper";

type Props = {
  color: string;
  size: string;
};

const Menu = ({ color, size }: Props) => {
  return (
    <>
      {" "}
      <motion.div
        className="about-menu"
        variants={fmOpacitySlow}
        initial="initial"
        whileInView="animate"
        style={{
          color: getThemeColor("dark", color),
        }}
      >
        <div className="about-menu-item">
          <Link className="nav__link" to="/">
            <FaHouseChimneyWindow size={size}></FaHouseChimneyWindow>
          </Link>
        </div>
        <div className="about-menu-item">
          <Link className="nav__link" to="/contents">
            <FaPersonRunning size={size}></FaPersonRunning>
          </Link>
        </div>
        <div className="about-menu-item">
          <FaGithub size={size}></FaGithub>
        </div>

        <div className="about-menu-item">
          <FaLinkedin size={size}></FaLinkedin>
        </div>
      </motion.div>
    </>
  );
};

export default Menu;
