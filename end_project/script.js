function getWeather() {
    var city = document.getElementById("cityInput").value;
    city = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();
    var apiKey = "947d21b927ac5677242153bb7f51fc53"; // Замените на ваш API ключ с OpenWeatherMap
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + encodeURIComponent(city) + "&appid=" + apiKey + "&units=metric";

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Ошибка HTTP, статус " + response.status);
            }
            return response.json();
        })
        .then(data => {
            console.log(data); // Выводим ответ от сервера в консоль для проверки
            var weatherInfo = document.getElementById("weatherInfo");
            weatherInfo.innerHTML = "<h2>Погода в " + data.name + ", " + data.sys.country + "</h2>";
            var temperature = data.main.temp;
            if (temperature > 0) {
                temperature = "+" + temperature; // Добавляем знак "+" перед положительным значением температуры
            }
            weatherInfo.innerHTML += "<p>Температура: " + temperature + "°C</p>";
            weatherInfo.innerHTML += "<p>Описание: " + data.weather[0].description + "</p>";

            // Установка фонового изображения в зависимости от погоды
            var body = document.querySelector("body");
            var weather = data.weather[0].main.toLowerCase();
            if (weather.includes("clear")) {
                body.style.backgroundImage = "url('images/sunny-background.jpg')";
            } else if (weather.includes("cloud")) {
                body.style.backgroundImage = "url('images/cloudy-background.jpg')";
            } else if (weather.includes("rain")) {
                body.style.backgroundImage = "url('images/rainy-background.jpg')";
            } else if (weather.includes("snow")) {
                body.style.backgroundImage = "url('images/snowy-background.jpg')";
            } else {
                body.style.backgroundImage = "url('images/default-background.jpg')"; // Дефолтное фоновое изображение
            }
        })
        .catch(error => {
            console.log("Ошибка при получении данных о погоде: ", error);
            var weatherInfo = document.getElementById("weatherInfo");
            weatherInfo.innerHTML = "<p>Ошибка при получении данных о погоде. Проверьте правильность ввода названия города.</p>";
            var weatherIcon = document.getElementById("weatherIcon");
            weatherIcon.innerHTML = "";
        });
}

document.getElementById('search-button').addEventListener('click', function() {
    var city = document.getElementById('city-input').value;
    fetchWeather(city);
});

// Функция для получения погоды по названию города
function fetchWeather(city) {
    var apiKey = '947d21b927ac5677242153bb7f51fc53'; // Замените на ваш API ключ OpenWeatherMap
    var apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey + '&units=metric';
    
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка при получении данных о погоде: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Ошибка при получении данных о погоде:', error);
            displayErrorMessage('Ошибка при получении данных о погоде. Проверьте правильность ввода названия города.');
        });
}


function displayWeather(data) {
    var weatherResult = document.getElementById('weather-result');
    var weatherHtml = '<p class="weather-location">Город: ' + data.name + ', ' + data.sys.country + '</p>';
    var temperature = data.main.temp;
    var temperatureHtml = temperature >= 0 ? '+' + temperature : temperature;
    weatherHtml += '<p class="weather-info">Текущая погода: ' + temperatureHtml + '°C</p>';
    if (data.weather && data.weather[0] && data.weather[0].icon) {
        var iconUrl = 'http://openweathermap.org/img/wn/' + data.weather[0].icon + '.png';
        weatherHtml += '<img src="' + iconUrl + '" alt="Weather Icon" class="weather-icon">';
    }
    weatherResult.innerHTML = weatherHtml;

    // Изменение фонового изображения в зависимости от погоды
    var body = document.querySelector('body');
    var weatherCondition = data.weather[0].main.toLowerCase(); // Получаем основное описание погоды и приводим к нижнему регистру
    switch (weatherCondition) {
        case 'clear':
            body.style.backgroundImage = 'url("images/sunny-background.jpg")';
            break;
        case 'clouds':
            body.style.backgroundImage = 'url("images/cloudy-background.jpg")';
            break;
        case 'rain':
            body.style.backgroundImage = 'url("images/rainy-background.jpg")';
            break;
        case 'snow':
            body.style.backgroundImage = 'url("images/snowy-background.jpg")';
            break;
        // Добавьте другие варианты погоды, если нужно
        default:
            body.style.backgroundImage = 'url("images/default-background.jpg")'; // Фон по умолчанию
            break;
    }
}

// Функция для отображения сообщения об ошибке
function displayErrorMessage(message) {
    var weatherResult = document.getElementById('weather-result');
    weatherResult.innerHTML = '<p style="color: red;">' + message + '</p>';
}
// Обработчик события нажатия на кнопку
document.getElementById('search-button').addEventListener('click', function() {
    var city = document.getElementById('city-input').value;
    fetchWeather(city);
});

// Обработчик события нажатия клавиши Enter на поле ввода города
document.getElementById('city-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        var city = document.getElementById('city-input').value;
        fetchWeather(city);
    }
});