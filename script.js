
//Elements
const buttons = document.querySelectorAll(".btn");
const textArea = document.querySelector("textarea");
const deleteButton = document.querySelector(".delete");
const shiftButton = document.querySelector(".shift");
const spaceButton = document.querySelector(".space");
const showKeyboard = document.querySelector('.showButton')
const hideKeyboard = document.querySelector('.hideButton')
const keyboard = document.querySelector(".keyboard-container")

//variable
let letters = [];

//function to push typed letters
buttons.forEach((button)=> {
  button.addEventListener("click",function(){
    textArea.value += button.innerText;
    letters = textArea.value.split("")
  })
})

//function to delete letters
deleteButton.addEventListener("click",function(){
  letters.pop();
  textArea.value = letters.join("")
})

//function to push spaces between words
spaceButton.addEventListener("click",function(){
  letters.push(" ")
  textArea.value = letters.join("")
})

//function to toggle letters Upper and lower
shiftButton.addEventListener("click",function(){
  buttons.forEach((button)=> {
    button.classList.toggle("uppercase");
  })
})

//eventListener to show keyboard
showKeyboard.addEventListener("click",function(){
  keyboard.classList.add("in")
})

//eventListener to hide keyboard
hideKeyboard.addEventListener("click",function(){
  keyboard.classList.remove("in")
})
