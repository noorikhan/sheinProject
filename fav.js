var favProductsData = JSON.parse(localStorage.getItem("favProductsData")) || [];

var body = document.querySelector("body");
var mainDiv = document.createElement("div");
mainDiv.setAttribute("id", "box");
body.append(mainDiv);
showProducts();

if (favProductsData.length == 0) {
	var msg = document.createElement("h1");
	msg.setAttribute("id","msg");
	// var favImg = document.createElement("img");
	// favImg.setAttribute("id","favImg");
	// favImg.setAttribute("src","images/favIcon.png")
	msg.textContent = "Nothing In Wishlist";
	var favDiv = document.createElement("div");
	favDiv.setAttribute("id","favDiv");
	favDiv.append(msg);
	body.append(favDiv);
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
		h.setAttribute("id","title")

		var div = document.createElement("div");
		div.setAttribute("id", "heartIcon");

		var p = document.createElement("h4");
		p.setAttribute("id","price")
		p.textContent = `US $${item.price}`;

		box.append(imgDiv, h, p, div);

		mainDiv.append(box);
	});
}
