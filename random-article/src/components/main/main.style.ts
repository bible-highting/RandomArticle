import styled from '@emotion/styled';
import { Button, Card, Checkbox } from 'antd';

export const Wrapper = styled.div`
  /* Background Img 컴포넌트로 새로 만들어서 페이지 전체 레이아웃으로 따로빼기 */
`;

export const BoxWrapper = styled.div`
  max-width: 672px;
  margin: 150px auto;
  padding: 40px 200px;
  text-align: center;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`;

export const Title = styled.h1``;

export const RandomBtn = styled(Button)`
  padding: 0 20px;
  margin-bottom: 30px;
`;

export const Article = styled(Card)`
  margin: 0 auto;
`;

export const IsRead = styled(Checkbox)`
  margin: 20px 0;
`;
