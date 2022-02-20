import {ReactNode} from "react";

export interface ILink {
    id?: string;
    title?: ReactNode;
    onClick?: (e: any) => void;
    type?: ReactNode;
    image?: string;
}