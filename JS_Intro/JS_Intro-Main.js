//Main.js:

//Week_1:

console.log("I am Here.");

let x = 12;
x = {fname: "Nick", lname: "McClure"};

x = function(a,b)
{
    return a+b;
}

console.log(x(12,66));

let y = x;
console.log(y(10,59));

function pass(StuGrade,passMark)
{
    let message = "";
    if(StuGrade >= passMark)
    {
        let message = "PASS";
        console.log(message);
    }
    else
    {
        let message = "FAIL";
        console.log(message);
    }

    return message;
}
console.log(pass(67,50));

function sum(a,b)
{
    return a+b;
}
console.log(sum(23,78));
console.log(45 + "21");

for (let i = 0; i < 5; i++)
{
    console.log("this is Iteration: " + i);
}

let singers = [
    "dua lipa",
    "gord downie",
    "the biebs"
];
for (let i = 0; i != singers.length; i++)
{
    console.log(singers[i]);
}

var dice = Math.random();
console.log(Math.floor(dice * 6));


//Task: Display a Random Singer from Singers Array:
console.log(singers[Math.floor(Math.random()*singers.length)]);

//HomeWork_Task: Practice Using the Date and String Objects:

var Today = new Date();
console.log(Today);

console.log(Today.getMonth());
console.log(Today.getDay());
console.log(Today.getFullYear());
console.log(Today.getTime());


var phrase = "Hello, World.";
console.log(phrase.length); 
console.log(phrase.split(" "));
console.log(phrase.toUpperCase());
console.log(phrase.indexOf("w"));
