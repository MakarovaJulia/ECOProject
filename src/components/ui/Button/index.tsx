import React from 'react';
import classNames from 'classnames/bind';

import { IButton } from './index.interfaces';
import styles from './index.module.scss'
import {NavLink} from "react-router-dom";

const cx = classNames.bind(styles);

export const Button = (props: IButton) => {
    const { id, title, onClick, image, color, children} = props;

    return (
        <button
            onClick={onClick}
            className={cx({
                button: true
            },props.color ? "btnGreen" : "btnGray")}
            id={id}
        >
            <img src={image}/>
            {title}
        </button>
    )
}