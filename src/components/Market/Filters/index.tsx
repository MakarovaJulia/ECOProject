import {observer} from "mobx-react";
import {Checkbox} from "../../ui/Checkbox";
import {Button} from "../../ui/Button";
import {useStores} from "../../utils/use-stores-hook";
import styles from "./index.module.scss";

export const Filters = observer( () => {

    const {marketStore: {
        getGenders,
        getCategories,
        getBrands,
        setGenders,
        setCategories,
        setBrands,
        getAllProductsCategories,
        getAllProductsBrand,
        setAllProductsCategories,
        setAllProductsBrand,
        updateCheckStatus,
        updateCheckStatusAll,
        dropFilters,
    }} = useStores();

    return (
        <div className={styles.filtersWrapper}>
            <div className={styles.filtersContainer}>
                <div className={styles.itemsWrapper}>

                    <h3 className={styles.itemsTitle}>
                        Пол
                    </h3>
                    {getGenders.map((gender, index) => (
                        <Checkbox
                            title={gender.name}
                            index={index}
                            isChecked={gender.checked}
                            onChange={() => updateCheckStatus(index, setGenders, getGenders)}
                        />
                    ))}

                    <h3 className={styles.itemsTitle}>
                        Тип товара
                    </h3>
                    <Checkbox
                        title={"Выбрать все"}
                        isChecked={getAllProductsCategories}
                        onChange={() => updateCheckStatusAll(
                            getAllProductsCategories,
                            setAllProductsCategories,
                            setCategories,
                            getCategories
                        )}
                    />
                    {getCategories.map((category, index) =>
                        <Checkbox
                            title={category.name}
                            index={index}
                            isChecked={category.checked}
                            onChange={() => updateCheckStatus(index, setCategories, getCategories)}
                        />
                    )}

                    <h3 className={styles.itemsTitle}>
                        Бренд
                    </h3>
                    <Checkbox
                        title={"Выбрать все"}
                        isChecked={getAllProductsBrand}
                        onChange={() => updateCheckStatusAll(
                            getAllProductsBrand,
                            setAllProductsBrand,
                            setBrands,
                            getBrands
                        )}
                    />
                    {getBrands.map((brand, index)=>
                        <Checkbox
                            title={brand.name}
                            index={index}
                            isChecked={brand.checked}
                            onChange={() => updateCheckStatus(index, setBrands, getBrands)}
                        />
                    )}
                </div>
            </div>
            <Button
                id={styles.filterDropBtn}
                color={false}
                title="Сбросить фильтры"
                onClick={dropFilters}
            />
        </div>
    )
})
