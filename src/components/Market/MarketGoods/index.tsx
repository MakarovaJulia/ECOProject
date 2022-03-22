import {MarketCard} from "../MarketCard";
import styles from './index.module.scss';

interface IMarketItem {
    id: string | number,
    brand: string,
    photo: string,
    title: string,
    category: string,
    price: string | number
}

interface IMarketGoods {
    marketItems: IMarketItem[];
}


export const MarketGoods = (props: IMarketGoods) => {

    const {marketItems} = props;

    const getCards = (marketItems: IMarketItem[]) => {
        const cards = [];
        for (let item of marketItems) {
            cards.push(
                <li key={item.id} className={styles.listItem}>
                    <MarketCard
                        brand={item.brand}
                        photo={item.photo}
                        title={item.title}
                        category={item.category}
                        price={item.price}
                    />
                </li>
            )
        }
        return cards;

    }
    return (
        <ul className={styles.goodsList}>
            {getCards(marketItems)}
        </ul>
    )
}