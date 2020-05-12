let price = 0;
const inputCountry = prompt('Введите страну доставки: ');
const country = inputCountry.toLocaleUpperCase();

switch (country) {
  case 'КИТАЙ':
    price = 100;
    alert(`Доставка в ${country} будет стоить ${price} кредитов`);
    break;
  case 'ЧИЛИ':
    price = 250;
    alert(`Доставка в ${country} будет стоить ${price} кредитов`);
    break;
  case 'АВСТРАЛИЯ':
    price = 170;
    alert(`Доставка в ${country} будет стоить ${price} кредитов`);
    break;
  case 'ИНДИЯ':
    price = 80;
    alert(`Доставка в ${country} будет стоить ${price} кредитов`);
    break;
  case 'ЯМАЙКА':
    price = 120;
    alert(`Доставка в ${country} будет стоить ${price} кредитов`);
    break;
  default:
    alert('В вашей стране доставка не доступна');
}
