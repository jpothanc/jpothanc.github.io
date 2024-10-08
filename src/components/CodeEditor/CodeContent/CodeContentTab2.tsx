import config from "../../../config/config.json";
import ToolBar from "../../ToolBar";

const CodeContentTab2 = () => {
  return (
    <>
   <div>
     <div className="flex flex-col p-5 text-white/50 text-[13px] leading-5">
      <p>
     {config.readme.text}
     </p>
    
     <p className="pt-2">
      - Jessish
      {/* <a href={config.readme.sveltePortofilePage}>svelte page</a> */}
     </p>
      <span className="flex gap-2 mt-2">
      <ToolBar color="white" size="18px" />
     </span>

     </div>
   </div>
   </>
  )
}

export default CodeContentTab2
