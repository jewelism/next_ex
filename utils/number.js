export const numberToKilo = number => {
  const num = Number(number);
  return num > 1000 ? num / 1000 + 'k' : num;
};