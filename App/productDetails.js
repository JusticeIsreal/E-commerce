// products
let cardMain = document.getElementById("cardmain");
let cartArry = [];

const productDetails = JSON.parse(localStorage.getItem("product")) || [];

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

addCart.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    cartArry.push(productDetails[index]);
    localStorage.setItem("cart", JSON.stringify(cartArry));
  });
});
