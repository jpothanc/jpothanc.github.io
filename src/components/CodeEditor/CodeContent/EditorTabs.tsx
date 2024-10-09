import { useState } from "react";
import { getIconBySkill } from "../../../utils/helper";
import EditorTab from "./EditorTab";

const tabs = [
  {  id: 1, title: "index.ts", icon: "typeScript", selected: true },
  // {  id: 2, title: "Experience.tsx", icon: "react", selected: false },
  // {  id: 3, title: "Projects.tsx", icon: "react", selected: false }
  { id: 2, title: "README.md", icon: "readme", selected: false },
];

// Update the component props
interface EditorTabsProps {
  onTabChange: (tabId: number) => void;
}

const EditorTabs: React.FC<EditorTabsProps> = ({ onTabChange }) => {
 const [selectedTab, setSelectedTab] = useState<number>(tabs[0].id);

  const handleTabClick = (tabId: number) => {
    setSelectedTab(tabId);
    onTabChange(tabId);
  };

  return (
    <>
        <div className="flex text-white/50">
             {tabs.map((tab) => (
            <EditorTab
                key={tab.id}
                title={tab.title}
                icon={getIconBySkill(tab.icon)}
                selected={tab.id === selectedTab}
                onclick={() => handleTabClick(tab.id)}
            />
            ))}
        </div>
    </>
  )
}

export default EditorTabs
