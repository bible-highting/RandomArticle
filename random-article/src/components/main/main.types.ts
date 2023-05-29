export interface IPropsMainPageUI {
  clickCreateRandomArticle: () => void;
  onChangeIsRead: () => void;
  selectedArticle: { id: string; isRead: boolean; title: string; link: string };
}
