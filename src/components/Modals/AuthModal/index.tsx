import {Modal} from "../Modal";
import {observer} from "mobx-react";
import {useStores} from "../../utils/use-stores-hook";
import {Input} from "../../ui/Input";
import {Link} from "../../ui/Link";
import {RegisterModal} from "../RegisterModal";
import {Button} from "../../ui/Button";
import styles from './index.module.scss'
import {EnterCodeModal} from "../EnterCodeModal";

export const AuthModal = observer(() => {
    const {modalStore: {clearCurrentModal, setCurrentModal}} = useStores()

    function handleAuth() {

    }


    function openRegisterModal(){
        clearCurrentModal()
        setCurrentModal(RegisterModal)
    }

    function openEnterCodeModal(){
        clearCurrentModal()
        setCurrentModal(EnterCodeModal)
    }


    return (
        <Modal title='Вход' onClose={clearCurrentModal} isBtnForPartners={true} onClick={handleAuth} btnTitle='Вход'>
            <Input type='tel' placeholder='Телефон'/>
            <Input type='password' placeholder='Пароль'/>
            <div className={styles.links_wrapper}>
                <button className={styles.modal_link} onClick={openEnterCodeModal}>Войти с помощью смс</button>
                <button className={styles.modal_link} onClick={openRegisterModal}>Регистрация</button>
            </div>
        </Modal>
    )
});