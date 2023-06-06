export const getRandomImage = () => {
  const seed = Math.floor(Math.random() * 1000);
  const image = `https://picsum.photos/200/300?seed=${seed}`;
  return image;
};

export const getRandomNumber = (max: number, min: number) => {
  const num = Math.floor(Math.random() * (max - min)) + min;
  return num;
};
//min <= number < max (max값 미포함)
