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
const [updateDB] = JSON.parse(localStorage.getItem("update")) || [];

productName.value = updateDB ? updateDB.productName : productName.value;
preview.src = updateDB
  ? `data:image/png;base64, ${updateDB.itemImage}`
  : preview.src;
price.value = updateDB ? updateDB.price : price.value;
quantity.value = updateDB ? updateDB.quantity : quantity.value;
quantitySelected.value = updateDB
  ? updateDB.quantitySelected
  : quantitySelected.value;
discription.value = updateDB ? updateDB.discription : discription.value;
itemId = updateDB ? updateDB.productId : new Date().valueOf();

uplaodImg.addEventListener("change", (e) => {
  e.preventDefault();
  let img = e.target.files[0];
  let imgSrc = URL.createObjectURL(img);
  preview.src = imgSrc;
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
    productId: itemId,
    itemImage: getBase64Image(preview),
    productName: productName.value,
    price: price.value,
    quantity: quantity.value,
    quantitySelected: quantitySelected.value,
    discription: discription.value,
  };

  if (updateDB) {
    productDetails.map((item, index) => {
      if (item.productId === itemDetails.productId) {
        productDetails[index] = itemDetails;
      }
    });
    localStorage.removeItem("update")
  } else {
    productDetails.push(itemDetails);
  }
  localStorage.setItem("product", JSON.stringify(productDetails));
  location.reload();
};
submitBtn.addEventListener("click", postItems);

let display = document.getElementById("display");
let cardMain = document.getElementById("cardmain");

const populateDetails = (productDetails) => {
  let adminTable = productDetails.map((item, i) => {
    // console.log(item);
    return ` <tr>
      <td><button class="deleteTable">Delete</button><button class="editTable">Edit</button><img class="cardImage" src=${
        "data:image/png;base64," + item.itemImage
      } /></td>
          <td>${item.productName}</td>
          <td>${item.price}</td>
          <td>${item.quantity}</td>
          <td>${item.discription}</td> </tr> `;
  });
  display.innerHTML = adminTable.join("");
};
populateDetails(productDetails);

let deleteTable = document.querySelectorAll(".deleteTable");
let deleteTableRow = Array.from(deleteTable);

let editTable = document.querySelectorAll(".editTable");
let editTableRow = Array.from(editTable);

const deleteTableItem = (index) => {
  let newTable = productDetails.filter((item, i) => i !== index);
  localStorage.setItem("product", JSON.stringify(newTable));
  location.reload();
};

deleteTableRow.forEach((ite, index) => {
  ite.addEventListener("click", (e) => {
    deleteTableItem(index);
  });
});

const editTableItem = (e, index) => {
  let filterArray = productDetails.filter((item, i) => i === index);
  localStorage.setItem("update", JSON.stringify(filterArray));
  location.reload();
};

editTableRow.forEach((ite, index) => {
  ite.addEventListener("click", (e) => {
    editTableItem(e.target, index);
  });
});
