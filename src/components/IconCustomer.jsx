import customerServiceSvg from "@/assets/customer-service-01.svg";

export function IconCustomerService({
  className = "",
  alt = "Customer Service",
}) {
  return <img src={customerServiceSvg} alt={alt} className={className} />;
}
