// product highlight sec 2
const ph2Image = document.querySelector("#img-product-highlight-2");
const baseUrl = "./Assets/feature-highltght-2"

let img = 1;

setInterval(() => {
  if (img === 4) {
    img = 1;
  }  
  ph2Image.src = `${baseUrl}/${img}.jpg`;
  img++;
},3000);
