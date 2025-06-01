import notificationSvg from "@/assets/notification-02.svg";

export function IconNotification({ className = "", alt = "Notification" }) {
  return <img src={notificationSvg} alt={alt} className={className} />;
}
