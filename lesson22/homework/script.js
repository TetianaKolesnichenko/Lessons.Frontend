const getCatFactBtn = document.getElementById('getCatFactBtn');
const catFactContainer = document.getElementById('catFactContainer');

getCatFactBtn.addEventListener('click', () => {
  fetch('https://catfact.ninja/fact')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch cat fact');
      }
      return response.json();
    })
    .then(data => {
      catFactContainer.textContent = data.fact;
    })
    .catch(error => {
      catFactContainer.textContent = error.message;
      catFactContainer.classList.add('error');
    });
});