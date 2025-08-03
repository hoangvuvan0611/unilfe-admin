import Close from "@mui/icons-material/Close";
import Menu from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material";
import type { FC } from "react";
import { SidebarObject } from "./SitebarObject.tsx";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/unilife_logo.png";
import { PATH_ADMIN } from "../../../common/const.ts";

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
            <Link
                to={PATH_ADMIN}
                className={'sidebar-header flex justify-center-safe rounded-2xl'}
            >
                <img src={logo} width={80} height={80} alt={'Unilife'}/>
            </Link>
            <div className="sidebar-menu-button lg:hidden">
                <button
                    onClick={setSidebarOpen}
                    className={'fixed top-4'}
                >
                    {isOpen ? <Close className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>
            <div
                className={'sidebar-list-item'}
            >
                <nav>
                    <ul className={'space-y-4'}>
                        {
                            SidebarObject?.map((val, index) => {
                                return <Link key={index} to={val.path} >
                                    <li
                                        id={location.pathname === val.path ? 'active' : ''}
                                        className={`flex sidebar-item 
                                            items-center p-2 rounded-sm 
                                            cursor-pointer 
                                            mt-3
                                            font-medium
                                            ${location.pathname === val.path ? 'bg-[#0faf0ff5] text-white' : 'text-black'}
                                            ${mode === 'dark' ? ' hover:bg-gray-500 bg-[#242424] text-white' : location.pathname === val.path ? '' : ' hover:bg-gray-200'} 
                                        `}
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