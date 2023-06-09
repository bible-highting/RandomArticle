import styled from '@emotion/styled';
import { Button, Checkbox, Input } from 'antd';

export const BoxWrapper = styled.div`
  max-width: 672px;
  margin: 150px auto;
  padding: 40px 82px;
  text-align: center;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`;

export const Menu = styled.div`
  margin-bottom: 30px;
  text-align: right;
  font-size: 24px;
  & > span:hover,
  & > span:focus {
    color: #1890ff;
    cursor: pointer;
  }
`;

export const AddWrapper = styled.div`
  display: flex;
  align-items: start;
  gap: 20px;
`;

export const LinkInput = styled(Input)`
  flex: 1;
`;

export const RandomBtn = styled(Button)`
  padding: 0 20px;
  margin-bottom: 30px;
`;

export const ListWrapper = styled.div`
  max-height: 220px;
  overflow: scroll;
`;

export const List = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3px 0;
  padding-right: 10px;
  text-align: left;
`;

export const Info = styled.p`
  color: #aaa;
  background: #eee;
  padding: 10px 20px;
  border-radius: 20px;
`;

export const Title = styled.a`
  &:hover,
  &:focus {
    color: #1890ff;
    cursor: pointer;
  }
`;

export const ListMenu = styled.div`
  display: flex;
  align-items: center;
  & > span:hover,
  & > span:focus {
    color: #1890ff;
    cursor: pointer;
  }
`;

export const IsRead = styled(Checkbox)``;
