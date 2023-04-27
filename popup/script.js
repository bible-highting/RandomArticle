const btn = document.querySelector('.randomBtn');
const articleTitle = document.querySelector('.articleTitle');

const onClickMovetoRandomPage = () => {
  const randomIndex = Math.floor(Math.random() * articles.length);
  const randomArticle = articles[randomIndex];
  articleTitle.href = randomArticle.url;
  articleTitle.innerHTML = randomArticle.title;
};
btn.addEventListener('click', onClickMovetoRandomPage);
