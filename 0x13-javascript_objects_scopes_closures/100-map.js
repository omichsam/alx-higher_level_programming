#!/usr/bin/node
const { list } = require('./100-data');

const newList = list.map((value, index) => value * index);

console.log('Original List:', list);
console.log('New List:', newList);
