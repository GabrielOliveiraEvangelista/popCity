import helpSvg from "@/assets/help-circle.svg";

export function IconHelp({ className = "", alt = "Help" }) {
  return <img src={helpSvg} alt={alt} className={className} />;
}
