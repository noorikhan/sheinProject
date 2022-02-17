// sign up code
document.getElementById("signUpBtn").addEventListener("submit", signUp);

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

var userData = JSON.parse(localStorage.getItem("userData")) || [];

function signUp(event) {
	event.preventDefault();

	var region = document.getElementById("region").value;
	var emailAddress = document.getElementById("emailAddress").value;
	var password = document.getElementById("password").value;
	var cPassword = document.getElementById("cPassword").value;

	var userDetails = {
		country: region,
		emailAddress: emailAddress,
		password: password,
	};

	var emailExist = false;
	for (var i = 0; i < userData.length; i++) {
		if (emailAddress == userData[i].emailAddress) {
			emailExist = true;
			break;
		}
	}

	if (emailExist) {
		alert("email already exists");
	} else if (password == cPassword) {
		userData.push(userDetails);
		localStorage.setItem("userData", JSON.stringify(userData));
		alert("registered successfully");
	} else {
		alert("password mismatch");
	}
	document.getElementById("signUpBtn").reset();
}

// sign in code

document.getElementById("signInBtn").addEventListener("submit", signIn);

function signIn(event) {
	event.preventDefault();
	var country = document.getElementById("country").value;
	var email = document.getElementById("email").value;
	var pass = document.getElementById("pass").value;

	checkUserDetails(email, pass, country);
	document.getElementById("signInBtn").reset();
}

function checkUserDetails(email, pass, country) {
	for (var i = 0; i < userData.length; i++) {
		if (
			email == userData[i].emailAddress &&
			pass == userData[i].password &&
			country == userData[i].country
		) {
			window.location.href = "index.html";
			break;
		} else if (
			email == userData[i].emailAddress &&
			pass == userData[i].password &&
			country != userData[i].country
		) {
			alert("country is incorrect");
		} else if (
			email != userData[i].emailAddress &&
			pass == userData[i].password &&
			country == userData[i].country
		) {
			alert("email is incorrect");
			break;
		} else if (
			email == userData[i].emailAddress &&
			pass != userData[i].password &&
			country == userData[i].country
		) {
			alert("password is incorrect");
			break;
		} else if (i == userData.length - 1) {
			alert("user details are incorrect");
			break;
		}
	}
}

// gmail redirect
document.getElementById("gmail").addEventListener("click", function () {
	window.open(
		"https://accounts.google.com/signin/v2/identifier?service=mail&passive=1209600&osid=1&continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin",
		"_blank"
	);
});

// facebook redirect
document.getElementById("facebook").addEventListener("click", function () {
	window.open("https://en-gb.facebook.com/", "_blank");
});

// forget password redirect
document
	.getElementById("forgetPassword")
	.addEventListener("click", function () {
		window.location.href = "forgetPassword.html";
	});
