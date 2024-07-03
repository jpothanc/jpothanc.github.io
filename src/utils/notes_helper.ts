import config from "../config/config.json";

export type mdContent = {
  url: string | undefined;
  content: string;
};

const topics = [
  "web",
  "java",
  ".net",
  "python",
  "azure",
  "architecture",
  "javascript",
  "testing",
  "design patterns",
  "ai",
  "others",
];
export async function fetchJsonData(
  url: string,
  signal?: AbortSignal
): Promise<any> {
  try {
    const response = await fetch(url, { signal });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch:", error);
  }
}

export type buttonItem = {
  name: string;
  description?: string;
  link?: string;
  bgColor?: string;
  textColor?: string;
  bgColorDesc?: string;
  textColorDesc?: string;
};
export async function getMenu(signal?: AbortSignal): Promise<buttonItem[]> {
  const jsonData = await fetchJsonData(getIndexFile(), signal);
  if (!jsonData) return [];
  console.log(jsonData);
  return jsonData.developerNotes.tags;
}

export async function getSubMenu(
  buttonItem: buttonItem,
  signal?: AbortSignal
): Promise<buttonItem[]> {
  let jsonData = await fetchJsonData(getIndexFile(), signal);
  if (!jsonData) return [];
  console.log(jsonData);
  if (topics.includes(buttonItem.name.toLowerCase())) {
    return getSubMenus(jsonData.developerNotes[buttonItem.name], buttonItem);
  }
  return [];
}

async function getSubMenus(
  items: buttonItem[],
  buttonItem: buttonItem
): Promise<buttonItem[]> {
  return items.map((item) => {
    return {
      ...item,
      link: getUrl(item.link),
      bgColor: buttonItem.bgColor,
      textColor: buttonItem.textColor,
    };
  });
}

export function getUrl(url: string | any): string {
  if (url.startsWith("http")) return url;
  return config.notes.contentBaseUrl + url;
}

export function getIndexFile(): string {
  return config.notes.contentBaseUrl + config.notes.indexFile;
}

export async function getContentUrl(
  topic: string,
  subTopic: string | null
): Promise<string> {
  let jsonData = await fetchJsonData(getIndexFile());
  if (!jsonData) return "";

  if (subTopic == null || subTopic == "") {
    const filteredItems: buttonItem[] = jsonData.developerNotes.tags.filter(
      (x: buttonItem) => x.name == topic
    );
    const item =
      filteredItems.length > 0 ? filteredItems[0] : { name: "", link: "" };
    return getUrl(item.link);
  }

  const selectedMenu = getSubMenuItem(jsonData.developerNotes[topic], subTopic);
  return getUrl(selectedMenu.link);
}

function getSubMenuItem(items: buttonItem[], submenu: string): buttonItem {
  var filteredItems = items.filter((item) => item.name == submenu);
  return filteredItems.length > 0 ? filteredItems[0] : { name: "", link: "" };
}
