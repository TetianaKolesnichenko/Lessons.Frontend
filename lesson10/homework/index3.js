// Функция для проверки наличия элемента в массиве
function checkElementInArray(arr, element) {
    return arr.includes(element);
}

// Пример использования функции
const array1 = [1, 2, 3, 4, 5];
const element1 = 3;
const result1 = checkElementInArray(array1, element1);
console.log(`Элемент ${element1} ${result1 ? "присутствует" : "отсутствует"} в массиве 1`);

const array2 = ["apple", "banana", "orange", "grape"];
const element2 = "banana";
const result2 = checkElementInArray(array2, element2);
console.log(`Элемент '${element2}' ${result2 ? "присутствует" : "отсутствует"} в массиве 2`);

const array3 = [true, false, true, false];
const element3 = true;
const result3 = checkElementInArray(array3, element3);
console.log(`Элемент ${element3} ${result3 ? "присутствует" : "отсутствует"} в массиве 3`);