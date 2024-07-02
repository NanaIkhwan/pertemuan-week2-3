
function sapa (nama:string){
    console.log(" Halo, Aku " + nama);
}
sapa("Nana!")

// Function Expression
function calculate (a:number, b:number, c:number):number{
    return a + b + c
}
let hasil : number = calculate(3, 5, 1)
console.log("Hasil Penjumlahan:" + hasil);

// Arrow Function
let multiplication = (x:number, y:number) => {
    return x * y
}
let result = multiplication(5,8)
console.log("Hasil Perkalian:"+ result);

// Chalange funct expression
const cube = function(num:number){
    return num ** 3
}
console.log(cube(3));

// object
let person2: {
    name: string,
    age: number,
    address: string
}
person2 = {
    name: "Nana",
    age: 20,
    address: "Tegal"
}
console.log(person2);