// Ввод чисел с клавиатуры
let num1 = parseFloat(prompt("Введите первое число:"));
let num2 = parseFloat(prompt("Введите второе число:"));

// Вычисления
let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num2 !== 0 ? num1 / num2 : 'Деление на ноль';
let remainder = num2 !== 0 ? num1 % num2 : 'Деление на ноль';

// Вывод результатов в консоль
console.log(`Сумма чисел равна ${sum}`);
console.log(`Разность чисел равна ${difference}`);
console.log(`Произведение чисел равно ${product}`);
console.log(`Частное чисел равно ${quotient}`);
console.log(`Остаток от деления чисел равен ${remainder}`);
