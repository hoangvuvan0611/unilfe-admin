import type {ReactNode} from "react";

interface IProps {
    path: string;
    title: string;
    icon: ReactNode;
}

export const SidebarObject: IProps[] = [
    {
        path: '',
        title: '',
        icon: <RxDashBoard />
    }
]