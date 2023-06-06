import styled from '@emotion/styled';
import { Button, Card, Checkbox } from 'antd';

export const Wrapper = styled.div`
  /* TODO - Background Img 컴포넌트로 새로 만들어서 페이지 전체 레이아웃으로 따로빼기 */
`;

export const BoxWrapper = styled.div`
  position: relative;
  max-width: 672px;
  margin: 150px auto;
  padding: 40px;
  text-align: center;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`;

export const Menu = styled.div`
  position: absolute;
  top: 40px;
  right: 40px;
  font-size: 24px;
  & > span:hover,
  & > span:focus {
    color: #1890ff;
    cursor: pointer;
  }
`;

export const Title = styled.h1``;

export const RandomBtn = styled(Button)`
  padding: 0 20px;
  margin-bottom: 30px;
`;

export const Article = styled(Card)`
  margin: 0 auto;
`;

export const ArticleTitle = styled.div`
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const ArticleDesc = styled.div`
  min-height: 66px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
export const IsRead = styled(Checkbox)`
  margin: 20px 0;
`;
