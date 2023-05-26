import { useEffect, useState } from 'react';
import { db } from '../../commons/libraries/firebase';
import MainPageUI from './main.presenter';
import { collection, getDocs } from 'firebase/firestore';

export default function MainPage() {
  const [listsData, setListsData] = useState<any[]>([]);
  const [selectedArticle, setSelectedArticle] = useState({});

  useEffect(() => {
    const fetchLists = async () => {
      const result = await getDocs(collection(db, 'list'));
      const datas = result.docs.map((el) => el.data());
      setListsData(datas);
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
    console.log(selectedArticle);
  }, [selectedArticle]);
  // Blog - 랜더링 후 버튼을 처음 클릭할 때는 selectedArticle값이 빈값으로 나옴 두번째부터 제대로 실행.
  // 이유 : setListsData가 비동기로 작동해서 (setListData값 수정후 getDocs가 실행 -> 불러온 새 값은 들어가지 않은 상태)
  // 따라서 selctedArticle이 변경되었을때 useEffect를 통해 리렌더링하면 처음부터 결과가 나온다.
  return <MainPageUI clickCreateRandomArticle={clickCreateRandomArticle} />;
}
