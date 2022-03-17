import {Modal} from "../Modal";
import {observer} from "mobx-react";
import {useStores} from "../../utils/use-stores-hook";
import {RegisterModal} from "../RegisterModal";
import styles from '../styles.module.scss'
import {EnterCodeModal} from "../EnterCodeModal";
import {AuthForm} from "../../Forms/AuthForm";

export const AuthModal = observer(() => {
    const {modalStore: {clearCurrentModal, setCurrentModal}} = useStores()

    function openRegisterModal(){
        clearCurrentModal()
        setCurrentModal(RegisterModal)
    }

    function openEnterCodeModal(){
        clearCurrentModal()
        setCurrentModal(EnterCodeModal)
    }

    return (
        <Modal title='Вход' onClose={clearCurrentModal} hasBtnForPartners={true}>
            <AuthForm />
            <div className={styles.links_wrapper}>
                <button className={styles.modal_link} onClick={openEnterCodeModal}>Войти с помощью смс</button>
                <button className={styles.modal_link} onClick={openRegisterModal}>Регистрация</button>
            </div>
        </Modal>
    )
});