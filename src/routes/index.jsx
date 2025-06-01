import { BrowserRouter } from "react-router";
import { AuthRoutes } from "./AuthRoutes";
import { ManagerRoutes } from "./ManagerRoutes";

const session = {
  user: {
    role: "admin",
  },
};
export function Routes() {
  function Route() {
    switch (session?.user.role) {
      case "admin":
        return <ManagerRoutes />;
      default:
        return <AuthRoutes />;
    }
  }
  return (
    <BrowserRouter>
      <Route />
    </BrowserRouter>
  );
}
