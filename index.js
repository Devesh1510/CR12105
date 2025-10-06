/*console.log("Hello", "Class");
let myname = "Devesh";
let company = "Tesla";
console.log(`My name is ${myname} and I am working at ${company}`)

console.log("10" + 1);
console.log("10"-2);

var a = 10;
var b = 20;
console.log(a*b);   
console.log(a >= b)
console.log(a != b)

if(a<b){
    console.log("A is smaller");
}
else{
    console.log("A is bigger");
}*/

/*var marks = 50
if(marks>=80)
{
    console.log("1st grade")
}
else if(marks >=60 && marks <80)
{
    console.log("2nd grade")
}
else if(marks >=40 &&    marks <60)
{
    console.log("3rd grade")
}
else
{
    console.log("Failed")
}*/

/*let nameArr = ["Devesh" , "Saurabh" , "Shaunak" , "Bhushan" , "Gauresh"];
const numArr = [25,8,45,6,2];
for(let i=0 ; i < numArr.length ; i++)
{
    console.log(numArr[i]);
}
numArr.push(50);
console.log(numArr);*/

/*let nums = [13 , 25 , 62 , 84 , 19 , 36];
let even = [];
let odd = [];
for(let j=0 ; j< nums.length; j++)
{
    if(nums[j]%2==0)
    {
        even.push(nums[j]);
    }
    else
    {
        odd.push(nums[j]);
    }
}
console.log(even);
console.log(odd);*/

/*const student = {
    firstname : "Devesh",
    age: 20,
    hobby : "Railfanning"
}
let names = student.firstname
console.log(names);

let keyarr = Object.keys(student);
for(let i=0 ; i< keyarr.length ; i++)
{
    console.log(keyarr);
}*/


/*const studentarr = [
    {name: "Devesh" , age: 25},
    {name: "Saurabh" , age: 15},
    {name: "Shaunak" , age: 35},
    {name: "Gauresh" , age: 95},
];

for(let i=0 ; i< studentarr.length ; i++)
{
    if(studentarr[i].age > 15)
    {
        console.log(studentarr[i]);
    }
}*/


/*function saygm (firstname)
{
    console.log(`Good Morning ${firstname}`);
    return `Good Morning ${firstname}`
}
saygm("Devesh")*/

function getarea(a,b)
{
    let result = function()
    {
        return a+b;
    }
    console.log(result(5,10));
}
