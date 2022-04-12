export interface IGalleryItem {
    title: string;
    paragraph: string;
    buttonTitle: string;
    onClick: () => void;
    itemNo: 1 | 2 | 3;
}