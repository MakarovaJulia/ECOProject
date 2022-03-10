import {observer} from "mobx-react";
import styles from './index.module.scss';
import recycling_concept from '../../asserts/recycling-concept.svg'
import bottles from '../../asserts/bottles.svg'
import masks from '../../asserts/masks.svg'
import small_map from '../../asserts/small_map.svg'
import small_shop from '../../asserts/small_shop.svg'
import main_card_button from '../../asserts/main_card_button.svg'
import {HeaderContainer} from "../../containers/HeaderContainer";
import {FooterContainer} from "../../containers/FooterContainer";
import {LayoutContainer} from "../../containers/LayoutContainer";
import {Carousel} from "../../components/Carousel";
import {MainCard} from "../../components/MainCard";
import {Button} from "../../components/ui/Button";
import {Outlet, useNavigate} from "react-router";


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
                    <Carousel infinite>
                        <Carousel.Page>
                            <div className={styles.item}>
                                <div className={styles.item_1}>
                                    <div className={styles.main_text}>
                                        <h1>Сделаем мир чище</h1>
                                        <h5>Сдай макулатуру или старую одежду и получи скидку
                                            на покупку товаров из переработанных материалов
                                        </h5>
                                    <Button color={true} title={"Условия сервиса"} onClick={goToTermServ}></Button>
                                    </div>
                                    <img className={styles.item_image} src={recycling_concept} alt="recycling_concept"/>
                                </div>
                            </div>
                        </Carousel.Page>
                        <Carousel.Page>
                            <div className={styles.item}>
                                <div className={styles.item_2}>
                                    <div className={styles.main_text}>
                                        <h1>А вы знали...</h1>
                                        <h5>что среднее время разложения пластмассовых изделий колеблется
                                            от 400 до 700 лет,  а полиэтиленовых пакетов — от 100 до 200 лет?
                                        </h5>
                                        <Button color={true} title={"Узнать больше"} onClick={goToLearnMore}></Button>
                                    </div>
                                    <img className={styles.item_image} src={bottles} alt="bottles"/>
                                </div>
                            </div>
                        </Carousel.Page>
                        <Carousel.Page>
                            <div className={styles.item}>
                                <div className={styles.item_3}>
                                    <div className={styles.main_text}>
                                        <h1>Что с масками?</h1>
                                        <h5>Медицинские маски не обязательно должны становиться отходами.
                                            Их тоже можно сдать на переработку.
                                        </h5>
                                        <Button color={true} title={"Пункты сбора масок"} onClick={goToCollectPoint}></Button>
                                    </div>
                                    <img className={styles.item_image} src={masks} alt="masks"/>
                                </div>
                            </div>
                        </Carousel.Page>
                    </Carousel>
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