import {observer} from "mobx-react";
import {useStores} from "../../utils/use-stores-hook";
import {EnterCodeModal} from "../EnterCodeModal";
import {Modal} from "../Modal";
import {AuthPartnersModal} from "../AuthPartnersModal";
import {RegisterPartnersForm} from "../../Forms/RegisterPartnersFrom";
import styles from "../styles.module.scss";

export const RegisterPartnersModal = observer(() => {
    const {modalStore: {clearCurrentModal, setCurrentModal}} = useStores()

    function handleRegister() {
        clearCurrentModal()
        setCurrentModal(EnterCodeModal)
    }

    function openAuthModal(){
        clearCurrentModal()
        setCurrentModal(AuthPartnersModal)
    }

    return (
        <Modal title='Вход или регистрация' onClose={clearCurrentModal} hasBtnForPartners={true}>
            <RegisterPartnersForm onClick={handleRegister} />
            <button className={styles.modal_link} onClick={openAuthModal}>Я уже зарегистрировался(-ась)</button>
        </Modal>
    )
});