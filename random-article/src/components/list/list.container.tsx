import ListUI from './list.presenter';
import { collection, addDoc, getDocs, getFirestore } from 'firebase/firestore';
import { doc, onSnapshot } from 'firebase/firestore';
import { firebaseApp } from '../../commons/libraries/firebase';
import { ChangeEvent, useEffect, useState } from 'react';

export default function List() {
  const [listsData, setListsData] = useState<any[]>([]);
  const [inputs, setInputs] = useState({
    title: '',
    link: '',
  });

  useEffect(() => {
    const list = collection(getFirestore(firebaseApp), 'list');
    const newListsData = onSnapshot(list, (snapshot) => {
      const datas = snapshot.docs.map((doc) => doc.data());
      console.log(datas);
      setListsData(datas);
    });
    // const fetchLists = async () => {
    //   const result = await getDocs(list);
    //   const datas = result.docs.map((el) => el.data());
    //   console.log(datas);
    //   setListsData(datas);
    // };
    // fetchLists();
    return () => {
      newListsData();
    };
  }, []);
  // Blog - 링크 등록시 바로 리렌더링 하려고 [listData]넣었더니 무한 렌더링 됨 이 부분 블로그 정리하기(get -> onSnapshot)
  // Blog - Todo Tree 사용법 정리

  const onClickAddArticle = () => {
    const list = collection(getFirestore(firebaseApp), 'list');
    addDoc(list, {
      title: inputs.title,
      link: inputs.link,
    });
  };

  const onChangeInputs = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  return (
    <ListUI
      onClickAddArticle={onClickAddArticle}
      onChangeInputs={onChangeInputs}
      listsData={listsData}
    />
  );
}
