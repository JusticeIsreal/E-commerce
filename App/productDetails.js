// products
let cardMain = document.getElementById("cardmain");
let cartArry = [];

// call cart and product array from local storage
const productDetails = JSON.parse(localStorage.getItem("product")) || [];
const cartDetails = JSON.parse(localStorage.getItem("cart")) || [];

// function to map local storage data to screen
const populateDetails = (productDetails) => {
  let products = productDetails.map((item, i) => {
    // console.log(item.itemImage);
    return ` <div class="card-con" data-index=${i} >
        <div class="card-img"><img class="cardImage" src=${
          "data:image/png;base64," + item.itemImage
        } /></div>
        <div class="card-details">
          <h2>${item.productName}</h2>
          <h4><span>N</span> ${item.price}</h4>
          <h5><span>Qty:</span> ${item.quantity}</h5>
           <div class="btn">
           <p>${item.discription}</p>
           <button class="realBtn" id="addBtn">ADD TO CART</button>
           </div>
        </div>
       
      </div>`;
  });
  cardMain.innerHTML = products.join("");
  return cardMain;
};
populateDetails(productDetails);

// to filter products by product category
let categoryBtn = document.querySelectorAll(".category-btn");

categoryBtn.forEach(function (button) {
  button.addEventListener("click", function (e) {
    let categorySet = e.currentTarget.dataset.id;
    const filterPost = productDetails.filter(function (item) {
      if (item.category === categorySet) {
        return item.category;
      }
    });
    if (categorySet === "all") {
      return populateDetails(productDetails);
    } else {
      return populateDetails(filterPost);
    }
  });
});

let classTrend = document.querySelector(".trending");
const populateClass = (productDetails) => {
  let classItem = productDetails.filter((item, i) => {
    if (item.classProduct) {
      return true;
    }
  });
  let allClass = classItem.map((item, i) => {
    return ` <div class="card-con" data-index =${i}>
        <div class="card-img"><img class="cardImage" src=${
          "data:image/png;base64," + item.itemImage
        } /></div>
        <div class="card-details">
          <h2>${item.productName}</h2>
          <h4><span>N</span> ${item.price}</h4>
          
        </div> 
      </div>`;
  });
  classTrend.innerHTML = allClass;
};
populateClass(productDetails);

// to filter products by product class
let classBtn = document.querySelectorAll(".class-btn");
let classIte = productDetails.filter((item, i) => {
  if (item.classProduct) {
    return true;
  }
});
classBtn.forEach(function (button) {
  button.addEventListener("click", function (e) {
    let classSet = e.currentTarget.dataset.id;
    const filterClass = classIte.filter(function (item) {
      if (item.classProduct === classSet) {
        return item.classProduct;
      }
    });
    if (classSet === "all") {
      return populateClass(productDetails);
    } else {
      return populateClass(filterClass);
    }
  });
});

// filter button style toggle
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let btn4 = document.querySelector(".btn4");
let btn5 = document.querySelector(".btn5");
let btn6 = document.querySelector(".btn6");

btn1.addEventListener("click", () => {
  btn1.classList.add("button-active");
  btn2.classList.remove("button-active");
  btn3.classList.remove("button-active");
  btn4.classList.remove("button-active");
  btn5.classList.remove("button-active");
});

btn2.addEventListener("click", () => {
  btn1.classList.remove("button-active");
  btn2.classList.add("button-active");
  btn3.classList.remove("button-active");
  btn4.classList.remove("button-active");
  btn5.classList.remove("button-active");
});
btn3.addEventListener("click", () => {
  btn1.classList.remove("button-active");
  btn2.classList.remove("button-active");
  btn3.classList.add("button-active");
  btn4.classList.remove("button-active");
  btn5.classList.remove("button-active");
});
btn4.addEventListener("click", () => {
  btn1.classList.remove("button-active");
  btn2.classList.remove("button-active");
  btn3.classList.remove("button-active");
  btn4.classList.add("button-active");
  btn5.classList.remove("button-active");
});
btn5.addEventListener("click", () => {
  btn1.classList.remove("button-active");
  btn2.classList.remove("button-active");
  btn3.classList.remove("button-active");
  btn4.classList.remove("button-active");
  btn5.classList.add("button-active");
});

// filter trending class   toggle
let classBtn2 = document.querySelector(".class-btn2");
let classBtn3 = document.querySelector(".class-btn3");
let classBtn4 = document.querySelector(".class-btn4");

classBtn2.addEventListener("click", () => {
  classBtn2.classList.add("button-active");
  classBtn3.classList.remove("button-active");
  classBtn4.classList.remove("button-active");
});

classBtn3.addEventListener("click", () => {
  classBtn2.classList.remove("button-active");
  classBtn3.classList.add("button-active");
  classBtn4.classList.remove("button-active");
});
classBtn4.addEventListener("click", () => {
  classBtn2.classList.remove("button-active");
  classBtn3.classList.remove("button-active");
  classBtn4.classList.add("button-active");
});

// Add to cart function
const buttons = document.querySelectorAll(".realBtn");
let addCart = Array.from(buttons);
let cartCount = document.getElementById("cart-count");
cartCount.innerHTML = cartDetails.length;
addCart.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    if (!cartDetails.includes(productDetails[index])) {
      cartDetails.unshift(productDetails[index]);
      localStorage.setItem("cart", JSON.stringify(cartDetails));
      cartCount.innerHTML = cartDetails.length;
    } else {
      return false;
    }
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
