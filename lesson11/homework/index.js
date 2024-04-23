// Исходный массив строк
const strings = ["Hello", "World", "JavaScript", "HTML", "CSS"];

// Создание элементов div для каждой строки и добавление их в документ
strings.forEach((string, index) => {
    // Создание нового элемента div
    const div = document.createElement("div");
    
    // Задание текстового содержимого div
    div.textContent = `${index + 1}. ${string}`;
    
    // Добавление div в документ
    document.body.appendChild(div);
});