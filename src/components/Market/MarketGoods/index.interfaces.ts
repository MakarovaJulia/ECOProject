export interface IMarketItem {
    id: string | number,
    brand: string,
    photo: string,
    title: string,
    category: string,
    price: string | number
}

export interface IMarketGoods {
    marketItems: IMarketItem[];
    balance: string | number;
}
