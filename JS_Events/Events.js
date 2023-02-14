console.log("CONNECTED...");

let myP = document.querySelector("#myP");

myP.addEventListener('click', sayHello);

function sayHello(event){
    //Everything Below is DOM Manipulation:

	console.log("Hello, I am progammer");

    console.log(event);
    console.log(event.type);
    console.log(event.target);

    let theList = document.querySelector("#theList");
    if (theList)
    {
        alert("Already Exists and is Displayed!!!");
    }
    else
    {
        let recipes = ["Spaghett","pizza","broccoli","Stroggz","Steak"];

        let ul = document.createElement("ul");
        ul.setAttribute("id", "theList");

        for (let i = 0; i < recipes.length; i++)
        {
            //Create <li>, and text nodes:
            let li = document.createElement("li");
            li.addEventListener("click", highlightLi);
            function highlightLi(event){
                console.log(event.target);
                //event.target.remove();
                event.target.setAttribute("class", "highlight");
            }

            let liText = document.createTextNode(recipes[i]);

            li.appendChild(liText);

            ul.appendChild(li);

            document.body.appendChild(ul);
        }
        console.log(ul);
    }
}