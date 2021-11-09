var bedding = [
  {
    title: "1 pair Christmas print Pillowcase",
    price: "US$10.00",
    img: [
      "beddingImages/img2.webp",
      "beddingImages/img2.1.webp",
      "beddingImages/img2.2.webp",
      "beddingImages/img2.4.webp",
    ],
  },
  {
    title: "1pc plain Plush Blanket",
    price: "US$54.00",
    img: ["beddingImages/img1.webp"],
  },
  {
    title: "1pair Fleece Pillowcase Without Filler",
    price: "US$14.00",
    img: ["beddingImages/img4.webp"],
  },
  {
    title: "Butterfly Print Duvet Coever Set Without",
    price: "US$37.00",
    img: [
      "beddingImages/img5.webp",
      "beddingImages/img5.1.webp",
      "beddingImages/img5.2.webp",
    ],
  },
  {
    title: "1pair Fleece Pillowcase Without Filler",
    price: "US$15.00",
    img: ["beddingImages/img3.webp", "beddingImages/img3.1.webp"],
  },
];

var body = document.getElementById("boxs");

var mainDiv = document.createElement("div");
mainDiv.setAttribute("id", "box");
body.append(mainDiv);
showProducts();

function showProducts() {
  bedding.map(function (item) {
    var box = document.createElement("div");

    var imgDiv = document.createElement("div");
    imgDiv.setAttribute("class", "imageDive");

    var image = document.createElement("img");
    image.setAttribute("src", item.img[0]);

    var btnDiv = document.createElement("div");
    btnDiv.setAttribute("class", "middle");

    var b = document.createElement("button");
    b.setAttribute("class", "btn");
    b.textContent = "ADD TO BAG";

    btnDiv.append(b);

    imgDiv.append(image, btnDiv);

    var h = document.createElement("div");
    h.textContent = item.title;

    var div = document.createElement("div");
    div.setAttribute("id", "heartIcon");

    var p = document.createElement("h4");
    p.textContent = item.price;

    var btn = document.createElement("p");
    btn.innerHTML = `<i class="far fa-heart"></i>`;

    div.append(p, btn);

    btn.addEventListener("click", function (item) {
      if (btn.style.color == "black") {
        btn.style.color = "red";
      } else {
        btn.style.color = "black";
      }
      details(item);
    });

    box.append(imgDiv, h, div);

    mainDiv.append(box);
  });

  // document.querySelector("h3").addEventListener("click", function () {
  //   document.querySelector("h3").textContent = "Category   -";
  //   var cat = document.getElementById("cat");
  //   cat.style.display = "inline";
  // });

  catDisplay("bedcat", "bedsDiv");
  catDisplay("kitchencat", "kitchenDiv");
  catDisplay("decorecat", "decoreDiv");

  var slider = document.getElementById("myRange");
  var p = document.querySelector("p");
  p.innerHTML = `US$ ${slider.value}`;

  slider.oninput = function () {
    p.innerHTML = `US$ ${this.value}`;
  };
}

function catDisplay(id1, id2) {
  document.getElementById(id1).addEventListener("click", function () {
    document.getElementById(id2).style.display = "inline";
  });
}
