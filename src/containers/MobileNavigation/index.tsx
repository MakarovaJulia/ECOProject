import {observer} from "mobx-react";
import {useStores} from "../../components/utils/use-stores-hook";
import {useNavigate} from "react-router";
import {AuthModal} from "../../components/Modals/AuthModal";
import styles from './index.module.scss'
import logo from "../../asserts/logo.svg";
import place from "../../asserts/place.svg";
import enter from "../../asserts/enter.svg";
import currency from "../../asserts/currency.svg";
import burger from "../../asserts/burger.svg";
import React from "react";
import {Button} from "../../components/ui/Button";
import {HeaderModal} from "../../components/Modals/HeaderModal";

export const MobileNavigation = observer((props: any) =>{
    const { children } = props;
    const {modalStore: {setCurrentModal, clearCurrentModal}, authStore: {isAuthorized, user}} = useStores();

    const openModal = () => {
        clearCurrentModal()
        setCurrentModal(AuthModal)
    }

    const openHeaderModal = () => {
        setCurrentModal(HeaderModal)
    }

    const check = () =>{
        let res = localStorage.getItem("token")!== null && localStorage.getItem("token")!==''
        console.log(localStorage.getItem("token"))
    }

    check()


    return (
        <>
            <div className={styles.header_wrapper}>
                <img className={styles.logo} src={logo} alt="ECO Logo"/>
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
                        <Button color={false} id={styles.burger_btn} image={burger} onClick={openHeaderModal}/>
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
                            </div>
                        </div>
                        <Button color={false} id={styles.burger_btn} image={burger} onClick={openHeaderModal}/>
                    </>
                }
            </div>
        </>
    )
})