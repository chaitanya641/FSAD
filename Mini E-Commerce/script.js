let cart = [];
let total = 0;

function addToCart(name, price) {

    cart.push({name, price});
    total += price;

    updateCart();
}

function updateCart() {

    const cartItems = document.getElementById("cart-items");
    const totalDisplay = document.getElementById("total");
    const cartCount = document.getElementById("cart-count");

    cartItems.innerHTML = "";

    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `${item.name} - ₹${item.price} 
        <button onclick="removeItem(${index})">❌</button>`;
        cartItems.appendChild(li);
    });

    totalDisplay.innerText = total;
    cartCount.innerText = cart.length;
}

function removeItem(index) {
    total -= cart[index].price;
    cart.splice(index, 1);
    updateCart();
}

function clearCart() {
    cart = [];
    total = 0;
    updateCart();
}

function toggleCart() {
    document.getElementById("cart").classList.toggle("active");
}