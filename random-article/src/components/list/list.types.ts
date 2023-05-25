import { ChangeEvent, MouseEvent } from 'react';

export interface IListUIProps {
  onClickAddArticle: () => void;
  onChangeInputs: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickDeleteArticle: (e: MouseEvent<HTMLSpanElement>) => void;
  listsData: any[];
  inputs: { title: string; link: string };
}
