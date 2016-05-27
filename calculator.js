var numberOne;
var numberTwo;
var answer = document.getElementById("answer");

function updateNumbers(){
numberOne = parseInt(document.getElementById("num1").value);
numberTwo = parseInt(document.getElementById("num2").value);

}

/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */
 function multiply(num1,num2){
  return num1*num2;
 }


/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
 function add(num1,num2){
  return num1+num2;
 }


/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */
 function subtract(num1,num2){
  return num1-num2;
 }


/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */
 function divide(num1,num2){
  return num1/num2;
 }



/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */

 function calculate(num1,num2,operator){
  answer.value=operator(num1,num2);
 }