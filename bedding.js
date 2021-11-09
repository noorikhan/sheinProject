


//this is navbar buttons
var buttons = [{title:"Bedding",backgroundColor:"white"},
              {title:"Kitchen & Dining", backgroundColor:"white"},
              {title:"Home Decor", backgroundColor:"white"},
              {title:"Home Essentials", backgroundColor:"white"},
              {title:"Stroage & Organization", backgroundColor:"white" },
              {title:"lighting and lamp", backgroundColor:"white"},
               {title:"Bathroom",backgroundColor:white},
               {title:"Event party Supplies",backgroundColor:"white"},
               {title:"Pet Supplies",backgroundColor:"white"},
               {title:"SHIEN BASIC LIVING",backgroundColor:"white"},
               {title:"Home Improvement",backgroundColor:"white"},
               {title:"Holiday",backgroundColor:"white"}
]

//this is category data//
var Category = [

  {category:"bedding",subcategory:"bedding", title:"1 pair Christmas print Pillowcase", price:"US$10.00",color:["red","green","blue","yellow","black","grey"],size:["one-size", "s","m","xl","l"], imgUrl:["bedding image/img2.webp","bedding image/img2.1.webp","bedding image/img2.2.webp","bedding image/img2.4.webp" ]},
  {category:"bedding",subcategory:"bedding",title:"1pc plain Plush Blanket",price:"US$54.00",color:["red","green","blue","yellow","black","grey"],   size:["one-size", "s","m","xl","l"], imgUrl:["bedding image/img1.webp"]},
  {category:"bedding",subcategory:"bedding",title:"1pair Fleece Pillowcase Without Filler", price:"US$14.00",color:["red","green","blue","yellow","black","grey"],   size:["one-size", "s","m","xl","l"],imgUrl:["bedding image/img4.webp"]},
  {category:"bedding",subcategory:"bedding",title:"Butterfly Print Duvet Coever Set Without",price:"US$37.00",color:["red","green","blue","yellow","black","grey"],   size:["one-size", "s","m","xl","l"],imgUrl:["bedding image/img5.webp","bedding image/img5.1.webp","bedding image/img5.2.webp"]},
  {category:"bedding",subcategory:"bedding",title:"1pair Fleece Pillowcase Without Filler", price:"US$15.00",color:["red","green","blue","yellow","black","grey"],   size:["one-size", "s","m","xl","l"],imgUrl:["bedding image/img3.webp","bedding image/img3.1.webp"]},
  {category:"bedding" ,SubCategory:"bedSkirt", title:"Pom Pom Bed Skirt",color:["red","green","blue","yellow","black","grey"],size:["one-size", "s","m","xl","l"], price:"US$19.00", imgUrl:["img1.webp","img1.1.webp"]},
  {category:"bedding", SubCategory:"bedSkirt", title:"Plain Ruffle Bed Skirt",color:["red","green","blue","yellow","black","grey"],size:["one-size", "s","m","xl","l"],price:"US$24.00",imgUrl:["img2.webp"]},
  {category:"bedding", SubCategory:"bedSkirt", title:"Flower Print Bed Skirt",color:["red","green","blue","yellow","black","grey"], size:["one-size", "s","m","xl","l"],price:"US$19.00",imgUrl:["img3.webp"]},
  {category:"bedding", SubCategory:"bedSkirt", title:"Houndstooth pattern Bed Skirt",color:["red","green","blue","yellow","black","grey"],   size:["one-size", "s","m","xl","l"],price:"US$35.00",imgUrl:["img4.webp"]},
  {category:"bedding", SubCategory:"bedSkirt", title:"Plain Print Bed Skirt",color:["red","green","blue","yellow","black","grey"],   size:["one-size", "s","m","xl","l"],price:"US$35.00",imgUrl:["img5.webp"]},
  {category:"bedding", SubCategory: "bedSpread", title:"Gradient color Spreadsheet",color:["red","green","blue","yellow","black","grey"],   size:["one-size", "s","m","xl","l"], price:"US$41.00", imgUrl:["bedspreadandRunners/gradientColor.webp","bedspreadandRunners/gradientColorSmall.webp"] },
  {category:"bedding",SubCategory: "bedSpread", title:"Pizaa print spreadheet",color:["red","green","blue","yellow","black","grey"],   size:["one-size", "s","m","xl","l"], price:"US$28.00", imgUrl:["bedspreadandRunners/pizaaPrint.webp","bedspreadandRunners/pizzaPrintSmall.webp"] },
  {category:"bedding",SubCategory: "bedSpread",  title:"Star Print spreadsheet",color:["red","green","blue","yellow","black","grey"],   size:["one-size", "s","m","xl","l"], price:"US$33.00", imgUrl:["bedspreadandRunners/starPrint.webp","bedspreadandRunners/starPrintSmall.webp"]},
  {category:"bedding", SubCategory: "bedSpread", title:"christmas pattern spreasheet",color:["red","green","blue","yellow","black","grey"],   size:["one-size", "s","m","xl","l"], price:"US$40.00", imgUrl:["bedspreadandRunners/christmasPattern.webp","bedspreadandRunners/christmasPatternSmall.webp"]},
  {category:"bedding",SubCategory:"blankets", title:"christmas print blanket",color:["red","green","blue","yellow","black","grey"],   size:["one-size", "s","m","xl","l"], price:"US$28.00", imgUrl:["blankets and Throws/christmasPrint.webp","blankets and Throws/christmasPrintSmall.webp"]},
  {category:"bedding",SubCategory:"blankets", title:"christmas Santa print blanket",color:["red","green","blue","yellow","black","grey"],   size:["one-size", "s","m","xl","l"], price:"US$32.99", imgUrl:["blankets and Throws/christmasSanta.webp","blankets and Throws/christmasSantaSmall.webp"]},
  {category:"bedding",SubCategory:"blankets", title:"halloween Spider print",color:["red","green","blue","yellow","black","grey"],   size:["one-size", "s","m","xl","l"], price:"US$42.23", imgUrl:["blankets and Throws/halloweenSpider.webp","blankets and Throws/halloweenSpiderSmall.webp"]},
  {category:"bedding",SubCategory:"blankets", title:"christmas deer print blanket",color:["red","green","blue","yellow","black","grey"],   size:["one-size", "s","m","xl","l"], price:"US$72.00", imgUrl:["blankets and Throws/Christmas Deer blanket.webp","blankets and Throws/christmas Deer blanket small.webp"]},
  {category:"bedding",subcategory:"sheetsAndPillow", title:"1 pair pillows Santa printed",color:["red","green","blue","yellow","black","grey"],   size:["one-size", "s","m","xl","l"], price:"US$19.00", imgUrl:["sheetsAndPillowcase/1pairpillowSanta.webp","sheetsAndPillowcase/1pairpillowSantaSmall.webp"]}, 
  {category:"bedding",subcategory:"sheetsAndPillow", title:"Christmasn print sheet",color:["red","green","blue","yellow","black","grey"],   size:["one-size", "s","m","xl","l"], price:"US$27.00", imgUrl:["sheetsAndPillowcase/chistmasPrintedSheet.webp","sheetsAndPillowcase/christmasPrintedSheetSmall.webp"]},
  {category:"bedding",subcategory:"sheetsAndPillow", title:"Christmas print Deer",color:["red","green","blue","yellow","black","grey"], price:"US$21.00",size:["one-size", "s","m","xl","l"], imgUrl:["sheetsAndPillowcase/christmasPrintDeer.webp","sheetsAndPillowcase/christmasPrintDeerSmall.webp"]},
  {category:"bedding",subcategory:"sheetsAndPillow", title:"Tree print sheet",color:["red","green","blue","yellow","black","grey"], price:"US$38.00",size:["one-size", "s","m","xl","l"], imgUrl:["sheetsAndPillowcase/TreePrintSheet.webp","sheetsAndPillowcase/TreePrintSheetSmall.webp"]}




]





var buttons = [
  { title: "Bedding", backgroundColor: "white" },
  { title: "Kitchen & Dining", backgroundColor: "white" },
  { title: "Home Decor", backgroundColor: "white" },
  { title: "Home Essentials", backgroundColor: "white" },
  { title: "Stroage & Organization", backgroundColor: "white" },
  { title: "lighting and lamp", backgroundColor: "white" },
  { title: "Bathroom", backgroundColor: white },
  { title: "Event party Supplies", backgroundColor: "white" },
  { title: "Pet Supplies", backgroundColor: "white" },
  { title: "SHIEN BASIC LIVING", backgroundColor: "white" },
  { title: "Home Improvement", backgroundColor: "white" },
  { title: "Holiday", backgroundColor: "white" },
];






