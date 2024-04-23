// Функция для сортировки массива методом пузырька
function bubbleSort(arr) {
    const length = arr.length;
    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Обмен элементов
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Исходный массив чисел
const numbers = [5, 3, 8, 1, 4, 2, 7, 6];

// Вызов функции сортировки и вывод результата в консоль
console.log("Исходный массив:", numbers);
const sortedNumbers = bubbleSort(numbers);
console.log("Отсортированный массив методом пузырька:", sortedNumbers);