// Start testing
const angka = require('../dist/index.js')

console.log(angka.toTerbilang(1123))
console.log(angka.toTerbilang(1123.230))
console.log(angka.toTerbilang(1123.57, {dec: '.', lang: 'en'}))
console.log(angka.toTerbilang(1123.5790, {dec: '.', lang: 'en'}))

