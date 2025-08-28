import { RouterProvider } from "react-router-dom";
import { appRouting } from "./@core/routing/routing";

const App = () => {
  return <RouterProvider router={appRouting} />;
};

export default App;
