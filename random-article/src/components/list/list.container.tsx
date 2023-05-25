import ListUI from './list.presenter';
import {
  collection,
  addDoc,
  onSnapshot,
  deleteDoc,
  updateDoc,
  doc,
} from 'firebase/firestore';
import { db } from '../../commons/libraries/firebase';
import { ChangeEvent, MouseEvent, useEffect, useState } from 'react';

export default function List() {
  const [listsData, setListsData] = useState<any[]>([]);
  const [inputs, setInputs] = useState({
    id: '',
    title: '',
    link: '',
  });

  useEffect(() => {
    const list = collection(db, 'list');
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
  // TODO - 링크 등록 후 최신순 조회

  const onClickAddArticle = async () => {
    const list = collection(db, 'list');
    const listRef = await addDoc(list, {
      id: '',
      title: inputs.title,
      link: inputs.link,
    });
    console.log(listRef.id);
    await updateDoc(doc(db, 'list', listRef.id), { id: listRef.id });
    // TODO - 이렇게 업데이트를 하는게 맞는 방법일까? id를 바로 쓸 수는 없나?
    setInputs({ id: '', title: '', link: '' });
  };

  const onChangeInputs = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const onClickDeleteArticle = async (e: MouseEvent<HTMLSpanElement>) => {
    await deleteDoc(doc(db, 'list', e.currentTarget.id));
  };

  return (
    <ListUI
      onClickAddArticle={onClickAddArticle}
      onChangeInputs={onChangeInputs}
      onClickDeleteArticle={onClickDeleteArticle}
      listsData={listsData}
      inputs={inputs}
    />
  );
}
