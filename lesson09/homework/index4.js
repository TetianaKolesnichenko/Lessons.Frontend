const numbers = [10, 15, 20, 25, 30];

// Переменная для хранения суммы элементов массива
let sum = 0;

// Считаем сумму всех элементов массива
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

// Вычисляем среднее значение
const average = sum / numbers.length;

// Вывод результата в консоль
console.log("Среднее значение элементов массива:", average);