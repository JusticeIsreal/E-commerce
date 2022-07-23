let cart = document.getElementById("cart");
let cartImg = document.getElementById("cartImg");

const cartDetails = JSON.parse(localStorage.getItem("cart")) || [];
console.log(cartDetails);

const displayCartDetails = function (cartDetails) {
  cart.innerHTML = cartDetails.map((item, i) => {
    // console.log(item.itemImage);
    return ` <div class="cart-details" data-index=${i}>
      <td><img class="cardImage" src=${
        "data:image/png;base64," + item.itemImage
      } /></td>
      <h2>${item.productName}</h2>
      <h4>${item.price}</h4>
      <h5>${item.quantity}</h5>
      <p>${item.discription}</p>
          </div>`;
  });
};
displayCartDetails(cartDetails);
