// products
let cardMain = document.getElementById("cardmain");
let cartArry = [];

const productDetails = JSON.parse(localStorage.getItem("product")) || [];
const cartDetails = JSON.parse(localStorage.getItem("cart")) || [];

const populateDetails = (productDetails) => {
  cardMain.innerHTML = productDetails.map((item, i) => {
    // console.log(item.itemImage);
    return ` <div class="card-con" data-index=${i} >
        <div class="card-img"><img class="cardImage" src=${
          "data:image/png;base64," + item.itemImage
        } /></div>
        <div class="card-details">
          <h2>${item.productName}</h2>
          <h4>${item.price}</h4>
          <h5>${item.quantity}</h5>
          <p>${item.discription}</p>
           <div class="btn"><button class="realBtn" id="addBtn">ADD TO CART</button></div>
        </div>
       
      </div>`;
  });
  return cardMain;
};
populateDetails(productDetails);

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
