// products
let cardMain = document.getElementById("cardmain");

const productDetails = JSON.parse(localStorage.getItem("product")) || [];

const populateDetails = (productDetails) => {
  cardMain.innerHTML = productDetails.map((item, i) => {
    console.log(item.itemImage);
    return ` <div class="card-con" data-index=${i} >
        <div class="card-img"><img class="cardImage" src=${item.itemImage} /></div>
        <div class="card-details">
          <h2>${item.productName}</h2>
          <h4>${item.price}</h4>
          <h5>${item.quantity}</h5>
          <p>${item.discription}</p>
        </div>
      </div>`;
  });
    
};
populateDetails(productDetails);
