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
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { useRouter } from 'next/router';

export default function List() {
  const router = useRouter();
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
    return () => {
      newListsData();
    };
  }, []);
  // Blog - Todo Tree 사용법 정리
  // TODO - 링크 등록 후 최신순 조회

  const onClickAddArticle = async () => {
    const list = collection(db, 'list');
    const listRef = await addDoc(list, {
      id: '',
      title: inputs.title,
      link: inputs.link,
      isRead: false,
    });
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

  const onChangeRead = async (e: CheckboxChangeEvent) => {
    const data = listsData.find((el) => el.id === e.target.id);
    if (data) {
      const updatedIsRead = !data.isRead;
      await updateDoc(doc(db, 'list', data.id), { isRead: updatedIsRead });
    }
  };

  const onClickMoveToHome = () => {
    router.push('/');
  };

  return (
    <ListUI
      onClickAddArticle={onClickAddArticle}
      onChangeInputs={onChangeInputs}
      onClickDeleteArticle={onClickDeleteArticle}
      onChangeRead={onChangeRead}
      onClickMoveToHome={onClickMoveToHome}
      listsData={listsData}
      inputs={inputs}
    />
  );
}
