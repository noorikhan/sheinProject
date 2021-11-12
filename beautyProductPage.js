// countdown
var countdown = () => {
  var countDate = new Date("November 18, 2021 00:00:00").getTime();
  var now = new Date().getTime();
  var gap = countDate - now;
  // console.log(countDate);

  //how the time work?
  var now = new Date().getTime();
  var second = 1000;
  var minute = second * 60;
  var hour = minute * 60;
  var day = hour * 24;

  //calculate how many days is there
  var textDay = Math.floor(gap / day);
  // console.log(textDay)
  var textHour = Math.floor((gap % day) / hour);
  var textMinute = Math.floor((gap % hour) / minute);
  var textSecond = Math.floor((gap % minute) / second);

  document.querySelector(".day").innerHTML = textDay;
  document.querySelector(".hour").innerHTML = textHour;
  document.querySelector(".minute").innerHTML = textMinute;
  document.querySelector(".second").innerHTML = textSecond;
};
// console.log(15%2); divided by hour
// countdown();
setInterval(countdown, 1000);

var categories = [
  {
    category: "bedding",
    title: "Beauty Blender",
    size: "s",
    price: "41",
    imgUrl: "/beautyImages/Beauty Blender.webp",
  },
  {
    category: "bedding",
    title: "Compact Powder",
    size: "m",
    price: "28",
    imgUrl: "/beautyImages/Compact Powder.webp",
  },
  {
    category: "bedding",
    title: "Deeply Cleanser",
    size: "m",
    price: "33",
    imgUrl: "/beautyImages/Deeply Cleaner.webp",
  },
  {
    category: "bedding",
    title: "Liquid Matte Lipstick",
    size: "s",
    price: "40",
    imgUrl: "/beautyImages/Liquid Matte Lipstick .webp",
  },
  {
    category: "bedding",
    title: "Gently Cleanser",
    size: "s",
    price: "32.99",
    imgUrl: "/beautyImages/Gently Cleaner.webp",
  },
  {
    category: "bedding",
    title: "Makeup Brush",
    size: "s",
    price: "42.23",
    imgUrl: "/beautyImages/Makeup brush.webp",
  },
  {
    category: "bedding",
    title: "Effective Cleanser",
    size: "l",
    price: "72",
    imgUrl: "/beautyImages/Effective Cleaner.webp",
  },
  {
    category: "bedding",
    title: "Bamboo Face Mask",
    size: "xl",
    price: "19",
    imgUrl: "/beautyImages/Bamboo Face Mask.webp",
  },
  //this is dining and dinner category//
  {
    category: "kitchen",
    title: "Set Of Beauty Brush",
    size: "one-size",
    price: "4",
    imgUrl: "/beautyImages/Beauty .webp",
  },
  {
    category: "kitchen",
    title: "Cheek Blush",
    size: "one-size",
    price: "5",
    imgUrl: "/beautyImages/Cheek Blush.webp",
  },

  {
    category: "kitchen",
    title: "Combo Skin Cleanser",
    size: "one-size",
    price: "8",
    imgUrl: "/beautyImages/Combo Skin Cleanser.webp",
  },
  {
    category: "kitchen",
    title: "Dry Skin Cleanser",
    size: "one-size",
    price: "12",
    imgUrl: "/beautyImages/Dry Skin Cleanser.webp",
  },
  {
    category: "kitchen",
    title: "Eye Lashes Tool",
    size: "one-size",
    price: "8",
    imgUrl: "/beautyImages/Eye Lashes Tool.webp",
  },

  {
    category: "kitchen",
    title: "Glitter Eye Shadow",
    size: "one-size",
    price: "12",
    imgUrl: "/beautyImages/Glitter Eye Shadow.webp",
  },
  {
    category: "kitchen",
    title: "Glitter Liquid Eyeshadow",
    size: "one-size",
    price: "4",
    imgUrl: "/beautyImages/Glitter Liquid Eyeshadow Trio.webp",
  },
  {
    category: "kitchen",
    title: "Heart Sticker Nails",
    size: "one-size",
    price: "3",
    imgUrl: "/beautyImages/Heart Sticker Nails.webp",
  },
  {
    category: "kitchen",
    title: "Hydrated Foundation ",
    size: "1000ml",
    price: "21",
    imgUrl: "/beautyImages/Hydrated Foundation.webp",
  },

  //home decor
  {
    category: "Kajalr",
    title: "Kajal",
    size: "one-size",
    price: "21",
    imgUrl: "/beautyImages/Kajal.webp",
  },

  {
    category: "homeDecor",
    title: "Lipstick",
    size: "one-size",
    price: "24",
    imgUrl: "/beautyImages/Lipstick.webp",
  },
  {
    category: "homeDecor",
    title: "Nail Paint",
    size: "one-size",
    price: "18",
    imgUrl: "/beautyImages/Nail Paint.webp",
  },
  {
    category: "homeDecor",
    title: "Oily Skin Cleanser",
    size: "one-size",
    price: "12",
    imgUrl: "/beautyImages/Oily Skin Cleanser.webp",
  },
];

localStorage.setItem("categoryProducts", JSON.stringify(categories));

var catObj = JSON.parse(localStorage.getItem("categoryProducts")) || [];
var cartData = JSON.parse(localStorage.getItem("cartData")) || [];
var favProductsData = JSON.parse(localStorage.getItem("favProductsData")) || [];

var body = document.getElementById("container");

var mainDiv = document.createElement("div");
mainDiv.setAttribute("id", "boxs");
body.append(mainDiv);
showProducts(catObj);

function showProducts(catObj) {
  document.getElementById("boxs").textContent = "";
  catObj.map(function (item) {
    var box = document.createElement("div");
    box.setAttribute("id", "box");

    var imgDiv = document.createElement("div");
    imgDiv.setAttribute("class", "imageDive");

    var image = document.createElement("img");
    image.setAttribute("src", item.imgUrl);
    image.addEventListener("click", function () {
      productDetails(item);
    });

    var btnDiv = document.createElement("dv");
    btnDiv.setAttribute("class", "middle");

    var b = document.createElement("button");
    b.setAttribute("class", "btn");
    b.textContent = "ADD TO BAG";

    b.addEventListener("click", function () {
      var exist = false;
      for (var j = 0; j < cartData.length; j++) {
        if (item.title == cartData[j].title) {
          exist = true;
          break;
        }
      }
      if (exist) {
        alert("product is already added to cart");
      } else {
        cartData.push(item);

        localStorage.setItem("cartData", JSON.stringify(cartData));
      }
    });

    btnDiv.append(b);

    imgDiv.append(image, btnDiv);

    var h = document.createElement("div");
    h.textContent = item.title;

    var div = document.createElement("div");
    div.setAttribute("id", "heartIcon");

    var p = document.createElement("h4");
    p.textContent = `US$${item.price}`;

    var icon = document.createElement("p");
    icon.setAttribute("id", "fav");
    icon.innerHTML = `<i class="far fa-heart"></i>`;

    icon.addEventListener("click", function () {
      var exist = false;
      for (var j = 0; j < favProductsData.length; j++) {
        if (item.title == favProductsData[j].title) {
          exist = true;
          break;
        }
      }
      if (exist) {
        alert("product is already added to favs");
      } else {
        favProductsData.push(item);
        localStorage.setItem(
          "favProductsData",
          JSON.stringify(favProductsData)
        );
      }
    });

    div.append(p, icon);
    box.append(imgDiv, h, div);
    mainDiv.append(box);
  });
}

function productDetails(item) {
  console.log(item);
  localStorage.setItem("seleProd", JSON.stringify(item));
  window.location.href = "productDetails.html";
}

var slider = document.getElementById("myRange");
var p = document.querySelector("p");
p.innerHTML = `US$${slider.value}`;

slider.oninput = function () {
  p.innerHTML = `US$${this.value}`;
};

slider.addEventListener("change", sliderFun);
function sliderFun(e) {
  console.log(e.target.value);
  var res = catObj.filter(function (item) {
    return Number(e.target.value) >= item.price;
  });
  showProducts(res);
}

//check box
var boolObj = {
  s: true,
  xl: true,
  m: true,
  l: true,
};
for (key in boolObj) {
  document.getElementById(key).addEventListener("click", checkBoxFun);
}
var checkRes = [];
function checkBoxFun(e) {
  e.target.checked;
  if (e.target.checked) {
    var res = catObj.filter(function (item) {
      return e.target.value == item.size;
    });
    checkRes = [...checkRes, ...res];
    showProducts(checkRes);
  } else {
    checkRes = checkRes.filter(function (item) {
      return e.target.value != item.size;
    });
    if (checkRes.length > 0) {
      showProducts(checkRes);
    } else {
      showProducts(catObj);
    }
  }
}

// categry filteration
document.getElementById("cat").addEventListener("click", catFun);

function catFun(e) {
  var res = catObj.filter(function (item) {
    return e.target.value == item.category;
  });
  showProducts(res);
}

//filter by price

document.getElementById("item").addEventListener("change", priceFun);

function priceFun(e) {
  var res = catObj.sort(function (a, b) {
    if (e.target.value == "l") return a.price - b.price;
    else return b.price - a.price;
  });
  showProducts(res);
}

//clickable category btn

document.getElementById("bedding").addEventListener("click", btnCatFun);
document.getElementById("kitchen").addEventListener("click", btnCatFun);
document.getElementById("homeDecor").addEventListener("click", btnCatFun);

function btnCatFun(e) {
  var res = catObj.filter(function (item) {
    return e.target.id == item.category;
  });
  showProducts(res);
}

// user tab
document.getElementById("user").addEventListener("click", signInAndSignup);
function signInAndSignup() {
  window.location.href = "signInAndSignup.html";
}

// home tab
document.getElementById("home").addEventListener("click", function () {
  window.location.href = "home.html";
});

// kids tab
document.getElementById("kids").addEventListener("click", function () {
  window.location.href = "kids.html";
});

// logo
document.getElementById("logo").addEventListener("click", function () {
  window.location.href = "home.html";
});

// men tab
document.getElementById("men").addEventListener("click", function () {
  window.location.href = "men.html";
});

// curve+plus tab
document.getElementById("curve+plus").addEventListener("click", function () {
  window.location.href = "curve+plus.html";
});
