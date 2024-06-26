// Исходный массив чисел
let numbers = [5, 10, 15, 20, 25];

// Меняем местами первый и последний элементы массива
let firstElement = numbers[0];
numbers[0] = numbers[numbers.length - 1];
numbers[numbers.length - 1] = firstElement;

// Вывод результата в консоль
console.log("Исходный массив после замены:", numbers);
/*
Этот код берет первый элемент массива (numbers[0]) и сохраняет его в переменной firstElement. 
Затем он присваивает последний элемент массива первому элементу (numbers[numbers.length - 1]), 
и затем значение firstElement присваивается последнему элементу массива. 
В результате первый и последний элементы массива меняются местами.*/
