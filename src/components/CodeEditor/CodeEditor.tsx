import { motion } from "framer-motion";
import { shakeVariants } from "../../constants";
import Terminal from "./Terminal";
import CodeContent from "./CodeContent";
import MenuBar from "./MenuBar";
import StatusBar from "./StatusBar";

type AboutCodeEditorProps = {
  onClick: () => void;
};

const AboutCodeEditor = ({ onClick }: AboutCodeEditorProps) => {
  return (
    <>
      {/* code editor */}
      <motion.div
        className="mb-5 border border-white/10 m-1"
        variants={shakeVariants}
        initial="initial"
        whileHover="animate"
      >
        <MenuBar onClick={onClick} />
        {/* code editor content */}
        <CodeContent />
        {/* terminal */}
        <Terminal />
        {/* copyright */}
        <StatusBar />
      </motion.div>
    </>
  );
};

export default AboutCodeEditor;
