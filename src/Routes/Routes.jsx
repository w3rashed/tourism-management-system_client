import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Components/Home/Home";
import AddTouristsSpot from "../Components/AddTouristsSpot/AddTouristsSpot";
import Login from "../Components/User/Login";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/add-tourists-spot",
        element: <AddTouristsSpot></AddTouristsSpot>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default Routes;
