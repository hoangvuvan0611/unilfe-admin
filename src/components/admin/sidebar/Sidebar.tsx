import Close from "@mui/icons-material/Close";
import Menu from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material";
import type { FC } from "react";
import { SidebarObject } from "./SitebarObject.tsx";
import { Link, useLocation } from "react-router-dom";
import './Sidebar.css';
import logo from "../../../assets/unilife_logo.png";
import { PATH_ADMIN } from "../../../common/Const.ts";

interface SidebarProps {
    isOpen: boolean,
    setSidebarOpen: () => void
}

const Sidebar: FC<SidebarProps> = ({isOpen, setSidebarOpen}) => {

    const theme = useTheme();
    const location = useLocation();
    const mode = theme.palette.mode;

    return (
        <div className="sidebar">
            <Link to={PATH_ADMIN} className={'sidebar-header flex justify-center-safe bg-gray-200 rounded-2xl'}>
                <img src={logo} width={80} height={80} alt={'Unilife'}/>
            </Link>
            <div className="sidebar-menu-button lg:hidden">
                <button
                    onClick={setSidebarOpen}
                    style={{backgroundColor: theme.palette.background.default}}
                    className={'fixed top-4'}
                >
                    {isOpen ? <Close className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>
            <div
                style={{backgroundColor: theme.palette.background.default}}
                className={'sidebar-list-item'}
            >
                <nav>
                    <ul className={'space-y-4'}>
                        {
                            SidebarObject?.map((val, index) => {
                                return <Link key={index} to={val.path} >
                                    <li
                                        id={location.pathname === val.path ? 'active' : ''}
                                        className={`flex sidebar-item ${mode === 'dark' ? ' hover:bg-gray-500' : ' hover:bg-gray-100'} items-center p-2 rounded-sm text-black`}
                                    >
                                        <div className="mr-4">
                                            {val.icon}
                                        </div>
                                        <div>
                                            {val.title}
                                        </div>
                                    </li>
                                </Link>
                            })
                        }
                    </ul>
                </nav>
            </div>
        </div>
    );
}
export default Sidebar;