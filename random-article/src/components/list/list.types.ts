import {
  CheckboxChangeEvent,
  CheckboxChangeEventTarget,
} from 'antd/es/checkbox/Checkbox';
import { ChangeEvent, MouseEvent } from 'react';

export interface IListUIProps {
  onClickAddArticle: () => void;
  onChangeInputs: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickDeleteArticle: (e: MouseEvent<HTMLSpanElement>) => void;
  onChangeRead: (e: CheckboxChangeEvent) => Promise<void>;
  onClickMoveToHome: () => void;
  listsData: any[];
  inputs: { title: string; link: string };
}
