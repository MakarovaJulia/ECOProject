import React from 'react';
import styles from './index.module.scss'

export const MainCard = (props: any) => {
    const {
        children
    } = props;

    return (
        <>
            <div className={styles.container}>
                { children }
            </div>
        </>
    )
}