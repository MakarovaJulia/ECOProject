import {observer} from "mobx-react";
import {useStores} from "../../utils/use-stores-hook";
import {Modal} from "../Modal";
import {AuthPartnersForm} from "../../Forms/AuthPartnersForm";
import styles from '../styles.module.scss';
import {RegisterModal} from "../RegisterModal";
import {RegisterPartnersModal} from "../RegisterPartnersModal";

export const AuthPartnersModal = observer(() => {
    const {modalStore: {clearCurrentModal, setCurrentModal}} = useStores()

    function openRegisterModal(){
        clearCurrentModal()
        setCurrentModal(RegisterModal)
    }

    function openRegisterPartnersModal(){
        clearCurrentModal()
        setCurrentModal(RegisterPartnersModal)
    }

    return (
        <Modal title='Вход' onClose={clearCurrentModal} isBtnForPartners={true}>
            <AuthPartnersForm />
            <div className={styles.links_wrapper}>
                <button className={styles.modal_link} onClick={openRegisterModal}>Войти с помощью смс</button>
                <button className={styles.modal_link} onClick={openRegisterPartnersModal}>Регистрация</button>
            </div>
        </Modal>
    )
});