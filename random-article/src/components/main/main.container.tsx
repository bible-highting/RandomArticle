import { useEffect, useState } from 'react';
import { db } from '../../commons/libraries/firebase';
import MainPageUI from './main.presenter';
import {
  collection,
  updateDoc,
  doc,
  query,
  where,
  onSnapshot,
} from 'firebase/firestore';
import { useRouter } from 'next/router';
import { getRandomImage } from '../../commons/libraries/utils';

export default function MainPage() {
  const router = useRouter();
  const [listsData, setListsData] = useState<any[]>([]);
  const [randomImage, setRandomImage] = useState('');
  const [selectedArticle, setSelectedArticle] = useState({
    id: '',
    isRead: false,
    title: '',
    link: '',
  });

  useEffect(() => {
    const queryLists = query(
      collection(db, 'list'),
      where('isRead', '==', false)
    );
    const fetchLists = onSnapshot(queryLists, (snapshot) => {
      const datas = snapshot.docs.map((doc) => doc.data());
      setListsData(datas);
    });
    return () => {
      fetchLists();
    };
  }, []);

  // TODO - 불러올 데이터가 없을 때 에러처리
  const clickCreateRandomArticle = () => {
    const dataNum = listsData.length;
    const randomNum = Math.floor(Math.random() * dataNum);
    // TODO - 이전과 같은 숫자가 나오면 랜덤숫자 다시 뽑기
    setSelectedArticle(listsData[randomNum]);

    const image = getRandomImage();
    setRandomImage(image);
  };

  const onChangeIsRead = async () => {
    const changedIsRead = !selectedArticle.isRead;
    setSelectedArticle({ ...selectedArticle, isRead: changedIsRead });
    await updateDoc(doc(db, 'list', selectedArticle.id), {
      isRead: changedIsRead,
    });
  };

  const onClickMoveToData = () => {
    router.push('/list');
  };
  return (
    <MainPageUI
      clickCreateRandomArticle={clickCreateRandomArticle}
      onChangeIsRead={onChangeIsRead}
      onClickMoveToData={onClickMoveToData}
      selectedArticle={selectedArticle}
      randomImage={randomImage}
    />
  );
}
