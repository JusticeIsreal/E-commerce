let submitBtn = document.getElementById("submit-btn");
let discription = document.getElementById("discription");
let quantity = document.getElementById("quantity");
let price = document.getElementById("price");
let productName = document.getElementById("product-name");
let uplaodImg = document.getElementById("uplaod-img");
let preview = document.getElementById("preview");
let previewCon = document.getElementById("preview-con");
let formCon = document.getElementById("form-con");

// console.log(productDetails)

const productDetails = JSON.parse(localStorage.getItem("product")) || [];

uplaodImg.addEventListener("change", (e) => {
  e.preventDefault();

  let img = e.target.files[0];
  let imgSrc = URL.createObjectURL(img);

  preview.src = imgSrc;
  console.log(preview.src);
  console.log(imgSrc);
});

const postItems = (e) => {
  e.preventDefault();
  const itemDetails = {
    itemImage: preview.src,
    productName: productName.value,
    price: price.value,
    quantity: quantity.value,
    discription: discription.value,
  };
  productDetails.push(itemDetails);
  localStorage.setItem("product", JSON.stringify(productDetails));
};
submitBtn.addEventListener("click", postItems);

// products
// let display = document.getElementById("display");

// // const productDetails = JSON.parse(localStorage.getItem("product")) || [];

// const populateDetails = (productDetails) => {
//   display.innerHTML = productDetails.map((item, i) => {
//     return ` <div class="card-con" data-index=${i} >
//         <div class="card-img"><img class="cardImage" src=${item.itemImage} /></div>
//         <div class="card-details">
//           <h2>${item.productName}</h2>
//           <h4>${item.price}</h4>
//           <h5>${item.quantity}</h5>
//           <p>${item.discription}</p>
//         </div>
//       </div>`;
//   });
// };
// populateDetails(productDetails);
