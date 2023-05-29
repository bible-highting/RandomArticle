export interface IPropsMainPageUI {
  clickCreateRandomArticle: () => void;
  selectedArticle: { id: string; isRead: boolean; title: string; link: string };
}
