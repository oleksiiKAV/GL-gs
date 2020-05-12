const formatString = function(string) {
  // eslint-disable-next-line no-unused-vars
  let str = '';
  console.log(string.length);
  if (string.length <= 40) {
    str = string;
  } else {
    // eslint-disable-next-line prefer-template
    str = string.slice(0, 40) + '...';
  }
  return str;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(formatString('12345678901234567890123456789012345678901'));

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
// вернется форматированная строка
