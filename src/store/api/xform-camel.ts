import { PicsumMeta } from "../state";
export const xformToCamelCase = (data : any): PicsumMeta => {
  return {
    author: data.author,
    downloadUrl: data.download_url,
    height: data.height,
    id: data.id,
    url: data.url,
    width: data.width,
  };
};