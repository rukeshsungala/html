var d="Hello";
{var a=10;}
console.log(a); //Var is global variable
const b=5;// const can't access outside fun and can't change the value
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
//object 2nd method:-
const car=new Object();
car.name="BMW";
car.color="Black";
car.speed=180;
document.getElementById("obj2").innerHTML=car.name+" "+car["color"];

//Strings: str.length,str.slice(),str.substring()
const str="Hello world";
const str1='hello';
const replaceword=str.replace('Hello','Hi')
document.getElementById('string').innerHTML=str+" "+str1+' '+str.length+' '+str.slice(1,4)+" "+str.substring(1,10)+' '+replaceword+' ,'+str.toUpperCase(str1)+' , '+str.toLowerCase(str1)+' , '+str.concat(str,str1)+' , '+str.trim(str)+' , '+str.indexOf('world')+' , '+str.lastIndexOf('l')+' , '+str.includes('world')+' , '+str.search('w');

//Arrays:- 
const books=[]
books[0]='first';
books[1]='secound';
books[2]='third';
document.getElementById('arr').innerHTML=books;

const cart=new Array('phone','charger','display');
const item=['basket','eatables','snacks','juice']
document.getElementById('arr1').innerHTML=cart+'     '+item+'   ,   '+item.length+"    "+typeof(item);

//Array Methods

const fruit=['mango','banana','apple','kiwi']
const fruits=fruit.toString();
const popitem=fruit.pop();
document.getElementById('arrm').innerHTML=fruit+" 122 "+fruits+"  "+popitem;

