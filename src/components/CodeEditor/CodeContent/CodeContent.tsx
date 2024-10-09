import { useState } from "react";
import EditorTabs from "./EditorTabs";
import CodeContentTab1 from "./CodeContentTab1";
import CodeContentTab2 from "./CodeContentTab2";
import CodeContentTab3 from "./CodeContentTab3";

const CodeContent = () => {
  const [tabId, setTabId] = useState<number>(1);

  const tabComponents = {
    1: CodeContentTab1,
    2: CodeContentTab2,
    3: CodeContentTab3,
  };

  // as keyof typeof tabComponents:treat tabId as one of the valid keys of tabComponents
  const TabComponent = tabComponents[tabId as keyof typeof tabComponents] || CodeContentTab1;

  return (
    <div className="flex flex-col mb-0 bg-zinc-900 h-60">
      <EditorTabs onTabChange={setTabId} />
      <TabComponent />
    </div>
  );
};

export default CodeContent;
