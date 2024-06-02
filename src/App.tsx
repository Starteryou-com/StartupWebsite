import Aboutuspage from "./pages/aboutuspage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Aboutuspage />,
  },
  {
    path: "/",
    element: <Homepage />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
