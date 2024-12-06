import { createBrowserRouter } from "react-router-dom";
import App from './../App';
import Home from './../pages/Home';
import Login from './../components/Login';
import Register from './../components/Register';
import AddEquipment from "../pages/AddEquipment";
import AllEquipment from "../pages/AllEquipment";
import ViewDetails from './../pages/ViewDetails';
import MyEquipmentList from './../pages/MyEquipmentList';
import UpdateEquipment from './../pages/UpdateEquipment';
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: '/',
                    element: <Home />
                },
                {
                    path: '/login',
                    element: <Login />
                },
                {
                    path: '/register',
                    element: <Register />
                },
                {
                    path: '/addEquipment',
                    element: <AddEquipment />
                },
                {
                    path: '/allEquipment',
                    element: <AllEquipment />
                },
                {
                    path: '/viewDetails',
                    element: <ViewDetails />
                },
                {
                    path: '/myEquipmentList',
                    element: <MyEquipmentList />
                },
                {
                    path: '/updateEquipment',
                    element: <UpdateEquipment />
                }
            ]
        }
    ])

export default router;