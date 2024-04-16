import { motion } from "framer-motion";
import { ThemeConstants, fmOpacitySlow } from "../constants";
import {
  FaGithub,
  FaLinkedin,
  FaPersonRunning,
  FaHouseChimneyWindow,
  FaEnvelope,
  FaDev,
  FaCubesStacked,
  FaChildReaching,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { getThemeColor } from "../utils/helper";
import Tooltip from "./common/Tooltip";

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
          color: getThemeColor(ThemeConstants.themeDark, color),
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
          <Tooltip text="personal projects">
            <Link className="nav__link" to="/projects">
              <FaCubesStacked size={size}></FaCubesStacked>
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
          <Tooltip text="resume ">
            <a href="jessish.pothancheri-resume.pdf" target="_blank">
              <FaChildReaching size={size}></FaChildReaching>
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
        <div className="about-menu-item">
          <Tooltip
            text="This site was developed using react(ts) and framer motion [© 2023 Jessish Pothancheri. All Rights Reserved.
]"
          >
            <FaDev size={size}></FaDev>
          </Tooltip>
        </div>
      </motion.div>
    </>
  );
};

export default Menu;
