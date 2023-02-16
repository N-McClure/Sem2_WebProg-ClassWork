//Connection Established:
console.log("CONNECTED...");

//Task: add a Click Event Listener to <p>:
let p = document.getElementById("clickArea");
//p.addEventListener("click", helloWorld);
function helloWorld(event)
{
    console.log("Hello World");
}

///////////////////////////////////////////////////////////

let fname = document.querySelector("#fname");
//p.addEventListener("click", namePrint);

fname.addEventListener("input", namePrint);

let feedBack = document.createElement("p");
let fbText = document.createTextNode("Please Enter Your Name: ");
feedBack.appendChild(fbText);
document.body.appendChild(feedBack);

function namePrint(event)
{
    let message = "";
    console.log("Name: " + fname.value);

    if (fname.value.length > 10)
    {
        console.log("Too Long");
        message = "Too Long";
    }
    else
    {
        console.log("Perfect!");
        message = "Perfect!";
    }
    feedBack.textContent = fname.value.length + " " + message;
}
///////////////////////////////////////////////////////////////////////

let newsletterForm = document.querySelector("#newsletterForm");
let newsletterName = document.querySelector("#newsletterName");


newsletterForm.addEventListener("submit", checkInput);

function checkInput(event){
	event.preventDefault();

	if(newsletterName.value.length > 10){
		console.log("too long");
	}else{
		newsletterForm.submit();
	}
}

