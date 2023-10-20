import { motion } from "framer-motion";
import { fmOpacitySlow } from "../constants";
import {
  FaGithub,
  FaLinkedin,
  FaPersonRunning,
  FaHouseChimneyWindow,
  FaEnvelope,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { getThemeColor } from "../lib/helper";
import Tooltip from "./Tooltip";

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
          <Tooltip text="home page">
            <Link className="nav__link" to="/">
              <FaHouseChimneyWindow size={size}></FaHouseChimneyWindow>
            </Link>
          </Tooltip>
        </div>
        <div className="about-menu-item">
          <Tooltip text="work experiance & details...">
            <Link className="nav__link" to="/contents">
              <FaPersonRunning size={size}></FaPersonRunning>
            </Link>
          </Tooltip>
        </div>
        <div className="about-menu-item">
          <Tooltip text="git repo">
            <a href="https://github.com/jpothanc" target="_blank">
              <FaGithub size={size}></FaGithub>
            </a>
          </Tooltip>
        </div>

        <div className="about-menu-item">
          <Tooltip text="linkedin ">
            <a
              href="https://www.linkedin.com/in/jessish-pothancheri-5985576/"
              target="_blank"
            >
              <FaLinkedin size={size}></FaLinkedin>
            </a>
          </Tooltip>
        </div>
        <div className="about-menu-item">
          <Tooltip text="mail to kaljessy@gmail.com">
            <a href="mailto:kaljessy@gmail.com" target="_blank">
              <FaEnvelope size={size}></FaEnvelope>
            </a>
          </Tooltip>
        </div>
      </motion.div>
    </>
  );
};

export default Menu;
