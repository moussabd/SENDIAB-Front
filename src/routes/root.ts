import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import DashboardLayout from "../layout/DashboardLayout";
import LoginPage from "../pages/authentication/LoginPage";
import RegisterPage from "../pages/authentication/RegisterPage";
import HomePage from "../pages/HomePage";
import DashboardPage from "../pages/DashboardPage";
import PatientsPage from "../pages/PatientsPage";
import CodeConfirmationPage from "../pages/authentication/CodeConfirmationPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "/login",
        Component: LoginPage,
      },
      {
        path: "/register",
        Component: RegisterPage,
      },
      {
        path: "/confirmation",
        Component: CodeConfirmationPage,
      },
      {
        path: "/dashboard",
        Component: DashboardLayout,
        children: [
          {
            index: true,
            Component: DashboardPage,
          },
          {
            path: "patients",
            Component: PatientsPage,

          },
        ],
      },
    ],
  },
]);
