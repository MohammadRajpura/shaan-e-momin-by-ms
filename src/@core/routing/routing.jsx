import { createBrowserRouter } from "react-router-dom";
import Login from "../../pages/Login";

// ** My app routing
export const appRouting = createBrowserRouter([
  {
    path: "",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
