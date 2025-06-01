import settingsSvg from "@/assets/settings-01.svg";

export function IconSettings({ className = "", alt = "Settings" }) {
  return <img src={settingsSvg} alt={alt} className={className} />;
}
