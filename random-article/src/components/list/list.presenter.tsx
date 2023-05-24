import { Input } from 'antd';
import * as s from './list.style';
import { HomeOutlined, DeleteOutlined } from '@ant-design/icons';

export default function ListUI() {
  return (
    <>
      <s.BoxWrapper>
        <s.Menu>
          <HomeOutlined />
        </s.Menu>
        <s.AddWrapper>
          <s.LinkInput placeholder='Basic usage' />
          <s.RandomBtn type='primary'>링크 추가</s.RandomBtn>
        </s.AddWrapper>
        <s.ListWrapper>
          <s.List>
            <s.Title>Article Title</s.Title>
            <s.ListMenu>
              <s.IsRead>Done</s.IsRead>
              <DeleteOutlined />
            </s.ListMenu>
          </s.List>
          <s.List>
            <s.Title>Article Title</s.Title>
            <s.ListMenu>
              <s.IsRead>Done</s.IsRead>
              <DeleteOutlined />
            </s.ListMenu>
          </s.List>
          <s.List>
            <s.Title>Article Title</s.Title>
            <s.ListMenu>
              <s.IsRead>Done</s.IsRead>
              <DeleteOutlined />
            </s.ListMenu>
          </s.List>
        </s.ListWrapper>
      </s.BoxWrapper>
    </>
  );
}
