fetch('http://universities.hipolabs.com/search?country=Kazakhstan')
  .then(response => response.json())
  .then(data => {
    console.log('Университеты в Казахстане:');
    data.forEach(university => {
      console.log('Название:', university.name);
      console.log('Страна:', university.country);
      console.log('Web-сайт:', university.web_pages[0]);
      console.log('---');
    });
  })
  .catch(error => console.error('Ошибка:', error));