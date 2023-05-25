import { ChangeEvent } from 'react';

export interface IListUIProps {
  onClickAddArticle: () => void;
  onChangeInputs: (e: ChangeEvent<HTMLInputElement>) => void;
  listsData: any[];
  inputs: { title: string; link: string };
}
