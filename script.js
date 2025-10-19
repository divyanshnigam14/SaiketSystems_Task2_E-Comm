document.querySelectorAll('.product-card').forEach(card => {
    const decreaseBtn = card.querySelector('.decrease');
    const increaseBtn = card.querySelector('.increase');
    const qtyInput = card.querySelector('input');
    const addToCartBtn = card.querySelector('.add-to-cart');
    const message = card.querySelector('.cart-message');

    increaseBtn.addEventListener('click', () => {
        qtyInput.value = parseInt(qtyInput.value) + 1;
    });

    decreaseBtn.addEventListener('click', () => {
        if (parseInt(qtyInput.value) > 1) {
            qtyInput.value = parseInt(qtyInput.value) - 1;
        }
    });

    addToCartBtn.addEventListener('click', () => {
        message.textContent = `${qtyInput.value} item(s) added to cart!`;
    });
});
