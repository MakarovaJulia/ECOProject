import {Modal} from "../Modal";
import {observer} from "mobx-react";
import {useStores} from "../../utils/use-stores-hook";

export const AuthModal = observer(() => {
    const {modalStore: {clearCurrentModal}} = useStores()
    return (
        <Modal title='Hello' onClose={clearCurrentModal}>
            World
        </Modal>
    )
});