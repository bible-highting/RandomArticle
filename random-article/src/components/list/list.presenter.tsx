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
          <s.LinkInput
            id='title'
            onChange={props.onChangeInputs}
            placeholder='제목'
            value={props.inputs.title}
          />
          <s.LinkInput
            id='link'
            onChange={props.onChangeInputs}
            placeholder='링크'
            value={props.inputs.link}
          />
          <s.RandomBtn type='primary' onClick={props.onClickAddArticle}>
            링크 추가
          </s.RandomBtn>
        </s.AddWrapper>
        <s.ListWrapper>
          {props.listsData.map((el, index) => (
            <s.List key={index}>
              {/* TODO - uuid로 랜덤key 부여할 것 */}
              <s.Title href={el.link} target='_blank'>
                {el.title}
              </s.Title>
              <s.ListMenu>
                <s.IsRead>Done</s.IsRead>
                <DeleteOutlined />
              </s.ListMenu>
            </s.List>
          ))}
        </s.ListWrapper>
      </s.BoxWrapper>
    </>
  );
}
