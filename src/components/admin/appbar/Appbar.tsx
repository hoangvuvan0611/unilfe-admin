import {Avatar, Tooltip } from "@mui/material";
import {useThemeContext} from "../../../providers/themeContext.ts";
import {useEffect, useState} from "react";
import { MaterialUISwitch } from "../../switch/MaterialUiSwitch.tsx";
import { FaSignOutAlt } from "react-icons/fa";
import {TITLE_LOGOUT} from "../../../common/const.ts";
import { useTheme } from '@mui/material/styles';

export default function Appbar() {

    const theme = useTheme();
    const { mode, toggleTheme } = useThemeContext();
    const [date, setDate] = useState(new Date());


    useEffect(() => {
        setInterval(() => {
            setDate(new Date());
        }, 1000);
    }, []);

    return (
        <div className={'appbar'} style={{backgroundColor: theme.palette.background.default}}>
            <div
                style={{borderColor: theme.palette.custom.border}}
                className={'flex justify-between border-b '}
            >
                <div></div>
                <div className={'text-2xl font-bold hover:bg-gray-300 p-2 rounded-2xl'}>
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