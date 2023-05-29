import * as s from './main.style';
import { Card } from 'antd';
import { IPropsMainPageUI } from './main.types';
import { UnorderedListOutlined } from '@ant-design/icons';

const { Meta } = Card;

export default function MainPageUI(props: IPropsMainPageUI) {
  return (
    <>
      <s.Wrapper>
        <s.BoxWrapper>
          <s.Menu>
            <UnorderedListOutlined onClick={props.onClickMoveToData} />
          </s.Menu>
          <s.Title>오늘의 추천 글</s.Title>
          <s.RandomBtn type='primary' onClick={props.clickCreateRandomArticle}>
            기사 생성
          </s.RandomBtn>
          {props.selectedArticle.id && (
            <>
              <a href={props.selectedArticle.link} target='_blank'>
                {/* TODO - 추후 a없애고 onClickMotoToArticle로 구현? js로 페이지 이동하는 법 알기 router면 되려나*/}
                <s.Article
                  hoverable
                  style={{ width: 240 }}
                  cover={
                    <img
                      alt='example'
                      src={props.randomImage}
                      height={150}
                      style={{ objectFit: 'cover' }}
                    />
                  }
                >
                  <Meta
                    title={props.selectedArticle.title}
                    description={props.selectedArticle.link}
                    style={{ textAlign: 'left' }}
                  />
                </s.Article>
              </a>
              <s.IsRead
                checked={props.selectedArticle.isRead}
                onChange={props.onChangeIsRead}
              >
                Done
              </s.IsRead>
            </>
          )}
        </s.BoxWrapper>
      </s.Wrapper>
    </>
  );
}
