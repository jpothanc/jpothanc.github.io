import { Link } from "react-router-dom";
import { fileMenuItems } from "./CodeEditorHelper";

const FileMenu = () => {
  return (
    <div
      className="absolute left-0 mt-1 w-40 bg-zinc-800 border border-white/10 rounded shadow-lg
     text-[11px] md:text-[12px] z-[99]"
    >
      <ul className="py-1">
        {fileMenuItems.map((item, index) => (
          <li
            key={index}
            className="px-4 py-2 hover:bg-blue-600 cursor-pointer"
          >
            {item.url ? (
              <a href={item.url} target="_blank">
                {item.name}
              </a>
            ) : (
              <Link to={item.page} className="block w-full h-full">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileMenu;
