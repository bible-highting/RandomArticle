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
import { getRandomImage, getRandomNumber } from '../../commons/libraries/utils';
import { Modal } from 'antd';
import { Content } from 'antd/es/layout/layout';

export default function MainPage() {
  const router = useRouter();
  const [articleNum, setArticleNum] = useState(Number);
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
      warningEmptyData(datas);
    });

    const warningEmptyData = (data: any[]) => {
      if (data.length < 1) {
        Modal.warning({
          content: (
            <p>
              더이상 추천할 수 있는 링크가 없습니다. <br />
              리스트 페이지에서 새로운 아티클을 등록해주세요.
            </p>
          ),
          onOk(...args) {
            router.push('/list');
          },
        });
      }
    };
    return () => {
      fetchLists();
      warningEmptyData(listsData);
      //Blog - 여기 놓으면 두번 실행되는 것 리액트 라이프사이클 이해하고 블로그에 정리하기
    };
  }, []);

  const clickCreateRandomArticle = () => {
    const dataNum = listsData.length;
    setArticleNum((prev) => {
      let randomNum;
      if (dataNum > 1) {
        do {
          randomNum = getRandomNumber(0, dataNum);
        } while (prev === randomNum);
      } else {
        randomNum = 0;
      }
      return randomNum;
    });
    console.log(articleNum);
    setSelectedArticle(listsData[articleNum]);

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
