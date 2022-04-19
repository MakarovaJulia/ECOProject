import {observer} from "mobx-react";
import { Sort } from "../../Market/Sort";
import {useStores} from "../../utils/use-stores-hook";
import {Modal} from "../Modal";
import {Filters} from "../../Market/Filters";
import {inspect} from "util";
import styles from "./index.module.scss";

export const FiltersSortModal = observer(() => {
    const {modalStore: {clearCurrentModal, setCurrentModal}} = useStores();

    return (
        <Modal title='' onClose={clearCurrentModal} hasBtnForPartners={false}>
            <div className={styles.test_test}>
                <Sort />
            </div>
            <div className={styles.test_test}>
                <Filters />
            </div>

        </Modal>
    )
})
