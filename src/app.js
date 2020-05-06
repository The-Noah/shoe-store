for(const dropdown of document.querySelectorAll(".dropdown")){
  const title = dropdown.querySelector("span > span");
  const content = dropdown.querySelector("div");

  dropdown.querySelector("span").addEventListener("click", function(e){
    e.stopPropagation();
    content.style.display = content.style.display === "block" ? "none" : "block";
  });

  content.addEventListener("click", function(e){
    title.innerText = e.target.innerText;
    content.style.display = "none";
  });

  window.addEventListener("click", function(e){
    content.style.display = "none";
  });
}

let shoeIndex = 0;
const main = document.querySelector("main");
const name = document.querySelector("h1");
const price = document.querySelector(".price");
const selector = document.querySelector(".selector");
const stars = document.querySelectorAll(".rating > span");

selector.children[0].addEventListener("click", function(){
  setShoeIndex(-1);
});

selector.children[1].addEventListener("click", function(){
  setShoeIndex(1);
});

function setShoeIndex(value){
  shoeIndex += value;

  if(shoeIndex < 0){
    shoeIndex = shoes.length - 1;
  }else if(shoeIndex > shoes.length - 1){
    shoeIndex = 0;
  }

  main.style.backgroundImage = `url("images/${shoes[shoeIndex].image}.png")`;
  name.innerHTML = shoes[shoeIndex].name.split(" ").join("<br>");
  price.innerText = `$${shoes[shoeIndex].price}`;
  for(let i = 0; i < stars.length; i++){
    stars[i].innerHTML = shoes[shoeIndex].rating > i ? "&#9733;" : "	&#9734;"
  }
}

const size = document.querySelectorAll(".dropdown")[0].querySelector("span > span");
const quantity = document.querySelectorAll(".dropdown")[1].querySelector("span > span");
function buy(){
  if(size.innerText === "Select Size"){
    return alert("Please select a shoe size");
  }

  alert(`Buying ${quantity.innerText} ${size.innerText} ${shoes[shoeIndex].name} shoe${quantity.innerText !== "1" ? "s" : ""}`);
}
