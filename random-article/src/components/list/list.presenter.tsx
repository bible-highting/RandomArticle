import { Input } from 'antd';
import * as s from './list.style';
import { HomeOutlined, DeleteOutlined } from '@ant-design/icons';
import { IListUIProps } from './list.types';

export default function ListUI(props: IListUIProps) {
  return (
    <>
      <s.BoxWrapper>
        <s.Menu>
          <HomeOutlined onClick={props.onClickMoveToHome} />
        </s.Menu>
        <s.AddWrapper>
          <s.LinkInput
            id='link'
            onChange={props.onChangeInputs}
            placeholder='링크'
            value={props.input}
          />
          <s.RandomBtn type='primary' onClick={props.onClickAddArticle}>
            링크 추가
          </s.RandomBtn>
        </s.AddWrapper>
        <s.ListWrapper>
          {props.listsData.map((el) => (
            <s.List key={el.id}>
              <s.Title href={el.link} target='_blank'>
                {el.title}
              </s.Title>
              <s.ListMenu>
                <s.IsRead
                  checked={el.isRead}
                  onChange={props.onChangeRead}
                  id={el.id}
                >
                  Done
                </s.IsRead>
                <DeleteOutlined
                  onClick={props.onClickDeleteArticle}
                  id={el.id}
                />
              </s.ListMenu>
            </s.List>
          ))}
        </s.ListWrapper>
      </s.BoxWrapper>
    </>
  );
}
