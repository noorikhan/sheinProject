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

// slider one
var responsiveSlider = function () {
	var slider = document.getElementById("slider");
	var sliderWidth = slider.offsetWidth;
	var slideList = document.getElementById("slideWrap");
	var count = 1;
	var items = slideList.querySelectorAll("li").length;

	window.addEventListener("resize", function () {
		sliderWidth = slider.offsetWidth;
	});

	var nextSlide = function () {
		if (count < items) {
			slideList.style.left = "-" + count * sliderWidth + "px";
			count++;
		} else if ((count = items)) {
			slideList.style.left = "0px";
			count = 1;
		}
	};

	setInterval(function () {
		nextSlide();
	}, 2000);
};

// shop-by-category
var category = [
	{
		title: "Dresses",
		img: "images/dressesIcon.png",
	},
	{
		title: "Tops",
		img: "images/topIcon.png",
	},
	{
		title: "Sweatshirts",
		img: "images/sweatshirtIcon.png",
	},
	{
		title: "Knitwear",
		img: "images/knitwearIcon.png",
	},
	{
		title: "Outerwear",
		img: "images/outer_wear.png",
	},
	{
		title: "Activewear",
		img: "images/activeWearIcon.png",
	},
	{
		title: "Lingerie & Loungewear",
		img: "images/LingeriIcon.png",
	},
	{
		title: "Bottoms",
		img: "images/BottomsIcon.png",
	},
	{
		title: "Denim",
		img: "images/denimIcon.png",
	},
	{
		title: "Jumpsuits & Two-pieces",
		img: "images/JumpSuits.png",
	},
];

var flashs = [
	{ img: "flashSale/saleImage1.jpg", price: "US$12.90", discount: "US$22.21" },
	{ img: "flashSale/saleImage2.jpg", price: "US$18.21", discount: "US$42.00" },
	{ img: "flashSale/saleImage4.jpg", price: "US$12.21", discount: "US$28.00" },
	{ img: "flashSale/saleImage5.jpg", price: "US$21.20", discount: "US$50.00" },
	{ img: "flashSale/saleImage6.jpg", price: "US$28.00", discount: "US$75.00" },
];

flash();

function flash() {
	flashs.map(function (item) {
		var imgContainer = document.createElement("div");
		imgContainer.setAttribute("id", "imgContainer");
		var img = document.createElement("img");
		img.setAttribute("src", item.img);
		var para = document.createElement("p");
		para.setAttribute("id", "pricePara");
		para.textContent = item.discount;
		imgContainer.append(img, item.price, para);
		var flashDiv = document.getElementById("flash");
		flashDiv.append(imgContainer);
	});
}

showCategory();

function showCategory() {
	category.map(function (item) {
		var box = document.createElement("div");
		box.setAttribute("id", "boxes");
		var imageBox = document.createElement("div");
		imageBox.setAttribute("id", "imageBox");
		var image = document.createElement("img");
		image.setAttribute("src", item.img);
		var name = document.createElement("p");
		name.setAttribute("id", "shopCatText");
		name.textContent = item.title;
		imageBox.appendChild(image);
		box.append(imageBox, name);
		document.getElementById("categoryBox").append(box);
	});
}

var myIndex = 0;
carousel();
function carousel() {
	var i;
	var x = document.getElementsByClassName("mySlides");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	myIndex++;
	if (myIndex > x.length) {
		myIndex = 1;
	}
	x[myIndex - 1].style.display = "block";
	setTimeout(carousel, 2000); // Change image every 2 seconds
}

// user tab
document.getElementById("user").addEventListener("click", signInAndSignup);
function signInAndSignup() {
	window.location.href = "signInAndSignup.html";
}

// home tab
document.getElementById("home").addEventListener("click", function () {
	window.location.href = "index.html";
});

// kids tab
document.getElementById("kids").addEventListener("click", function () {
	window.location.href = "kids.html";
});

// logo
document.getElementById("logo").addEventListener("click", function () {
	window.location.href = "index.html";
});

// user tab
document.getElementById("user").addEventListener("click", signInAndSignup);
function signInAndSignup() {
	window.location.href = "signInAndSignup.html";
}

// home tab
document.getElementById("home").addEventListener("click", function () {
	window.location.href = "index.html";
});

// kids tab
document.getElementById("kids").addEventListener("click", function () {
	window.location.href = "kids.html";
});

// logo
document.getElementById("logo").addEventListener("click", function () {
	window.location.href = "index.html";
});

// men tab
document.getElementById("men").addEventListener("click", function () {
	window.location.href = "men.html";
});

// curve+plus tab
document.getElementById("curve+plus").addEventListener("click", function () {
	window.location.href = "curve+plus.html";
});

// beauty tab
document.getElementById("beauty").addEventListener("click", function () {
	window.location.href = "beauty.html";
});

// cart icon
document.getElementById("bags").addEventListener("click", function () {
	window.location.href = "cart.html";
});

// fav icon
document.getElementById("favs").addEventListener("click", function () {
	window.location.href = "fav.html";
});

var cartData = JSON.parse(localStorage.getItem("cartData"));
var favProductsData = JSON.parse(localStorage.getItem("favProductsData"));

// no. of cart items show when page is loading
// no. of fav cart items show when page is loading
window.onload = function () {
	document.getElementById("bagItemsCount").textContent = cartData.length;
	document.getElementById("favItemsCount").textContent = favProductsData.length;
};
