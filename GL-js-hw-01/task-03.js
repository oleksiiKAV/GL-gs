const ADMIN_PASSWORD = 'qwerty';
let message;
// eslint-disable-next-line prefer-const
message = prompt('Enter you password: ');
if (message === null) {
  console.log('Отменено пользователем!');
} else if (message === ADMIN_PASSWORD) {
  console.log('Добро пожаловать!');
  console.log('sadf');
} else {
  console.log('Доступ запрещен, неверный пароль!');
}
alert(message);
