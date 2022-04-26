import {observer} from "mobx-react";
import {useStores} from "../../utils/use-stores-hook";
import {Modal} from "../Modal";
import {mapItemsMock} from "../../../mocks/mapItemsMock";
import {MapItems} from "../../Map/MapItems";

export const MapModal = observer(() => {
    const {modalStore: {clearCurrentModal}} = useStores();

    return (
        <Modal
            title=''
            onClose={clearCurrentModal}
            hasBtnForPartners={false}
            isBottomSheet
        >
            <MapItems mapItems={mapItemsMock}/>
        </Modal>
    )
})