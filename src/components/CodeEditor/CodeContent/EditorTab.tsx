import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
type EditorTabProps = {
  title: string;
  icon: string;
  selected?: boolean;
  onclick: () => void;
  
};

const EditorTab = ({title, icon, selected, onclick }:EditorTabProps) => {
  const [showClose, setShowClose] = useState(false);

  return (
    <>
      <div className={`flex items-center justify-around h-7 gap-2 pl-1 pr-1 
      text-xs border  border-zinc-700 hover:cursor-pointer 
      ${selected ? 'bg-zinc-900 text-white' : 'bg-zinc-800 text-white/50'}
       `}
      onMouseEnter={() => setShowClose(true)}
      onMouseLeave={() => setShowClose(false)}
      onClick={onclick}
       >
        <span className="">
          <Icon
            icon={icon}
            style={{ fontSize: "0.9rem" }}
          />
        </span>
        {title}
        <span className={`w-4 h-4 flex items-center justify-center ${showClose ? '' : 'invisible'}
         hover:bg-zinc-700 
        `}>
          <Icon icon="ic:baseline-close" style={{ fontSize: "1.4rem" }} />
        </span>
      </div>
    </>
  );
};

export default EditorTab;
