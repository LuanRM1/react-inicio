import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login";
import DashBoard from "../pages/ativos";
const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/ativos",
    element: <DashBoard />,
  },
]);

export default BrowserRouter;
