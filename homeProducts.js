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
		imgUrl: "/beddingCategory/bedspreadandRunners/gradientColorSmall.webp",
	},
	{
		category: "bedding",
		title: "Pizza Print Spreadsheet",
		size: "m",
		price: "28",
		imgUrl: "/beddingCategory/bedspreadandRunners/pizaaPrint.webp",
	},
	{
		category: "bedding",
		title: "Star Print Spreadsheet",
		size: "m",
		price: "33",
		imgUrl: "/beddingCategory/bedspreadandRunners/starPrint.webp",
	},
	{
		category: "bedding",

		title: "Christmas Pattern Spreadsheet",
		size: "s",
		price: "40",
		imgUrl: "/beddingCategory/bedspreadandRunners/christmasPattern.webp",
	},
	{
		category: "bedding",
		title: "Christmas Santa Print Blanket",
		size: "s",
		price: "32",
		imgUrl: "/beddingCategory/blankets/christmasSanta.webp",
	},
	{
		category: "bedding",
		title: "Halloween Spider Print",
		size: "s",
		price: "42",
		imgUrl: "/beddingCategory/blankets/halloweenSpider.webp",
	},
	{
		category: "bedding",
		title: "Christmas Deer Print Blanket",
		size: "l",
		price: "72",
		imgUrl: "/beddingCategory/blankets/christmas Deer blanket small.webp",
	},
	{
		category: "bedding",
		title: "Pillows Santa Printed",
		size: "xl",
		price: "19",
		imgUrl: "/beddingCategory/sheetsAndPillowcase/pillowSanta.webp",
	},
	//this is dining and dinner category//
	{
		category: "kitchen",
		title: "Elk Spoon Christmas",
		size: "one-size",
		price: "4",
		imgUrl: "/diningkitchen/kitchen/ChristmasElkSpoon.webp",
	},
	{
		category: "kitchen",
		title: "Christmas Pattern Place mate",
		size: "one-size",
		price: "5",
		imgUrl: "/diningkitchen/kitchen/christamasPlacematPattern.webp",
	},

	{
		category: "kitchen",
		title: "Christmas Wine Glass Set",
		size: "one-size",
		price: "8",
		imgUrl: "/diningkitchen/kitchen/christmasWineGlass.webp",
	},
	{
		category: "kitchen",
		title: "Christmas Elk Print ",
		size: "one-size",
		price: "12",
		imgUrl: "/diningkitchen/kitchen/christmasElkPrint.webp",
	},
	{
		category: "kitchen",
		title: "Floral Apron",
		size: "one-size",
		price: "8",
		imgUrl: "/diningkitchen/kitchen/random floral apron.webp",
	},

	{
		category: "kitchen",
		title: "Lunchbox",
		size: "one-size",
		price: "12",
		imgUrl: "/diningkitchen/kitchen/random color lunchbox .webp",
	},
	{
		category: "kitchen",
		title: "Stainless Steel Garlic Press",
		size: "one-size",
		price: "4",
		imgUrl: "/diningkitchen/kitchen/stainless steel garlic press small.webp",
	},
	{
		category: "kitchen",
		title: "Stainless Steel Spoon",
		size: "one-size",
		price: "3",
		imgUrl: "/diningkitchen/kitchen/stainless steel spoon.webp",
	},
	{
		category: "kitchen",
		title: "Gradient Water Bottle ",
		size: "1000ml",
		price: "21",
		imgUrl: "/diningkitchen/kitchen/gradient water bottle.webp",
	},

	//home decor
	{
		category: "homeDecor",
		title: "Marble Print Wallpaper",
		size: "one-size",
		price: "21",
		imgUrl: "/homeDecor/marble print wallpaper small.webp",
	},

	{
		category: "homeDecor",
		title: "Moon Shaped Tassel Home decor",
		size: "one-size",
		price: "24",
		imgUrl: "/homeDecor/moon shaped tassel home decor  small.webp",
	},
	{
		category: "homeDecor",
		title: "Plain Plush Home Decor",
		size: "one-size",
		price: "18",
		imgUrl: "/homeDecor/plain plush home decor small.webp",
	},
	{
		category: "homeDecor",
		title: "Slogan Printed Cushion Cover",
		size: "one-size",
		price: "12",
		imgUrl: "/homeDecor/slogan printed cushion cover small.webp",
	},
	{
		category: "homeDecor",
		title: "Slogan Printed Mirror",
		size: "one-size",
		price: "19",
		imgUrl: "/homeDecor/slogan printed mirror small.webp",
	},
	{
		category: "homeDecor",
		title: "Sun Printed Tapestry",
		size: "one-size",
		price: "22",
		imgUrl: "/homeDecor/sun print tapestry.webp",
	},
	{
		category: "homeDecor",
		title: "Toilet Entrance Sticker ",
		size: "one-size",
		price: "18",
		imgUrl: "/homeDecor/toilet entrance sticker.webp",
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
				document.getElementById("bagItemsCount").textContent = cartData.length;
				alert("product is successfully added to bag");
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
				alert("product is already added to favourites");
			} else {
				favProductsData.push(item);
				localStorage.setItem(
					"favProductsData",
					JSON.stringify(favProductsData)
				);
				document.getElementById("favItemsCount").textContent =
					favProductsData.length;
				alert("product is successfully added to favourites");
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
	window.location.href = "homeProductDetails.html";
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

// category filteration
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

// no. of cart items show when page is loading
// no. of fav cart items show when page is loading
window.onload = function () {
	document.getElementById("bagItemsCount").textContent = cartData.length;
	document.getElementById("favItemsCount").textContent = favProductsData.length;
};
