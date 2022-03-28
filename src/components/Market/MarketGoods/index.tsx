import {MarketCard} from "../MarketCard";
import styles from './index.module.scss';
import {IMarketGoods, IMarketItem} from "./index.interfaces";
import {GetPromoCodeCard} from "../GetPromoCodeCard";


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
            <GetPromoCodeCard balance={balance} />
            {getCards(marketItems)}
        </ul>
    )
}