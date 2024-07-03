import { useEffect, useState } from "react";
import { MdViewer } from "react-jp-ui";

import config from "../config/config.json";
import { useLocation } from "react-router-dom";
import { mdContent, getContentUrl, getUrl } from "../utils/notes_helper";
import Menu from "./ToolBar";
import { ThemeConstants } from "../constants";
const height = 800;

const ShareNotes = () => {
  const [mdContent, setMdContent] = useState<mdContent>({
    url: getUrl(config.notes.defaultSelection.submenu),
    content: "",
  });

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const topic = searchParams.get("topic");
  const subtopic = searchParams.get("subtopic");

  useEffect(() => {
    if (topic) {
      getContentUrl(topic, subtopic).then((url) => {
        fetch(url)
          .then((response) => response.text())
          .then((text) => setMdContent({ ...mdContent, content: text }));
      });
    }
  }, [mdContent.url]);

  return (
    <>
      <div className="App">
        <Menu color={ThemeConstants.aboutMenuColor} size="32px" />
        <MdViewer content={mdContent.content} height={height} />
      </div>
    </>
  );
};

export default ShareNotes;
