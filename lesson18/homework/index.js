// Определяем конструктор Character
function Character(name, health, level) {
    this.name = name;
    this.health = health;
    this.level = level;
}

// Добавляем метод introduce для Character
Character.prototype.introduce = function() {
    console.log(`Hello, my name is ${this.name}, I am at level ${this.level}, and I have ${this.health} health.`);
};

// Создаем объект warrior, наследуя от Character
function Warrior(name, health, level, weapon) {
    Character.call(this, name, health, level); // Вызываем конструктор родительского класса
    this.weapon = weapon;10
}

// Наследование методов
Warrior.prototype = Object.create(Character.prototype);
Warrior.prototype.constructor = Warrior;

// Добавляем метод attack для Warrior
Warrior.prototype.attack = function() {
    console.log(`${this.name} attacks with ${this.weapon}!`);
};

// Создаем объект wizard, наследуя от Character
function Wizard(name, health, level, spell) {
    Character.call(this, name, health, level); // Вызываем конструктор родительского класса
    this.spell = spell;
}

// Наследование методов
Wizard.prototype = Object.create(Character.prototype);
Wizard.prototype.constructor = Wizard;

// Добавляем метод castSpell для Wizard
Wizard.prototype.castSpell = function() {
    console.log(`${this.name} casts ${this.spell}!`);
};

// Создаем экземпляры объектов
const warrior = new Warrior("Conan", 100, 10, "Sword");
const wizard = new Wizard("Gandalf", 80, 15, "Fireball");

// Вызываем методы introduce для каждого объекта
warrior.introduce();
wizard.introduce();

// Вызываем метод attack для объекта warrior
warrior.attack();

// Вызываем метод castSpell для объекта wizard
wizard.castSpell();