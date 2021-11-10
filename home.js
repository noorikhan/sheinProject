// upper-black friday

var upperBlack = {
	img:
		"https://img.ltwebstatic.com/images3_acp/2021/08/23/1629714618589673af8828d6c6293f5524d60cf92b.gif",
	img:
		"https://img.ltwebstatic.com/images3_acp/2021/10/30/1635588008792771c353f0c00311e8c2c292b9a268.webp",
	img:
		"https://img.ltwebstatic.com/images3_acp/2021/08/23/162971468501a39d853f9c1797089196a5514ba979.webp",
};

// shop-by-category

var category = [
	{
		title: "Home Decor",
		img: "/images/houseDecor.png",
	},
	{
		title: "Bedding",
		img: "/images/bedding.png",
	},
	{
		title: "Kitchen",
		img: "/images/kitchen.png",
	},
	{
		title: "Lighting",
		img: "/images/lighting.png",
	},
	{
		title: "Events & Party",
		img: "/images/eventsAndParty.png",
	},
	{
		title: "Home Entertainment",
		img: "/images/homeEntertainment.png",
	},
	{
		title: "Storage",
		img: "/images/storage.png",
	},
	{
		title: "Bath",
		img: "/images/bath.png",
	},
	{
		title: "Home Appliances",
		img: "/images/homeAppliances.png",
	},
	{
		title: "Essentials",
		img: "/images/essentials.png",
	},
	{
		title: "Stationery",
		img: "/images/stationery.png",
	},
	{
		title: "Pet Accessories",
		img: "/images/petAccessories.png",
	},
	{
		title: "Pet Toys",
		img: "/images/petToys.png",
	},
	{
		title: "Pet Clothing",
		img: "/images/petClothing.png",
	},
	{
		title: "Pet OutDoor Gear",
		img: "/images/petOutdoorGear.png",
	},
];

var campaigns = [
	{
		img:
			"https://img.ltwebstatic.com/images3_ach/2021/10/31/16356721566e4e0307cbdc98ba0cef7431a480075f.jpg",
	},
];

showCategory();
function showCategory() {
	category.map(function (item) {
		var box = document.createElement("div");
		box.setAttribute("id", "boxes");
		var imageBox = document.createElement("div");
		imageBox.setAttribute("id", "imageBox");
		var image = document.createElement("img");
		image.setAttribute("src", item.img);
		var name = document.createElement("p");
		name.setAttribute("id", "shopCatText");
		name.textContent = item.title;
		imageBox.appendChild(image);
		box.append(imageBox, name);
		document.getElementById("categoryBox").append(box);
	});
}

var myIndex = 0;
carousel();
function carousel() {
	var i;
	var x = document.getElementsByClassName("mySlides");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	myIndex++;
	if (myIndex > x.length) {
		myIndex = 1;
	}
	x[myIndex - 1].style.display = "block";
	setTimeout(carousel, 2000); // Change image every 2 seconds
}

// user tab
document.getElementById("user").addEventListener("click", signInAndSignup);
function signInAndSignup() {
	window.location.href = "signInAndSignup.html";
}

// home tab
document.getElementById("home").addEventListener("click", function () {
	window.location.href = "home.html";
});

// kids tab
document.getElementById("kids").addEventListener("click", function () {
	window.location.href = "kids.html";
});

// logo
document.getElementById("logo").addEventListener("click", function () {
	window.location.href = "home.html";
});
