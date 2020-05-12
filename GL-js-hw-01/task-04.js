const credits = 23580;
const pricePerDroid = 3000;

const inputCount = prompt('Колличество дроидов для покупки: ');

if (inputCount === null) {
  console.log('Отменено пользователем!');
} else {
  const count = Number(inputCount);
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(Number(inputCount))) {
    console.log('Введено не число!');
  } else {
    const totalPrice = count * pricePerDroid;
    if (totalPrice >= credits) {
      console.log('Недостаточно средств на счету!');
    } else {
      console.log(
        `Вы купили ${count} дроидов, на счету осталось ${credits -
          totalPrice} кредитов.`,
      );
    }
  }
}
