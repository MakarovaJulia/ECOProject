import {observer} from "mobx-react";
import styles from "../MainPage/index.module.scss";
import marketStyles from './index.module.scss';
import {HeaderContainer} from "../../containers/HeaderContainer";
import logo from "../../asserts/logo.svg";
import {NavLink} from "react-router-dom";
import {MarketGoods} from "../../components/Market/MarketGoods";
import {Sort} from "../../components/Market/Sort";
import {Filters} from "../../components/Market/Filters";
import {Button} from "../../components/ui/Button";
import {useStores} from "../../components/utils/use-stores-hook";
import {FiltersSortModal} from "../../components/Modals/FiltersSortModal";
import {LayoutContainer} from "../../containers/LayoutContainer";
import {FooterContainer} from "../../containers/FooterContainer";


export const ECOMarketPage = observer(() => {

    const {modalStore: {setCurrentModal, clearCurrentModal}} = useStores();

    const screenWidthForAdaptive = 900;

    const openFiltersSortModal = () => {
        clearCurrentModal();
        setCurrentModal(FiltersSortModal);
    }


    return (
        <div className={styles.main}>
            <HeaderContainer>
                <img className={styles.logo} src={logo} alt="ECO Logo"/>
                <NavLink to='/'>Главная</NavLink>
                <NavLink to='/collect_point'>Пункты сбора</NavLink>
                <NavLink to='/eco_market'>Эко маркет</NavLink>
                <NavLink to='/'>О сервисе</NavLink>
                <div>Город</div>
                <div>Войти</div>
            </HeaderContainer>
            <LayoutContainer>
                <main className={marketStyles.contentAligner}>
                    <div className={marketStyles.mainContainer}>
                        <div className={marketStyles.filterHeaderWrapper}>
                            <h1>Эко маркет</h1>
                            {window.screen.width < screenWidthForAdaptive
                                ? <Button color={false} title='Фильтры' onClick={openFiltersSortModal}/>
                                : <Sort />
                            }
                        </div>
                        <div className={marketStyles.marketContainer}>
                            { window.screen.width >= screenWidthForAdaptive && <Filters /> }

                            <MarketGoods balance=''/>
                        </div>
                    </div>
                </main>
            </LayoutContainer>
            <FooterContainer></FooterContainer>
        </div>
    )
});

export default ECOMarketPage