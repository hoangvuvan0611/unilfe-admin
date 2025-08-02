import Close from "@mui/icons-material/Close";
import Menu from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material";

interface SidebarProps {
    isOpen: boolean,
    setSidebarOpen: () => void
}

const Sidebar: React.FC<SidebarProps> = ({isOpen, setSidebarOpen}) => {

    const theme = useTheme();

    return (
        <div className="side-bar">
            <div className="site-bar-menu-button">
                <button
                    onClick={setSidebarOpen}

                >
                    {isOpen ? <Close className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>
            <div></div>
        </div>
    );
}
export default Sidebar;