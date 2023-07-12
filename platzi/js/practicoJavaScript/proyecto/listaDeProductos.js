const cardsContainer = document.createElement("div");
cardsContainer.classList.add('cards-container');
const cuerpo = document.querySelector('.cuerpo')

const productList = [];
productList.push({
    name: "bike",
    price: 120,
    image: './iconos/bicycle-gff6a1584c_640.png'
});
productList.push({
    name: "Pantalla",
    price: 440,
    image: './iconos/bicycle-gff6a1584c_640.png'
});
productList.push({
    name: "Teclado",
    price: 12,
    image: './iconos/bicycle-gff6a1584c_640.png'
})

for (product of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card')

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('info-card');

    const productInfoDiv = document.createElement('div');
    const productName = document.createElement('p');
    productName.innerText = product.name;
    const productPrice = document.createElement('p')
    productPrice.innerText = `$ ${product.price}`;
    productInfoDiv.append(productName, productPrice);


    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './iconos/bt_add_to_cart.svg');
    productInfoFigure.appendChild(productImgCart)

    productInfo.append(productInfoDiv, productInfoFigure);

    productCard.append(productImg, productInfo);

    cuerpo.append(productCard);
}
