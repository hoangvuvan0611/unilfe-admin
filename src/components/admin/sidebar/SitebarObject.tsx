import type {ReactNode} from "react";
import { RxDashboard } from "react-icons/rx";
import {
    SIDEBAR_PATH_CONFIG,
    SIDEBAR_PATH_POST,
    SIDEBAR_PATH_ROOM,
    SIDEBAR_PATH_SETTING,
    SIDEBAR_PATH_STORE,
    SIDEBAR_PATH_USER,
    SIDEBAR_TITLE_CONFIG,
    SIDEBAR_TITLE_DASHBOARD,
    SIDEBAR_TITLE_POST,
    SIDEBAR_TITLE_ROOM,
    SIDEBAR_TITLE_SETTING,
    SIDEBAR_TITLE_STORE,
    SIDEBAR_TITLE_USER,
    SIDEBAR_PATH_DASHBOARD
} from '../../../common/const.ts';
import { HiHome } from "react-icons/hi2";
import { BsPostcard } from "react-icons/bs";
import { FaStore } from "react-icons/fa";
import { FaUserCog } from "react-icons/fa";
import { GrDocumentConfig } from "react-icons/gr";
import { IoIosSettings } from "react-icons/io";

interface IProps {
    path: string;
    title: string;
    icon: ReactNode;
}

export const SidebarObject: IProps[] = [
    {
        path: SIDEBAR_PATH_DASHBOARD,
        title: SIDEBAR_TITLE_DASHBOARD,
        icon: <RxDashboard />
    },
    {
        path: SIDEBAR_PATH_ROOM,
        title: SIDEBAR_TITLE_ROOM,
        icon: <HiHome />,
    },
    {
        path: SIDEBAR_PATH_POST,
        title: SIDEBAR_TITLE_POST,
        icon: <BsPostcard />,
    },
    {
        path: SIDEBAR_PATH_STORE,
        title: SIDEBAR_TITLE_STORE,
        icon: <FaStore />,
    },
    {
        path: SIDEBAR_PATH_USER,
        title: SIDEBAR_TITLE_USER,
        icon: <FaUserCog />,
    },
    {
        path: SIDEBAR_PATH_CONFIG,
        title: SIDEBAR_TITLE_CONFIG,
        icon: <GrDocumentConfig />,
    },
    {
        path: SIDEBAR_PATH_SETTING,
        title: SIDEBAR_TITLE_SETTING,
        icon: <IoIosSettings />,
    },
]