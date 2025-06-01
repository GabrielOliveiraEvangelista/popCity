
import userSvg from "@/assets/user-circle.svg";

export function IconUser({ className = "", alt = "User" }) {
  return <img src={userSvg} alt={alt} className={className} />;
}
