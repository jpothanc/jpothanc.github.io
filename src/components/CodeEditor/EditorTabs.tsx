import { getIconBySkill } from "../../utils/helper";
import EditorTab from "./EditorTab";

const tabs = [
  { title: "index.ts", icon: "typeScript", selected: true },
  { title: "Experience.tsx", icon: "react", selected: false },
  { title: "Projects.tsx", icon: "react", selected: false }
//   { title: "README.md", icon: "readme", selected: false },
];

const EditorTabs = () => {
  return (
    <>
        <div className="flex text-white/50">
             {tabs.map((tab, index) => (
            <EditorTab
                key={index}
                title={tab.title}
                icon={getIconBySkill(tab.icon)}
                selected={tab.selected}
            />
            ))}
        </div>
    </>
  )
}

export default EditorTabs
