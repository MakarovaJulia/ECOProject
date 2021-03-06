import {useState} from "react";
import {ICardManager} from "./index.interfaces";
import {GetPromoCodeCard} from "../GetPromoCodeCard";
import {MarketCard} from "../MarketCard";
import styles from "./index.module.scss";


export const CardManager = (props: ICardManager) => {

    const [backIsShown, setBackIsShown] = useState<boolean>(false);

    const {
        brand,
        photo,
        title,
        category,
        price,
        key,
        balance,
    } = props;

    return (
        <li key={key}
            onMouseEnter={() => setBackIsShown(true)}
            onMouseLeave={() => setBackIsShown(false)}
        >
            <button className={styles.cardButton} onClick={() => setBackIsShown(!backIsShown)}>
                {
                    backIsShown?
                        <GetPromoCodeCard balance={balance} />
                        :
                        <MarketCard
                            brand={brand}
                            photo={photo}
                            title={title}
                            category={category}
                            price={price}
                            key={key}
                        />
                }
            </button>

        </li>
    )
}
