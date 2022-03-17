import {IMarketCard} from "./index.interfaces";
import styles from "./index.module.scss";
import currencyImg from '../../../asserts/currency.svg';


export const MarketCard = (props: IMarketCard) => {

    const {
        brand,
        photo,
        title,
        category,
        price
    } = props;

    return (
        <div className={styles.itemCard}>
            <div className={styles.cardTop}>
                <div className={styles.brand}>{brand}</div>
                <img src={photo} alt={title + ' фотография'}/>
            </div>
            <a className={styles.title}>{title}</a>
            <a className={styles.category}>{category}</a>
            <div className={styles.price}>
                <img src={currencyImg} alt={'валюта'}/>
                <div>
                    {price}
                </div>
            </div>
        </div>

    )
}
