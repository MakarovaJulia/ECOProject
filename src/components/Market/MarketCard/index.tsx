import {IMarketCard} from "./index.interfaces";
import styles from "./index.module.scss";
import currencyImg from '../../../asserts/currency.svg';
import {Link} from "../../ui/Link";

export const MarketCard = (props: IMarketCard) => {

    const {
        brand,
        photo,
        title,
        category,
        price,
    } = props;

    return (
        <div  className={styles.itemCard}>
            <div className={styles.cardTop}>
                <Link isMarketItemBrand>{brand}</Link>
                <Link>
                    <img
                        className={styles.photo}
                        src={require('../../../mocks/' + photo)}
                        alt={title + ', фотография'}
                    />
                </Link>
            </div>
            <div className={styles.linksBlock}>
                <Link isMarketItemTitle>{title}</Link>
                <Link isMarketItemCat>{category}</Link>
            </div>
            <div className={styles.price}>
                <img src={currencyImg} alt='валюта'/>
                <div>
                    {price}
                </div>
            </div>
        </div>
    )
}
