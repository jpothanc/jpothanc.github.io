import { motion } from "framer-motion";
import { ThemeConstants, shakeVariants } from "../../constants";
import {
  badgeVariants,
  getIcon,
  getThemeColor,
  link,
} from "../../utils/helper";
import { IconType } from "react-icons";
import Tooltip from "./Tooltip";
import Avatar from "react-avatar";
import { Icon } from "@iconify/react/dist/iconify.js";

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
          <p className="basic-text text-theme-dark-textcolor">{content}</p>
          <ul className="flex flex-col gap-2">
            {links.map((link, index) => {
              return (
                <motion.li
                  key={index}
                  variants={badgeVariants}
                  initial="initial"
                  whileInView="animate"
                  custom={index}
                  viewport={{
                    once: true,
                  }}
                >
                  <div className="flex flex-row gap-1">
                    {link.icon ? (
                      <Icon icon={link?.icon} style={{ fontSize: "1.4rem" }} />
                    ) : (
                      <Avatar name={link.name} size="1.4rem" round={true} />
                    )}
                    <Tooltip text={link.description}>
                      <a
                        href={link.url}
                        className="underline text-sm xl:text-md"
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
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </section>
      </div>
    </>
  );
};

export default Links;
