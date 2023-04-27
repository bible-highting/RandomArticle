const btn = document.querySelector('.randomBtn');

const onClickMovetoRandomPage = () => {
  const randomIndex = Math.floor(Math.random() * articles.length);
  btn.href = articles[randomIndex].url;
};
btn.addEventListener('click', onClickMovetoRandomPage);
