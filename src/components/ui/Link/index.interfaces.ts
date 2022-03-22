export interface ILink {
    id?: string;
    onClick?: (e: any) => void;
    image?: string;
    isMarketItemTitle?: boolean;
    isMarketItemCat?: boolean,
    isMarketItemBrand?: boolean
}