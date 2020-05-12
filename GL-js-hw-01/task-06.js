let input;
let total = 0;
input = prompt('Введите число: ');
while (input != null) {
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(Number(input))) {
    alert('Введено не число!');
  } else {
    total += Number(input);
  }
  input = prompt('Введите число: ');
}
alert(`Общая сумма чисел равна ${total}`);
