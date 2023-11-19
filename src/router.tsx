import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { DemoApi } from "./pages/DemoApi";
import { Users } from "./pages/Users";
import { UserById } from "./pages/UserById";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />

    },

    {
        path: "demoapi",
        element: <DemoApi />,
    },
    {
        path: "user",
        element: <Users />,
    },

    {
        path: "users/:id",
        element: <UserById />,
    },
]);

export default router;