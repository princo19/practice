let a=10;
console.log(a);
let b = [1,2,3,4];
console.log(b);
console.log("Hello World");


//JAvascript
//variable

c=20; //global variable
var d=30; //function scope
let e=50;// block scope


function fun(){
	let a =5;
	if (a==5){
		var f =10;
		console.log("Inside",f);
	}
	console.log("Outside",f);

}
fun();


function sqrt_root(n){
	return Math.sqrt(n);
}


//function Hoisting

var sqrt_n = function(){
	console.log("In second Sqrt Function");
	return ;
}

sqrt_root(10);
sqrt_n(20);

