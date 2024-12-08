import { createBrowserRouter } from "react-router-dom";
import App from "./../App";
import Home from "./../pages/Home";
import Login from "./../components/Login";
import Register from "./../components/Register";
import AddEquipment from "../pages/AddEquipment";
import AllEquipment from "../pages/AllEquipment";
import ViewDetails from "./../pages/ViewDetails";
import MyEquipmentList from "./../pages/MyEquipmentList";
import UpdateEquipment from "./../pages/UpdateEquipment";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoutes from "./privateRoutes";
import ContactUs from "../pages/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/addEquipment",
        element: (
          <PrivateRoutes>
            <AddEquipment />
          </PrivateRoutes>
        ),
      },
      {
        path: "/allEquipment",
        element: <AllEquipment />,
        loader: () => fetch('https://smart-sport-server.vercel.app/allEquipments')
      },
      {
        path: "/viewDetails/:id",
        element: (
          <PrivateRoutes>
            <ViewDetails />
          </PrivateRoutes>
        ),
        loader: ({params}) => fetch(`https://smart-sport-server.vercel.app/allEquipments/${params.id}`)
      },
      {
        path: "/myEquipmentList",
        element: (
          <PrivateRoutes>
            <MyEquipmentList />
          </PrivateRoutes>
        ),
      },
      {
        path: "/updateEquipment/:id",
        element: (
          <PrivateRoutes>
            <UpdateEquipment />
          </PrivateRoutes>
        ),
        loader: ({params}) => fetch(`https://smart-sport-server.vercel.app/allEquipments/${params.id}`)
      },
    ],
  },
]);

export default router;
