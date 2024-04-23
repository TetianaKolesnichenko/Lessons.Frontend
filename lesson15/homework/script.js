const products = [
    { name: "Телефон", price: 6000, manufacturer: "Samsung" },
    { name: "Ноутбук", price: 12000, manufacturer: "Apple" },
    { name: "Телевизор", price: 8000, manufacturer: "Sony" },
    { name: "Наушники", price: 1500, manufacturer: "Sony" },
];

function renderProducts(filteredProducts) {
    const productsContainer = document.getElementById("productsContainer");
    productsContainer.innerHTML = "";

    filteredProducts.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.textContent = `${product.name} - Цена: ${product.price} - Производитель: ${product.manufacturer}`;
        productsContainer.appendChild(productDiv);
    });
}

function filterProducts() {
    const priceInput = document.getElementById("priceInput");
    const price = parseInt(priceInput.value);

    const filteredProducts = products.filter(product => product.price <= price);
    renderProducts(filteredProducts);
}

// Инициализация страницы
renderProducts(products);