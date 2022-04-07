import React from 'react';
import styles from './index.module.scss'
import logo from "../../asserts/logo.svg";
import currency from "../../asserts/currency.svg";
import {NavLink, Outlet} from "react-router-dom";
import place from "../../asserts/place.svg";
import enter from "../../asserts/enter.svg";
import {observer} from "mobx-react";
import {useStores} from "../../components/utils/use-stores-hook";
import {AuthModal} from "../../components/Modals/AuthModal";
import {useNavigate} from "react-router";

export const HeaderContainer = observer((props: any) =>{
    const { children } = props;
    const {modalStore: {setCurrentModal, clearCurrentModal}, authStore: {isAuthorized, user}} = useStores();
    let navigate = useNavigate()

    const openModal = () => {
        clearCurrentModal()
        setCurrentModal(AuthModal)
    }

    const goToProfile = () => {
        navigate('/profile');
    }

    const check = () =>{
        let res = localStorage.getItem("token")!== null && localStorage.getItem("token")!==''
        console.log(localStorage.getItem("token"))
    }

    check()


    return (
        <>
            <div className={styles.container}>
                <div className={styles.header_wrapper}>
                    <div className={styles.header_wrapper}>
                        <img className={styles.logo} src={logo} alt="ECO Logo"/>
                        <NavLink to='/'
                                 className={(navData) => navData.isActive ? styles.header_link_active : styles.header_link}>
                            Главная
                        </NavLink>
                        <NavLink to='/collect_point'
                                 className={(navData) => navData.isActive ? styles.header_link_active : styles.header_link}>
                            Пункты сбора
                        </NavLink>
                        <NavLink to='/eco_market'
                                 className={(navData) => navData.isActive ? styles.header_link_active : styles.header_link}>
                            Эко маркет
                        </NavLink>
                        <NavLink to='/'
                                 className={(navData) => navData.isActive ? styles.header_link_active : styles.header_link}>
                            О сервисе
                        </NavLink>
                    </div>
                    <div className={styles.header_wrapper}>
                        { !isAuthorized ?
                            <>
                                <div className={styles.header_right}>
                                    <img className={styles.header_icon} src={place} alt="place"/>
                                    Город
                                </div>
                                <div className={styles.header_right}>
                                <button className={styles.header_modal_btn} onClick={openModal}>
                                <img className={styles.header_icon} src={enter} alt="enter"/>
                                Войти
                                </button>
                                </div>
                            </> :
                            <>
                                <div className={styles.header_right}>
                                    <img className={styles.header_icon} src={place} alt="place"/>
                                    Город
                                </div>
                                <div className={styles.header_right}>
                                    <div className={styles.currency}>
                                        <img className={styles.currency_icon} src={currency} alt="currency"/>
                                        {user.balance && 0}
                                    </div>
                                    <div className={styles.user}>
                                        {<img className={styles.user_photo} src={user.photo_url} alt="photo"/> &&
                                        <div className={styles.no_user_photo}/>}
                                        {user.username}
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
            <Outlet/>
        </>
    )
})