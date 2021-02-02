// Let's start Js full course. In this course, we will cover more than 17 chapters.
//At first, we will cover the basics. It 1 to 5 chapter
//==============================Chapter 1 to 5==========================================
//=================================Data type============================================
/*
1.Primitive>>It's pre-created by javascript developers
      Example:Number,String,Boolean(true,false),Null,Underfined  
2.object:.>>>It's created by us
   Array,object,function
 =====================================Boolean===========================================

var b1=true;
var b2=false;
// console.log(b1)//Output True
var b3=Boolean(true);
var b4=Boolean(false);
console.log(b3)//Output:true
console.log(b4)//output:false
======================================Null vs Undefined==================================
Undefined:A Variable without value always store Undefined
Null:A Variable with unknown value can store null
var abc ;//undefined
var xyz=null;//null
console.log(abc);//Output:undefined
console.log(xyz);//output:null
==================================Type Conversion And Truthy Falsy Value==================

var str='1000';
var n=10;
console.log(typeof(str))//Output:string
console.log(typeof(Number(str)))//Output:Number
console.log(Number.parseInt(str))//Output:1000.It will be Number
console.log(str)//1000.It will be string

console.log(n)
console.log(typeof(n))//Output:Number
console.log(typeof(n.toString()));//Output:string
//================================falsy falsy:0,null,undefined,Nan============================
console.log(Boolean(''));//false
console.log(Boolean('ddddds'));//true
=================================Octal and Hexadecimal Numbers=================================

var hex=0xff;
console.log(hex);//result:255 hexa value

var oct=0756
console.log(oct);//result:494 octal value
================================All Kinds of operator in javascript============================
Arithmetic operator:+,-,*,/,%,++,--

//++ means incremental
//1.pre incremental,2.post incremental
//ex:++a,a++

var a=11;
var b=6;

console.log(a++);//Output:11---First main value 11,then increase,a++ means a=a+1
console.log(a++);//output:12---

console.log(++b)//Output:7---main value increase 6 to 7 
console.log(++b);//output:8

//--means decreamental

var a=10;
var b=6;

console.log(a--);//Output:10
console.log(a--);//output:9

console.log(--b)//output:5
console.log(--b)//output:4

============================================Assingment Operator=======================
*/
var a=10;
var b=20;
a +=b;//a=a+b
console.log(a);//Output:30

a -=b;
console.log(a);//Out:10--Because a 30 now.When We use the decrement assignment operator it became 10