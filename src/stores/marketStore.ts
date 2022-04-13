import {MainStore} from "./mainStore";
import {marketItemsMock} from "../mocks/marketItemsMock";
import {action, computed, makeObservable, observable} from "mobx";

interface Item {
    name: string;
    checked: boolean;
}

interface IMarketItem {
    id: number;
    brand: string;
    photo: string;
    title: string;
    category: string;
    price: number;
    rating: number;
    date: string
}

const allGenders: Item[] = [
    { name: "Мужской", checked: false },
    { name: "Женский", checked: false },
]

const allCategories: Item[] = [
    { name: "Одежда", checked: false },
    { name: "Обувь", checked: false },
    { name: "Аксессуары", checked: false },
]

const allBrands: Item[] = [
    {name: "H&M", checked: false},
    {name: "P&B", checked: false},
    {name: "ADIDAS", checked: false},
    {name: "NIKE", checked: false},
    {name: "REBOOK", checked: false}
]

const allSortings: Item[] = [
    { name: "По популярности", checked: false},
    { name: "По цене", checked: false},
    { name: "По новизне", checked: false},
]


export default class MarketStore {

    genders: Item[];
    categories: Item[];
    brands: Item[];
    sortings: Item[];

    allGoods: IMarketItem[];
    processedGoods: IMarketItem[];


    constructor(public mainStore: MainStore) {
        this.genders = allGenders;
        this.categories = allCategories;
        this.brands = allBrands;
        this.sortings = allSortings;

        this.allGoods = marketItemsMock;
        this.processedGoods = this.allGoods;

        makeObservable(this, {
            getGoods: computed,
            getSortings: computed,
            handleClickSort: action,
            sortings: observable,
            processedGoods: observable,
        })
    }

    get getGoods () {
        return this.processedGoods;
    }


    get getSortings () {
        return this.sortings;
    }

    sortByPrice = (index: number)=> {
        if (index === 1) {
            this.processedGoods.sort((a, b) => {
                return -(a.price - b.price)
            })
        }
    }

    sortByRating = (index: number)=> {
        if (index === 0) {
            this.processedGoods.sort((a, b) => {
                return -(a.rating - b.rating)
            })
        }
    }

    sortByDate = (index: number)=> {
        if (index === 2) {
            this.processedGoods.sort((a, b) => {
                return -(new Date(a.date).valueOf() - new Date(b.date).valueOf())
            })
        }
    }

    handleClickSort = ( index: number ) => {
        this.sortings = this.sortings.map(
            (sorting: Item, currentIndex: number) => currentIndex === index
                ? {...sorting, checked: true}
                : {...sorting, checked: false}
        );

        this.sortByPrice(index);
        this.sortByRating(index);
        this.sortByDate(index);
        console.log(this.processedGoods);
    }
}
