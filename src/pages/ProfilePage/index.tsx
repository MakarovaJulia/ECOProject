import {observer} from "mobx-react";
import styles from './index.module.scss';
import {HeaderContainer} from "../../containers/HeaderContainer";
import {FooterContainer} from "../../containers/FooterContainer";
import {LayoutContainer} from "../../containers/LayoutContainer";
import {useStores} from "../../components/utils/use-stores-hook";


export const ProfilePage = observer(() => {

    const {
        authStore: {user}
    } = useStores()

    return (
        <div className={styles.main}>
            <HeaderContainer></HeaderContainer>
            <LayoutContainer>
                Профиль
            </LayoutContainer>
            <FooterContainer></FooterContainer>
        </div>
    )
});