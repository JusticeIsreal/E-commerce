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
          <h4>${item.price}</h4>
          <h5>${item.quantity}</h5>
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

let increaseCart = Array.from(addBtn);
let cartcount = Array.from(countCart);
let decreaseCart = Array.from(removeBtn);
let deleteItem = Array.from(deleteBtn);

increaseCart.forEach((ite, index) => {
  ite.addEventListener("click", (e) => {
    cartcount[index].innerHTML = ++cartDetails[index].quantitySelected;
  });
});

decreaseCart.forEach((ite, index) => {
  ite.addEventListener("click", (e) => {
    cartcount[index].innerHTML = --cartDetails[index].quantitySelected;
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
