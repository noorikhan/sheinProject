// upper-black friday

var upperBlack = {
  img: "https://img.ltwebstatic.com/images3_acp/2021/08/23/1629714618589673af8828d6c6293f5524d60cf92b.gif",
  img: "https://img.ltwebstatic.com/images3_acp/2021/10/30/1635588008792771c353f0c00311e8c2c292b9a268.webp",
  img: "https://img.ltwebstatic.com/images3_acp/2021/08/23/162971468501a39d853f9c1797089196a5514ba979.webp",
};

// shop-by-category

var category = [
  {
    title: "Home Decor",
    img: "https://cdn-icons.flaticon.com/png/128/942/premium/942165.png?token=exp=1635691733~hmac=29513a9347b3408d55f36a50da6cdaee",
  },
  {
    title: "Bedding",
    img: "https://cdn-icons.flaticon.com/png/128/2284/premium/2284001.png?token=exp=1635692073~hmac=c67daeb11893e287c5c31dc499ffbe33",
  },
  {
    title: "Kitchen",
    img: "https://cdn-icons-png.flaticon.com/128/864/864615.png",
  },
  {
    title: "Lighting",
    img: "https://cdn-icons-png.flaticon.com/128/3997/3997723.png",
  },
  {
    tile: "Events & Party",
    img: "https://cdn-icons-png.flaticon.com/128/3918/3918214.png",
  },
  {
    title: "Home Entertainment",
    img: "https://cdn-icons.flaticon.com/png/128/738/premium/738822.png?token=exp=1635692421~hmac=e49ff98b642bddfb101b09a93be138bb",
  },
  {
    titel: "Storage",
    img: "https://cdn-icons.flaticon.com/png/128/1602/premium/1602321.png?token=exp=1635692478~hmac=4b2b9a4dbe0db16dcac7871f88547d01",
  },
  {
    title: "Bath",
    img: "https://cdn-icons-png.flaticon.com/128/637/637229.png",
  },
  {
    title: "Home Appliances",
    img: "https://cdn-icons-png.flaticon.com/128/1554/1554170.png",
  },
  {
    title: "Essentials",
    img: "https://cdn-icons-png.flaticon.com/128/2917/2917024.png",
  },
  {
    title: "Stationery",
    img: "https://cdn-icons-png.flaticon.com/128/2653/2653535.png",
  },
  {
    title: "Pet Accessories",
    img: "https://cdn-icons.flaticon.com/png/128/2195/premium/2195893.png?token=exp=1635692823~hmac=1e707f38ab178fa00d67b9f241606065",
  },
  {
    title: "Pet Toys",
    img: "https://cdn-icons.flaticon.com/png/128/4889/premium/4889164.png?token=exp=1635692911~hmac=133c903bb2784337d115e237562a527f",
  },
  {
    title: "Pet Clothing",
    img: "https://cdn-icons.flaticon.com/png/128/1811/premium/1811895.png?token=exp=1635692993~hmac=30dd01bd7ba264be9db9853ecb1b0447",
  },
  {
    title: "Pet OutDoor Gear",
    img: "https://t4.ftcdn.net/jpg/02/96/81/01/240_F_296810121_YL3xxYAiERbMHJHxdzxVmytcAKlZozuC.jpg",
  },
];

var campaigns = [
  {
    img: "https://img.ltwebstatic.com/images3_ach/2021/10/31/16356721566e4e0307cbdc98ba0cef7431a480075f.jpg",
  },
];
showCategory();
function showCategory() {
  category.map(function (item) {
    var box = document.createElement("div");
    box.setAttribute("id", "boxes");
    var image = document.createElement("img");
    image.setAttribute("src", item.img);
    var name = document.createElement("p");
    name.textContent = item.title;
    box.append(image, name);
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
