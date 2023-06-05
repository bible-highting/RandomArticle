export interface IPropsMainPageUI {
  clickCreateRandomArticle: () => void;
  onChangeIsRead: () => void;
  onClickMoveToData: () => void;
  selectedArticle: {
    id: string;
    isRead: boolean;
    title: string;
    link: string;
    description: string;
    image: string;
  };
  randomImage: string;
}
