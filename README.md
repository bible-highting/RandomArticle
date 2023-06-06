# RandomArticle

> 모아놓기만 하고 읽지 않았던 수많은 글들
> 하루에 딱 하나만 읽어보자👀

나중에 읽어야지 하고 스크랩해놓은 글들이 어느새 잔뜩 쌓였습니다.<br/>
부담없이 매일 하나씩 읽고 싶은 마음에 직접 도구를 만들어보았습니다. 

- 상세한 개발 기록은 이곳에서 볼 수 있어요. 👉 [velog](https://velog.io/@bearsk711/%ED%86%A0%EC%9D%B4%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EB%9E%9C%EB%8D%A4-%EC%95%84%ED%8B%B0%ED%81%B4-%EC%B6%94%EC%B2%9C-%EC%9C%84%EC%A0%AF-%EB%A7%8C%EB%93%A4%EA%B8%B0-01-%EA%B8%B0%ED%9A%8D%EC%84%9C)


<br/>

## 활용 가이드
### Main page
![main 시연](https://github.com/bible-highting/RandomArticle/assets/114966150/963fcc22-17c9-4026-bef2-19dc7ac274a6)
- `기사 생성` 버튼을 누르면 데이터베이스의 링크중 딱 하나의 글을 임의로 추천해줍니다.
- `Done`에 체크하면 해당 링크는 더이상 추천하지 않습니다.

### List page
![list 시연](https://github.com/bible-highting/RandomArticle/assets/114966150/f05b3cc1-1d38-4e2e-b3d5-319bf8c18228)
- `링크`에 원하는 글의 url을 입력하고 `링크 추가` 버튼을 누르면 데이터베이스에 해당 링크가 추가됩니다.
- `Done`에 체크하면 해당 링크는 더이상 추천하지 않습니다.
- `휴지통` 버튼을 누르면 해당 링크를 삭제할 수 있습니다.

<br/>

## 사용 라이브러리 및 프레임워크
- [Next.js](https://nextjs.org/) : 웹페이지 제작
- [Ant Design](https://ant.design/), [Emotion - Styled Components](https://emotion.sh/docs/styled) : UI 및 스타일링
- [firebase](https://firebase.google.com/?hl=ko) : 데이터베이스 관리 및 배포
- [openGraphScraper](https://www.npmjs.com/package/open-graph-scraper) : 링크에서 OpenGraph 메타데이터 추출




