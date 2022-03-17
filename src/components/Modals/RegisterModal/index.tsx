import {Modal} from "../Modal";
import {observer} from "mobx-react";
import {useStores} from "../../utils/use-stores-hook";
import styles from "../styles.module.scss";
import {EnterCodeModal} from "../EnterCodeModal";
import {AuthModal} from "../AuthModal";
import {RegisterForm} from "../../Forms/RegisterForm";

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
        <Modal title='Вход или регистрация' onClose={clearCurrentModal} hasBtnForPartners={true}>
            <RegisterForm onClick={handleRegister} />
            <button className={styles.modal_link} onClick={openAuthModal}>Я уже зарегистрировался(-ась)</button>
        </Modal>
    )
});