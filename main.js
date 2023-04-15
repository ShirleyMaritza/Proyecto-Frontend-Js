const menuEmail=document.querySelector('.email');
const desktopMenu= document.querySelector('.desktop-menu');
const menuCarritoIcon=document.querySelector('.navbar-shopping-cart');
const menuHamIcon= document.querySelector('.menu');
const mobileMenu=document.querySelector('.mobile-menu');
const shoppingCartContainer=document.querySelector('#shoppingCartContainer');
const cardsContainer=document.querySelector('.cards-container');

menuEmail.addEventListener('click',toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarrito);

function toggleDesktopMenu(){
    const isAsideClosed=shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed=shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarrito(){
    const isMobileMenuClosed=mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed=desktopMenu.classList.contains('inactive');

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name:'Gatito pequeño',
    precio: 120,
    image:'https://images.pexels.com/photos/357141/pexels-photo-357141.jpeg?auto=compress&cs=tinysrgb&w=400',
});
productList.push({
    name:'Gatito grande',
    precio: 124,
    image:'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=400',
});
productList.push({
    name:'Gatito hermoso',
    precio: 200,
    image:'https://images.pexels.com/photos/384555/pexels-photo-384555.jpeg?auto=compress&cs=tinysrgb&w=400',
});
productList.push({
    name:'Gatito pequeño',
    precio: 120,
    image:'https://images.pexels.com/photos/357141/pexels-photo-357141.jpeg?auto=compress&cs=tinysrgb&w=400',
});
productList.push({
    name:'Gatito grande',
    precio: 124,
    image:'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=400',
});
productList.push({
    name:'Gatito hermoso',
    precio: 200,
    image:'https://images.pexels.com/photos/384555/pexels-photo-384555.jpeg?auto=compress&cs=tinysrgb&w=400',
});

/* <div class="product-card">
    <img src="https://images.pexels.com/photos/357141/pexels-photo-357141.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="cat">
    <div class="product-info">
        <div>
            <p>$120</p>
            <p>Gatito pequeño</p>
        </div>
        <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="carrito de compras">
        </figure>
    </div>
</div>  */

function renderProducts(arr){
    for(product of productList){
        const productCard= document.createElement('div');
        productCard.classList.add('product-card');
    
        //product = {name,price,image}
        const productImg=document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo= document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv= document.createElement('div');
    
        const productPrice=document.createElement('p');
        productPrice.innerText= 'S/. '+ product.precio;
        const productName=document.createElement('p');
        productName.innerText= product.name;
    
        const productInfoFigure= document.createElement('figure');
        const productImgCart= document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
    
        //poniendo dentro de las etiquetas
        productInfoFigure.appendChild(productImgCart);
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);
