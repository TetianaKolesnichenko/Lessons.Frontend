function delay(value) {
    return new Promise((resolve, reject) => {
      if (typeof value !== 'number') {
        reject('The argument is not a number');
      } else {
        setTimeout(() => {
          resolve(value * 2);
        }, 5000);
      }
    });
  }
  
  // Пример использования
  delay(10)
    .then(result => {
      console.log('Resolved:', result); // Должно вывести 20 через 5 секунд
    })
    .catch(error => {
      console.error('Rejected:', error);
    });
  
  // Пример использования с неверным аргументом
  delay('test')
    .then(result => {
      console.log('Resolved:', result);
    })
    .catch(error => {
      console.error('Rejected:', error); // Должно вывести "The argument is not a number"
    });