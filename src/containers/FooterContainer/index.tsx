import React from 'react';
import styles from './index.module.scss'
import mail from '../../asserts/mail.svg'
import phone from '../../asserts/phone.svg'

export const FooterContainer = (props: any) =>{
    const {
        children
    } = props;

    return (
        <>
            <div className={styles.container}>
                <div className={styles.footer_wrapper}>
                    <div className={styles.footer_text}>
                        <img className={styles.footer_icon} src={mail} alt="mail"/>
                        info@ecorus.ru
                    </div>
                    <div className={styles.footer_text}>
                        <img className={styles.footer_icon} src={phone} alt="phone"/>
                        +7 (800) 880-88-88
                    </div>
                    { children }
                </div>
            </div>
        </>
    )
}