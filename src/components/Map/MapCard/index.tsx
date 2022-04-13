import {IMapCard} from "./index.interfaces";
import styles from "./index.module.scss";

export const MapCard = (props: IMapCard) => {

    const {
        photo,
        title,
        description
    } = props;

    return (
        <div className={styles.card_wrapper}>
            <div className={styles.card_photo}>
                    <img
                        className={styles.photo}
                        src={require('../../../mocks/' + photo)}
                        alt={title + ', фотография'}
                    />
            </div>
            <div className={styles.content_container}>
                <h4 className={styles.card_title}>{title}</h4>
                <h5 className={styles.card_description}>{description}</h5>
            </div>
        </div>
    )
}
