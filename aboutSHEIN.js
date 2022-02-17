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

var cartData = JSON.parse(localStorage.getItem("cartData"));
var favProductsData = JSON.parse(localStorage.getItem("favProductsData"));

// no. of cart items show when page is loading
// no. of fav cart items show when page is loading
window.onload = function () {
	document.getElementById("bagItemsCount").textContent = cartData.length;
	document.getElementById("favItemsCount").textContent = favProductsData.length;
};
