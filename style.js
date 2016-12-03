var colors = generateRandomColors(6)
var square = document.querySelectorAll(".square")
var pickedColor = pickColor()
var colorDisplay =  document.querySelector("#colorDisplay")
var message = document.querySelector("#message")
var h1 = document.querySelector("h1")
var reset= document.querySelector("#reset")
colorDisplay.textContent = pickedColor


for(i = 0; i < square.length; i++){
  square[i].style.backgroundColor = colors[i]
  square[i].addEventListener ("click", function (){
  var clickedColor = this.style.backgroundColor
  if (pickedColor !== clickedColor){
    this.style.backgroundColor = "#232323"
    message.textContent = "Try Again"
  } else {
    message.textContent = "Correct!!"
    reset.textContent="¨Play Again?"
    h1.style.backgroundColor= clickedColor
    changeColors(clickedColor)
  }
  })
}
 function changeColors (color){
   for(var i = 0; i < square.length; i++){
     square[i].style.backgroundColor = color
   }
 }
function pickColor () {
  return colors[Math.floor(Math.random() * colors.length)];
}
function randomColor() {
return "rgb("+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+")";
}
function generateRandomColors(length) {
  var arreglo = []
  for(var i=0; i<length; i++){
    arreglo.push(randomColor())
  }
  return arreglo
}
reset.addEventListener ("click", function(){
colors=generateRandomColors(6)
pickedColor = pickColor()
for(i = 0; i < square.length; i++){
  square[i].style.backgroundColor = colors[i]
}
colorDisplay.textContent = pickedColor
reset.textContent="New Colors"
h1.style.backgroundColor="#232323"
})
