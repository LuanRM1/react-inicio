import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login";
import DashBoard from "../pages/ativos";
import Mapping from "../pages/dashboard";
const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/ativos",
    element: <DashBoard />,
  },
  {
    path: "/dashboard/:id",
    element: <Mapping />,
  },
]);

export default BrowserRouter;
