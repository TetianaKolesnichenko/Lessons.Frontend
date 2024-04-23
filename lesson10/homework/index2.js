
// Функция для возврата первых n символов строки
function getFirstNCharacters(str, n) {
    return str.slice(0, n);
}

// Вызов функции с различными параметрами и присвоение результатов переменным
const result1 = getFirstNCharacters("Hello, world!", 5);
const result2 = getFirstNCharacters("JavaScript is awesome", 10);
const result3 = getFirstNCharacters("OpenAI GPT-3 is incredible", 7);

// Вывод результатов в консоль
console.log("Результат 1:", result1);
console.log("Результат 2:", result2);
console.log("Результат 3:", result3);