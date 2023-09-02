export function getRandomWidth(minWidth = 10, maxWidth = 70) {
  const randomWidth =
    Math.floor(Math.random() * (maxWidth - minWidth + 1)) + minWidth;
  return randomWidth + "%";
}
