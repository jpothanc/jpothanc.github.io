import { useEffect, useRef, useState } from "react";
import {
  ButtonMenuList,
  MdViewer,
  WindowMd,
  WindowMdRef,
  buttonItem,
} from "react-jp-ui";
import config from "../config/config.json";
import { getMenu, getSubMenu, getUrl } from "../utils/notes_helper";
import { FaRegCommentDots } from "react-icons/fa6";
type mdContent = {
  url: string | undefined;
  content: string;
};

const DevNotes = () => {
  const [about, setAbout] = useState<string>("test");
  const modalRef = useRef<WindowMdRef | null>(null);
  const handleOpenModal = () => {
    modalRef.current?.open();
  };
  const [mdContent, setMdContent] = useState<mdContent>({
    url: getUrl(config.notes.defaultSelection.submenu),
    content: "",
  });
  const [subMenu, setSubMenu] = useState<buttonItem[]>([]);
  const [menu, setMenu] = useState<buttonItem[]>([]);

  useEffect(() => {
    getMenu().then((data) => {
      setMenu(data);
    });
    getSubMenu({ name: "web" }).then((data) => {
      setSubMenu(data);
    });
    fetch(config.notes.readme)
      .then((response) => response.text())
      .then((text) => setAbout(text));
  }, []);

  useEffect(() => {
    if (mdContent.url == undefined) return;

    fetch(mdContent.url)
      .then((response) => response.text())
      .then((text) => setMdContent({ ...mdContent, content: text }));
  }, [mdContent.url]);
  return (
    <>
      <div>
        <div className="notes-container">
          <div className="notes__about">
            <div>
              <div onClick={handleOpenModal} style={{ color: "white" }}>
                <FaRegCommentDots
                  size="16"
                  className="jp_simple_navbar__menu-item"
                />
              </div>
            </div>
          </div>
          <ButtonMenuList
            items={menu}
            onClick={async (value) => {
              setSubMenu(await getSubMenu(value));
              setMdContent({ url: getUrl(value.link), content: "" });
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
          <WindowMd title="" content={about} bgcolor="#212121" ref={modalRef} />
        </div>
      </div>
    </>
  );
};

export default DevNotes;
