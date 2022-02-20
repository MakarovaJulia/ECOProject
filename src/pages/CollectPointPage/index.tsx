import {observer} from "mobx-react";
import styles from "../MainPage/index.module.scss";
import {HeaderContainer} from "../../containers/HeaderContainer";
import logo from "../../asserts/logo.svg";
import {NavLink} from "react-router-dom";

export const CollectPointPage = observer(() => {
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
            <h1>Пункты сбора</h1>
        </div>
    )
});

export default CollectPointPage