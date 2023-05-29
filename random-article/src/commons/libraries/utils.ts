export const getRandomImage = () => {
  const seed = Math.floor(Math.random() * 1000);
  const image = `https://picsum.photos/200/300?seed=${seed}`;
  return image;
};
