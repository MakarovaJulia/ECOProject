import {observer} from "mobx-react";
import {useStores} from "../../utils/use-stores-hook";
import {FilterButton} from "../../ui/FilterButton";
import styles from "./index.module.scss";

export const Sort = observer(() => {

    const {marketStore: {getSortings, handleClickSort}} = useStores();

    return (
            <div className={styles.filterBtnWrapper}>
                { getSortings.map((sorting, index) => (
                    <FilterButton
                        id={styles.filterBtn}
                        title={ sorting.name }
                        type="button"
                        isActive={ sorting.checked }
                        onClick={() => {
                            handleClickSort(index);
                        }}
                    />
                ))}
            </div>
    )
})
