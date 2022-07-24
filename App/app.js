let submitBtn = document.getElementById("submit-btn");
let discription = document.getElementById("discription");
let quantity = document.getElementById("quantity");
let price = document.getElementById("price");
let productName = document.getElementById("product-name");
let uplaodImg = document.getElementById("uplaod-img");
let preview = document.getElementById("preview");
let previewCon = document.getElementById("preview-con");
let formCon = document.getElementById("form-con");
let quantitySelected = document.getElementById("quantity-selected");

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

const getBase64Image = (img) => {
  const canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0, img.width, img.height);
  const dataURL = canvas.toDataURL("image/png");
  return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
};

const postItems = (e) => {
  e.preventDefault();
  const itemDetails = {
    itemImage: getBase64Image(preview),
    productName: productName.value,
    price: price.value,
    quantity: quantity.value,
    quantitySelected: quantitySelected.value,
    discription: discription.value,
  };
  productDetails.push(itemDetails);
  localStorage.setItem("product", JSON.stringify(productDetails));
};
submitBtn.addEventListener("click", postItems);

let display = document.getElementById("display");

// products
let cardMain = document.getElementById("cardmain");

const populateDetails = (productDetails) => {
  display.innerHTML = productDetails.map((item, i) => {
    console.log(item);
    return ` <tr>
      <td><img class="cardImage" src=${
        "data:image/png;base64," + item.itemImage
      } /></td>
          <td>${item.productName}</td>
          <td>${item.price}</td>
          <td>${item.quantity}</td>
          <td>${item.discription}</td> </tr>`;
  });
};
populateDetails(productDetails);
