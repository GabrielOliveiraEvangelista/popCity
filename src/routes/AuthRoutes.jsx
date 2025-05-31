import { Route, Routes } from "react-router";
import { Login } from "../pages/Login";
import { AuthLayout } from "../components/AuthLayout";
import { NotFound } from "../pages/NotFound";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/" element={<Login />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
