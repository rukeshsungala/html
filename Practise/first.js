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
// ==,===,!=,!==, <=,>=,>,<
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
const pushitem=fruit.push("ICE"); //add elm to last
const shiftitem=fruit.shift();  //remove 1st element
const unshiftitem=fruit.unshift("PAPAYA")  // add elm to 1st position
//fruit.sort()-->it is sort alphabetical order 
//fruit.reverse()-->reverse all elm in an array
document.getElementById('arrm').innerHTML=fruit+" 122 "+fruits+"  "+popitem+" "+fruit+" "+fruit.length+" "+fruit.sort()+" "+fruit.reverse();
//concat()--> it concat two or more arrays to single array
//splice(start,end)--> it remove that positon element in an array


// Dates Methods:-

const today=new Date();
//1.new Date()
//2.new Date(year,month)
//3.new Date(year,month,day)
//4.new date(year,month,day,hour);
//5.new date(year,month,day,hour,minute)
//6.new date(year,month,day,hour,minute,second)
//7.new date(year,month,day,hour,minute,second,ms)
const m=new Date(2017,6,13,8);
const h=new Date(2015,7,1,6);

//to Date string(); it converts readable 
const datestringtext=today.toDateString();
//to UTC method
const dateutc=today.toUTCString();
//to ISO method
const dateiso=today.toISOString();
//get date methods
//1.getFullYear()
//2.getMonth()
//3.getDate()
//4.getHours()
//5.getMinutes()
//6.getSeconds()
//7.getMilliseconds() 


const fy=today.getFullYear();
const day=today.getDate();

document.getElementById("date").innerHTML=today+" "+m+" "+h+"  "+datestringtext+"     "+dateutc+"   "+dateiso+"  "+fy+"  "+day;

// Similarly all set methodes did settimg the date
//1.setFullYear()
//2.setMonth()
//3.setDate()
//4.setHours()
//5.setMinutes()
//6.setSeconds()
//7.setMilliseconds()

//Math method
//1.Math.pi
//2.Math.round()
//3.Math.ceil()
//4.Math.floor()
//5.Math.abs()
//6.Math.log()
//7.Math.max()
//8.Math.min()
//9.Math.sqrt()
//10.Math.pow()
//11.Math.random()
const piValue=Math.PI;
const roundof=Math.round(piValue)
const cel=Math.ceil(piValue)
const flr=Math.floor(piValue);
const absolute=Math.abs(-100);
const logvalue=Math.log(1);
document.getElementById("mat").innerHTML=piValue+" ,"+roundof+" ,"+cel+" ,"+flr+"  ,"+absolute+"Log valueof '1':"+logvalue;


// If-Else Statements in JavaScript
/* if(experssion1==true){
    execute the if condition
}
else if(experssion2 ==true){
    execute first else if statement
}
else if(experssion3 == true){
    execute the second else if statement
}
else{
    execute else statement
}*/

const number=10;
if(number==10){
    document.getElementById("ife").innerHTML="the given condition is true then if is executed";
}
else{
    document.getElementById("ife").innerHTML="the given condition is false then else is executed";
}

const book="Maths";
if(book=="Science"){
    document.getElementById("nested").innerHTML="Science Book";
}
else if(book=="English"){
    document.getElementById("nested").innerHTML="English Book";
}
else if(book=="Hindi"){
    document.getElementById("nested").innerHTML="Hindi Book";

}
else{
    document.getElementById("nested").innerHTML="Maths Book";

}


//For-Loops
/* for(initialization;condition;increment/decrement){
    //code to be executed
}
*/
for(let i=1;i<=10;i++){
    document.getElementById("for").innerHTML="Hi"+" ";// it will give directly 10 as output
    console.log("Now i is="+i); // 1,2,3,4,5,6,7,8,9,10
}

//While Loop:
/*while(condition){
    code
}*/
let i=0;
while(i<10){
    console.log(i);
    i++;
}