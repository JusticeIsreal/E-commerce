let cart = document.getElementById("cart");
let cartImg = document.getElementById("cartImg");

const cartDetails = JSON.parse(localStorage.getItem("cart")) || [];
// console.log(cartDetails);

const displayCartDetails = function (cartDetails) {
  cart.innerHTML = cartDetails.map((item, i) => {
    return ` 
          <div class="cart-con">
        <div class="cart-img" id="cartImg"><img class="cardImage" src=${
          "data:image/png;base64," + item.itemImage
        } /><button class="deletebtn">Remove</button></div>
        <div class="cart-details">
          <h2>${item.productName}</h2>
          <h3 >$ <span class="totalSum">${item.price}</span></h3> 
        
        </div>
        <div class="btn">
          <button class="addup" id="addbtn">+</button>
          <h3  class="countcart" id="count">${item.quantitySelected}</h3>
          <button class="removebtn">-</button>
        </div>
        
      </div>`;
  });
};
displayCartDetails(cartDetails);

const addBtn = document.querySelectorAll(".addup");
const removeBtn = document.querySelectorAll(".removebtn");

const deleteBtn = document.querySelectorAll(".deletebtn");
const countCart = document.querySelectorAll(".countcart");
const totalSum = document.querySelectorAll(".totalSum");

let increaseCart = Array.from(addBtn);
let cartcount = Array.from(countCart);
let decreaseCart = Array.from(removeBtn);
let deleteItem = Array.from(deleteBtn);
let totalCost = Array.from(totalSum);

console.log(totalCost[1]);

increaseCart.forEach((ite, index) => {
  let plusPlus = totalCost[index].innerHTML;
  ite.addEventListener("click", (e) => {
    cartcount[index].innerHTML = ++cartDetails[index].quantitySelected;
    totalCost[index].innerHTML = plusPlus * cartDetails[index].quantitySelected;
  });
});

decreaseCart.forEach((ite, index) => {
  let minusMinus = totalCost[index].innerHTML;
  ite.addEventListener("click", (e) => {
    cartcount[index].innerHTML = --cartDetails[index].quantitySelected;
    totalCost[index].innerHTML -= minusMinus;
    if (cartcount[index].innerHTML < 1) {
      deletProduct(index);
    }
  });
});

const deletProduct = (index) => {
  let newCartDetails = cartDetails.filter((item, i) => i !== index);
  localStorage.setItem("cart", JSON.stringify(newCartDetails));
  location.reload();
};

deleteItem.forEach((ite, index) => {
  ite.addEventListener("click", (e) => {
    deletProduct(index);
  });
});

// console.log(totalCost[1].innerHTML);
let ww =[]
cartDetails.map((item, i) => {
  // console.log(item.price);
  let uu = parseInt(item.price);
  console.log(uu)
  ww.push(uu)
 return ww
});

let totalAmount = document.querySelector(".totalAmount")
let totalPaid = ww.reduce((x, y) => x + y);
 
totalAmount.innerHTML = totalPaid
//  console.log(totalPaid);
// console.log(x)

// console.log(cartDetails);
