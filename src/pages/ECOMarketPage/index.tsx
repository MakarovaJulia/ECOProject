import {observer} from "mobx-react";
import styles from "../MainPage/index.module.scss";
import marketStyles from './index.module.scss';
import {HeaderContainer} from "../../containers/HeaderContainer";
import logo from "../../asserts/logo.svg";
import {NavLink} from "react-router-dom";
import {MarketGoods} from "../../components/Market/MarketGoods";
import {Sort} from "../../components/Market/Sort";
import {Filters} from "../../components/Market/Filters";


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
                    <div className={marketStyles.filterHeaderWrapper}>
                        <h1>Эко маркет</h1>
                        <div className={marketStyles.filterBtnWrapper}>
                            <Sort />
                        </div>
                    </div>
                    <div className={marketStyles.marketContainer}>
                        <Filters />
                        <MarketGoods balance=''/>
                    </div>
                </div>
            </main>
        </div>
    )
});

export default ECOMarketPage