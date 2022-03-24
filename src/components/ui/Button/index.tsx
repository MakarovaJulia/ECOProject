import React from 'react';
import classNames from 'classnames/bind';

import { IButton } from './index.interfaces';
import styles from './index.module.scss'
import {NavLink} from "react-router-dom";

const cx = classNames.bind(styles);

export const Button = (props: IButton) => {
    const { id, title, onClick, image, color, children, type, textMini = false} = props;

    return (
        <button
            onClick={onClick}
            className={cx({
                button: true,
                btnTextMini: textMini,
            },props.color ? "btnGreen" : "btnGray")}
            id={id}
            type={type}
        >
            <img src={image}/>
            {title}
        </button>
    )
}