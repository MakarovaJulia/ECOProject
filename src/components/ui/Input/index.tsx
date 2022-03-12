import React, {FC, useRef} from "react";
import classNames from "classnames/bind";
import {IInput} from "./index.interfaces";
import styles from './index.module.scss';


const cx = classNames.bind(styles);

export const Input = React.forwardRef<HTMLInputElement, IInput>(
    (props, ref) => {
        const {
            placeholder,
            type,
            name,
            value,
            onChange,
            error=false
        } = props;

        return (
            <input
                ref={ref}
                type={type}
                placeholder={placeholder}
                className={cx({
                    input: true,
                    error: error
                })}
                name={name}
                value={value}
                onChange={onChange}
            />
        );
    }
);