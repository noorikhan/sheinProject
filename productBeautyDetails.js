var productObj = JSON.parse(localStorage.getItem("seleBeautyProd"));
displayImgs();
displayDetails();

function displayImgs() {
  var bImg = document.createElement("img");
  bImg.setAttribute("src", productObj.imgUrl);
  document.getElementById("img1").append(bImg);
}

function displayDetails() {
  document.querySelector("h4").textContent = productObj.title;
  document.querySelector("h1").textContent = `US$${productObj.price}`;
  document.getElementById("type").innerHTML = `<h3>${productObj.type}</h3>`;
}

var cartData = JSON.parse(localStorage.getItem("cartData")) || [];

document.querySelector("button").addEventListener("click", function () {
  var exist = false;
  for (var j = 0; j < cartData.length; j++) {
    if (productObj.title == cartData[j].title) {
      exist = true;
      break;
    }
  }
  if (exist) {
    alert("product is already added to cart");
  } else {
    alert("Item is added successfully");
    cartData.push(productObj);

    localStorage.setItem("cartData", JSON.stringify(cartData));
  }
});
