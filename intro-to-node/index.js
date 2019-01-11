// const fs = require('fs');
//
// fs.copyFileSync("file1.txt", "file2.txt");

const superheroes = require('superheroes');
const supervillains = require('supervillains');
var mySuperheroName = superheroes.random();
var mySupervillainsName = supervillains.random();

console.log("Hero - " + mySuperheroName + " || Villain - " + mySupervillainsName);
