const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

let productIndex = products.findIndex(item => item.id === '🍔' );

if(productIndex) {
    myProducts.push(products[productIndex]);
    products.splice(productIndex,1)//slice eleimina elementos del array, se le debe entregar como parametro el indice del elemntoa a eliminar
    // y lal cantidad de elementos a aleminar a partir de el
}

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));


//Update
let productsV2 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const update = {
    id: '🥞',
    changes : {
        price: 200,
        description: "Delicious"
    }
}


let productIndexV2 = productsV2.findIndex(element => element.id === update.id);

productsV2[productIndexV2] = {
    ...productsV2[productIndexV2], 
    ...update.changes
}
 console.log(productsV2)