import * as s from './main.style';
import { Card } from 'antd';
import { IPropsMainPageUI } from './main.types';

const { Meta } = Card;

export default function MainPageUI(props: IPropsMainPageUI) {
  return (
    <>
      <s.Wrapper>
        <s.BoxWrapper>
          <s.Title>오늘의 추천 글</s.Title>
          <s.RandomBtn type='primary' onClick={props.clickCreateRandomArticle}>
            기사 생성
          </s.RandomBtn>
          <s.Article
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt='example'
                src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
                height={150}
                style={{ objectFit: 'cover' }}
              />
            }
          >
            <Meta
              title='Europe Street beat'
              description='www.instagram.com'
              style={{ textAlign: 'left' }}
            />
          </s.Article>
          <s.IsRead>Done</s.IsRead>
        </s.BoxWrapper>
      </s.Wrapper>
    </>
  );
}
