import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Components/Home/Home";
import AddTouristsSpot from "../Components/AddTouristsSpot/AddTouristsSpot";
import Login from "../Components/User/Login";
import Register from "../Components/User/Register";
import AllTouristsSpot from "../Components/AllTouristsSpot/AllTouristsSpot";
import ErrorPage from "../Components/ErrorPage/ErrorPage";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/add_tourists_spot",
        element: <AddTouristsSpot></AddTouristsSpot>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/all_tourists_spot",
        element: <AllTouristsSpot></AllTouristsSpot>,
      },
    ],
  },
]);

export default Routes;
