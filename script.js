// console.log('text') // text

// console.warn('text') //text желтый для ошибок

// alert('hello world') // модал окно 

// prompt('How is your name') // для инпут

// confirm('are yoy adult?') // для проверки

// let lastName = 'Alem'; // переменный меняемый 

// let firstName= 'Mar';  

// const yearOfBirth = 1985; //  неменяемый 

// let age 
// console.log(age) // undefined 

// console.log(firstName, lastName)

// typeof firstName
// typeof yearOfBirth


// document.write("<h1>Hello from JS</h1>");
// const age = prompt("Сколько вам лет?");

// let access = "";

// if (age > 18){
//     access = "Доступ разрешен";
// }else if (age < 18 && age > 16) {
//     access = "Доступ запрещеню Приходи через пару лет"
// }else {
//     access = "Доступ запрещен"
// }

// c

// let num = 0; 
// let age = prompt("Сколько вам лет ?")

// while (true) {
//     if (age > 0 && age < 100) {
//         break;
//     }
//     age = prompt("Некоррекный ввод.")
// }

// for (let i = 0; i<=10; i++) {
//     document.write(`<h1>${i}</h1>`);
// }

 
// const person = {
//     firstName: "Alem",
//     lastName: "Bay", 
//     age: 35, 
//     city: "Shymkent",
//     married: false, 
//     languages: {
//         eng: "B2",
//         spn: "B2"
//     }
// }

// person.age=36;
// person.year=1985;

// console.log(person.firstName,person["lastName"], person.languages.eng, person.age)

// for (let key in person) {
//     console.log(key, person[key]);
// } 

// const nums = [1, 2, 3, 4];


// // for (let num of nums) {
// //     console.log(num);
// // }

// nums.push(5, 6, 7, 5) // в конце 
// nums.unshift(5, 6, 7) // в перед
// nums.shift() //удаление перед
// nums.pop() // удаление в 
// nums.length() //длина
// console.log(nums); 


// function sum(a, b) {
//     console.log(a + b);
// }

// sum(8, 6);

// const sum1 = (a, b) => { 
//     console.log(a + b);
// }

// sum1(7, 8);

// const sum1 = (a, b) => { 
//     const c = a +b;  
//     return c;
// }

// sum1(7, 8);

// const age = prompt("Сколько вам лет:");

// function isOldEnough(age) {
//   if (age >= 18) {
//     return true;
//   }
//   return false;
// }

// const message = isOldEnough(age) ? "Welcome" : "Bye";
// alert(message);

