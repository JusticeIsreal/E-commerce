// products
let cardMain = document.getElementById("cardmain");
let cartArry = [];

// call cart and product array from local storage
const productDetails = JSON.parse(localStorage.getItem("product")) || [];
const cartDetails = JSON.parse(localStorage.getItem("cart")) || [];

// function to map local storage data to screen
const populateDetails = (productDetails) => {
  let products = productDetails.map((item, i) => {
    // console.log(item.itemImage);
    return ` <div class="card-con" data-index=${i} >
        <div class="card-img"><img class="cardImage" src=${
          "data:image/png;base64," + item.itemImage
        } /></div>
        <div class="card-details">
          <h2>${item.productName}</h2>
          <h4><span>N</span> ${item.price}</h4>
          <h5><span>Qty:</span> ${item.quantity}</h5>
           <div class="btn">
           <p>${item.discription}</p>
           <button class="realBtn" id="addBtn">ADD TO CART</button>
           </div>
        </div>
       
      </div>`;
  });
  cardMain.innerHTML = products.join("");
  return cardMain;
};
populateDetails(productDetails);

// to filter products by product category
let categoryBtn = document.querySelectorAll(".category-btn");

categoryBtn.forEach(function (button) {
  button.addEventListener("click", function (e) {
    let categorySet = e.currentTarget.dataset.id;
    // e.target.classList.toggle("button-active");
    const filterPost = productDetails.filter(function (item) {
      if (item.category === categorySet) {
        return item.category;
      }
    });
    if (categorySet === "all") {
      return populateDetails(productDetails);
    } else {
      return populateDetails(filterPost);
    }
  });
});

// filter button style toggle
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let btn4 = document.querySelector(".btn4");
let btn5 = document.querySelector(".btn5");
let btn6 = document.querySelector(".btn6");

btn1.addEventListener("click", () => {
  btn1.classList.add("button-active");
  btn2.classList.remove("button-active");
  btn3.classList.remove("button-active");
  btn4.classList.remove("button-active");
  btn5.classList.remove("button-active");
});

btn2.addEventListener("click", () => {
  btn1.classList.remove("button-active");
  btn2.classList.add("button-active");
  btn3.classList.remove("button-active");
  btn4.classList.remove("button-active");
  btn5.classList.remove("button-active");
});
btn3.addEventListener("click", () => {
  btn1.classList.remove("button-active");
  btn2.classList.remove("button-active");
  btn3.classList.add("button-active");
  btn4.classList.remove("button-active");
  btn5.classList.remove("button-active");
});
btn4.addEventListener("click", () => {
  btn1.classList.remove("button-active");
  btn2.classList.remove("button-active");
  btn3.classList.remove("button-active");
  btn4.classList.add("button-active");
  btn5.classList.remove("button-active");
});
btn5.addEventListener("click", () => {
  btn1.classList.remove("button-active");
  btn2.classList.remove("button-active");
  btn3.classList.remove("button-active");
  btn4.classList.remove("button-active");
  btn5.classList.add("button-active");
});

let addToCartCon = document.querySelectorAll(".card-con");
let addToCartPop = document.querySelectorAll(".btn");

addToCartCon.forEach(function (con) {
  con.addEventListener("click", (e) => {
    console.log(e.target);
    console.log(con);
    // addToCartPop.forEach(function (pop) {
    //   console.log(pop[e.target.dataset.index])
    // })
    let outPut = addToCartPop;
    outPut = Array.from(outPut);
    // console.log(outPut);
    // console.log(outPut[e.target.dataset.index]);

    let yy = outPut[e.target.dataset.index];
    console.log(yy);

    // if (con === e.target) {
    //   yy.classList.add("addToCartPop");
    // } else {
    //   yy.classList.remove("addToCartPop");
    // }
  });

});

const buttons = document.querySelectorAll(".realBtn");
let addCart = Array.from(buttons);
let cartCount = document.getElementById("cart-count");
cartCount.innerHTML = cartDetails.length;
addCart.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    cartDetails.unshift(productDetails[index]);
    localStorage.setItem("cart", JSON.stringify(cartDetails));
    cartCount.innerHTML = cartDetails.length;
  });
});

// for toggle bar effect
let menuBar = document.querySelector(".bx-menu");
let leftNav = document.querySelectorAll(".left");
let rightNav = document.querySelectorAll(".right");

leftNav.forEach(function (nav) {
  menuBar.addEventListener("click", () => {
    nav.classList.toggle("active");
    console.log(leftNav);
    menuBar.classList.toggle("active");
  });
});
rightNav.forEach(function (nav) {
  menuBar.addEventListener("click", () => {
    nav.classList.toggle("active");
    console.log(leftNav);
  });
});
