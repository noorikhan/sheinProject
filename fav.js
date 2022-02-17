var favProductsData = JSON.parse(localStorage.getItem("favProductsData")) || [];

var body = document.querySelector("body");
var mainDiv = document.createElement("div");
mainDiv.setAttribute("id", "box");
body.append(mainDiv);
showProducts();

if (favProductsData.length == 0) {
	var msg = document.createElement("h1");
	msg.setAttribute("id", "msg");
	// var favImg = document.createElement("img");
	// favImg.setAttribute("id","favImg");
	// favImg.setAttribute("src","images/favIcon.png")
	msg.textContent = "Nothing In Wishlist";
	var favDiv = document.createElement("div");
	favDiv.setAttribute("id", "favDiv");
	favDiv.append(msg);
	body.append(favDiv);
}

function showProducts() {
	favProductsData.map(function (item) {
		var box = document.createElement("div");

		var imgDiv = document.createElement("div");
		imgDiv.setAttribute("class", "imageDive");

		var image = document.createElement("img");
		image.setAttribute("src", item.imgUrl);

		image.addEventListener("click", function () {
			productDetails(item);
		});

		imgDiv.append(image);

		var h = document.createElement("div");
		h.textContent = item.title;
		h.setAttribute("id", "title");

		var div = document.createElement("div");
		div.setAttribute("id", "heartIcon");

		var p = document.createElement("h4");
		p.setAttribute("id", "price");
		p.textContent = `US $${item.price}`;

		box.append(imgDiv, h, p, div);

		mainDiv.append(box);
	});
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

var cartData = JSON.parse(localStorage.getItem("cartData"));
var favProductsData = JSON.parse(localStorage.getItem("favProductsData"));

// no. of cart items show when page is loading
// no. of fav cart items show when page is loading
window.onload = function () {
	document.getElementById("bagItemsCount").textContent = cartData.length;
	document.getElementById("favItemsCount").textContent = favProductsData.length;
};
