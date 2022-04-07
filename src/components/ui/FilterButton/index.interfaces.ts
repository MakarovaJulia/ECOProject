import {ReactNode} from "react";

export interface IButton {
    id?: string;
    title?: ReactNode;
    onClick?: (e: any) => void;
    type?: 'submit' | 'reset' | 'button'
    isActive?: boolean
    children?: ReactNode;
}