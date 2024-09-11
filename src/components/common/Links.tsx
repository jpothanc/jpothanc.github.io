import { motion } from "framer-motion";
import { ThemeConstants, shakeVariants } from "../../constants";
import { getIcon, getThemeColor, link } from "../../utils/helper";
import { IconType } from "react-icons";
import Tooltip from "./Tooltip";

type Props = {
  title: string;
  icon: IconType;
  content: string;
  links: link[];
};

const Links = ({ title, content, icon, links }: Props) => {
  return (
    <>
      <div className="card dark:bg-theme-dark-contentbg">
        <section className="intro xl:text-md">
          <motion.h3
            className="flex flex-col gap-1 "
            variants={shakeVariants}
            initial="initial"
            whileHover="animate"
            style={{
              color: getThemeColor(
                ThemeConstants.themeDark,
                ThemeConstants.cardTitleColor
              ),
            }}
          >
            {getIcon(icon)}
            {title}
          </motion.h3>
          <p className="basic-text">{content}</p>
          <ul>
            {links.map((link, index) => {
              return (
                <li key={index}>
                  <Tooltip text={link.description}>
                    <a
                      href={link.url}
                      className="my-link xl:text-md"
                      style={{
                        color: getThemeColor(
                          ThemeConstants.themeDark,
                          ThemeConstants.badgeLinksColor
                        ),
                      }}
                      target="_blank"
                    >
                      {link.name}
                    </a>
                  </Tooltip>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </>
  );
};

export default Links;
