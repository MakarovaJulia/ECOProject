import {ReactNode} from "react";

export interface IButton {
    id?: string;
    color: boolean;
    title?: ReactNode;
    onClick?: (e: any) => void;
    type?: 'submit' | 'reset' | 'button'
    children?: ReactNode;
    image?: string;
}