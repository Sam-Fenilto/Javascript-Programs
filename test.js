//1.Write a program to create two seperate array for odd or even;

let arr = [1,2,3,4,5,6,7,8,9];

arrOdEv = (arr) => {
	let odd = [],even = [];
	let i = 0;
	let len = arr.length;


	for (i = 0; i < len; i++){
		if(arr[i] % 2 === 0){
			even.push(arr[i]);
		}else{
			odd.push(arr[i]);
		}
	}
	return [odd,even]
}

let ans = arrOdEv(arr);

const odd = ans[0]
const even = ans[1];

console.log(odd);
console.log(even);








//-----------------------------------------------------------------



//2.Finding the missing numbers of given array using javascript;

let len = parseInt(prompt("Enter the range : "));
let arr = [];let i = 0;
for (i = 0; i < len;i++){
	let num = parseInt(prompt("Enter the numbers : "));
	arr.push(num);
}

missingNum = (arr) => {
	let i = 0,j = 0;
	let start = arr[0];
	let end = arr[arr.length - 1];
	let miss = [];
	let found = false;
	let result = "";

	for (i = start; i<=end; i++){
		found = false;
		for(j = 0;j<arr.length;j++){
			if(arr[j] == i){
				found = true ;
				break;
		 	}	
		}
		if(!found){
			miss.push(i)
			console.log()
		}
	}
	return  miss;
}
console.log(missingNum(arr))








//-------------------------------------------------------------------------------



//3.Separate two arrays with given array elements as string array and number array;

let arr = [21,'hh',33,'kk',55,66,8898,'rtrt'];


arrStrNum = (arr) => {
	let str = [],num = [];

	for(let i = 0;i<arr.length;i++){
		if(typeof arr[i] == "string"){
			str.push(arr[i]);
		}else if(typeof arr[i] == "number"){
			num.push(arr[i]);
		}
	}
	return [str, num]
}

let ans = arrStrNum(arr);
let str = ans[0];
let num = ans[1];
console.log(str);
console.log(num);









//----------------------------------------------------------------------------


//4.Print array as  ASC, DESC, Reverse and Sum it

let len = parseInt(prompt("Enter the range : "));
let arr = [];
let i = 0;

for (i = 0;i<len; i++){
	let num = parseInt(prompt("Enter the numbers : "));
	arr.push(num);
} 

asc = (arr) => {
	return arr.sort(function(a,b){
		return a - b
	})
}

desc = (arr) =>{
	return arr.reverse();
}

rev = (arr) => {
	let ans = asc(arr)
	ans.reverse();
	return ans
}

sum = (arr) =>{
	let sum = 0;
	let n = arr.length;
	let i = 0;

	for(i=0; i<n; i++){
		sum = sum + arr[i];
	}
	return sum;
}

console.log(arr);
console.log(sum(arr));
console.log(asc(arr));
console.log(desc(arr));
console.log(rev(arr));










//-----------------------------------------------------------------

//5.first and last number of array

let len = parseInt(prompt("Enter the range : "));
let arr = [];
let i = 0;

for (i = 0;i<len; i++){
	let num = parseInt(prompt("Enter the numbers : "));
	arr.push(num);
} 

firstLast = (arr) => {
	let first = arr[0];
	let last = arr[arr.length - 1];

	return {
		'first' : first,
		'last' : last
	}
}
console.log(arr)
console.log(firstLast(arr));








//-----------------------------------------------------------------

//6.Get the day using Switch case;

let arr = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday'
]
let date = new Date().getDay();
let ans;

switch(date){
	case 0:
		ans = arr[date];
	case 1:
		ans = arr[date];
	case 2:
		ans = arr[date];
	case 3:
		ans = arr[date];
	case 4:
		ans = arr[date];
	case 5:
		ans = arr[date];
	case 6:
		ans = arr[date];
}
console.log(ans)









//-----------------------------------------------------------------

//7.swapping two numbers without empty variable;

let a = parseInt(prompt("Enter the num A : "));
let b = parseInt(prompt("enter the num B :"));

swap = (a,b) => {
	a = a + b;
	b = a - b;
	a = a - b;
	return {
		'a' : a,
		'b' : b
	}
}

console.log(swap(a,b));









//-----------------------------------------------------------------

//8.Default parmeter on a function

let radius = parseInt(prompt("Enter the radius : "));
let pi;

areaOfCircle = (radius,pi = 3.14) => {
	return pi * (radius ** 2);
}

console.log(areaOfCircle(radius));










//-----------------------------------------------------------------

//9.Checking number of duplicate numbers in given array;

let len = parseInt(prompt("Enter the range : "));
let arr = [];
let i = 0;

for (i = 0;i<len; i++){
	let num = parseInt(prompt("Enter the numbers : "));
	arr.push(num);
}
let miss = [];

for (let i = 0; i < arr.length; i++){
	if(arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])){
		miss.push(arr[i]);
	}	
}
let set = new Set(miss);
let val = set.values();
console.log(arr);
console.log(set.size);
console.log(val);	








//-----------------------------------------------------------------

//10.using a function as parameter

let a = parseInt(prompt("Enter the number : "));
let b = parseInt(prompt("Enter the number : "));

add = (a,b) => {
	return a + b;
}

let c = parseInt(prompt("Enter the third number : "));
console.log(add(a,b))

//let sum = add(a,b)

addThree = (c, sum) => {
	return sum + c;
}

console.log(addThree(c,add(a,b)))











//-----------------------------------------------------------------

//11.Sum the given array

let len = parseInt(prompt("Enter the range : "));
let arr = [];
let i = 0;

for (i = 0;i<len; i++){
	let num = parseInt(prompt("Enter the numbers : "));
	arr.push(num);
}

function addArr(arr){
	let result;
	let i = 0;
	let sum = 0;

	for (i = 0; i < len; i++){
		console.log(arr[i]+ "\n")
		sum = sum + arr[i];
		result = sum;
	}

	return result;
}

console.log(addArr(arr));










//-----------------------------------------------------------------

//12.Changing the word red to blue

let str = "Mr Red has a red house and a  red car";

let rep = str.replace(/red/ig, "blue");
console.log(rep);








//-----------------------------------------------------------------

//13.sort given string and print in list;

let str = 'I am learning Javascript';
let arr = str.split(" ");
arr.sort();
let string = "";

for (let i = 0;i < arr.length; i++){
	string += arr[i] + "\n";
}
console.log(string)







//14.Merge the given objects;

const person = {
	name : 'Jack',
	age : 26
}

const student = {
	gender : 'male'
}

const merge = {
	... person,
	... student
}

console.log(merge);









//-----------------------------------------------------------------

//15.split array as chucks

let len = parseInt(prompt("Enter the range : "));
let arr = [];
let i = 0;

for (i = 0;i<len; i++){
	let num = parseInt(prompt("Enter the numbers : "));
	arr.push(num);
}
console.log(arr);
let chunk = parseInt(prompt("Enter the chunk value : "))


function chunkArray(arr, chunk){
	let result;
	let i = 0, j = 0;
	let split = [];

	for(i = 0; i < len; i+=chunk){
		let chun = arr.slice(i, i+chunk);
		split.push(chun);
	}
	return split
}

let ans = chunkArray(arr,chunk);
console.log(ans)









//-----------------------------------------------------------------

//16.add element to start and end of array;;

let arr = [1,2,3];
arr.unshift(10);
arr.push(20);
console.log(arr);







//-----------------------------------------------------------------

//17.join array using '|' to string

let arr = [1,2,3,4,5,6,7];
let str = arr.join('|');
console.log(str)






//-----------------------------------------------------------------

//18.splitting of 2d array with a header and substitues;

let name = ["voldmort","sathiya","mangte","gandhi","lord"];
let a = [[1,2,3],[4,5,6],[7,8,9],[4],[2,6]];

let tex = "";
for(let z = 0 ; z < name.length; z++){
	//console.log(name[z]);
	tex += name[z] + "\n";
	

	for(let i = 0; i < a.length; i++){
		//tex += a[i] + "\n";
		
		if(i == z){
			for ( let j = 0; j < a[i].length; j++){
			tex += a[i][j] + "\n"
			continue;
		   }
		}		
	}
}
console.log(tex)











//-----------------------------------------------------------------

//19.Finding the Largest Number;

let a = parseInt(prompt("Enter the first number"));
let b = parseInt(prompt("Enter the second number"));
let result;

console.log(largestOfTwo(a,b));

function largestOfTwo(a,b){
	if(a > b){
		result = (a+" is greater");
	}else if(a < b){
		result = (b+ " is greater");
	}else if(a == b){
		result = ("both the number are same");
	}else{
		result = ("enter a valid number");
	}
	return result;
};









//------------------------------------------------------------------------

//20.Add array numbers and add 2 array result;

let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2];
let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26];
let i = 0,j = 0;
let sum = 0;
let sum2 = 0;

addArray(arr_1,arr_2)
console.log(sum+" "+sum2+" is "+ add(sum,sum2));


function addArray(arr1,arr2){
    for ( i = 0 ; i< arr1.length; i++){
        sum += arr1[i]
    };
    for ( j = 0 ; j < arr2.length;j++){
        sum2 += arr2[j]
    }
    return [sum,sum2]    
}


function add(a,b){
    return a+b;
}









//---------------------------------------------------------------------

//21.Array in reverse Order and typecast

let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
let i = 0;
let str = [];
let ln = "";

str = arr.reverse();
let x = str.toString();
console.log(x);







//---------------------------------------------------------------------

//22.Finding Square root of a number;

let num = parseInt(prompt("Enter the number :"));

console.log(Math.round(sqr(num)));

function sqr(x){
    return (x ** 0.5);
}







//---------------------------------------------------------------------

//23.Area of Triangle

let base = parseInt(prompt("Enter the base :"));
let height = parseInt(prompt("Enter the height :"));

console.log(aoTriangle(base,height));

function aoTriangle(base,height){
    let ans = (base * height) / 2;
    return ans;
}









//---------------------------------------------------------------------

//24.Swapping two numbers ;


let a = parseInt(prompt("Enter the A :"));
let b = parseInt(prompt("Enter the B :"));

console.log(swapWithTemp(a,b))

function swapWithoutTemp(a,b){
    a = a + b;
    b = a - b;
    a = a - b;
    return [a,b];
}

function swapWithTemp(a,b){
    let temp = a;
    a = b;
    b = temp;
    return [a,b]
}







//---------------------------------------------------------------------

//25.converting to km and miles

let km = parseInt(prompt("Enter the kilometer"));

console.log(kilometer(km));

function miles(km){
    let mile = km *  0.621371;
    return mile.toFixed(2);
}

function kilometer(miles){
    let km = miles / 0.621371;
    return km.toFixed(2);
}








//---------------------------------------------------------------------


//26.Converting celsius and fahrenheit;

let celsius = parseInt(prompt("Enter the celsius :"));

console.log(fa(celsius));

function fa(ce){
    let fa = (ce * 1.8) + 32;
    return fa
}

function ce(fa){
    let ce = (fa - 32) / 1.8;
    return ce
}







//---------------------------------------------------------------------

//27.Generating Random Number ;

let r,num;

x = Math.random() * 11;
num = Math.round(x);

console.log(num);








//---------------------------------------------------------------------

//28.Checking the number is positive or negative or zero

let num = parseInt(prompt("Enter a number : "));

console.log(numCheck(num))

function numCheck(num){
    let ans;
    if(num < 0){
        ans = num + "- The number is Negative";
    }else if(num > 0){
        ans = num + "- The number is Positive";
    }else if(num == 0){
        ans = num + "- Zero";
    }else{
        ans = "Enter a Valid Number";
    }
    return ans;
}








//---------------------------------------------------------------------

//29.Finding Three Largest nd Smallest Numbers using array

let len = 3;
let i = 0;
let arr = [];

for(i = 0; i < len; i++ ){
    let num = parseInt(prompt("Enter the number : "));
    arr.push(num);
}

console.log(smallNum(arr));

function largeNum(arr){
    let ans;
    arr.sort(function(a,b){
        return a - b;
    });
    ans = arr[arr.length-1];
    return ans;
}

function smallNum(arr){
    let ans;
    arr.sort(function(a,b){
        return a - b;
    });
    ans = arr[0];
    return ans;
}










//--------------------------------------------------------------

//30.Prime Number or Not;

let num = parseInt(prompt("Enter the number to check : "));

console.log(primeNo(num));

function primeNo(num){
    let isPrime = true;
    let i = 0;
    let result;

    if(num === 1){
        result = "Its Not a Prime Or Composite";
    }else if(num > 1){
        for (i = 2; i < num; i++){
            if(num%i === 0){
                isPrime = false;
                break;
            }
        }if(isPrime){
            result = "Its a Prime Number";
        }else{
            result = "Its not a prime number";
        }
    }
    return result;
}









//--------------------------------------------------------------

//31.Factorial of a number;

let num = parseInt(prompt("Enter the number : "));

console.log(factorial(num))

function factorial(num){
    let result;

    if(num < 0){
        result = num + " - Enter a Valid number";
    }else if(num === 0){
        result = "1";
    }else if(num > 0){
        let i;
        let fac = 1;
        for(i = 1;i <= num; i++){
            fac = fac * i;
        }
        result = fac;
    }return result;








//----------------------------------------------------------------------------

//32.Multiplication table;

let num = parseInt(prompt("Enter the number : "));

console.log(table(num));

function table(num){
    let result;
    let i = 0;
    let tbl;
    let row = "";

    for (i = 1;i <= 10; i++){
        tbl = num * i + "\n";
        row += num+" * "+i+" = "+tbl;
        result = row;
    }
    return result;
}










//----------------------------------------------------------

//33.Fibanocci Series for n numbers

let len = parseInt(prompt("Enter the range of series : "));

function fibanocciSeries(num){
	let result,nextTerm;
	let n1=0,n2=1;
	let seq = [];
	if(num < 0){
		result = "Enter a valid number";
	}else{
		for(let i = 0; i <= len; i++){
		seq.push(n1);
		nextTerm = n1 + n2;
		n1 = n2;
		n2 = nextTerm;
		result = seq;
	}
				
	}
	return result;
}

console.log(fibanocciSeries(len));