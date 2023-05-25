import { Input } from 'antd';
import * as s from './list.style';
import { HomeOutlined, DeleteOutlined } from '@ant-design/icons';
import { IListUIProps } from './list.types';

export default function ListUI(props: IListUIProps) {
  return (
    <>
      <s.BoxWrapper>
        <s.Menu>
          <HomeOutlined />
        </s.Menu>
        <s.AddWrapper>
          <s.LinkInput placeholder='제목' />
          <s.LinkInput placeholder='링크' />
          <s.RandomBtn type='primary' onClick={props.onClickAddArticle}>
            링크 추가
          </s.RandomBtn>
        </s.AddWrapper>
        <s.ListWrapper>
          {props.listsData.map((el) => (
            <>
              <s.List>
                <s.Title>Article Title</s.Title>
                <s.ListMenu>
                  <s.IsRead>Done</s.IsRead>
                  <DeleteOutlined />
                </s.ListMenu>
              </s.List>
            </>
          ))}
        </s.ListWrapper>
      </s.BoxWrapper>
    </>
  );
}
