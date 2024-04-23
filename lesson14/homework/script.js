// Объект с данными о космическом корабле
const spaceship = {
    name: "Милленниум Фалькон",
    manufacturer: "Корпорация Инженерных Решений",
    crew: 4,
    maxSpeed: "2500 км/ч"
};

// Функция для отображения характеристик космического корабля
function displaySpaceshipInfo() {
    document.getElementById("name").textContent = spaceship.name;
    document.getElementById("manufacturer").textContent = spaceship.manufacturer;
    document.getElementById("crew").textContent = spaceship.crew;
    document.getElementById("maxSpeed").textContent = spaceship.maxSpeed;
}

// Функция для скрытия производителя космического корабля
function hideManufacturer() {
    document.getElementById("manufacturer").style.display = "none";
}

// Вызываем функцию для отображения характеристик при загрузке страницы
window.onload = function() {
    displaySpaceshipInfo();
    document.getElementById("hideManufacturerButton").addEventListener("click", hideManufacturer);
};