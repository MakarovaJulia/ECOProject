import {observer} from "mobx-react";
import styles from './index.module.scss';
import {HeaderContainer} from "../../containers/HeaderContainer";
import {FooterContainer} from "../../containers/FooterContainer";
import {LayoutContainer} from "../../containers/LayoutContainer";
import {useStores} from "../../components/utils/use-stores-hook";
import {useNavigate} from "react-router";


export const ProfilePage = observer(() => {
    let navigate = useNavigate()

    const {
        authStore: {user, logout}
    } = useStores()

    const userLogout = (): void => {
        logout()
        navigate('/')
    }

    return (
        <div className={styles.main}>
            <HeaderContainer></HeaderContainer>
            <LayoutContainer>
                Профиль
                <button onClick={userLogout}>Выйти</button>
            </LayoutContainer>
            <FooterContainer></FooterContainer>
        </div>
    )
});