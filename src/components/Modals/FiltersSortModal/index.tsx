import {observer} from "mobx-react";
import { Sort } from "../../Market/Sort";
import {useStores} from "../../utils/use-stores-hook";
import {Modal} from "../Modal";
import {Filters} from "../../Market/Filters";
import styles from "./index.module.scss";

export const FiltersSortModal = observer(() => {
    const {modalStore: {clearCurrentModal}} = useStores();

    return (
        <Modal
            title=''
            onClose={clearCurrentModal}
            hasBtnForPartners={false}
            isBottomSheet
        >
            <div className={styles.sort}>
                <Sort />
            </div>
            <Filters />
        </Modal>
    )
})
