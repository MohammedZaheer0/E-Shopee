let InnerUpperDiv = document.querySelector(".innerupperdiv");
let InnerContentDiv = document.querySelector(".innercontentdiv");
let H1Tag = document.querySelector(".h1tag");
let PTag = document.querySelector(".ptag");
let Button = document.querySelector(".learnmore");
let Image = document.querySelector(".newarraival");
let P1 = document.querySelector(".p1");
P1.setAttribute("id","p1");
let P2 = document.querySelector(".p2");
P2.setAttribute("style","animation: slide 1.5s 1");
P2.setAttribute("id","p2");
let P3 = document.querySelector(".p3");
P3.setAttribute("id","p3");



P1.addEventListener("click",function(){
    H1Tag.textContent = "Discover New Arrivals";
    PTag.innerHTML = "Browse our latest collection of trendy and fashionable clothing, accessories, and more. Stay up-to-date with the latest fashion trends and find your perfect style.";
    Button.textContent = "Learn More";
    Image.setAttribute("src","/Home/Images/newarraival-unscreen.gif");
});

P2.addEventListener("click",function(){
    H1Tag.textContent = "Summer Sale";
    PTag.innerHTML = "Get ready for the summer season with our exclusive summer sale. Enjoy huge discounts on swimwear, beach essentials, and outdoor gear. Don't miss out on the best deals!";
    Button.textContent = "Amazing Deals";
    Image.setAttribute("src","/Home/Images/summersale.png");
});



P3.addEventListener("click",function(){
    H1Tag.textContent = "Free Shipping on All Orders";
    PTag.innerHTML = "Shop with confidence and take advantage of our free shipping offer on all orders. Get your favorite products delivered right to your doorstep without any additional cost.";
    Button.textContent = "Get Started";
    Image.setAttribute("src","/Home/Images/freeshipping.png");
});


let OuterCart = document.getElementById("outercart");

async function getAPI(){
    let response = await fetch("https://fakestoreapi.com/products");
    let data = await response.json();
    show(data);   
}
getAPI();

let ProductId = 1;

function show(data){
    let tab = "";
        for(let d of data){
            tab+=   `<div class="cart" data-id="${ProductId}">
                    <img src="${d.image}" class="cart-image" alt="" srcset="" draggable="false">
                    <p class="cart-content">${d.title}</p>
                    <p class="cart-price">Price : $ ${d.price}</p>
                    </div>`;
                    ProductId++;                    
                }            
                OuterCart.innerHTML = tab;     
                Carts = document.querySelectorAll(".cart");
                Carts.forEach(cart =>{
                 cart.addEventListener("click",function(){
                     let PId = cart.getAttribute("data-id");
                     window.location.href = `Product.html?id=${PId}`;
                 });
                });          
                
    }

    


