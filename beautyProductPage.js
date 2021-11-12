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
    title: "Gradient Spreadsheet",
    size: "s",
    price: "41",
    imgUrl:
      "/beautyImages/1599446770e0515ef309fb8de27f85c3b0c030a851_thumbnail_405x552.webp",
  },
  {
    category: "bedding",
    title: "Pizaa Print Spreadheet",
    size: "m",
    price: "28",
    imgUrl:
      "/beautyImages/1629854417d0a7974ea3671deed87494f65f990932_thumbnail_405x552.webp",
  },
  {
    category: "bedding",
    title: "Star Print Spreadsheet",
    size: "m",
    price: "33",
    imgUrl:
      "/beautyImages/1631155189a9489a780f0225c5f329751e3060bae1_thumbnail_405x552.webp",
  },
  {
    category: "bedding",

    title: "Christmas Pattern Spreasheet",
    size: "s",
    price: "40",
    imgUrl:
      "/beautyImages/1631155202f26ab19bb51b4eca3d2e130833d4a93b_thumbnail_405x552.webp",
  },
  {
    category: "bedding",
    title: "Christmas Santa Print Blanket",
    size: "s",
    price: "32.99",
    imgUrl:
      "/beautyImages/1631155202f57fd75bb270a3241311ad5895a63fd5_thumbnail_405x552.webp",
  },
  {
    category: "bedding",
    title: "Halloween Spider Print",
    size: "s",
    price: "42.23",
    imgUrl:
      "/beautyImages/1634895596b352dfe5ed5eb7a42ea79e3ac716c0cf_thumbnail_405x552.webp",
  },
  {
    category: "bedding",
    title: "Christmas Deer Print Blanket",
    size: "l",
    price: "72",
    imgUrl:
      "/beautyImages/16007614381f7f98bf556d79a28c83e13d28eefe35_thumbnail_405x552.webp",
  },
  {
    category: "bedding",
    title: "Pillows Santa Printed",
    size: "xl",
    price: "19",
    imgUrl: "/beautyImages/Bamboo Face Mask.webp",
  },
  //this is dining and dinner category//
  {
    category: "kitchen",
    title: "Elk Spoon Chirstmas",
    size: "one-size",
    price: "4",
    imgUrl: "/beautyImages/Beauty .webp",
  },
  {
    category: "kitchen",
    title: "Christmas Pattern Placemat",
    size: "one-size",
    price: "5",
    imgUrl: "/beautyImages/Cheek Blush.webp",
  },

  {
    category: "kitchen",
    title: "Christmas Wine Glass Set",
    size: "one-size",
    price: "8",
    imgUrl: "/beautyImages/Combo Skin Cleanser.webp",
  },
  {
    category: "kitchen",
    title: "Christmas Elk Print ",
    size: "one-size",
    price: "12",
    imgUrl: "/beautyImages/Dry Skin Cleanser.webp",
  },
  {
    category: "kitchen",
    title: "Floral Apron",
    size: "one-size",
    price: "8",
    imgUrl: "/beautyImages/Eye Lashes Tool.webp",
  },

  {
    category: "kitchen",
    title: "Lunchbox",
    size: "one-size",
    price: "12",
    imgUrl: "/beautyImages/Glitter Eye Shadow.webp",
  },
  {
    category: "kitchen",
    title: "Stainless Steel Garlic Press",
    size: "one-size",
    price: "4",
    imgUrl: "/beautyImages/Glitter Liquid Eyeshadow Trio.webp",
  },
  {
    category: "kitchen",
    title: "Stainless Steel Spoon",
    size: "one-size",
    price: "3",
    imgUrl: "/beautyImages/Heart Sticker Nails.webp",
  },
  {
    category: "kitchen",
    title: "Gradient Water Bottle ",
    size: "1000ml",
    price: "21",
    imgUrl: "/beautyImages/Hydrated Foundation.webp",
  },

  //home decor
  {
    category: "homeDecor",
    title: "Marble Print Wallpaper",
    size: "one-size",
    price: "21",
    imgUrl: "/beautyImages/Kajal.webp",
  },

  {
    category: "homeDecor",
    title: "Moon Shaped Tassesl Home decor",
    size: "one-size",
    price: "24",
    imgUrl: "/beautyImages/Lipstick.webp",
  },
  {
    category: "homeDecor",
    title: "Plain Plush Home Decor",
    size: "one-size",
    price: "18",
    imgUrl: "/beautyImages/Nail Paint.webp",
  },
  {
    category: "homeDecor",
    title: "Slogan Printed Cushion Cover",
    size: "one-size",
    price: "12",
    imgUrl: "/beautyImages/Oily Skin Cleanser.webp",
  },
  //   {
  //     category: "homeDecor",
  //     title: "Slogan Printed Mirror",
  //     size: "one-size",
  //     price: "19",
  //     imgUrl: "/homeDecor/slogan printed mirror small.webp",
  //   },
  //   {
  //     category: "homeDecor",
  //     title: "Sun Printed Tapestry",
  //     size: "one-size",
  //     price: "22",
  //     imgUrl: "/homeDecor/sun print tapestry.webp",
  //   },
  //   {
  //     category: "homeDecor",
  //     title: "Toilet Entrance Sticker ",
  //     size: "one-size",
  //     price: "18.00",
  //     imgUrl: "/homeDecor/toilet entrance sticker.webp",
  //   },
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
  res = catObj
    .sort(function (a, b) {
      return a.price - b.price;
    })
    .filter(function (item) {
      return item.price <= e.target.value;
    });
  showProducts(res);
}

//check box

document.getElementById("checkBoxs").addEventListener("click", checkBoxFun);

var checkRes = [];
function checkBoxFun(e) {
  var res = catObj.filter(function (item) {
    return e.target.value == item.size;
  });
  checkRes.push(...res);
  showProducts(checkRes);
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
