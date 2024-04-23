// Исходный массив чисел
const numbers = [2, 4, 6, 8, 10];

// Переменная для отслеживания наличия числа 5
let found = false;

// Проверяем наличие числа 5 в массиве
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 5) {
        found = true;
        break;
    }
}

// Вывод результата в консоль
if (found) {
    console.log("5 Найдено");
} else {
    console.log("5 Отсутствует");
}