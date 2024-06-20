// mainpage ************************************************************
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
let listCartHTML = document.querySelector('.listCart');
let iconCartSpan = document.querySelector('.cartcontainer span');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
let products = [
    {
        "id":1,
        "imge":"imges/mokap10.png",
        "name":"Sweet Coffee",
        "description":"Products, 500g",
        "price":20,
        "total":20
    }
    ,
    {
        "id":19,
        "imge":"imges/mokap9.png",
        "name":"White Coffee",
        "description":"Products, 500g",
        "price":30,
        "total":30
    }
    ,
    {
        "id":20,
        "imge":"imges/Product5.png",
        "name":"Roasted Coffee",
        "description":"Products, 500g",
        "price":30,
        "total":30
    }
    ,
    {
        "id":21,
        "imge":"imges/Product6.png",
        "name":"Black Coffee",
        "description":"Products, 500g",
        "price":30,
        "total":30
    }
    ,
    {
        "id":9,
        "imge":"imges/Drink1.png",
        "name":"Espresso",
        "description":"Hot Drinks, large size, alittle Sugar, ,add milk",
        "price":10.99,
        "total":10.99
    }
    ,
    {
        "id":10,
        "imge":"imges/Drink2.png",
        "name":"Cappuccino",
        "description":"Hot Drinks, large size, alittle Sugar, add milk",
        "price":15.50,
        "total":15.50
    }
    ,
    {
        "id":11,
        "imge":"imges/Drink3.png",
        "name":"Mocha",
        "description":"Hot Drinks, large size, alittle Sugar, add milk",
        "price":20.50,
        "total":20.50
    }
    ,
    {
        "id":12,
        "imge":"imges/Drink4.png",
        "name":"Americano",
        "description":"Hot Drinks, large size, alittle Sugar, add milk",
        "price":11.50,
        "total":11.50
    }
    ,
    {
        "id":13,
        "imge":"imges/Drink5.png",
        "name":"Latte",
        "description":"Hot Drinks, large size, alittle Sugar, add milk",
        "price":11.50,
        "total":11.50
    }
    ,
    {
        "id":7,
        "imge":"imges/Drink6.png",
        "name":"Iced Coffee",
        "description":"Cold Drinks, large size, alittle Sugar, add milk",
        "price":9.50,
        "total":9.50
    }
    ,
    {
        "id":8,
        "imge":"imges/Drink7.png",
        "name":"Cold Brew",
        "description":"cold Drinks, large size, alittle Sugar, add milk",
        "price":25.50,
        "total":25.50
    }
    ,
    {
        "id":4,
        "imge":"imges/Drink8.png",
        "name":"Frappuccino",
        "description":"cold Drinks, large size, alittle Sugar, add milk",
        "price":10.50,
        "total":10.50
    }
    ,
    {
        "id":5,
        "imge":"imges/Drink3.png",
        "name":"Mocha",
        "description":"cold Drinks, large size, alittle Sugar, add milk",
        "price":20.50,
        "total":20.50
    }
    ,
    {
        "id":6,
        "imge":"imges/Drink9.png",
        "name":"Latte",
        "description":"cold Drinks, large size, alittle Sugar, ,add milk",
        "price":17.19,
        "total":17.19
    }
    ,
    {
        "id":2,
        "imge":"imges/mokab7.png",
        "name":"Turkish Coffee",
        "description":"Products, 500g",
        "price":20,
        "total":20
    },
    {
        "id":3,
        "imge":"imges/mokap8.png",
        "name":"Arabic Coffee",
        "description":"Products, 500g",
        "price":20,
        "total":20
    }
    ,
    {
        "id":14,
        "imge":"imges/Sweet1.png",
        "name":"Donut",
        "description":"Sweets ,small size,with chocolate",
        "price":49.99,
        "total":49.99
    }
    ,
    {
        "id":15,
        "imge":"imges/Sweet2.png",
        "name":"Cupcake",
        "description":"Sweets ,small size,with chocolate",
        "price":30.50,
        "total":30.50
    }
    ,
    {
        "id":16,
        "imge":"imges/Sweet3.png",
        "name":"Chocolate",
        "description":"Sweets ,small size,with chocolate",
        "price":30.50,
        "total":30.50
    }
    ,
    {
        "id":17,
        "imge":"imges/Sweet4.png",
        "name":"Cookies",
        "description":"Sweets ,small size,with chocolate",
        "price":10.00,
        "total":10.00
    }
    ,
    {
        "id":18,
        "imge":"imges/Sweet5.png",
        "name":"Maracon",
        "description":"Sweets ,small size,with chocolate",
        "price":29.99,
        "total":29.99
    }
    ,
];
const addCartToMemory = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
}

let Subtotal = document.querySelector('.lastTotal .Subtotal span');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
let Discount = document.querySelector('.lastTotal .Discount span');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
let Total = document.querySelector('.lastTotal .Total span');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               

const addCartToHTML = () => {
    listCartHTML.innerHTML ='';
    let Subtotal2=0;
    let Total2=0;    
    let totalQuantity = 0;
    if(cart.length > 0){
        cart.forEach(item => {
            totalQuantity = totalQuantity +  item.quantity;
            let newItem = document.createElement('div');
            newItem.classList.add('item');
            newItem.dataset.id = item.product_id;
            let positionProduct = products.findIndex((value) => value.id == item.product_id);
            let info = products[positionProduct];
            newItem.innerHTML = `
            <div><b class="delete">×</b></div>
            <div class="imge">
                <img src="${info.imge}" alt="">
            </div>
            <div class="nameconttainer">
                <div class="name">${info.name}</div>
                <div class="describtion">${info.description}</div>
            </div>
            <div class="price">${info.price}</div>
        <div class="Quantity">
            <span ><b class="plus">+</b></span>
            <span>${item.quantity}</span>
            <span ><b class="minus">-</b></span>
        </div>
        <div class="tottalprice">${info.total * item.quantity}</div>
            `;
            listCartHTML.appendChild(newItem)   
            Subtotal2= Subtotal2 +  info.total * item.quantity;
            Total2 = Subtotal2 - parseFloat(Discount.innerText);   
             })
    }
    Subtotal.innerText = Subtotal2;
    iconCartSpan.innerText = totalQuantity;
    Total.innerText = Total2.toFixed(2);
    
}


const changeQuantityCart = (product_id, type) => {
    let positionItemInCart = cart.findIndex((value) => value.product_id == product_id);
    if(positionItemInCart >= 0){
        let info = cart[positionItemInCart];
        switch (type) {
            case 'plus':
                cart[positionItemInCart].quantity = cart[positionItemInCart].quantity + 1;
                break;
        
            default:
                let changeQuantity = cart[positionItemInCart].quantity - 1;
                if (changeQuantity > 0) {
                    cart[positionItemInCart].quantity = changeQuantity;
                }else{
                    cart.splice(positionItemInCart, 1);
                }
                break;
        }
    }
    addCartToHTML();
    addCartToMemory();
}

listCartHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('minus') || positionClick.classList.contains('plus')){
        let product_id = positionClick.parentElement.parentElement.parentElement.dataset.id;
        let type = 'minus';
        if(positionClick.classList.contains('plus')){
            type = 'plus';
        }
        changeQuantityCart(product_id, type);
    }else if(positionClick.classList.contains('delete')){
        let product_id = positionClick.parentElement.parentElement.dataset.id;
        let positionItemInCart = cart.findIndex((value) => value.product_id == product_id);
        cart.splice(positionItemInCart, 1);
        addCartToHTML();
        addCartToMemory();
    }
})


if(localStorage.getItem('cart')){
    cart = JSON.parse(localStorage.getItem('cart'));
    addCartToHTML();
}
