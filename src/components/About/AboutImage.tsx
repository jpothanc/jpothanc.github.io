import { motion } from "framer-motion";

interface AboutImageProps {
  onClick: () => void;
}
const AboutImage = ({ onClick }: AboutImageProps) => {
  return (
    <>
      <motion.div
        className="flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClick}
      >
        <motion.img
          src="jpothanc.PNG"
          alt="logo"
          className="h-[240px] w-[240px] md:h-[300px] md:w-[300px] rounded-full"
          whileHover={{ rotate: -15 }}
          initial={{ rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            // damping: 120,
            duration: 1,
          }}
        ></motion.img>
      </motion.div>
    </>
  );
};

export default AboutImage;
