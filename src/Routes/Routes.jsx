import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import AddTouristsSpot from "../Components/AddTouristsSpot/AddTouristsSpot";
import Login from "../Components/User/Login";
import Register from "../Components/User/Register";
import AllTouristsSpot from "../Components/AllTouristsSpot/AllTouristsSpot";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import ViewDetails from "../Components/Home/DestinationsLists/ViewDetails";
import MyList from "../Components/MyList/MyList";
import UpdateSpot from "../Components/UpdateSpot/UpdateSpot";
import PrivateRoutes from "./PrivetRoutes/PrivetRoutes";
import Home from "../Components/Home/DestinationsLists/Home";
import AddCategory from "../Components/Home/AddCategory/AddCategory";

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
        element: (
          <PrivateRoutes>
            <AddTouristsSpot></AddTouristsSpot>
          </PrivateRoutes>
        ),
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
        loader: () =>
          fetch("https://discover-haven-server.vercel.app/destinations"),
      },
      {
        path: "/my_list",
        element: (
          <PrivateRoutes>
            <MyList></MyList>
          </PrivateRoutes>
        ),
      },
      {
        path: "/view_details/:_id",
        element: <ViewDetails></ViewDetails>,
        loader: ({ params }) =>
          fetch(
            `https://discover-haven-server.vercel.app/destinations/${params._id}`
          ),
      },
      {
        path: "/update/:_id",
        element: <UpdateSpot></UpdateSpot>,
        loader: ({ params }) =>
          fetch(
            `https://discover-haven-server.vercel.app/destinations/${params._id}`
          ),
      },
      {
        path: "add_cetegory",
        element: (
          <PrivateRoutes>
            <AddCategory></AddCategory>
          </PrivateRoutes>
        ),
      },
      {
        path: "/all_tourists_spot/:country",
        element: <AllTouristsSpot></AllTouristsSpot>,
        loader: ({ params }) =>
          fetch(
            `https://discover-haven-server.vercel.app/destinationByCounty/${params.country}`
          ),
      },
    ],
  },
]);

export default Routes;
