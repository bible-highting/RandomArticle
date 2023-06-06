import ListUI from './list.presenter';
import {
  collection,
  addDoc,
  onSnapshot,
  deleteDoc,
  updateDoc,
  doc,
  query,
  orderBy,
} from 'firebase/firestore';
import { db } from '../../commons/libraries/firebase';
import { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { useRouter } from 'next/router';
import { Modal } from 'antd';

export default function List() {
  const router = useRouter();
  const [ogResult, setOgResult] = useState({
    id: '',
    title: '',
    link: '',
    isRead: false,
    description: '',
    image: '',
  });
  const [listsData, setListsData] = useState<any[]>([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const queryLists = query(
      collection(db, 'list'),
      orderBy('timestamp', 'desc')
    );
    const newListsData = onSnapshot(queryLists, (snapshot) => {
      const datas = snapshot.docs.map((doc) => doc.data());
      setListsData(datas);
    });
    return () => {
      newListsData();
    };
  }, []);
  // Blog - Todo Tree 사용법 정리

  const onClickAddArticle = async () => {
    const result = await getMetaData();
    setOgResult(result);

    await setMetaData(result);

    setInput('');
  };

  const getMetaData = async () => {
    try {
      const response = await fetch(`/api/metadata?url=${input}`);
      const data = await response.json();
      const { result } = data;
      // console.log(input);
      console.log(result);
      return result;
    } catch (error) {
      console.error('getMetaDataError : ', error);
      setOgResult({
        id: '',
        title: '',
        link: '',
        isRead: false,
        description: '',
        image: '',
      });
    }
  };
  // Blog - 지난한 과정 정리하기 : Og, CORS, getServerSideProps, Next.js API build ... 웹사이트 임베드 카드, 만들기 참고

  const setMetaData = async (result: any) => {
    try {
      const list = collection(db, 'list');
      const listRef = await addDoc(list, {
        id: '',
        title: result.ogTitle || null,
        link: input,
        isRead: false,
        description: result.ogDescription || null,
        image: result.url || null,
        timestamp: new Date(),
      });
      await updateDoc(doc(db, 'list', listRef.id), { id: listRef.id });
      // TODO - 이렇게 업데이트를 하는게 맞는 방법일까? id를 바로 쓸 수는 없나?
    } catch (error) {
      console.error('setMetaDataError : ', error);
      Modal.warn({ content: '오류가 있습니다.다른 링크를 입력해주세요.' });
      //TODO - 일단 어떤 링크는 되고 어떤건 안됨. 그걸 파악하기 전에 이정도로 조치를 취해놓기
    }
  };

  const onChangeInputs = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
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
      input={input}
    />
  );
}
