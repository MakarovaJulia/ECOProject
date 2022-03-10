import {Modal} from "../Modal";
import {observer} from "mobx-react";
import {useStores} from "../../utils/use-stores-hook";
import {Input} from "../../ui/Input";

export const AuthModal = observer(() => {
    const {modalStore: {clearCurrentModal}} = useStores()

    function handleAuth() {

    }

    return (
        <Modal title='Вход' onClose={clearCurrentModal} isBtnForPartners={true} onClick={handleAuth} btnTitle='Вход'>
            <Input type='tel' placeholder='Телефон'/>
            <Input type='password' placeholder='Пароль'/>
        </Modal>
    )
});