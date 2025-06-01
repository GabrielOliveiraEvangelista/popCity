import folderSvg from "@/assets/folder-02.svg";

export function IconFolder({ className = "", alt = "Folder" }) {
  return <img src={folderSvg} alt={alt} className={className} />;
}
