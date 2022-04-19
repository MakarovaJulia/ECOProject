import {observer} from "mobx-react";
import styles from "./index.module.scss";
import currency_img from "../../../asserts/currency.svg";
import {Button} from "../../ui/Button";
import {FC, useState} from "react";
import {IGetPromoCodeCard} from './index.interfaces';
import {useStores} from "../../utils/use-stores-hook";
import {MarketModal} from "../../Modals/MarketModal";

export const GetPromoCodeCard: FC<IGetPromoCodeCard> = observer(({balance}) => {

    const {modalStore: {setCurrentModal, clearCurrentModal}} = useStores();

    const openModal = () => {
        clearCurrentModal();
        setCurrentModal(MarketModal)
    }

    return (
        <div className={styles.promoCodeCard}>
            <div className={styles.promoCodeCardContent}>
                <div className={styles.balanceTitle}>
                    На вашем балансе
                    <img src={currency_img} alt='валюта'/>
                    <span>{balance}</span>
                </div>
                <div className={styles.balanceSubtitle}>
                    Вы можете обменять их на скидку {balance} руб.
                </div>
            </div>
            <Button color textMini title='Получить промокод' onClick={openModal}/>
        </div>
    );
})
