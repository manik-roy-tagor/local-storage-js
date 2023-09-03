const clickProductSubmit = () => {
    const product_name = document.getElementById('product_name');
    const product_quantity = document.getElementById('product_quantity');

    const product = product_name.value;
    const quantity = product_quantity.value;

    product_name.value = '';
    product_quantity.value = '';

    displayProduct(product, quantity);
    saveProductToLocalStorage(product, quantity);
}


const displayProduct = (product_name, product_quantity) => {
    console.log(product_name, product_quantity);
    const product_container = document.getElementById('product_container')
    const li = document.createElement('li');
    li.innerText = `${product_name} - ${product_quantity}`;
    product_container.appendChild(li);
}

const saveProductToLocalStorage = (product, quantity) => {
    const cart = getStoredShoppingCart();
    console.log(cart);
    // console.log(product, quantity);
    cart[product] = quantity;
    cartStringyfied = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringyfied);


}

const getStoredShoppingCart = () => {
    const storedCart = localStorage.getItem('cart');
    let cart = {};
    if (storedCart) {
        cart = JSON.parse(storedCart);
        // console.log(cart);
    }
    return cart;
}

const displayProductfromLocalStorage = () => {
    const saveCart = getStoredShoppingCart();
    console.log(saveCart);
    for (const product in saveCart) {
        const quantity = saveCart[product];
        // console.log(quantity, product);
        displayProduct(product, quantity);
    }
}

displayProductfromLocalStorage();
