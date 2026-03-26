import { createBrowserRouter, data } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import AllApps from "../pages/AllApps/AllApps";
import AppDetails from "../pages/AppDetails/AppDetails";
import InstalledApps from "../pages/InstalledApps/InstalledApps";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
        path: "/"
      },
      {
        path: "/appDetails/:id",
        Component: AppDetails,
        loader: async () => {
          const response = await fetch('/appsData.json');
          return response.json();
        }
      },
      {
        path: "/allApps",
        Component: AllApps
      },
      {
        path: "/installation",
        Component: InstalledApps
      }
    ]
  },
]);