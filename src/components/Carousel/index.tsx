import React, {useEffect, useState, Children, cloneElement, useRef} from 'react';
import styles from './index.module.scss'
import {VscChevronLeft, VscChevronRight } from 'react-icons/vsc'
import {Page} from "../CarouselPage";
import {CarouselContext} from "../CarouselContext";


export const Carousel = (props: any, infinite:any) =>{
    const { children } = props;

    const TRANSITION_DURATION = 300

    const [offset, setOffset] = useState(0)
    const [width, setWidth] = useState(0)
    const [pages, setPages] = useState([] as any)
    const [transitionDuration, setTransitionDuration] = useState(TRANSITION_DURATION)
    const [clonesCount, setClonesCount] = useState({head: 0, tail: 0})


    const windowElRef = useRef(document.createElement("div"))

    useEffect(() => {
        if(infinite){
            setPages([
                cloneElement(children[Children.count(children) - 1]),
                ...children,
                cloneElement(children[0]),
            ])
            clonesCount.head = 1
            clonesCount.tail = 1
            console.log('After change '+ clonesCount.head + ' ' + width)
            return
        }
        setPages(children)
    }, [children, infinite])

    useEffect(() => {
        const resizeHandler = () => {
            const windowELWidth = windowElRef.current.offsetWidth
            setWidth(windowELWidth)
            setOffset(-(clonesCount.head) * width)
        }
        resizeHandler()
        window.addEventListener('resize', resizeHandler)
        return () => {
            window.removeEventListener('resize', resizeHandler)
        }
    },[clonesCount, width])

    useEffect(() => {
        if(transitionDuration === 0){
            setTimeout(() => {
                setTransitionDuration(TRANSITION_DURATION)
            }, TRANSITION_DURATION)
        }
    }, [transitionDuration])

    useEffect(() => {
        if(!infinite) return
        let count = 0
        if (offset == 0){
            if(count == 0){
                setOffset( -(width * (pages.length - 1 - clonesCount.tail)) )
                return;
            }
            setTimeout(() => {
                setTransitionDuration(0)
                setOffset( -(width * (pages.length - 1 - clonesCount.tail)) )
                console.log(' offset ' + -(width * (pages.length - 1 - clonesCount.tail)))
            }, TRANSITION_DURATION)
            return;
        }
        if(offset == -(width * (pages.length - 1))){
            console.log('third')
            setTimeout(() => {
                setTransitionDuration(0)
                setOffset( -(clonesCount.head * width))
            }, TRANSITION_DURATION)
            return;
        }
    }, [infinite, offset, width, pages, clonesCount])


    const handleLeftArrowClick = () => {
        console.log('handleLeftArrowClick')
        setOffset((currentOffset) => {
            const newOffset = currentOffset + width
            console.log(newOffset)
            return Math.min(newOffset, 0)
        })
    }
    const handleRightArrowClick = () => {
        console.log('handleRightArrowClick')
        setOffset((currentOffset) => {
            const newOffset = currentOffset - width
            const maxOffset = -(width * (pages.length - 1))
            console.log(newOffset)
            return Math.max(newOffset, maxOffset)
        })
    }

    return (
        <CarouselContext.Provider value={{width: width}}>
            <div className={styles.wrapper}>
                <div className={styles.main_container}>
                    <VscChevronLeft className={styles.arrow} onClick={handleLeftArrowClick}/>
                    <div className={styles.window} ref={windowElRef}>
                        <div className={styles.all_pages_container} style = {
                            {
                                transitionDuration: `${transitionDuration}ms`,
                                transform: `translateX(${offset}px)`
                            }
                        }>
                            {pages}
                        </div>
                    </div>
                    <VscChevronRight className={styles.arrow} onClick={handleRightArrowClick}/>
                </div>
            </div>
        </CarouselContext.Provider>
    )
}

Carousel.Page = Page