import {Modal} from "../Modal";
import {observer} from "mobx-react";
import {useStores} from "../../utils/use-stores-hook";
import {Input} from "../../ui/Input";
import styles from "../AuthModal/index.module.scss";
import {RegisterModal} from "../RegisterModal";

export const EnterCodeModal = observer(() => {
    const {modalStore: {clearCurrentModal, setCurrentModal}} = useStores()

    function handleRegister() {

    }

    function noCode(){
        clearCurrentModal()
        setCurrentModal(RegisterModal)
    }

    return (
        <Modal title='Ввести код' onClose={clearCurrentModal} isBtnForPartners={true} onClick={handleRegister} btnTitle='Получить код'>
            <h5>Ввведите код отправленный вам на телефон</h5>
            <Input type='text' placeholder='Код'/>
            <button className={styles.modal_link} onClick={noCode}>Не получил(-а) код</button>
        </Modal>
    )
});