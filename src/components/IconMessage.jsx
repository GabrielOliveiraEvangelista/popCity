import messageSvg from "@/assets/message-multiple-02.svg";

export function IconMessage({ className = "", alt = "Message" }) {
  return <img src={messageSvg} alt={alt} className={className} />;
}
