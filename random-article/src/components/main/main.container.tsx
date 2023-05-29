import { useEffect, useState } from 'react';
import { db } from '../../commons/libraries/firebase';
import MainPageUI from './main.presenter';
import { collection, getDocs } from 'firebase/firestore';

export default function MainPage() {
  const [listsData, setListsData] = useState<any[]>([]);
  const [selectedArticle, setSelectedArticle] = useState({
    id: '',
    isRead: false,
    title: '',
    link: '',
  });

  useEffect(() => {
    const fetchLists = async () => {
      const result = await getDocs(collection(db, 'list'));
      const datas = result.docs.map((el) => el.data());
      setListsData(datas);
      console.log('listData:');
      console.log(listsData);
    };
    fetchLists();
  }, []);

  const clickCreateRandomArticle = () => {
    const dataNum = listsData.length;
    const randomNum = Math.floor(Math.random() * dataNum);
    // TODO - 이전과 같은 숫자가 나오면 랜덤숫자 다시 뽑기
    setSelectedArticle(listsData[randomNum]);
  };

  useEffect(() => {
    console.log('selectedAriticle:');
    console.log(selectedArticle);
  }, [selectedArticle]);
  // Blog - 랜더링 후 버튼을 처음 클릭할 때는 selectedArticle값이 빈값으로 나옴 두번째부터 제대로 실행.
  // 이유 : setListsData가 비동기로 작동해서 바로 listsData에 반영안됨. 렌더링이 다시 되어야 그때부터 반영
  // 따라서 selctedArticle이 변경되었을때 useEffect를 통해 리렌더링하면 처음부터 결과가 나온다.
  // 아여기 이해가 잘 안된다.. 일단 다른 부분 해결하고 다시 돌아오자
  return (
    <MainPageUI
      clickCreateRandomArticle={clickCreateRandomArticle}
      selectedArticle={selectedArticle}
    />
  );
}
