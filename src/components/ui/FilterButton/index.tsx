import React from 'react';
import classNames from 'classnames/bind';

import { IButton } from './index.interfaces';
import styles from './index.module.scss'

const cx = classNames.bind(styles);

export const FilterButton = (props: IButton) => {
    const { id, title, onClick, type, isActive} = props;

    return (
        <button
            onClick={onClick}
            className={cx({
                button: true,
                active: isActive
            })}
            id={id}
            type={type}
        >
            {title}
        </button>
    )
}