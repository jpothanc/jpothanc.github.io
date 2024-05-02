import { motion } from "framer-motion";
import { ThemeConstants, fmOpacitySlow } from "../constants";
import config from "../config/config.json";

import {
  FaGithub,
  FaLinkedin,
  FaPersonRunning,
  FaHouseChimneyWindow,
  FaEnvelope,
  FaDev,
  FaCubesStacked,
  FaChildReaching,
  FaRegNoteSticky,
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
          <Tooltip text="my developer notes">
            <Link className="nav__link" to="/devnotes">
              <FaRegNoteSticky size={size}></FaRegNoteSticky>
            </Link>
          </Tooltip>
        </div>
        <div className="about-menu-item">
          <Tooltip text="git repo">
            <a href={config.portfolio.github} target="_blank">
              <FaGithub size={size}></FaGithub>
            </a>
          </Tooltip>
        </div>

        <div className="about-menu-item">
          <Tooltip text="linkedin ">
            <a href={config.portfolio.linkedin} target="_blank">
              <FaLinkedin size={size}></FaLinkedin>
            </a>
          </Tooltip>
        </div>
        <div className="about-menu-item">
          <Tooltip text="resume ">
            <a href={config.portfolio.resumeFileName} target="_blank">
              <FaChildReaching size={size}></FaChildReaching>
            </a>
          </Tooltip>
        </div>
        <div className="about-menu-item">
          <Tooltip text={`mail to ${config.portfolio.email}`}>
            <a href={`mailto:${config.portfolio.email}`} target="_blank">
              <FaEnvelope size={size}></FaEnvelope>
            </a>
          </Tooltip>
        </div>
        <div className="about-menu-item">
          <Tooltip text={config.portfolio.devTooltip}>
            <FaDev size={size}></FaDev>
          </Tooltip>
        </div>
      </motion.div>
    </>
  );
};

export default Menu;
