var productObj = JSON.parse(localStorage.getItem("seleProd"));
displayImgs();
displayDetails();

function displayImgs() {
	var bImg = document.createElement("img");
	bImg.setAttribute("src", productObj.imgUrl);
	document.getElementById("img1").append(bImg);
}

function displayDetails() {
	document.querySelector("h4").textContent = productObj.title;
	document.querySelector("h1").textContent = `US$${productObj.price}`;
	document.getElementById("size").innerHTML = `<h3>${productObj.size}</h3>`;
}

var cartData = JSON.parse(localStorage.getItem("cartData")) || [];

document.querySelector("button").addEventListener("click", function () {
	var exist = false;
	for (var j = 0; j < cartData.length; j++) {
		if (productObj.title == cartData[j].title) {
			exist = true;
			break;
		}
	}
	if (exist) {
		alert("product is already added to cart");
	} else {
		alert("Item is added successfully");
		cartData.push(productObj);
		localStorage.setItem("cartData", JSON.stringify(cartData));
		document.getElementById("bagItemsCount").textContent = cartData.length;
	}
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

var favProductsData = JSON.parse(localStorage.getItem("favProductsData"));

// no. of cart items show when page is loading
// no. of fav cart items show when page is loading
window.onload = function () {
	document.getElementById("bagItemsCount").textContent = cartData.length;
	document.getElementById("favItemsCount").textContent = favProductsData.length;
};
