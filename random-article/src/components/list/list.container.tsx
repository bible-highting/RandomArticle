import ListUI from './list.presenter';
import {
  collection,
  addDoc,
  getDocs,
  getFirestore,
} from 'firebase/firestore/lite';
import { firebaseApp } from '../../commons/libraries/firebase';

export default function List() {
  const onClickAddArticle = () => {
    const board = collection(getFirestore(firebaseApp), 'board');
    addDoc(board, {
      link: '링크',
    });
  };
  return <ListUI onClickAddArticle={onClickAddArticle} />;
}
