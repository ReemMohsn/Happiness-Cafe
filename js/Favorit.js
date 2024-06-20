// / mainpage ************************************************************
let navbar=document.querySelector('.navbar');
let header=document.querySelector('header');
document.querySelector('#menu-btn').onclick= () =>{   //لما نضغط على الليقونة حق القائمة المنبتقة يا إما تفتح القائمة أو تقفل 
    navbar.classList.toggle('active');
}

window.onscroll=() =>{
    navbar.classList.remove('active');  //طريقة ثانية لقفل القائمة المنبتقهوهي من خلال عمل سكرول على الصفحة لتحت أو لفوق
    header.classList.toggle('shadow',window.scrollY > 0)

}

// document.addEventListener('DOMContentLoaded', () => {
//  عندما يإتي الماوس sign ألوان زر ال
let sign=document.querySelector('.sign');
let signlogo=document.querySelector('.signLogo');
sign.onmouseenter=() =>{
    signlogo.src='imges/3.png';
}
sign.onmouseleave=() =>{
    signlogo.src='imges/4.png';


}



// تغيير محتوى شكل القلب عندما يأتي المؤشر عليه
let galeb=document.querySelector('.galeb');
galeb.onmouseenter=() =>{
    galeb.src='imges/galeb.png';
}
galeb.onmouseleave=() =>{
    galeb.src='imges/123.png';
}



// cart page ********************************************* 
let listProductHTML = document.querySelectorAll('.ProductsContener');
let iconCartSpan = document.querySelector('.cartcontainer span');
let cart = [];
let totalQuantity = 0;

if(localStorage.getItem('cart')){
    cart = JSON.parse(localStorage.getItem('cart'));
    cart.forEach(item => {
        totalQuantity = totalQuantity +  item.quantity;
    })
}
iconCartSpan.innerText = totalQuantity;
if(listProductHTML){
    for (let index = 0; index < listProductHTML.length; index++) {
        listProductHTML[index].addEventListener('click', (event) => {
            
            let positionClick = event.target;
            if(positionClick.classList.contains('AddIcon')){
                let id_product = positionClick.parentElement.dataset.id;
                totalQuantity +=1;
                iconCartSpan.innerText = totalQuantity;
                addToCart(id_product);
        
            }
        })   
    }
}
const addToCart = (product_id) => {
    let positionThisProductInCart = cart.findIndex((value) => value.product_id == product_id);
    if(cart.length <= 0){
        cart = [{
            product_id: product_id,
            quantity: 1
        }];
    }else if(positionThisProductInCart < 0){
        cart.push({
            product_id: product_id,
            quantity: 1
        });
    }else{
        cart[positionThisProductInCart].quantity = cart[positionThisProductInCart].quantity + 1;
    }
    addCartToMemory();
}

const addCartToMemory = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
}







let products = [
    {
        "id":1,
        "imge":"imges/mokap10.png",
        "name":"Sweet Coffee",
        "msar":"img-pro-coffee ",
        "price":20,
    }
    ,
    {
        "id":19,
        "imge":"imges/mokap9.png",
        "name":"White Coffee",
        "msar":"img-pro-coffee ",
        "price":30,
    }
    ,
    {
        "id":20,
        "imge":"imges/Product5.png",
        "name":"Roasted Coffee",
        "msar":"img-pro-coffee ",
        "price":30,
    }
    ,
    {
        "id":21,
        "imge":"imges/Product6.png",
        "name":"Black Coffee",
        "msar":"img-pro-coffee ",
        "price":30,
        }
    ,
    {
        "id":9,
        "imge":"imges/Drink1.png",
        "name":"Espresso",
        "msar":"img-pro",
        "price":10.99,
    }
    ,
    {
        "id":10,
        "imge":"imges/Drink2.png",
        "name":"Cappuccino",
        "msar":"img-pro",
        "price":15.50,
    }
    ,
    {
        "id":11,
        "imge":"imges/Drink3.png",
        "name":"Mocha",
        "msar":"img-pro",
        "price":20.50,
    }
    ,
    {
        "id":12,
        "imge":"imges/Drink4.png",
        "name":"Americano",

        "msar":"img-pro",
        "price":11.50,
    }
    ,
    {
        "id":13,
        "imge":"imges/Drink5.png",
        "name":"Latte",
        "msar":"img-pro",
        "price":11.50,
    }
    ,
    {
        "id":7,
        "imge":"imges/Drink6.png",
        "name":"Iced Coffee",
        "msar":"img-pro",
        "price":9.50,
    }
    ,
    {
        "id":8,
        "imge":"imges/Drink7.png",
        "name":"Cold Brew",
        "msar":"img-pro",
        "price":25.50,
    }
    ,
    {
        "id":4,
        "imge":"imges/Drink8.png",
        "name":"Frappuccino",
        "msar":"img-pro",
        "price":10.50,
    }
    ,
    {
        "id":5,
        "imge":"imges/Drink3.png",
        "name":"Mocha",
        "msar":"img-pro",
        "price":20.50,
    }
    ,
    {
        "id":6,
        "imge":"imges/Drink9.png",
        "name":"Latte",
        "msar":"img-pro",
        "price":17.19,
    }
    ,
    {
        "id":2,
        "imge":"imges/mokab7.png",
        "name":"Turkish Coffee",
        "msar":"img-pro-coffee ",
        "price":20,
    },
    {
        "id":3,
        "imge":"imges/mokap8.png",
        "name":"Arabic Coffee",
        "msar":"img-pro-coffee ",
        "price":20,
    }
    ,
    {
        "id":14,
        "imge":"imges/Sweet1.png",
        "name":"Donut",
        "msar":"img-pro",
        "price":49.99,
    }
    ,
    {
        "id":15,
        "imge":"imges/Sweet2.png",
        "name":"Cupcake",
        "msar":"img-pro",
        "price":30.50,
    }
    ,
    {
        "id":16,
        "imge":"imges/Sweet3.png",
        "name":"Chocolate",
        "msar":"img-pro",
        "price":30.50,
    }
    ,
    {
        "id":17,
        "imge":"imges/Sweet4.png",
        "name":"Cookies",
        "msar":"img-pro",
        "price":10.00,
    }
    ,
    {
        "id":18,
        "imge":"imges/Sweet5.png",
        "name":"Maracon",
        "msar":"img-pro",
        "price":29.99,
    }
    ,
];
let listFavoritHTML = document.querySelector('.Products');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
const addFavoritToHTML = () => {
    listFavoritHTML.innerHTML ='';
    if(Favorit.length > 0){
        Favorit.forEach(item => {
            let newItem = document.createElement('div');
            newItem.classList.add('Product');
            newItem.dataset.id = item.product_id;
            let positionProduct = products.findIndex((value) => value.id == item.product_id);
            let info = products[positionProduct];
            newItem.innerHTML = `
            <img class="img-heart" src="imges/galeb.png" alt="">
            <img class="${info.msar}" src="${info.imge}" alt="">
            <div class="Productnam">${info.name}</div>
            <div class="price-card" >
                <p style="font-size: 2.6rem;color: white;margin-left: 14px;margin-top: 15px;">
                ${info.price}</p>
                <div style="margin-top: -15px;" href="" class="ProductsContener" data-id="${item.product_id}"><img style="margin-left: 185px;margin-top: -75px;" class="img-add AddIcon" src="imges/add.png " width="45px" alt=""></div>
            </div>
         `;
         listFavoritHTML.appendChild(newItem)   
             })
    }    
}


// تغيير محتوى شكل القلب عندما يأتي المؤشر عليه
// let Product=document.querySelector('.Product');
// let imgheart=document.querySelector('.img-heart');
// if(Product){
//     Product.onmouseenter=(event) =>{
//         let positionClick = event.target;
//         if(positionClick.classList.contains('img-heart')){
//             imgheart.src='imges/123.png';
//         }
//     }
//         Product.onmouseleave=(event) =>{
//             let positionClick = event.target;
//             if(positionClick.classList.contains('img-heart')){
//                 imgheart.src='imges/galeb.png';
//             }
//         }
// }


  



let Favorit=[];
if(localStorage.getItem('Favorit')){
    Favorit = JSON.parse(localStorage.getItem('Favorit'));
    addFavoritToHTML();
}

const addFavoritToMemory = () => {
    localStorage.setItem('Favorit', JSON.stringify(Favorit));
}

listFavoritHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('img-heart')){
        let product_id = positionClick.parentElement.dataset.id;
        let positionItemInFavorit = Favorit.findIndex((value) => value.product_id == product_id);
        Favorit.splice(positionItemInFavorit, 1);
        addFavoritToHTML();
        addFavoritToMemory();
    }
})