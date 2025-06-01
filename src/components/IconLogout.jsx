import logoutSvg from "@/assets/logout-02.svg";

export function IconLogout({ className = "", alt = "Logout" }) {
  return <img src={logoutSvg} alt={alt} className={className} />;
}
