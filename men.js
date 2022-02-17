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

// slider one
var responsiveSlider = function () {
	var slider = document.getElementById("menSlider");
	var sliderWidth = menSlider.offsetWidth;
	var slideList = document.getElementById("menSlideWrap");
	var count = 1;
	var items = slideList.querySelectorAll("li").length;

	window.addEventListener("resize", function () {
		sliderWidth = menSlider.offsetWidth;
	});

	var nextSlide = function () {
		if (count < items) {
			slideList.style.left = "-" + count * sliderWidth + "px";
			count++;
		} else if ((count = items)) {
			slideList.style.left = "0px";
			count = 1;
		}
	};

	setInterval(function () {
		nextSlide();
	}, 2000);
};

var cartData = JSON.parse(localStorage.getItem("cartData"));
var favProductsData = JSON.parse(localStorage.getItem("favProductsData"));
// calling image slider
// no. of cart items show when page is loading
// no. of fav cart items show when page is loading
window.onload = function () {
	responsiveSlider();
	document.getElementById("bagItemsCount").textContent = cartData.length;
	document.getElementById("favItemsCount").textContent = favProductsData.length;
};

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
