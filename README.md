# Homework_09.04
### Задание 1
1. Создать новый файл lesson2.html
2. Создать переменную и спросить у пользователя “Ваш
возраст”
3. Вывести на экран текст. Вам “возраст пользователя” лет
4. Спросить у пользователя его имя
5. Вывести на экран, Добро пожаловать на сайт “Имя
пользователя”
####  Результат вывода программы в папке picture --> задание1
### Коментарии к заданию 2
1. программа выведет в консоль число 3
```
let a=13;
b=5;
console.log(a%b);
```
2. в переменную не было вложено значение, поэтому программа выведет null
![///](picture/ex2.png)
3. будет выведено NaN(Not a Number), так как строку нельзя умножить на число
![///](picture/ex3.png)
4. вызов ```alert(1/0)``` выведет Infinity(бесконечность), а ```alert(-1/0)``` выведет -Infinity, так как отрицательное число, деленное на ноль, дает отрицательную бесконечность.<br>
![...](picture/ex4.1.png)<br>
![...](picture/ex4.2.png)
5. вызов ```alert('2' * '3')``` выведет значение 6, так как строки будут приведены к числам перед выполнением операции умножения
### Задание 3
1. после совершения ошибки в коде консоль вывела ошибку и указала в какой строке она находится и какая команда не правильно написана
![/](picture/error.png)
2. из-за того, что переменные a и b являются строками JavaScript выполняет конкатенацию (слияние) строк вместо арифметического сложения.
![/](picture/sum.png)
3. результат вывода консоли. Файл с кодом index.html и index.js
![/](picture/расчеты.png)
### Задание 4
1. Выведется: atrue
2. Выведется: 1
3. Выведется: 2
4. Выведется: 2
5. Выведется: 0
6. Выведется: true1
### Задание 5
1. файл с кодом index2.html и index2.js
2. код
```
   if (test1 === test2) {
    console.log("Значения равны");
} else {
    console.log("Значения не равны");
}
```
3. код
```
let num1 = parseFloat(prompt("Введите первое число: "));
let num2 = parseFloat(prompt("Введите второе число: "));
let minimum = Math.min(num1, num2);
alert(`Минимальное число: ${minimum}`);
```
4. код
```
let number = parseFloat(prompt("Введите число: "));
if (number > 0 && number < 15) {
    alert("Число больше нуля и меньше 15.");
} else {
    alert("Число не удовлетворяет условиям.");
}
```
