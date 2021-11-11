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
		title: "Dresses",
		img: "images/dressesIcon.png",
	},
	{
		title: "Tops",
		img: "images/topIcon.png",
	},
	{
		title: "Sweatshirts",
		img: "images/sweatshirtIcon.png",
	},
	{
		title: "Knitwear",
		img: "images/knitwearIcon.png",
	},
	{
		title: "Outerwear",
		img: "images/outerwear.png",
	},
	{
		title: "Activewear",
		img: "images/activeWearIcon.png",
	},
	{
		title: "Lingerie & Loungewear",
		img: "images/LingeriIcon.png",
	},
	{
		title: "Bottoms",
		img: "images/BottomsIcon.png",
	},
	{
		title: "Denim",
		img: "images/denimIcon.png",
	},
	{
		title: "Jumpsuits & Two-pieces",
		img: "images/JumpSuits.png",
	},
	
];

var campaigns = [
	{
		img:
			"/home/sumit/Downloads/sheinProject-kids_page/images/shienCampagainFourth.gif",
	},
];


var flashs = [
	{img:"flashSale/saleImage1.jpg",
     price:"US$12.90" , discount:"US$22.21"},
	 {img:"flashSale/saleImage2.jpg",
	  price:"US$18.21", discount: "US$42.00"},
	  {img:"flashSale/saleImage4.jpg",
	  price:"US$12.21", discount: "US$28.00"},
	  {img:"flashSale/saleImage5.jpg",
	   price:"US$21.20", discount:"US$50.00"},
	   {img:"flashSale/saleImage6.jpg",
	    price:"US$28.00",discount:"US$75.00"},
]

flash()

function flash (){
    flashs.map(function (item){
	 var imgContainer =	document.createElement("div");
	 imgContainer.setAttribute("id","imgContainer")
	 var img = document.createElement("img");
	 img.setAttribute("src",item.img)
	 var para = document.createElement("p");
	 para.setAttribute("id","pricePara");
	  para.textContent = item.discount
	 imgContainer.append(img,item.price,para)
	 var flashDiv = document.getElementById("flash");
	 flashDiv.append(imgContainer);
	})
  	 
}



















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
