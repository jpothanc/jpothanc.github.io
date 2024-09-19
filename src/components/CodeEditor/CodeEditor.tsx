import { motion } from "framer-motion";
import { shakeVariants } from "../../constants";
import Terminal from "./Terminal";
import CodeContent from "./CodeContent";
import Header from "./Header";
import StatusBar from "./StatusBar";

type AboutCodeEditorProps = {
  onClick: () => void;
  onResize: (type: string) => void;
};

const CodeEditor = ({ onClick, onResize }: AboutCodeEditorProps) => {
  return (
    <>
      {/* code editor */}
      <motion.div
        className="mb-5 border border-white/10 m-1"
        variants={shakeVariants}
        initial="initial"
        whileHover="animate"
      >
        <Header onClick={onClick} onResize={onResize} />
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

export default CodeEditor;
