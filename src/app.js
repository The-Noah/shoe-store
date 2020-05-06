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

setShoeIndex(0);
function setShoeIndex(value){
  shoeIndex += value;

  if(shoeIndex < 0){
    shoeIndex = shoes.length - 1;
  }else if(shoeIndex > shoes.length - 1){
    shoeIndex = 0;
  }

  main.style.backgroundImage = `url("images/${shoes[shoeIndex].image}.png")`;
  name.innerText = shoes[shoeIndex].name;
  price.innerText = `$${shoes[shoeIndex].price}`;
  for(let i = 0; i < stars.length; i++){
    stars[i].innerHTML = shoes[shoeIndex].rating > i ? "&#9733;" : "	&#9734;"
  }
}
