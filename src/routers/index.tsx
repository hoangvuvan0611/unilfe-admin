import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import Admin from "../pages/admin/Admin.tsx";
import Room from "../pages/admin/room/Room.tsx";
import Post from "../pages/admin/post/Post.tsx";
import Store from "../pages/admin/store/Store.tsx";
import {
    PATH_ADMIN, PATH_AUTH, PATH_ROOT,
    SIDEBAR_PATH_CONFIG,
    SIDEBAR_PATH_POST,
    SIDEBAR_PATH_ROOM, SIDEBAR_PATH_SETTING,
    SIDEBAR_PATH_STORE,
    SIDEBAR_PATH_USER
} from "../common/Const.ts";
import User from "../pages/admin/user/User.tsx";
import Setting from "../pages/admin/setting/Setting.tsx";

export const routers = createBrowserRouter([
    {
        path: PATH_ROOT,
        element: <div>Home</div>
    },
    {
        path: PATH_AUTH,
        element: <div>Auth Page</div>
    },
    {
        path: PATH_ADMIN,
        element: <AdminLayout/>,
        children: [
            {
                index: true,
                element: <Admin/>,
            },
            {
                path: SIDEBAR_PATH_ROOM,
                element: <Room />
            },
            {
                path: SIDEBAR_PATH_POST,
                element: <Post />
            },
            {
                path: SIDEBAR_PATH_STORE,
                element: <Store />
            },
            {
                path: SIDEBAR_PATH_USER,
                element: <User />
            },
            {
                path: SIDEBAR_PATH_CONFIG,
                element: <Store />
            },
            {
                path: SIDEBAR_PATH_SETTING,
                element: <Setting />
            }
        ]
    }
]);