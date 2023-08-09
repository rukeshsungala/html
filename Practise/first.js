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
    console.log("while loop i="+i);
    i++;
}
//do- while
/* do{
    code
}while(condition);
*/
let j=0;
do{
    console.log("do-while loop j="+j);
    j++;
}while(j<10);

//break
for(let i=0;i<5;i++){
    if(i==3)break;
    console.log("break of i="+i);
}

//continue
for(let j=0;j<6;j++){
    if(j==3)continue;
    console.log("continue of j="+j);
}

//switch
const name='javascript'
switch(name){
    case 'java':
        console.log("this is java");
        break;
    case 'javascript':
        console.log('this is javascript');
        break;
    default:
        console.log('this is not java or javascript');
}
//set 

const fruitvalue=new Set();
fruitvalue.add('apple');
fruitvalue.add('mango');
fruitvalue.add('banana');
fruitvalue.add('kiwi');
fruitvalue.add('kiwi'); // set doesn't contain duplicate values
document.getElementById('set').innerHTML=fruitvalue.size;
for(const x of fruitvalue.values()){
    let res=x;
    console.log(res);
}
fruitvalue.delete('banana');
for(const x of fruitvalue.values()){
    let res=x;
    console.log(res);
}

// type conversion

const st='123'
console.log(typeof(Number(st)));
console.log(typeof(st))


// precedance /,*,+,-
console.log(50*10+4) 

console.log(100+5-30);

//Map, Reduce, Filter

const students=[
    {firstName:'john',lastName:'F',age:25,marks:75},
    {firstName:'harish',lastName:'D',age:24,marks:40},
    {firstName:'kiran',lastName:'S',age:23,marks:50},
    {firstName:'suresh',lastName:'M',age:22,marks:70},
    {firstName:'virat',lastName:'P',age:20,marks:60},
];

const studentData=students.map((student)=>{
    console.log(student.firstName.toUpperCase()+"  "+student.age);
})

const marks=students.filter((student)=>student.marks>50);
console.log(marks);

const studentage=students.filter((student)=>student.age>23);
console.log(studentage);

const ar=[1,2,3,4,5];
const sumar=ar.reduce((acc,curr)=>acc+curr,0);
console.log(sumar);

const studentmark=students.reduce((acc,curr)=>acc+curr.marks,0);
console.log(studentmark);

/* try block
catch block
finally block
throw */

const nu=[1,2,3,4,5,6];
try{
    //this executes the block of code present
    for(let i=0;i<nu.length;i++){
        console.log(nu[i]);
    }
}
catch(err){
    //this handles or shows the error if they are any errors in the try block
    console.log(err);
}
finally{
    // it's going to execute regardless of the result of try and catch block
    console.log('finally block');
}

// Arrow Functions

var a=10
var a1=10

function myFunction(){
    const resul=a+a1;
    console.log(resul);
}
myFunction();

const sum=()=>a+a1;
console.log(sum());

const area=(x,y)=>x*y;
console.log(area(5,3));


//Objects

const person={
    name:'john',
    age:30,
    marks:90,
}
console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.marks);
delete person.marks;
console.log(person);
delete person.age;
console.log(person);

const student={
    name:'suraj',
    age:40,
    marks:89,
}
for(key in student){
    console.log(key);
}
for(key in student){
    console.log(student[key]);
}

// this keyword used in object
const value={
    firstName:'john',
    lastName:'deo',
    age:25,
    getName:function(){
        return this.firstName+"  "+this.lastName;
    }
}
console.log(value.getName());



const details={
    firstName:'john',
    lastName:'joe',
    age:30,
    marks:90,
}
//Object Properties
/*
    1. objectname.Property syntax (details.firstName)

    2. objectname['property'] syntax (details['lastName'])

*/

console.log(details.firstName+"  "+details['lastName']);

// Map

const frui=new Map([
    ["apple",300],
    ["banaba",300],
    ["kiwi",600],
]);

console.log(frui);

/* set method in Map

const values = new Map();

values.set("apples",100);
values.set("laptop",10);
values.set("books",400);
values.set("students",12);

console.log(values);

*/

// get method in Map

// values.get("laptop");


console.log(frui.get("kiwi"));

// has method in Map
console.log(frui.has("apple"));

//size method in Map
console.log(frui.size);

//clear method in map
//frui.clear();


for(val of frui){
    console.log(val);
}

for(y of frui.keys()){
    console.log(y);
}

/* Classes

class className{
    constructor(){
        ... code
    }
    method1(){
        ...code
    }
    method2(){
        ...code
    }
}

*/

class Student{
    constructor(name,age,marks){
        this.name=name;
        this.age=age;
        this.marks=marks;
    }
    getMarks(){
        console.log("The marks obtained is 100");
    }
    getGrade(){
        console.log("The grade obtained is A");
    }
    getSum(){
        const a=50;
        const b=30;
        console.log(a+b);
    }
}

const student1=new Student("john",25,100);
const student2=new Student("Suraj",20,95);
console.log(student1);
console.log(student2);
console.log(student1.getMarks());
console.log(student1.getSum());

/*

Function definations:

1.function declaration
2.function expression

*/
//function declaration
function square(x){
    console.log(x*x);
}
square(5);

//function expression

const res=function square(x){
    return x*x;
}
console.log(res(7));

//function hostinhg process:- before declare the fun's we called that fun's

getResult();

function getResult(){
    const a=10;
    const b=20;
    console.log(a+b);
}

//Arrow Fun's
const first=50;
const second=100;
const add=()=>console.log(first+second);
add();


/*syntax of fun's parameters

function functionName(parameter1,parameter2,parameter3....){
    ..code to execute
}

*/
function square(num){
    const res=num*num;
    console.log(res);
}
square(50);

const fun=(a,b,c)=>{
    console.log(a+b+c);
}
fun(1,2,3);

/* BOM -Browser Object Model 
1.window object
2.screen object
3.history object
4.navigator object
5.location object
6.document object

*/

//alert method in the window object
// window.alert("hello world");

//prompt method in the window object
// window.prompt("enter number");

//setTimeout() method

window.setTimeout(()=>{
    console.log("hello world is some code");
},3000);

//screen object

console.log("screen width",screen.width);
console.log("screen height",screen.height);
console.log(screen.availHeight);
console.log(screen.availWidth);

//location object

console.log(location.pathname);
console.log(location.href);
console.log(location.origin);
