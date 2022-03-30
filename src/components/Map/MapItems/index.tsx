import {MapCard} from "../MapCard";
import styles from './index.module.scss';

interface IMapItem {
    id: string | number,
    photo: string,
    title: string,
    description: string,
    positionX: string | number
    positionY: string | number
}

interface IMapItems {
    mapItems: IMapItem[];
}


export const MapItems = (props: IMapItems) => {

    const {mapItems} = props;

    const getCards = (mapItems: IMapItem[]) => {
        const cards = [];
        for (let item of mapItems) {
            cards.push(
                <li key={item.id} className={styles.listItem}>
                    <MapCard
                        photo={item.photo}
                        title={item.title}
                        description={item.description}
                    />
                </li>
            )
        }
        return cards;

    }
    return (
        <ul className={styles.map_cards_list}>
            {getCards(mapItems)}
        </ul>
    )
}