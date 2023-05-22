import {ABOUT, HOME, USER} from "./consts";
import About from "../pages/About";
import UserDetails from "../pages/UserDetails";
import Home from "../pages/Home";

export const Router = [
    {
        path: HOME,
        Component: Home
    },
    {
        path: ABOUT,
        Component: About
    },
    {
        path: USER + '/:id',
        Component: UserDetails
    }
]