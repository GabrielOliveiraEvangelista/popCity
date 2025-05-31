import { Outlet } from "react-router";
import { Header } from "./Header";

export function AuthLayout() {
  return (
    <>
      
      <Outlet />
    </>
  );
}
