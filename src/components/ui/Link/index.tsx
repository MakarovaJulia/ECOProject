import React from 'react';
import classNames from 'classnames/bind';

import { ILink } from './index.interfaces';
import styles from './index.module.scss'

const cx = classNames.bind(styles);

export const Link = (props: ILink) => {
    const { id, title, onClick, image} = props;

    return (
        <link
            onClick={onClick}
            className={cx({
                link: true
            })}
            id={id}
        >
            <img src={image}/>
            {title}
        </link>
    )
}