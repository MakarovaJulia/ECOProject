import {Modal} from "../Modal";
import {observer} from "mobx-react";
import {useStores} from "../../utils/use-stores-hook";
import {Input} from "../../ui/Input";
import styles from "../AuthModal/index.module.scss";
import {EnterCodeModal} from "../EnterCodeModal";
import {AuthModal} from "../AuthModal";

export const RegisterModal = observer(() => {
    const {modalStore: {clearCurrentModal, setCurrentModal}} = useStores()

    function handleRegister() {
        clearCurrentModal()
        setCurrentModal(EnterCodeModal)
    }

    function openAuthModal(){
        clearCurrentModal()
        setCurrentModal(AuthModal)
    }

    return (
        <Modal title='Вход или регистрация' onClose={clearCurrentModal} isBtnForPartners={true} onClick={handleRegister} btnTitle='Получить код'>
            <Input type='tel' placeholder='Телефон'/>
            <button className={styles.modal_link} onClick={openAuthModal}>Я уже зарегистировался(-ась)</button>
        </Modal>
    )
});