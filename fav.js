var favProductsData = JSON.parse(localStorage.getItem("favProductsData")) || [];

var body = document.querySelector("body");
var mainDiv = document.createElement("div");
mainDiv.setAttribute("id", "box");
body.append(mainDiv);
showProducts();

if (favProductsData.length == 0) {
	var msg = document.createElement("h1");
	msg.textContent = "fav is empty";
	body.append(msg);
}

function showProducts() {
	favProductsData.map(function (item) {
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
