import * as s from './main.style';

export default function MainPageUI() {
  return (
    <>
      <s.Wrapper>
        <s.Title>Random Article</s.Title>
        <s.RandomBtn>기사 생성</s.RandomBtn>
        <s.Article>제목</s.Article>
        <s.IsRead>읽음</s.IsRead>
      </s.Wrapper>
    </>
  );
}
