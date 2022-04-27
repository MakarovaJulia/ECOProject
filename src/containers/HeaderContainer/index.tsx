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
import {Navigation} from "../Navigation";
import {MobileNavigation} from "../MobileNavigation";

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
                    <div className={styles.navigation}>
                        <Navigation/>
                    </div>
                    <div className={styles.mobile_navigation}>
                        <MobileNavigation/>
                    </div>
                </div>
            </div>
            <Outlet/>
        </>
    )
})