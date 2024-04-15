import { useEffect, useState } from "react";
import { ButtonMenuList, MdViewer, buttonItem } from "react-jp-ui";
import NavBar from "../components/NavBar";
import config from "../config/config.json";
import { getSubMenu } from "../utils/helper";

type mdContent = {
  url: string | undefined;
  content: string;
};

const DeveloperNotes = () => {
  const [mdContent, setMdContent] = useState<mdContent>({
    url:
      getSubMenu({ name: "web" }) != null
        ? getSubMenu({ name: "web" })[0].link
        : "",
    content: "",
  });
  const [subMenu, setSubMenu] = useState<buttonItem[]>(
    getSubMenu({ name: "web" })
  );

  useEffect(() => {
    if (mdContent.url == undefined) return;

    fetch(mdContent.url)
      .then((response) => response.text())
      .then((text) => setMdContent({ ...mdContent, content: text }));
  }, [mdContent.url]);
  return (
    <>
      <div>
        <NavBar pageInfo="<about/>" />
        <div className="notes-container">
          <ButtonMenuList
            items={config.developerNotes.tags}
            onClick={(value) => {
              setSubMenu(getSubMenu(value));
            }}
          />

          <ButtonMenuList
            items={subMenu}
            onClick={(value) => {
              if (value.link == mdContent.url) return;
              setMdContent({ url: value.link, content: "" });
              console.log(value.link);
            }}
          />
          <MdViewer content={mdContent.content} />
        </div>
      </div>
    </>
  );
};

export default DeveloperNotes;
