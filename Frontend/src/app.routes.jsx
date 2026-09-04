import { createBrowserRouter } from "react-router";
import Login from "./features/auth/pages/Login";
import Register from "./features/auth/pages/Register";
import Protected from "./features/auth/components/Protected";
import Home from "./features/interview/pages/Home";
import Interview from "./features/interview/pages/Interview";
import PublicProtected from "./features/auth/components/PublicProtected";
import Start from "./features/auth/pages/Start";


export const router = createBrowserRouter([
    {
        path: "/start",
        element: <PublicProtected><Start /></PublicProtected>
    },
    {
        path: "/login",
        element: <PublicProtected><Login /></PublicProtected>
    },
    {
        path: "/register",
        element: <PublicProtected><Register /></PublicProtected>
    },
    {
        path: "/",
        element: <Protected><Home /></Protected>
    },
    {
        path:"/interview/:interviewId",
        element: <Protected><Interview /></Protected>
    }
])