import React from "react";
import { Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper'
import 'swiper/css';
import {GalleryItem} from "../GalleryItem";
import {galleryContent} from "./galleryContent";
import {SliderNextButton, SliderPrevButton} from "../GalleryButtons";
import styles from "./index.module.scss"
import classNames from "classnames/bind";


const cx = classNames.bind(styles);

export const Gallery = () => {
    const content = galleryContent;
    const slides = [];
    SwiperCore.use([Autoplay])

    for (let i = 0; i < content.length; i += 1) {
        slides.push(
            <SwiperSlide key={content[i].itemNo}>
                <GalleryItem
                    title={content[i].title}
                    paragraph={content[i].paragraph}
                    buttonTitle={content[i].buttonTitle}
                    onClick={content[i].onClick}
                    itemNo={content[i].itemNo}
                />
            </SwiperSlide>
        )
    }

    return (
        <article className={styles.galleryWrapper}>
            <Swiper id='main' loop>
                <div className={cx({
                    buttonWrapper: true,
                    buttonLeft: true
                })}>
                    <SliderPrevButton />
                </div>

                {slides}

                <div className={cx({
                    buttonWrapper: true,
                    buttonRight: true
                })}>
                    <SliderNextButton />
                </div>
            </Swiper>
        </article>
    );
}