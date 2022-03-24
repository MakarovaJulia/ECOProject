import {observer} from "mobx-react";
import styles from "../MainPage/index.module.scss";
import marketStyles from './index.module.scss';
import {HeaderContainer} from "../../containers/HeaderContainer";
import logo from "../../asserts/logo.svg";
import {NavLink} from "react-router-dom";
import {MarketGoods} from "../../components/Market/MarketGoods";
import {marketItemsMock} from "../../mocks/marketItemsMock";
import {Button} from "../../components/ui/Button";
import {Checkbox} from "../../components/ui/Checkbox";
import {useState} from "react";

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
    {name: "Adidas", checked: false},
    {name: "Nike", checked: false},
    {name: "Rebook", checked: false}
]

export const ECOMarketPage = observer(() => {

    const [categories, setCategories] = useState(allCategories)
    const [genders, setGenders] = useState(allGenders)
    const [brands, setBrands] = useState(allBrands);

    const dropFilters = ()=> {
    }

    const filterByPopularity = ()=> {
    }

    const filterByPrice = ()=> {
    }

    const filterByNovelty = ()=> {
    }

    const updateCheckStatus = (index: number, setItems: any, items: Item[]) => {
        setItems(
            items.map((item: Item, currentIndex: number) =>
                currentIndex === index ? {...item, checked: !item.checked} : item
            )
        )
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
                            <Button id={marketStyles.filterBtn} color={false} title={"По популярности"} onClick={filterByPopularity}/>
                            <Button id={marketStyles.filterBtn} color={false} title={"По цене"} onClick={filterByPrice}/>
                            <Button id={marketStyles.filterBtn} color={false} title={"По новизне"} onClick={filterByNovelty}/>
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
                                            handleCheck={() => updateCheckStatus(index, setGenders, genders)}
                                        />
                                    ))
                                    }
                                    <h3 className={marketStyles.itemsTitle}>
                                        Тип товара
                                    </h3>
                                    {categories.map((category, index) => (
                                        <Checkbox
                                            title={category.name}
                                            index={index}
                                            isChecked={category.checked}
                                            handleCheck={() => updateCheckStatus(index, setCategories, categories)}
                                        />
                                    ))
                                    }
                                    <h3 className={marketStyles.itemsTitle}>
                                        Бренд
                                    </h3>
                                    <Checkbox
                                        title={"Выбрать все"}
                                        isChecked={false}
                                        handleCheck={() => {}}
                                    />
                                    {brands.map((brand, index)=>
                                        <Checkbox
                                            title={brand.name}
                                            index={index}
                                            isChecked={brand.checked}
                                            handleCheck={() => updateCheckStatus(index, setBrands, brands)}
                                        />
                                    )}
                                </div>
                            </div>
                            <Button id={marketStyles.filterDropBtn} color={false} title={"Сбросить фильтры"} onClick={dropFilters}/>
                        </div>
                        <MarketGoods marketItems={marketItemsMock}/>
                    </div>
                </div>
            </main>
        </div>
    )
});

export default ECOMarketPage