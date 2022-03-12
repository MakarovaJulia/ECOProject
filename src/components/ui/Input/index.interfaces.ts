import {MutableRefObject} from "react";

export interface IInput {
    ref: MutableRefObject<HTMLInputElement>;
    placeholder?: string;
    type?: string;
    name?: string;
    value: string;
    onChange?: (event: { target: {value: string, name: string}; }) => void;
    error?: boolean;
}