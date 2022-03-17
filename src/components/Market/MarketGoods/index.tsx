import {MarketCard} from "../MarketCard";

interface IMarketItem {
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
                <MarketCard
                    brand={item.brand}
                    photo={item.photo}
                    title={item.title}
                    category={item.category}
                    price={item.price}
                />
            )
        }
        return cards;

    }
    return (
        <div>
            {getCards(marketItems)}
        </div>
    )
}