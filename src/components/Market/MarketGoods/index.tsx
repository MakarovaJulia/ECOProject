import styles from './index.module.scss';
import {IMarketGoods, IMarketItem} from "./index.interfaces";
import {CardManager} from "../CardManager";
import {observer} from "mobx-react";
import {useStores} from "../../utils/use-stores-hook";


export const MarketGoods = observer((props: IMarketGoods) => {

    const {marketStore: {getGoods}} = useStores();

    const {balance} = props;

    const getCards = (marketItems: IMarketItem[]) => {
        const cards = [];
        for (let item of marketItems) {
            cards.push(
                <CardManager
                    brand={item.brand}
                    photo={item.photo}
                    title={item.title}
                    category={item.category}
                    price={item.price}
                    key={item.id}
                    balance={balance}
                />
            )
        }
        return cards;
    }

    return (
        <ul className={styles.goodsList}>
            {getCards(getGoods)}
        </ul>
    )
})
