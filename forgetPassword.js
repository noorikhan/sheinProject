document.querySelector("form").addEventListener("submit", forgetPassword);

var userData = JSON.parse(localStorage.getItem("userData"));
function forgetPassword(event) {
	event.preventDefault();

	var email = document.getElementById("email").value;

	var exist = false;
	for (var i = 0; i < userData.length; i++) {
		if (email == userData[i].emailAddress) {
			exist = true;
			break;
		}
	}

	if (exist) {
		setNewPassword(email);
	} else {
		alert("email id does not exist");
		document.getElementById("email").value = "";
	}
}

function setNewPassword(email) {
	document.getElementById("forgetPassword").innerHTML = "";
	var body = document.querySelector("body");

	var box = document.createElement("div");
	box.id = "box";
	body.appendChild(box);

	var newPasswordHeading = document.createElement("h1");
	newPasswordHeading.textContent = "Enter new password";

	var newPassword = document.createElement("input");
	newPassword.className = "pass";
	newPassword.type = "password";

	var confirmPasswordHeading = document.createElement("h1");
	confirmPasswordHeading.textContent = "Confirm password";

	var confirmPassword = document.createElement("input");
	confirmPassword.className = "pass";
	confirmPassword.type = "password";

	var reset = document.createElement("button");
	reset.id = "button";
	reset.textContent = "RESET";

	box.append(
		newPasswordHeading,
		newPassword,
		confirmPasswordHeading,
		confirmPassword,
		reset
	);

	document.getElementById("button").addEventListener("click", function () {
		if (newPassword.value == "" && confirmPassword.value == "") {
			alert("password fields should not be empty");
		} else if (newPassword.value == "") {
			alert("give new password");
		} else if (confirmPassword.value == "") {
			alert("confirm your password");
		} else if (newPassword.value != confirmPassword.value) {
			alert("password mismatch");
		} else {
			for (var i = 0; i < userData.length; i++) {
				if (email == userData[i].emailAddress) {
					userData[i].password = newPassword.value;
					localStorage.setItem("userData", JSON.stringify(userData));
					alert("password reset successful");
					window.location.href = "signInAndSignup.html";
				}
			}
		}
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
