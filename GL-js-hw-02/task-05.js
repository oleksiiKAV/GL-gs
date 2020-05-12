// eslint-disable-next-line consistent-return
const checkForSpam = function(message) {
  if (
    message.includes('sale') ||
    message.includes('SALE') ||
    message.includes('spam') ||
    message.includes('SPAM')
  ) {
    return true;
    // eslint-disable-next-line no-else-return
  } else {
    return false;
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
