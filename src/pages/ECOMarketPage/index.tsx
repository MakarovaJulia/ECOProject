import {observer} from "mobx-react";
import styles from "../MainPage/index.module.scss";
import marketStyles from './index.module.scss';
import {HeaderContainer} from "../../containers/HeaderContainer";
import logo from "../../asserts/logo.svg";
import {NavLink} from "react-router-dom";
import {MarketGoods} from "../../components/Market/MarketGoods";
import {marketItemsMock} from "../../mocks/marketItemsMock";
import {Button} from "../../components/ui/Button";
import {FilterButton} from "../../components/ui/FilterButton";
import {Checkbox} from "../../components/ui/Checkbox";
import {useState} from "react";
import {CheckboxGroup} from "../../components/ui/CheckboxGroup";

interface Item {
    name: string;
    checked: boolean;
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

export const ECOMarketPage = observer(() => {

    const [allProductsCategories, setAllProductsCategories] = useState(false);
    const [allProductsBrand, setAllProductsBrand] = useState(false);
    const [sortings, setSorting] = useState(allSortings)
    const [genders, setGenders] = useState(allGenders)
    const [categories, setCategories] = useState(allCategories)
    const [brands, setBrands] = useState(allBrands);

    let filteredData = marketItemsMock

    const dropFilters = ()=> {
    }


    const sortByPrice = (index: number)=> {
        if (index === 1) {
            filteredData.sort((a, b) => {
                return -(a.price - b.price)
            })
        }
    }

    const sortByRating = (index: number)=> {
        if (index === 0) {
            filteredData.sort((a, b) => {
                return -(a.rating - b.rating)
            })
        }
    }

    const sortByDate = (index: number)=> {
        if (index === 2) {
            filteredData.sort((a, b) => {
                return -(new Date(a.date).valueOf() - new Date(b.date).valueOf())
            })
        }
    }

    const handleClickSort = ( index: number ) => {
        setSorting(sortings.map((sorting: Item, currentIndex: number) => currentIndex === index ?
            {...sorting, checked: true}
            : {...sorting, checked: false}))
        sortByPrice(index)
        sortByRating(index)
        sortByDate(index)
        }

    const updateCheckStatus = (index: number, setItems: any, items: Item[]) => {
        setItems(
            items.map((item: Item, currentIndex: number) =>
                currentIndex === index ? {...item, checked: !item.checked} : item
            )
        )
        filteredData = []
        marketItemsMock.forEach((item) =>{
            let res = Object.values(item).map((prop)=> prop === items.find((item)=> item.checked)?.name)
            if(res.find((el) => el)){
                filteredData.push(item)
                console.log('data pushed')
            }
        })
        console.log(filteredData)
    }

    const updateCheckStatusAll = ( allItems: boolean, setAllItems: any, setItems: any, items: Item[] ) => {
        setAllItems(!allItems)
        setItems(
            items.map((item: Item) =>
                allItems ? {...item, checked: false} :
                    {...item, checked: true}
            )
        )
       // console.log(items.find((item)=> item.checked)?.name)
    }

    return (
        <div className={styles.main}>
            <HeaderContainer>
                <img className={styles.logo} src={logo} alt="ECO Logo"/>
                <NavLink to='/'>Главная</NavLink>
                <NavLink to='/collect_point'>Пункты сбора</NavLink>
                <NavLink to='/eco_market'>Эко маркет</NavLink>
                <NavLink to='/'>О сервисе</NavLink>
                <div>Город</div>
                <div>Войти</div>
            </HeaderContainer>

            <main className={marketStyles.contentAligner}>
                <div className={marketStyles.mainContainer}>
                    <div className={marketStyles.filterHeaderWrapper}>
                        <h1>Эко маркет</h1>
                        <div className={marketStyles.filterBtnWrapper}>
                            { sortings.map((sorting, index) => (
                                <FilterButton
                                    id={marketStyles.filterBtn}
                                    title={ sorting.name }
                                    type={"button"}
                                    isActive={ sorting.checked }
                                    onClick={() => {
                                        handleClickSort(index)
                                        console.log( sorting.checked )
                                    }}/>
                                ))
                            }
                        </div>
                    </div>
                    <div className={marketStyles.marketContainer}>
                        <div className={marketStyles.filtersWrapper}>
                            <div className={marketStyles.filtersContainer}>
                                <div className={marketStyles.itemsWrapper}>
                                    <h3 className={marketStyles.itemsTitle}>
                                        Пол
                                    </h3>
                                    {genders.map((gender, index) => (
                                        <Checkbox
                                            title={gender.name}
                                            index={index}
                                            isChecked={gender.checked}
                                            onChange={() => updateCheckStatus(index, setGenders, genders)}
                                        />
                                    ))
                                    }
                                    <h3 className={marketStyles.itemsTitle}>
                                        Тип товара
                                    </h3>
                                    <Checkbox
                                        title={"Выбрать все"}
                                        isChecked={allProductsCategories}
                                        onChange={() => updateCheckStatusAll(allProductsCategories, setAllProductsCategories, setCategories, categories)}
                                    />
                                    {categories.map((category, index)=>
                                        <Checkbox
                                            title={category.name}
                                            index={index}
                                            isChecked={category.checked}
                                            onChange={() => updateCheckStatus(index, setCategories, categories)}
                                        />
                                    )}
                                   {/*<CheckboxGroup isShowSelectAll multiple>*/}
                                   {/*     {allCategories.map((category, index) => (*/}
                                   {/*         <Checkbox*/}
                                   {/*             title={category.name}*/}
                                   {/*             index={index}*/}
                                   {/*             isChecked={category.checked}*/}
                                   {/*             onChange={() => {}}*/}
                                   {/*         />*/}
                                   {/*     ))*/}
                                   {/*     }*/}
                                   {/* </CheckboxGroup>*/}

                                    <h3 className={marketStyles.itemsTitle}>
                                        Бренд
                                    </h3>
                                    <Checkbox
                                        title={"Выбрать все"}
                                        isChecked={allProductsBrand}
                                        onChange={() => updateCheckStatusAll(allProductsBrand, setAllProductsBrand, setBrands, brands)}
                                    />
                                    {brands.map((brand, index)=>
                                        <Checkbox
                                            title={brand.name}
                                            index={index}
                                            isChecked={brand.checked}
                                            onChange={() => updateCheckStatus(index, setBrands, brands)}
                                        />
                                    )}
                                </div>
                            </div>
                            <Button id={marketStyles.filterDropBtn} color={false} title={"Сбросить фильтры"} onClick={dropFilters}/>
                        </div>
                        <MarketGoods marketItems={filteredData} balance=''/>
                    </div>
                </div>
            </main>
        </div>
    )
});

export default ECOMarketPage