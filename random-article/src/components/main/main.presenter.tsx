import * as s from './main.style';
import { Card } from 'antd';

const { Meta } = Card;

export default function MainPageUI() {
  return (
    <>
      <s.Wrapper>
        <s.Title>Random Article</s.Title>
        <s.RandomBtn>기사 생성</s.RandomBtn>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt='example'
              src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
            />
          }
        >
          <Meta title='Europe Street beat' description='www.instagram.com' />
        </Card>
        <s.IsRead>읽음</s.IsRead>
      </s.Wrapper>
    </>
  );
}
