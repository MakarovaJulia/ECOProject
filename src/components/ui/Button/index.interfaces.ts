import {ReactNode} from "react";

export interface IButton {
    id?: string;
    color: boolean;
    title?: ReactNode;
    onClick?: (e: any) => void;
    type?: ReactNode;
    children?: ReactNode;
    image?: string;
}