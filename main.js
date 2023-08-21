console.log('hello world');

// ... (остальной код)

// Правильные названия переменных
let test = 'test';
let $test = 'test';
let test$ = 'test';
let num23 = 32;
let _ = 32;
let _test = 32;
let test_ = 32;
let testFirst = 32;
let test_First = 32; // Так можно делать, но не рекомендуется

// Неправильные названия переменных
// let 23num = 32;      // Цифры в начале недопустимы
// let let/const = 32;  // Название содеражит недопустимые символы
// let my name = 32;    // Пробел в названии недопустим

// ... (остальной код)

// Операции с числами
let a = 2;
let v = 5;
let p = 30;

p = p + a; 

p = p + a;
// p += a

// let k = a + v;
// let k = a - v;
// let k = a * v;
// let k = a / v;
// let k = a % v;
let k = a ** v; // Возведение в степень

console.log(k);

// let nan = FirstName / a; // Вызовет ошибку, так как FirstName не определено
// console.log(nan);

// ... (остальной код)

// Условные операторы/ветвления ? :

const time = prompt('Введите число');

if (time < 18) {
    
   
alert('Добрый день!');
} else {
    alert('Добрый вечер!');
}

// ... (остальной код)

// Исправление ошибок в использовании prompt и строковых операций

const fName = prompt('Введите ваше имя');
const age = prompt('Введите ваш возраст');
const answer = `Имя: ${fName}\nВозраст: ${age}`;
alert(answer);