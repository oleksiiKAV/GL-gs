/* eslint-disable no-shadow */
// eslint-disable-next-line import/extensions
import users from './users.js';

console.log(users);
// task 01
console.log(` -------------- TASK 01 -------------`);
function getUserNames() {
  return users.map(names => names.name);
}
console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony']

// task 02
console.log(` -------------- TASK 02 -------------`);
const getUsersWithEyeColor = (users, color) => {
  // return users.filter(user => user.color);
  return users.filter(item => item.eyeColor === color);
};
console.log(getUsersWithEyeColor(users, 'blue'));
// [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// task 03
console.log(` -------------- TASK 03 -------------`);
const getUsersWithGender = (users, gender) => {
  return users.filter(item => item.gender === gender).map(names => names.name);
};
console.log(getUsersWithGender(users, 'male'));
// [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// task 04
console.log(` -------------- TASK 04 -------------`);
const getInactiveUsers = users => {
  return users.filter(item => item.isActive === false);
};
console.log(getInactiveUsers(users));
// [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// task 05
console.log(` -------------- TASK 05 -------------`);
const getUserWithEmail = (users, email) => {
  return users.filter(item => item.email === email);
};
console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

// task 06
console.log(` -------------- TASK 06 -------------`);
const getUsersWithAge = (users, min, max) => {
  return users.filter(item => item.age >= min && item.age <= max);
};
console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// task 07
console.log(` -------------- TASK 07 -------------`);
const calculateTotalBalance = users => {
  return users.reduce((acc, item) => acc + item.balance, 0);
};
console.log(calculateTotalBalance(users)); // 20916

// task 08
console.log(` -------------- TASK 08 -------------`);
const getUsersWithFriend = (users, friendName) => {
  return users
    .filter(user => user.friends.indexOf(friendName) !== -1)
    .map(user => user.name);
};
console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

// task 09
// Массив имен (поле name) людей, отсортированных в зависимости от количества
// их друзей (поле friends)
console.log(` -------------- TASK 09 -------------`);
const getNamesSortedByFriendsCount = users => {
  return users.sort(users.friends).map(user => user.name);
};
console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// task 10

console.log(` -------------- TASK 10 -------------`);
