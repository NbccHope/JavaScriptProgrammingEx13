/**
 * Name: Hope Abraham
 * Date: 24/03/2026
 * Desc: Objects
 */


const l = obj => console.log(obj);

let product = {
    name: 'Keyboard',
    price: 109.99,
    discountedPrice: function (discountPercent) {
        let discountPrice = this.price - this.price * discountPercent;

        const formatter = new Intl.NumberFormat('en-CA' , {
            style: 'currency',
            currency: 'CAD'
        });


        return formatter.format(discountPrice);
    }
}

//l(product.discountedPrice(.10));

product.name = 'Logitech Keyboard';
product.price = 200.00;
product.description = 'The Logitech MX Keys Keyboard';

//function expression for objects
product.formatPrice = function () {
    const formatter = new Intl.NumberFormat('en-CA' , {
        style: 'currency',
        currency: 'CAD'
    });

    return formatter.format(this.Price);
}

l(`${product.name} discount price is ${product.discountedPrice(.15)}`);

product['inventory'] = 10;

l(product);