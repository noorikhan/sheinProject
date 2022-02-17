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

// slider
var myIndex = 0;
showslides();

function showslides() {
	var i;
	var x = document.getElementsByClassName("myslides");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	myIndex++;
	if (myIndex > x.length) {
		myIndex = 1;
	}
	x[myIndex - 1].style.display = "block";
	setTimeout(showslides, 3000); // Change image every 2 seconds
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
