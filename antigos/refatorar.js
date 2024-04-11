

function calculateTotalPrice(products) {
    function calculateSubtotal() {
        let subtotal = 0;
        for (let i = 0; i < products.length; i++) {
            subtotal += products[i].price * products[i].quantity;
        }
        return subtotal;
    }

    function applyDiscount(subtotal) {
        let discount = 0.1;
        return subtotal > 100 ? subtotal * (1 - discount) : subtotal;
    }

    function addShippingCost(total) {
        let shippingCost = 5;
        return total < 50 ? total + shippingCost : total;
    }

    let subtotal = calculateSubtotal();
    let totalWithDiscount = applyDiscount(subtotal);
    let finalTotal = addShippingCost(totalWithDiscount);

    return finalTotal.toFixed(2);
}

// Criando um array de produtos
let products = [
    { price: 10, quantity: 2 },
    { price: 20, quantity: 1 },
    { price: 5, quantity: 5 }
];

// Chamando a função com o array de produtos
let totalPrice = calculateTotalPrice(products);

// Imprimindo o resultado
console.log(totalPrice);
