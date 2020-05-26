/* eslint-disable no-param-reassign */
/* eslint-disable lines-around-directive */
/* eslint-disable no-return-assign */
'use strict';

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const list = document.querySelector('#gallery');
const patternStr = ({ url, alt }) => {
  return `<li class="gallery-item"><img class="gallery-img" src=${url} alt=${alt}></li>`;
};
const createGallery = images.reduce((acc, el) => (acc += patternStr(el)), '');

list.insertAdjacentHTML('beforeend', createGallery);
