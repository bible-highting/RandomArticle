const btn = document.querySelector('.randomBtn');
const articleTitle = document.querySelector('.articleTitle');
const readFlag = document.querySelector('.readFlag');
let randomIndex;

const onClickMovetoRandomPage = () => {
  randomIndex = Math.floor(Math.random() * articles.length);
  const randomArticle = articles[randomIndex];

  readFlag.innerHTML = '🔲';
  if (randomArticle.isRead) readFlag.innerHTML = '✅';

  articleTitle.href = randomArticle.url;
  articleTitle.innerHTML = randomArticle.title;
  readFlag.style.opacity = 1;
};

const onClickChangeReadFlag = () => {
  articles[randomIndex].isRead = true;
  readFlag.innerHTML = '✅';
  console.log(articles);
};

btn.addEventListener('click', onClickMovetoRandomPage);
readFlag.addEventListener('click', onClickChangeReadFlag);
