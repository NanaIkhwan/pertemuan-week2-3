"use strict";
function sapa(nama) {
    console.log(" Halo, Aku " + nama);
}
sapa("Nana!");
// Function Expression
function calculate(a, b, c) {
    return a + b + c;
}
let hasil = calculate(3, 5, 1);
console.log("Hasil Penjumlahan:" + hasil);
// Arrow Function
let multiplication = (x, y) => {
    return x * y;
};
let result = multiplication(5, 8);
console.log("Hasil Perkalian:" + result);
// Chalange funct expression
const cube = function (num) {
    return num ** 3;
};
console.log(cube(3));
// object
let person2;
person2 = {
    name: "Nana",
    age: 20,
    address: "Tegal"
};
console.log(person2);
