import { motion } from "framer-motion";
import { shakeVariants } from "../../constants";
import ConsolePanel from "./ConsolePanel";
import CodeContent from "./CodeContent/CodeContent";
import EditorToolBar from "./EditorToolBar";
import StatusBar from "./StatusBar";

type AboutCodeEditorProps = {
  onClick: () => void;
  onResize: (type: string) => void;
};

const CodeEditor = ({ onClick, onResize }: AboutCodeEditorProps) => {
  return (
    <>
      <motion.div
        className="m-1 mb-5 border border-white/10" 
        variants={shakeVariants}
        initial="initial"
        whileHover="animate"
      >
        <EditorToolBar onClick={onClick} onResize={onResize} />
        <CodeContent />
        <ConsolePanel />
        <StatusBar />
      </motion.div>
    </>
  );
};

export default CodeEditor;
