import {MarketCard} from "../MarketCard";
import styles from './index.module.scss';
import currency_img from '../../../asserts/currency.svg'
import {Button} from "../../ui/Button";
import {IMarketGoods, IMarketItem} from "./index.interfaces";



export const MarketGoods = (props: IMarketGoods) => {

    const {marketItems, balance} = props;

    const getCards = (marketItems: IMarketItem[]) => {
        const cards = [];
        for (let item of marketItems) {
            cards.push(
                <MarketCard
                    brand={item.brand}
                    photo={item.photo}
                    title={item.title}
                    category={item.category}
                    price={item.price}
                    key={item.id}
                />

            )
        }
        return cards;

    }
    return (
        <ul className={styles.goodsList}>
            <li className={styles.promoCodeCard}>
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
                <Button color textMini title='Получить промокод' />
            </li>
            {getCards(marketItems)}
        </ul>
    )
}