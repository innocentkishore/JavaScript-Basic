//"use strict"
//alert("Hello World!");
//Assign the Values for Different Datatype
let name="kishore";
let age=33;
let eligibleForVote=true;
let Status= false;
document.write(name)
document.write(age)
document.write(eligibleForVote);
document.write(Status);

//Perform Basic Operations
let value1=5;
let value2=4;
console.log(value1+value2);
console.log(value1*value2);
console.log(value1-value2);
console.log(value1/value2);
//String Declaration
let firstName="kishore"
let lastName="kumar"
document.writeln(firstName+lastName)

//Using TypeOf
console.log(typeof eligibleForVote);
console.log(typeof name);
console.log(typeof Status);

// SingleLine Comment is comment single single line if the code is comment it doesnot works
// MultiLine comment comment mulitple line this hepls to prevent running of many code at the time.

//: Create a script with both semicolon-separated and not separated lines.
console.log("kishore")
console.log("kumar")
console.log("kishore");
console.log("kumar");

//Use proper indentation to format a nested loop.
for(let i=0;i< 10;i++){
  for(let j=0;j<5;j++) {
    console.log("kishore" + j);
  }
}

//Declare multiple variables in a single line
let id,roll,address;

//Place a script tag at the top and bottom of an HTML document. Note
// any differences in behavior.  No difference

//Task 11: Write a script without using “use strict” and try to assign a value to an
// undeclared variable. Note the result.
//It is doesnot show any error!!!

//Task 12: Enable “use strict” mode and repeat the above action, noting the
// difference.
//It shows the error............
let lapName="Asus"
// In “use strict” mode, try to delete a variable, function, or function
// parameter.  Its shows the error
delete (lapName);
console.log("Delete..............")
console.log(lapName)
//Task 15: Declare a variable with a reserved keyword in “use strict” mode.
float=8.0
//Task 16: Declare variables using let, const, and var. Discuss when each should be
// used.
//var is use as gobal scope it can be decalre any where in the code it can be reassign
//let is use as scope within that function the varialbe can reassign it cannot be redeclare.
//const is used to store the value permanently the value cannot be change
var College="kce"
let place="cbe";
const call ="Autonums";
//Task 17: Attempt to reassign a const variable and observe the result.  it show error
//call="kk";

//o Task 18: Declare a variable without initializing it and print its value4
//it show undefined
let a;
console.log(a)
// Task 19: Assign a number, string, and boolean value to a variable and print its
//type using typeof.
let var2=3
var1="demo"
var1=true
console.log("..................................")
console.log(typeof (var2));
//Task 20: Rename a variable and observe the outcome.
console.log(typeof (var1));

//Task 23: Declare a symbol and print its type.
let symbol;
symbol;
console.log( typeof symbol)
//o Task 24: Assign the value null to a variable and check its type using typeof
let newvar=null;
console.log( typeof newvar);

//Task 26: Convert a string to a number using both implicit and explicit conversion.

let x="44"
let y=Number(x)
console.log(y)
console.log(typeof (y))
// Convert a boolean to a string and vice versa
let c=true;
let d=toString(c)
console.log(typeof(d));
//Task 29: Use the ++ and -- operators on a numeric variable.
let num1=2
num1++;
++num1;
num1--;
num1++;
console.log(num1);
//Task 30: Explore the precedence of operators by combining multiple operators in
// a single expression.
console.log(5+4-9/4*4/4*3+46)
//Task 31: Compare two numbers using relational operators (>, <, >=, <=).
let n1=55;
let n2=2;
if(n1>n2){
  console.log("n1 is greaterr")
}
else {
  console.log("n2 is greaterr");
}
//Task 32: Use equality () and strict equality (=) operators to compare different data
// types and note the differences.
let r=n1==n2
console.log(r)

var lex="abcde";
var lex2="abcde";
if(lex==lex2){
  console.log("true")
}
else
{
  console.log("false");
}
if(lex!==lex2){
  console.log("true")
}
else
{
  console.log("false");
}
//Task 35: Compare null and undefined using both == and ===.
if(undefined===null){
  console.log("true")
}
else
{
  console.log("false");
}

//Task 36: Write an if statement that checks if a number is even or odd.
let v1=-4;
let v2=6;
if(v1%2==0){
  console.log("even");
}
else console.log("odd");
//Task 37: Use nested if statements to classify a number as negative, positive, or
// zero.

if(v1==0){
  console.log("zero");
}
else if(v1>0){console.log("positive");}
  else{}
  console.log("negative");

  //Task 38: Use the conditional (ternary) operator ‘?’ to rewrite a simple if…else
// statement.
(v1==0)?console.log("zero"):console.log("others")

function sum(a,b){
  return a + b;
}
console.log(sum(4,5));
function  rectangle(l,b){
  return l*b;
}
console.log(rectangle(1,2));
function show()
{
 // alert("I am KK");
}
console.log(show());




//
// name=(f)=>{
//   return "Hello World"+f
// }
//console.log(name);
let v="kk"
console.log(typeof (v))
const gfg = (v) => {
  return console.log( `hi ${v}` );
}
gfg(v);
//Task 52: Write an arrow function named add that takes two parameters and
// returns their sum. Validate your function with several pairs of numbers
let b=4;
let o=33;
let add=(a,b)=>{
  return o + b;
}
console.log(add(a,b)
)
//Task 53: Declare an arrow function named isEven that checks if a number is even.
// If the number is even, it should return true; otherwise, false. Remember that if
// the arrow function body has a single statement, you can omit the curly braces
let even=(b)=>{ if(b%2==0) return true
else
  return false}
console.log(even(b));
//o Task 54: Implement an arrow function named maxValue that takes two numbers
// as parameters and returns the larger number. Here, you'll need to use curly
// braces for the function body and the return statement
let large=(a,b)=> {
  if (a > b) {
    return "A is big"
  } else {
  }
  return "b is big"
}
console.log(large(5,2))
//console.log(typeof (gfg))


//Task 55: Examine the behavior of the this keyword inside an arrow function vs a
// traditional function. Create an object named myObject with a property value set
// to 10 and two methods: multiplyTraditional using a traditional function and
// multiplyArrow using an arrow function. Both methods should attempt to
// multiply the value property by a number passed as a parameter. Check the value
// of this inside both methods
let MyObj={
  value:10,
  traditionmul:function (s){
    return b*s;
  },
  Arrowmul:(s)=>{ return b*s}

}
console.log(MyObj.Arrowmul(2));

