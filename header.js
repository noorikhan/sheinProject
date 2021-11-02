// user tab
document.getElementById("user").addEventListener("click", signInAndSignup);

function signInAndSignup() {
	window.location.href = "signInAndSignup.html";
}

// home tab
document.getElementById("home").addEventListener("click", function () {
	window.location.href = "header.html";
});

// logo
document.getElementById("logo").addEventListener("click", function () {
	window.location.href = "header.html";
});
