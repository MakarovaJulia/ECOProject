import {useStores} from "../../utils/use-stores-hook";
import {observer} from "mobx-react";
import {Modal} from "../Modal";
import {Button} from "../../ui/Button";
import qrImgMock from '../../../mocks/qrCode.jpg';
import styles from './index.module.scss';


export const MarketModal = observer(() => {
    const {modalStore: {clearCurrentModal}} = useStores();

    const codeMock = 'E25GHR0P';

    return (
        <Modal
            title='QR-код на покупку создан'
            onClose={clearCurrentModal}
            hasBtnForPartners={false}
            hideCloseBtn
        >
            <div className={styles.getCodeCardWrapper}>
                <div>При оплате покажите его сотруднику на кассе</div>
                <div className={styles.imgWrapper}>
                    <img src={qrImgMock} alt='qr-код' />
                </div>

                <h4>{codeMock}</h4>
                <div>
                    Если не получается отсканировать QR-код,
                    введите код вручную или продиктуйте сотруднику на кассе
                </div>
                <Button color title='Закрыть' onClick={clearCurrentModal}/>
            </div>

        </Modal>
    )
})