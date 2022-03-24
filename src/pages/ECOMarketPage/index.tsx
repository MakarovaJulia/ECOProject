import {observer} from "mobx-react";
import styles from "../MainPage/index.module.scss";
import marketStyles from './index.module.scss';
import {HeaderContainer} from "../../containers/HeaderContainer";
import logo from "../../asserts/logo.svg";
import {NavLink} from "react-router-dom";
import {MarketGoods} from "../../components/Market/MarketGoods";
import {marketItemsMock} from "../../mocks/marketItemsMock";

export const ECOMarketPage = observer(() => {
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

            <main className={marketStyles.contentAligner}>
                <div className={marketStyles.mainContainer}>
                    <h1>Эко маркет</h1>
                    <div className={marketStyles.marketContainer}>
                        <div className={marketStyles.filtersContainer}>Filters are here</div>
                        <MarketGoods marketItems={marketItemsMock} balance={'200'}/>
                    </div>
                </div>
            </main>
        </div>
    )
});

export default ECOMarketPage