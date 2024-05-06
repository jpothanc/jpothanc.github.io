import config from "../config/config.json";
export async function fetchJsonData(url: string): Promise<any> {
  try {
    const response = await fetch(url);
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
export async function getMenu(): Promise<buttonItem[]> {
  const jsonData = await fetchJsonData(getIndexFile());
  if (!jsonData) return [];
  console.log(jsonData);
  return jsonData.developerNotes.tags;
}

export async function getSubMenu(
  buttonItem: buttonItem
): Promise<buttonItem[]> {
  let jsonData = await fetchJsonData(getIndexFile());
  if (!jsonData) return [];
  console.log(jsonData);

  if (
    buttonItem.name == "web" ||
    buttonItem.name == "java" ||
    buttonItem.name == ".net" ||
    buttonItem.name == "python" ||
    buttonItem.name == "azure" ||
    buttonItem.name == "architecture" ||
    buttonItem.name == "javascript" ||
    buttonItem.name == "testing" ||
    buttonItem.name == "design patterns" ||
    buttonItem.name == "others"
  )
    return getSubMenus(jsonData.developerNotes[buttonItem.name], buttonItem);
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
  return config.notes.contentBaseUrl + url;
}

export function getIndexFile(): string {
  return config.notes.contentBaseUrl + config.notes.indexFile;
}
