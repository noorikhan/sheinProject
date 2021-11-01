// sign up code

document.getElementById("signUpBtn").addEventListener("submit", signUp);

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
			window.location.href = "header.html";
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
		} else {
			window.location.href = "header.html";
		}
	}
}
