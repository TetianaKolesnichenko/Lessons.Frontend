// Объявление переменных с разными типами данных
let numberVariable = 10;
let stringVariable = "Hello, world!";
let booleanVariable = true;

// Вывод значений переменных в консоль
console.log("Number variable:", numberVariable);
console.log("String variable:", stringVariable);
console.log("Boolean variable:", booleanVariable);

// Создание переменных с одинаковыми значениями (копирование)
let variable1 = "Value";
let variable2 = variable1;

// Вывод значений переменных в консоль
console.log("Variable 1:", variable1);
console.log("Variable 2:", variable2);

// Массив чисел
const numbers = [1, 2, 3, 4, 5];

// Вывод каждого числа в консоль
console.log("Числа в прямом порядке:");
numbers.forEach(number => console.log(number));

// Вывод значений массива задом на перед
console.log("Числа в обратном порядке:");
for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
}