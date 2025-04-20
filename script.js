// Shopping Cart Logic  
let cart = [];  

document.querySelectorAll('.add-to-cart').forEach(button => {  
    button.addEventListener('click', (e) => {  
        const book = {  
            title: e.target.parentNode.querySelector('h3').innerText,  
            price: parseFloat(e.target.parentNode.querySelector('p').innerText.replace('$', '')),  
        };  
        cart.push(book);  
        updateCartCount();  
    });  
});  

function updateCartCount() {  
    const cartCount = document.getElementById('cart-count');  
    if (cartCount) cartCount.innerText = cart.length;  
}  
