interface IMapItem {
    id: number;
    photo: string;
    title: string;
    description: string;
    positionX: number;
    positionY: number;
}


export const mapItemsMock: IMapItem[] = [
    {
        id: 0,
        photo: 'map_item_photo.svg',
        title: 'ул.Кремлёвская, 88',
        description: 'Пластик, стекло, бумага, металл, старая одежда, батареи, аккумуляторы...',
        positionX:55.79130,
        positionY:49.121483,
    },
    {
        id: 1,
        photo: 'map_item_photo.svg',
        title: 'ул.Кремлёвская, 88',
        description: 'Стекло, бумага, металл, старая одежда, батареи',
        positionX:55.792955,
        positionY:49.117854,
    },
    {
        id: 2,
        photo: 'map_item_photo.svg',
        title: 'ул.Кремлёвская, 88',
        description: 'Пластик, стекло, бумага, металл',
        positionX:55.793076,
        positionY:49.116577,
    },
    {
        id: 3,
        photo: 'map_item_photo.svg',
        title: 'ул.Кремлёвская, 88',
        description: 'Стекло, бумага, металл, старая одежда, батареи',
        positionX:55.794095,
        positionY:49.115619,
    },
]