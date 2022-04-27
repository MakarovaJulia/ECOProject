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

    allProductsCategories: boolean;
    allProductsBrand: boolean;

    constructor(public mainStore: MainStore) {
        this.genders = allGenders;
        this.categories = allCategories;
        this.brands = allBrands;
        this.sortings = allSortings;

        this.allProductsCategories = false;
        this.allProductsBrand = false;

        this.allGoods = marketItemsMock;
        this.processedGoods = this.allGoods;

        makeObservable(this, {
            getGoods: computed,
            getGenders: computed,
            getCategories: computed,
            getBrands: computed,
            getSortings: computed,
            getAllProductsCategories: computed,
            getAllProductsBrand: computed,
            handleClickSort: action,
            updateCheckStatus: action,
            updateCheckStatusAll: action,
            setGenders: action,
            setCategories: action,
            setBrands: action,
            setAllProductsCategories: action,
            setAllProductsBrand: action,
            dropFilters: action,
            genders: observable,
            categories: observable,
            brands: observable,
            allProductsCategories: observable,
            allProductsBrand: observable,
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

    get getGenders () {
        return this.genders;
    }

    get getCategories () {
        return this.categories;
    }

    get getBrands () {
        return this.brands;
    }

    get getAllProductsCategories () {
        return this.allProductsCategories;
    }

    get getAllProductsBrand () {
        return this.allProductsBrand;
    }

    sortByPrice = (index: number) => {
        if (index === 1) {
            this.processedGoods.sort((a, b) => {
                return -(a.price - b.price)
            })
        }
    }

    sortByRating = (index: number) => {
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
    }

    setGenders = (array: Item[]) => {
        this.genders = array;
    }

    setCategories = (array: Item[]) => {
        this.categories = array;
    }

    setBrands = (array: Item[]) => {
        this.brands = array;
    }

    setAllProductsCategories = (value: boolean) => {
        this.allProductsCategories = value;
    }

    setAllProductsBrand = (value: boolean) => {
        this.allProductsBrand = value;
    }

    updateCheckStatus = (index: number, setItems: any, items: Item[]) => {
        setItems(
            items.map((item: Item, currentIndex: number) =>
                currentIndex === index ? {...item, checked: !item.checked} : item
            )
        )
        this.processedGoods = [];
        this.allGoods.forEach((item) =>{
            let res = Object.values(item).map((prop)=> prop === items.find((item)=> item.checked)?.name)
            if(res.find((el) => el)){
                this.processedGoods.push(item);
            }
        })
    }

    updateCheckStatusAll = ( allItems: boolean, setAllItems: any, setItems: any, items: Item[] ) => {
        setAllItems(!allItems)
        setItems(
            items.map((item: Item) =>
                allItems ? {...item, checked: false} :
                    {...item, checked: true}
            )
        )
    }

    dropFilters = () => {
    }

}
