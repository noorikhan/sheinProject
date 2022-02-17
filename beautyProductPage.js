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

var beautyCategories = [
	{
		category: "tool",
		title: "Beauty Blender",
		type: "other",
		price: "41",
		imgUrl: "/beautyImages/Beauty Blender.webp",
	},
	{
		category: "makeup",
		title: "Compact Powder",
		type: "powder",
		price: "28",
		imgUrl: "/beautyImages/Compact Powder.webp",
	},
	{
		category: "personalCare",
		title: "Deeply Cleanser",
		type: "liquid",
		price: "33",
		imgUrl: "/beautyImages/Deeply Cleaner.webp",
	},
	{
		category: "makeup",
		title: "Liquid Matte Lipstick",
		type: "liquid",
		price: "40",
		imgUrl: "/beautyImages/Liquid Matte Lipstick .webp",
	},
	{
		category: "personalCare",
		title: "Gently Cleanser",
		type: "liquid",
		price: "32",
		imgUrl: "/beautyImages/Gently Cleaner.webp",
	},
	{
		category: "tool",
		title: "Makeup Brush",
		type: "brush",
		price: "42",
		imgUrl: "/beautyImages/Makeup brush.webp",
	},
	{
		category: "personalCare",
		title: "Effective Cleanser",
		type: "liquid",
		price: "72",
		imgUrl: "/beautyImages/Effective Cleaner.webp",
	},
	{
		category: "personalCare",
		title: "Bamboo Face Mask",
		type: "other",
		price: "19",
		imgUrl: "/beautyImages/Bamboo Face Mask.webp",
	},

	{
		category: "tool",
		title: "Set Of Beauty Brush",
		type: "brush",
		price: "4",
		imgUrl: "/beautyImages/Beauty .webp",
	},
	{
		category: "makeup",
		title: "Cheek Blush",
		type: "powder",
		price: "5",
		imgUrl: "/beautyImages/Cheek Blush.webp",
	},

	{
		category: "personalCare",
		title: "Combo Skin Cleanser",
		type: "liquid",
		price: "8",
		imgUrl: "/beautyImages/Combo Skin Cleanser.webp",
	},
	{
		category: "personalCare",
		title: "Dry Skin Cleanser",
		type: "liquid",
		price: "12",
		imgUrl: "/beautyImages/Dry Skin Cleanser.webp",
	},
	{
		category: "tool",
		title: "Eye Lashes Tool",
		type: "eye",
		price: "8",
		imgUrl: "/beautyImages/Eye Lashes Tool.webp",
	},

	{
		category: "makeup",
		title: "Glitter Eye Shadow",
		size: "eye",
		price: "12",
		imgUrl: "/beautyImages/Glitter Eye Shadow.webp",
	},
	// {
	//   category: "makeup",
	//   title: "Glitter Liquid Eyeshadow",
	//   type: "liquid",
	//   type: "eye",
	//   price: "4",
	//   imgUrl: "/beautyImages/Glitter Liquid Eyeshadow Trio.webp",
	// },
	{
		category: "makeup",
		title: "Heart Sticker Nails",
		type: "other",
		price: "3",
		imgUrl: "/beautyImages/Heart Sticker Nails.webp",
	},
	{
		category: "makeup",
		title: "Hydrated Foundation ",
		type: "liquid",
		price: "21",
		imgUrl: "/beautyImages/Hydrated Foundation.webp",
	},

	{
		category: "makeup",
		title: "Kajal",
		type: "eye",
		price: "21",
		imgUrl: "/beautyImages/Kajal.webp",
	},

	// {
	//   category: "makeup",
	//   title: "Lipstick",
	//   size: "one-size",
	//   price: "24",
	//   imgUrl: "/beautyImages/Lipstick.webp",
	// },
	{
		category: "makeup",
		title: "Nail Paint",
		type: "liquid",
		price: "18",
		imgUrl: "/beautyImages/Nail Paint.webp",
	},
	{
		category: "personalCare",
		title: "Oily Skin Cleanser",
		type: "liquid",
		price: "12",
		imgUrl: "/beautyImages/Oily Skin Cleanser.webp",
	},
];

localStorage.setItem("beautyProducts", JSON.stringify(beautyCategories));

var catObj = JSON.parse(localStorage.getItem("beautyProducts")) || [];
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
	localStorage.setItem("seleBeautyProd", JSON.stringify(item));
	window.location.href = "productBeautyDetails.html";
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
	powder: true,
	liquid: true,
	eye: true,
	other: true,
};
for (key in boolObj) {
	document.getElementById(key).addEventListener("click", checkBoxFun);
}
var checkRes = [];
function checkBoxFun(e) {
	e.target.checked;
	if (e.target.checked) {
		var res = catObj.filter(function (item) {
			return e.target.value == item.type;
		});
		checkRes = [...checkRes, ...res];
		showProducts(checkRes);
	} else {
		checkRes = checkRes.filter(function (item) {
			return e.target.value != item.type;
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

document.getElementById("tool").addEventListener("click", btnCatFun);
document.getElementById("makeup").addEventListener("click", btnCatFun);
document.getElementById("personalCare").addEventListener("click", btnCatFun);

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
