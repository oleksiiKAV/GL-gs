const findLongestWord = function(string) {
  const longestWord = string.split(' ').sort(function(a, b) {
    // 1) из строки массив; 2) сортировка элементов - в начало самый длинный (b - a)
    return b.length - a.length;
  });
  return longestWord[0];
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
