import ListUI from './list.presenter';
import {
  collection,
  addDoc,
  getDocs,
  getFirestore,
} from 'firebase/firestore/lite';
import { firebaseApp } from '../../commons/libraries/firebase';
import { useEffect, useState } from 'react';

export default function List() {
  const [listsData, setListsData] = useState<any[]>([]);
  const onClickAddArticle = () => {
    const list = collection(getFirestore(firebaseApp), 'list');
    addDoc(list, {
      title: '제목',
      link: '링크',
    });
  };

  useEffect(() => {
    const list = collection(getFirestore(firebaseApp), 'list');
    const fetchLists = async () => {
      const result = await getDocs(list);
      const datas = result.docs.map((el) => el.data());
      console.log(datas);
      setListsData(datas);
    };
    fetchLists();
  }, []);
  console.log('===');
  console.log(listsData);

  return <ListUI onClickAddArticle={onClickAddArticle} listsData={listsData} />;
}
