const sumElements = function(arr) {
  let sum = 0;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

let input;
const inArr = [];
input = prompt('Введите число: ');
while (input != null) {
  const element = Number(input);
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(element)) {
    alert('Введено не число!');
  } else {
    inArr.push(element);
  }
  input = prompt('Введите число: ');
}
if (inArr.length > 0) {
  alert(`Общая сумма чисел равна ${sumElements(inArr)}`);
} else {
  alert(`Массив пуст`);
}
