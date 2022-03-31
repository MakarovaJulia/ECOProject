import {observer} from "mobx-react";
import styles from './index.module.scss';
import {HeaderContainer} from "../../containers/HeaderContainer";
import logo from "../../asserts/logo.svg";
import {NavLink} from "react-router-dom";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import {mapItemsMock} from "../../mocks/mapItemsMock";
import {MapItems} from "../../components/Map/MapItems";
import {LayoutContainer} from "../../containers/LayoutContainer";
import {Input} from "../../components/ui/Input";

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
            <MapContainer
                className={styles.map}
                center={[55.783427, 49.122791]}
                zoom={12}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <LayoutContainer>
                    <div className={styles.map_menu}>
                        <Input value={'Поиск'}/>
                    </div>
                    <MapItems mapItems={mapItemsMock}/>
                </LayoutContainer>
            </MapContainer>
        </div>
    )
});

export default CollectPointPage