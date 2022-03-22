import React, {FC} from 'react';
import classNames from 'classnames/bind';

import { ILink } from './index.interfaces';
import styles from './index.module.scss'

const cx = classNames.bind(styles);

export const Link: FC<ILink> = ({
                                    id,
                                    onClick,
                                    image,
                                    isMarketItemCat,
                                    isMarketItemTitle,
                                    isMarketItemBrand,
                                    children
}) => {
    return (
        <a
            onClick={onClick}
            className={cx({
                link: true,
                marketItemTitle: isMarketItemTitle,
                marketItemCat: isMarketItemCat,
                marketItemBrand: isMarketItemBrand
            })}
            id={id}
        >
            {image && <img src={image}/>}
            {children}
        </a>
    )
}