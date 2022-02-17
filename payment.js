document.getElementById("submit").addEventListener("click", function (e) {
	e.preventDefault();
	var cardNo = document.getElementById("cardNo").value;
	var cvv = document.getElementById("cvv").value;
	var edate = document.getElementById("edate").value;
	if (cardNo == "" || cvv == "" || edate == "") {
		alert("every field must be filled in order to place order");
	} else if (cardNo.toString().length < 16 || cardNo.toString().length > 16) {
		alert("card no. must be 16 digits");
	} else if (cvv.toString().length < 3 || cvv.toString().length > 3) {
		alert("cvv must be 3 digits");
	} else if (edate.length != 7) {
		alert("expiry date should be like 'MM/YYYY'");
	} else {
		alert("Your order is successfully placed");
		window.location.href = "index.html";
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

var cartData = JSON.parse(localStorage.getItem("cartData"));
var favProductsData = JSON.parse(localStorage.getItem("favProductsData"));

// no. of cart items show when page is loading
// no. of fav cart items show when page is loading
window.onload = function () {
	document.getElementById("bagItemsCount").textContent = cartData.length;
	document.getElementById("favItemsCount").textContent = favProductsData.length;
};
