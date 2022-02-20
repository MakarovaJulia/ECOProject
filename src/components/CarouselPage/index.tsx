import React, {useContext} from 'react';
import styles from './index.module.scss'
import {CarouselContext} from "../CarouselContext";

export const Page = (props: any) => {
    const { children } = props;

    const { width } = useContext(CarouselContext)
    return (
        <div className={styles.page__main_container} style={{
            minWidth: `${width}px`,
            maxWidth: `${width}px`,
        }}>
            {children}
        </div>
    )
}