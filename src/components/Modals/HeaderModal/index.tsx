import {observer} from "mobx-react";
import {useStores} from "../../utils/use-stores-hook";
import styles from './index.module.scss'
import React, {useRef} from "react";
import {NavLink} from "react-router-dom";
import {Button} from "../../ui/Button";
import currency from "../../../asserts/currency.svg";
import exitIcon from "../../../asserts/exit_icon.svg";
import place from "../../../asserts/place.svg";

export const HeaderModal = observer(() => {
    const {modalStore: {clearCurrentModal}, authStore: {isAuthorized, user}} = useStores()

    const modalRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    return (
         <div className={styles.header_overlay} ref={modalRef}>
             <div className={styles.modal_window}>
                 <div className={styles.exit_btn_wrapper}>
                    <Button color={false} onClick={clearCurrentModal} id={styles.exit_btn} image={exitIcon}/>
                 </div>
                 { !localStorage.getItem("user") ?
                     <></>:
                     <>
                         <div className={styles.user}>
                             {<img className={styles.user_photo} src={user.photo_url} alt="photo"/> &&
                             <div className={styles.no_user_photo}/>}
                         </div>
                         <div className={styles.currency}>
                             {user.username}
                         </div>
                         <div className={styles.currency}>
                             <img className={styles.currency_icon} src={currency} alt="currency"/>
                             {user.balance && 0}
                         </div>
                     </>}
                 <div className={styles.header_wrapper}>
                     <NavLink to='/'
                              onClick={clearCurrentModal}
                              className={(navData) => navData.isActive ? styles.header_link_active : styles.header_link}>
                         Главная
                     </NavLink>
                     <NavLink to='/collect_point'
                              onClick={clearCurrentModal}
                              className={(navData) => navData.isActive ? styles.header_link_active : styles.header_link}>
                         Пункты сбора
                     </NavLink>
                     <NavLink to='/eco_market'
                              onClick={clearCurrentModal}
                              className={(navData) => navData.isActive ? styles.header_link_active : styles.header_link}>
                         Эко маркет
                     </NavLink>
                     <NavLink to='/'
                              onClick={clearCurrentModal}
                              className={(navData) => navData.isActive ? styles.header_link_active : styles.header_link}>
                         О сервисе
                     </NavLink>
                 </div>
                 <div className={styles.place}>
                     <img className={styles.header_icon} src={place} alt="place"/>
                     <div className={styles.place_title}>Казань</div>
                 </div>
             </div>
        </div>
    )
});