import Form from "./components/form/index";
import "normalize.css";
import { RouterProvider } from "react-router-dom";
import BrowserRouter from "./routes/routes";
function App() {
  return <RouterProvider router={BrowserRouter} />;
}

export default App;
