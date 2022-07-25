const productDetails = JSON.parse(localStorage.getItem("product")) || [];
const [updateDB] = JSON.parse(localStorage.getItem("update")) || [];

let display = document.getElementById("display");
let cardMain = document.getElementById("cardmain");

const populateDetails = (productDetails) => {
  let adminTable = productDetails.map((item, i) => {
    // console.log(item);
    return ` <tr>
      <td><img class="cardImage" src=${
        "data:image/png;base64," + item.itemImage
      } /></td>
          <td>${item.productName}</td>
           <td>${item.category}</td>
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

// function to toggle side nav for tablet and mobile view
let sideNav = document.querySelector(".sidebar-left");
let menuBtn = document.querySelector(".bx-menu");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("rotate");
  sideNav.classList.toggle("open");
});


let topCardDetails = document.querySelector(".top-cards");
topCardDetails.innerHTML = `  <div class="card-1">
            <h3>Store count</h3>
            <h1>${productDetails.length}</h1>
            <span>Items displayed</span>
          </div>
          <div class="card-1">
            <h3>Requests</h3>
            <h1>200</h1>
            <span>Impressions</span>
          </div>
          <div class="card-1">
            <h3>Clients</h3>
            <h1>9,458</h1>
            <span>Registrations</span>
          </div>
          <div class="card-1">
            <h3>Order</h3>
            <h1>56,731</h1>
            <span>Delievered</span>
          </div>`;

// let profileChange = document.querySelector(".update-profile");
// let infoCon = document.querySelector(".change-info");

// profileChange.addEventListener("click", () => {
//   infoCon.classList.toggle("update");
// });

// let settingbtn = document.querySelector(".settingbtn");
// let settingpage = document.querySelector(".setting-page");
// let headhome = document.querySelector(".headhome");

// headhome.addEventListener("click", () => {
//   settingpage.classList.remove("showsetting");
// });
// settingbtn.addEventListener("click", () => {
//   sideNav.classList.remove("open");
//   settingpage.classList.toggle("showsetting");
// });
