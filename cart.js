var cartData = JSON.parse(localStorage.getItem("cartData")) || [];

var body = document.querySelector("body");
var mainDiv = document.createElement("div");
mainDiv.setAttribute("id", "box");
body.append(mainDiv);
showProducts();

if (cartData.length == 0) {
	var msg = document.createElement("h1");
	msg.textContent = "cart is empty";
	body.append(msg);
}

function showProducts() {
	cartData.map(function (item) {
		var box = document.createElement("div");

		var imgDiv = document.createElement("div");
		imgDiv.setAttribute("class", "imageDive");

		var image = document.createElement("img");
		image.setAttribute("src", item.imgUrl[0]);

		image.addEventListener("click", function () {
			productDetails(item);
		});

		imgDiv.append(image);

		var h = document.createElement("div");
		h.textContent = item.title;

		var div = document.createElement("div");
		div.setAttribute("id", "heartIcon");

		var p = document.createElement("h4");
		p.textContent = `US $${item.price}`;

		box.append(imgDiv, h, p, div);

		mainDiv.append(box);
	});
}

if (cartData.length > 0) {
	var totalPrice = document.createElement("h1");
	var sumPrice = 0;
	for (var i = 0; i < cartData.length; i++) {
		sumPrice += +cartData[i].price;
	}
	totalPrice.textContent = `Total Price - US $${sumPrice}`;

	var promoCode = document.createElement("input");
	promoCode.type = "text";

	var applyCode = document.createElement("button");
	applyCode.textContent = "Apply Code";

	applyCode.addEventListener("click", function () {
		var code = promoCode.value;

		// 10% off
		if (sumPrice > 29 && sumPrice <= 69) {
			if (code == "") {
				alert("promo code field is empty");
			} else if (code != "HOT1111") {
				alert("wrong promo code");
			} else {
				sumPrice = sumPrice - sumPrice * 0.1;
				totalPrice.textContent = `Total Price - US $${sumPrice}`;
				promoCode.value = "";
			}
		}
		// 15% off
		else if (sumPrice > 69 && sumPrice <= 169) {
			if (code == "") {
				alert("promo code field is empty");
			} else if (code != "HOT1111") {
				alert("wrong promo code");
			} else {
				sumPrice = sumPrice - sumPrice * 0.15;
				totalPrice.textContent = `Total Price - US $${sumPrice}`;
				promoCode.value = "";
			}
		}
		// 20% off
		else {
			if (code == "") {
				alert("promo code field is empty");
			} else if (code != "HOT1111") {
				alert("wrong promo code");
			} else {
				sumPrice = sumPrice - sumPrice * 0.2;
				totalPrice.textContent = `Total Price - US $${sumPrice}`;
				promoCode.value = "";
			}
		}
	});

	var checkOut = document.createElement("button");
	checkOut.textContent = "Checkout";

	checkOut.addEventListener("click", function () {
		window.location.href = "checkout.html";
	});

	body.append(totalPrice, promoCode, applyCode, checkOut);
}
