'use strict';

// Задание 1

// const ulCount = document
//   .getElementById('categories')
//   .getElementsByClassName('item');
// console.log(`В списке ${ulCount.length} категории.`);
const categories = document.querySelector('#categories');
console.log(`В списке ${categories.children.length} категории.`);
const itemsOfCategories = document.querySelectorAll('.item');
itemsOfCategories.forEach(el => {
  console.group(`Категория: ${el.querySelector('h2').textContent} `);
  console.log(
    `Количество элементов: ${el.querySelector('ul').children.length}`,
  );
  console.groupEnd();
});
// Задание 2
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const list = document.querySelector('#ingredients');
// const arr = [];

// eslint-disable-next-line no-unused-vars
const pushItemToList = ingredients.forEach(el => {
  const item = document.createElement('li');
  // arr.push(item);
  list.append(item);
  item.textContent = el;
});
// list.append(...arr);
