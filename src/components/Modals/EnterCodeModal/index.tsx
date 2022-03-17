import {Modal} from "../Modal";
import {observer} from "mobx-react";
import {useStores} from "../../utils/use-stores-hook";
import styles from "../styles.module.scss";
import {RegisterModal} from "../RegisterModal";
import {CodeVerificationForm} from "../../Forms/CodeVerificationForm";

export const EnterCodeModal = observer(() => {
    const {
        modalStore: {clearCurrentModal, setCurrentModal},
        authStore: {phone}
    } = useStores()

    function noCode(){
        clearCurrentModal()
        setCurrentModal(RegisterModal)
    }

    return (
        <Modal title='Ввести код' onClose={clearCurrentModal} hasBtnForPartners={true}>
            <p>Введите код, отправленный вам на телефон</p>
            <div className={styles.phone}>{phone}</div>
            <CodeVerificationForm/>
            <button className={styles.modal_link} onClick={noCode}>Не получил(-а) код</button>
        </Modal>
    )
});