var numberOne;
var numberTwo;
var answer = document.getElementById("answer");

var boxes= document.getElementsByClassName("textbox");
var buttons= document.getElementsByClassName("button");


console.log(buttons);
console.log(boxes);
for(i=0; i<boxes.length; i++){
  boxes[i].addEventListener("keyup", updateNumbers);
}
for(i=0; i<buttons.length;i++){
  buttons[i].addEventListener("click", eval(buttons[i].id));
  console.log(buttons[i].id);
}

function updateNumbers(){
numberOne = parseInt(document.getElementById("num1").value);
numberTwo = parseInt(document.getElementById("num2").value);


}
/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */
 function multiply(){
  answer.value=numberOne*numberTwo;
 }


/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
 function add(){
  
  answer.value= numberOne+numberTwo;
 }


/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */
 function subtract(){
  answer.value=numberOne-numberTwo;
 }


/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */
 function divide(){
  answer.value=numberOne/numberTwo;
 }




