const groupArray = require('arraychuckjs');
const strings = 'abcdefghijklmopqrtuvwxyz123456789';
const maxRandom = strings.length - 1;
const minRandom = 0;

const finalLenght = 1;
const quantity = 10;

let arr = [];

for (let j = 0; j < quantity; j++) {
  let codigo = [];
  for (let i = 0; i < finalLenght; i++) {
    let random = Math.floor(Math.random() * (maxRandom - minRandom + 1)) + minRandom;
    codigo.push(strings[random])
  }
  if (arr.includes(codigo.join(''))) {
    console.log('ja tem')
  }
  arr.push(codigo.join(''))
}
console.log(arr)
console.log(arr.length)