console.log("RUNNING...");

function newProject(projectName)
{
    //Create New Folder.
    //Create html file.
    //Create JS file.
    //Connect JS and HTML files.
    //open html page in browser.
    //open CodeShare.io.
}

let x = 12;
x = true;
x = [];
x = {};

x = function(a,b)
{
	return a+b;
};

console.log(x);
console.log(x(12,6));

let myAbilities = [
    function()
    {
        console.log("Code");
    },
    function()
    {
        console.log("Dance");
    },
    function()
    {
        console.log("Cook");
    }
];
myAbilities[0]();

let dog = {
    petName: "Charlie Fenton Esquire",
    age: 45,
    talk: function()
    {
        console.log("Rawrf");
    }
}
dog.talk();

//Neo from the Matrix:
let neo = {
    name: "Neo",
    alias: "Mr Anderson",
    skills: function()
    {
        console.log("I have None.");
    },
    downloadSkills: "Kung-Fu"
}
neo.skills = neo.downloadSkills;
console.log("I know " + neo.skills);

let addingFunction = function(a,b){
	console.log( a+b);
}
addingFunction(12,7);

let multiplyFunction = function(a,b){
	console.log( a*b)
}
multiplyFunction(56,78);

let calculate = function(calculationFunction, a, b){
	calculationFunction(a,b);
}

let subtractFunction = function(a,b){
    console.log(a-b);
}
calculate(subtractFunction, 7, 2);

let teachMe = function(){
    return function(){
        console.log("You know functions...Maybe");
    };
}
let teachMeReturn = teachMe();
console.log(teachMeReturn);
teachMeReturn();

//This stuff is Dangerous and Scary...Apparently?:
var powerFn = function(power) {
    return function(number){
             console.log(Math.pow(number, power));
        }
   };
   
   
   let square = powerFn(2);
   //function(number){
   //  		console.log(Math.pow(number, 2));
   // 	}
   
   square(5);
   //25
   
   let powerReturn = powerFn(3);
   //function(number){
   //  console.log(Math.pow(number,3));
   //}
   
   powerReturn(5);
   //125
