var d="Hello";
{var a=10;}
console.log(a); //Var is global variable
const b=5;// const can'r access outside fun and can't change the value
console.log(b);
document.getElementById("first").innerHTML=a+" "+b;
let c=10; // let can't access outside function 
document.getElementById("fi").innerHTML=c+" "+d;
//Operators: +,-,/,*,%,--,++
var num1=10;
var num2=20;
var s=num1+num2;
document.getElementById("add").innerHTML=s;
// ==,===,!=,!==
var n1=10
var n2=10
//it will give true for all ==,===
var n3="10";
//if we compare n1==n3 true, n1===n3 false
document.getElementById("compare").innerHTML=(n1==n2)+" "+(n1===n1)+" "+(n1==n3)+" "+(n1===n3)+" "+(n1!=n3)+" "+(n1!==n3);
//Data Types:-Number,Boolean,Object,Arrays,String
const nu1=10;
const nu2=10.05;
//Functions:-
document.getElementById("c").innerHTML=typeof(nu1)+" "+typeof(nu2==nu1);
function showMsg(){
    document.getElementById("show").innerHTML="Function called";
}
showMsg();
//Object:-
const personName={
    firstName:"john",
    lastName:"Doe",
    age:22,
    color:"black",
}
document.getElementById("object").innerHTML=personName.firstName+"  "+personName.age+"  "+personName["color"];
//object literals 2nd method:-
const car=new Object();
car.name="BMW";
car.color="Black";
car.speed=180;
document.getElementById("obj2").innerHTML=car.name+" "+car["color"];

