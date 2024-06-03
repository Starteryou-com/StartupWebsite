import Aboutuspage from "./pages/aboutuspage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage";
import Joblistingpage from "./pages/joblistingpage";
import Educationpage from "./pages/educationpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "Aboutuspage",
    element: <Aboutuspage />,
  },
  {
    path: "Joblistingpage",
    element: <Joblistingpage />,
  },
  {
    path: "Educationpage",
    element: <Educationpage />,
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
