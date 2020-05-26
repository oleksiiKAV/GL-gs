'use strict';

// task 04
const counterValue = document.querySelector('#value');
const btnInc = document.querySelector('button[data-action="increment"]');
const btnDec = document.querySelector('button[data-action="decrement"]');

const increment = () => {
  counterValue.textContent = Number(counterValue.textContent) + 1;
};
const decrement = () => {
  counterValue.textContent = Number(counterValue.textContent) - 1;
};
btnInc.addEventListener('click', increment);
btnDec.addEventListener('click', decrement);
// task 05
const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

const handleInputChange = event => {
  output.textContent =
    event.currentTarget.value === '' ? 'незнакомец' : event.currentTarget.value;
};
input.addEventListener('input', handleInputChange);
// task 06
const input1 = document.querySelector('#validation-input');
const handleInputValidation = event => {
  const dataLength = Number(input1.getAttribute('data-length'));
  const inputLength = event.currentTarget.value.length;
  if (dataLength === inputLength) {
    input1.classList.remove('invalid');
    input1.classList.add('valid');
    return;
  }
  input1.classList.remove('valid');
  input1.classList.add('invalid');
};
input1.addEventListener('blur', handleInputValidation);

// task 07
const control = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

const handleTextChange = event => {
  text.style.fontSize = `${event.currentTarget.value}px`;
};

control.addEventListener('input', handleTextChange);
