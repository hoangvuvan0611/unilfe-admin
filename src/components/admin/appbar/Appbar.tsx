import {Avatar, Tooltip } from "@mui/material";
import {useThemeContext} from "../../../providers/themeContext.ts";
import {useEffect, useState} from "react";
import { MaterialUISwitch } from "../../switch/MaterialUiSwitch.tsx";
import { FaSignOutAlt } from "react-icons/fa";
import { TITLE_LOGOUT} from "../../../common/const.ts";
import { useTheme } from '@mui/material/styles';
import { Link, useLocation } from "react-router-dom";


const pathNameMap: Record<string, string> = {
    // level 0:
    "admin": "Admin",
    // Level 1:
    "room": "Phòng trọ",
    "post": "Bài đăng",
    "store": "Cửa tiệm",
    "user": "Người dùng",
    "config": "Cấu hình",
    "setting": "Cài đặt",
}

export default function Appbar() {

    const theme = useTheme();
    const { mode, toggleTheme } = useThemeContext();
    const [date, setDate] = useState(new Date());

    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);


    useEffect(() => {
        setInterval(() => {
            setDate(new Date());
        }, 1000);
    }, []);

    return (
        <div className={'appbar'} style={{backgroundColor: theme.palette.background.default}}>
            <div
                style={{borderColor: theme.palette.custom.border}}
                className={'flex justify-between border-b'}
            >
                {/* breadcrumb */}
                <div className="flex flex-wrap ml-4 items-center justify-center gap-2 text-xs sm:text-sm">
                    {/* <Link to="/admin" className="transition-colors">
                        {pathNameMap["/admin"]}
                    </Link> */}
                    {pathnames.map((value, index) => {
                        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
                        const isLast = index === pathnames.length - 1;

                        return (
                        <span key={to} className="flex items-center gap-2">
                            {index !== 0 && <span>›</span>}
                            {isLast ? (
                                <span className="text-gray-500 text-sm">{pathNameMap[value] ?? value}</span>
                            ) : (
                            <Link to={to} className="transition-colors text-sm">
                                {pathNameMap[value] ?? value}
                            </Link>
                            )}
                        </span>
                        );
                    })}
                </div>

                {/* Clock */}
                <div className={'text-xl font-bold hover:bg-gray-300 p-2 rounded-2xl'}>
                    <span className={`${mode === 'dark' ? 'text-white' : 'text-gray-600'}`} id='headerBar_clock'>{date.toLocaleTimeString()}</span>
                </div>

                <div className={'flex justify-between items-center'}>
                    <div className={'mr-4'}>
                        <MaterialUISwitch checked={mode === 'dark'} onChange={toggleTheme}/>
                    </div>
                    <Tooltip title={TITLE_LOGOUT}>
                        <FaSignOutAlt width={50} height={50} onClick={toggleTheme}/>
                    </Tooltip>
                    <div className={'mr-4'}>
                        <Avatar sx={{ bgcolor: 'red', marginLeft: 2, textTransform: 'uppercase', width: 32, height: 32 }}>H</Avatar>
                    </div>
                </div>
            </div>
        </div>
    );
}