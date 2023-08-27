const Data=[
    {
        id:1,
         name:'Kichidi',
         price:'149',
         image:"./images/img2.jpg",
         rating:'&bigstar;&bigstar;&bigstar;&bigstar;&bigstar;',
},
    {
        id:2,
         name:'Dum Biryani',
         price:'249',
         image:"./images/img3.jpg",
         rating:'&bigstar;&bigstar;&bigstar;&bigstar;',
},
    {
        id:3,
         name:'Fry Biryani',
         price:'249',
         image:"./images/biryani.webp",
         rating:'&bigstar;&bigstar;&bigstar;&bigstar;&bigstar;',
},
    {
        id:4,
         name:'Mutton Biryani',
         price:'249',
         image:"./images/mutton.jpeg",
         rating:'&bigstar;&bigstar;&bigstar;&bigstar;&bigstar;',
},
    {
        id:5,
         name:'Grill Chicken',
         price:'549',
         image:"./images/chicken1.jpg",
         rating:'&bigstar;&bigstar;&bigstar;&bigstar;',
},
    {
        id:6,
         name:'Chicken BBQ',
         price:'199',
         image:"./images/chicken2.jpg",
         rating:'&bigstar;&bigstar;&bigstar;&bigstar;&bigstar;',
},
    {
        id:7,
         name:'Chicken Wings',
         price:'199',
         image:"./images/chicken3.jpg",
         rating:'&bigstar;&bigstar;&bigstar;&bigstar;',
},
    {
        id:8,
         name:'Chicken Tandoori',
         price:'149',
         image:"./images/chicken4.jpg",
         rating:'&bigstar;&bigstar;&bigstar;&bigstar;',
},
    {
        id:9,
         name:'Pizza',
         price:'149',
         image:"./images/pizza1.jpeg",
         rating:'&bigstar;&bigstar;&bigstar;&bigstar;&bigstar;',
},
    {
        id:10,
         name:'Chicken Burger',
         price:'149',
         image:"./images/pizza2.jpeg",
         rating:'&bigstar;&bigstar;&bigstar;&bigstar;&bigstar;',
},
    {
        id:11,
         name:'sandwich',
         price:'149',
         image:"./images/pizza3.jpg",   
          rating:'&bigstar;&bigstar;&bigstar;&bigstar;',
},
    {
        id:12,
         name:'Burger',
         price:'149',
         image:"./images/pizza4.jpg",
         rating:'&bigstar;&bigstar;&bigstar;&bigstar;&bigstar;',

},
{
    id:13,
     name:'Milkshakes',
     price:'149',
     image:"./images/shake1.jpg",
     rating:'&bigstar;&bigstar;&bigstar;&bigstar;&bigstar;',

},
{
    id:14,
     name:'Milkshakes',
     price:'149',
     image:"./images/shake2.jpg",
     rating:'&bigstar;&bigstar;&bigstar;&bigstar;&bigstar;',

},
{
    id:15,
     name:'Thick shake',
     price:'149',
     image:"./images/shake3.jpg",
     rating:'&bigstar;&bigstar;&bigstar;&bigstar;&bigstar;',

},
{
    id:16,
     name:'Juice',
     price:'149',
     image:"./images/shake4.jpg",
     rating:'&bigstar;&bigstar;&bigstar;&bigstar;&bigstar;',
}]
const cardsEle=document.getElementById('cards1');


const Htmlcontent=Data.map((item1)=>{
    return`

    <div class="card">
    <img src=${item1.image} alt="" class="product-img">
   
        <h2 class="product-title">${item1.name}</h2>
        <p class="product-price">${item1.price}</p>
        <p id="star">${item1.rating}</P>
        <button class="add-to-cart-btn">Add to cart</button>
        </div>
    `;
})
cardsEle.innerHTML=Htmlcontent

// function for a toggle button
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.mobile-nav-toggle');
    const navbar = document.querySelector('#navbar');
 
    toggleButton.addEventListener('click', function() {
       navbar.classList.toggle('navbar-mobile');
       this.classList.toggle('bi-list');
       this.classList.toggle('bi-x');
    });
 });


// slider function
const slidesContainer = document.getElementById("slides");
let currentIndex = 0;
function showNextSlide() {
  currentIndex = (currentIndex + 1) % slidesContainer.children.length;
  updateSlide();
  setTimeout(showNextSlide, 3000); 
}
function updateSlide() {
  slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}
setTimeout(showNextSlide, 3000);




// function to load all the items
document.addEventListener('DOMContentLoaded', () => {
    const addtocartBTn = document.querySelectorAll('.add-to-cart-btn');
//   add event listener to all button elements
    addtocartBTn.forEach((ele) => {
      ele.addEventListener('click', (e) => {
        const card = ele.parentElement;
  
        const productName = card.querySelector(".product-title").innerText;
        const productPrice = card.querySelector(".product-price").innerText;
        const imgUrl = card.querySelector('img').src;
  
        const productDetails = {
          name: productName,
          price: productPrice,
          image: imgUrl
        };
        // const formattedDetails = JSON.stringify(productDetails);
        // console.log(productDetails);
        Addtocart(productDetails);
      });
    });
  });
//   empty array to store the items selected and existing items ti increase quantity
const cartItems=[]
console.log(cartItems)

//   function to check whether the items alreday present in cart 

function Addtocart(product){
    console.log(product)
    const existingitems=cartItems.find(item=>item.name === product.name)
    if(existingitems){
         existingitems.quantity++
    }else{
        cartItems.push({...product, quantity:1})
    }
    // function  to display items in the cart
    UpdateCartUi()
    localStorage.setItem('cartItem',JSON.stringify(cartItems))
    
}





// function to update the cartui
function UpdateCartUi(){
     const CartItem=document.querySelector('.cart_items');
     CartItem.innerHTML = '';
    //  accessing the elements from the array to display the items in the ui
     cartItems.forEach((item)=>{
        const Cartprod=document.createElement('li');
        Cartprod.innerHTML=` 
        <div class="card">
            <img src=${item.image} alt="" class="product-img" >
                <h2 class="product-title">${item.name}</h2>
                <p class="product-price">${item.price}</p>
                    <span class='Quantity'>Quantity:${item.quantity}</span>
                    <div class="Quantity-container">
                       
                        <button class="increase">+</button>
                        <span class="quantity-value">${item.quantity}</span>
                        <button class="decrease">-</button>
                    </div>
                <button class="remove">Remove</button>
                </div>`;


                const QuantityConEle=Cartprod.querySelector('.Quantity-container')
                const Quantityval=Cartprod.querySelector('.Quantity')
                const IncreaseQueEle=QuantityConEle.querySelector('.increase')
                const decreaseQueEle=QuantityConEle.querySelector('.decrease')
                const removeItem=Cartprod.querySelector('.remove')
// adding event  listener to incresae the quantity button
          IncreaseQueEle.addEventListener('click',()=>{
            handleincreaseQuantity(item,Quantityval)
          })
        //   adding event listener to decrease quantity button
          decreaseQueEle.addEventListener('click',()=>{
            handleDecreaseQuantity(item,Quantityval)
          })
        //   adding event llistener to remove the quantity button
        removeItem.addEventListener('click',()=>{
            Removeitems(item)
          })

                CartItem.appendChild(Cartprod);
                cartCountIcon()
     });
}


// function to incrrease the quantity
function handleincreaseQuantity(item,Quantityval){
  item.quantity++
  Quantityval.textContent=item.quantity
  UpdateCartUi()
  cartTotal()
  cartCountIcon()

// local storage to store items
  localStorage.setItem('cartItem',JSON.stringify(cartItems))
}

// function to decrease the quantity
function  handleDecreaseQuantity(item,Quantityval){
    if(item.quantity>1){
        item.quantity--
        Quantityval.textContent.quantity
        UpdateCartUi(cartItems); 
        cartTotal()
        cartCountIcon()

// local storage to store items
        localStorage.setItem('cartItem',JSON.stringify(cartItems))
    }
}

// function to remove the items
function Removeitems(item){
        const index = cartItems.findIndex(product => product.name === item.name);
    
        if (index !== -1) {
             if (cartItems[index].quantity >1){
                cartItems[index].quantity--;
             }else{
                cartItems.splice(index,1);
             }
        }
        UpdateCartUi();
        cartTotal()
        cartCountIcon()
    }
   
// function to update cartotal

    function cartTotal(){
        const CartContainerEle=document.querySelector('.cart_total')
        const CartTotall=cartItems.reduce((total,item)=>total+item.price *item.quantity ,0)
            CartContainerEle.textContent=`Total:${CartTotall}`;
    };
    
// function to increase the cart count

function cartCountIcon(){
  const CartIconval=document.getElementById('cart-item-count')
  const cartIcontotal=cartItems.reduce((total,item)=>total+item.quantity,0)
  CartIconval.textContent=cartIcontotal
}



// function to load carticons to uI
function LoadCartui(){
    const storeItems=localStorage.getItem('cartItem')
    if(storeItems){
cartItems.push(...JSON.parse(storeItems))
UpdateCartUi()
cartTotal()
cartCountIcon()
    }
}
LoadCartui()


// function to remove all
function Removeall(){
    cartItems.splice(0);
    localStorage.removeItem('cartItem')
    UpdateCartUi();
    cartTotal()
    cartCountIcon()
}


// cartsection
const cartItemsContainer = document.querySelector('.cart-section');
cartItemsContainer.style.display = 'none';
// getting the icon value
const cartIcon = document.querySelector('#cart-icon');

cartIcon.addEventListener('click', () => {
    // Hide all other elements except the cart items container
    const elementsToHide = document.querySelectorAll('body > :not(.cart-section)');
    elementsToHide.forEach(element => {
      element.style.display = 'none';
    });
  
    // Show the cart items container
    cartItemsContainer.style.display = 'block';
  
    // Move the cart items container to the top of the document
    document.body.insertBefore(cartItemsContainer, document.body.firstChild);
  });
  

  
// function to get main page
  function back() {
    window.location.href="index.html"
}
  

document.addEventListener('DOMContentLoaded', () => {
    const checkoutLink = document.getElementById('checkout1');
    checkoutLink.addEventListener('click', showTotalAndNavigate);
});


// function to payment page
function showTotalAndNavigate(event) {
    event.preventDefault(); 

    const total = calculateTotalPrice();
    alert(`Total Price: ${total}`);
    
    window.location.href = './login.html';
}

function calculateTotalPrice() {
    let total = 0;
    for (const item of cartItems) {
        total += item.price * item.quantity;
    }
    
    return total.toFixed(2); 
}


