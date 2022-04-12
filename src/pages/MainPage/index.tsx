import {observer} from "mobx-react";
import styles from './index.module.scss';
import small_map from '../../asserts/small_map.svg'
import small_shop from '../../asserts/small_shop.svg'
import main_card_button from '../../asserts/main_card_button.svg'
import {HeaderContainer} from "../../containers/HeaderContainer";
import {FooterContainer} from "../../containers/FooterContainer";
import {LayoutContainer} from "../../containers/LayoutContainer";
import {MainCard} from "../../components/MainCard";
import {Button} from "../../components/ui/Button";
import {Outlet, useNavigate} from "react-router";
import {Gallery} from "../../components/Gallery";


export const MainPage = observer(() => {
    let navigate = useNavigate()

    const goToLearnMore = (): void => {
        navigate('/')
    }

    const goToTermServ = (): void => {
        navigate('/')
    }

    const goToCollectPoint = (): void => {
        navigate('/collect_point')
    }

    const goToECOMarket = (): void => {
        navigate('/eco_market')
    }

    return (
        <div className={styles.main}>
            <HeaderContainer></HeaderContainer>
            <LayoutContainer>
                <div className={styles.content_wrapper}>
                    <Gallery />
                    <div className={styles.wrapper}>
                        <MainCard>
                            <div className={styles.card_wrapper}>
                                    <div className={styles.main_card}>
                                        <h2>Пункты сбора</h2>
                                        <h5>Посмотри, где в твоем городе
                                            можно сдать вторсырье
                                            на переработку
                                        </h5>
                                        <Button color={false} id={styles.card_button} image={main_card_button} onClick={goToCollectPoint}>
                                            <img src={main_card_button}/>
                                        </Button>
                                    </div>
                                <img className={styles.item_card_image} src={small_map} alt="small_map"/>
                            </div>
                        </MainCard>
                        <MainCard>
                            <div className={styles.card_wrapper}>
                                <div className={styles.main_card}>
                                    <h2>ЭкоМаркет</h2>
                                    <h5>Используй заработанные
                                        экокоины для покупки товаров
                                        из переработанных материалов
                                    </h5>
                                    <Button color={false} id={styles.card_button} image={main_card_button} onClick={goToECOMarket}>
                                        <img src={main_card_button}/>
                                    </Button>
                                </div>
                            <img className={styles.item_card_image} src={small_shop} alt="small_shop"/>
                            </div>
                        </MainCard>
                    </div>
                </div>
            </LayoutContainer>
            <FooterContainer></FooterContainer>
            <Outlet/>
        </div>
    )
});