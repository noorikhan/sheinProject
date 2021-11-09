// slider one
var responsiveSlider = function () {
	var slider = document.getElementById("slider");
	var sliderWidth = slider.offsetWidth;
	var slideList = document.getElementById("slideWrap");
	var count = 1;
	var items = slideList.querySelectorAll("li").length;

	window.addEventListener("resize", function () {
		sliderWidth = slider.offsetWidth;
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

// slider two
var responsiveSlider1 = function () {
	var slider1 = document.getElementById("slider1");
	var sliderWidth1 = slider1.offsetWidth;
	var slideList1 = document.getElementById("slideWrap1");
	var count1 = 1;
	var items1 = slideList1.querySelectorAll("li").length;

	window.addEventListener("resize", function () {
		sliderWidth1 = slider1.offsetWidth;
	});

	var nextSlide1 = function () {
		if (count1 < items1) {
			slideList1.style.left = "-" + count1 * sliderWidth1 + "px";
			count1++;
		} else if ((count1 = items1)) {
			slideList1.style.left = "0px";
			count1 = 1;
		}
	};

	setInterval(function () {
		nextSlide1();
	}, 2000);
};

window.onload = function () {
	responsiveSlider();
	responsiveSlider1();
};
