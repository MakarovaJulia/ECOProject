export interface IGalleryContent {
    title: string;
    paragraph: string;
    buttonTitle: string;
    onClick: () => void;
    itemNo: 1 | 2 | 3
}


export const galleryContent: IGalleryContent[] = [
    {
        title: 'Сделаем мир чище',
        paragraph: 'Сдай макулатуру или старую одежду и получи скидку на покупку товаров из переработанных материалов',
        buttonTitle: 'Условия сервиса',
        onClick: () => {},
        itemNo: 1
    },
    {
        title: 'А вы знали...',
        paragraph: 'что среднее время разложения пластмассовых изделий колеблется от 400 до 700 лет, а полиэтиленовых пакетов — от 100 до 200 лет?',
        buttonTitle: 'Узнать больше',
        onClick: () => {},
        itemNo: 2
    },
    {
        title: 'Что с масками?',
        paragraph: 'Медицинские маски не обязательно должны становиться отходами. Их тоже можно сдать на переработку.',
        buttonTitle: 'Пункты сбора масок',
        onClick: () => {},
        itemNo: 3
    }
]