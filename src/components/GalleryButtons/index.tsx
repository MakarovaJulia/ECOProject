import { useSwiper } from 'swiper/react';
import {Button} from "../ui/Button";
import styles from "./index.module.scss"
import arrowLeft from '../../asserts/arrowLeft.svg'
import arrowRight from '../../asserts/arrowRight.svg'


export const SliderNextButton = () => {
    const swiper = useSwiper();
    return (
        <Button onClick={() => swiper.slideNext()} color={false} id={styles.btnLeft} image={arrowRight}/>
    )
}

export const SliderPrevButton = () => {
    const swiper = useSwiper();
    return (
        <Button onClick={() => swiper.slidePrev()} color={false} id={styles.btnRight} image={arrowLeft}/>
    )
}