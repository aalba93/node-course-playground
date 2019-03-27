// Object property short-hand
const name = 'Andres';

const userAge = 25;

const user = {
    name,
    age: userAge,
    location: 'Panama'
};

console.log(user);

// Object desctructuring
const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
};

const {label:productLabel, stock, rating = 5} = product;
console.log(productLabel);
console.log(stock);
console.log(rating);

const transaction = (type, {label, stock = 0} = {}) => {
    console.log(type, label, stock);
};

transaction('order', product);