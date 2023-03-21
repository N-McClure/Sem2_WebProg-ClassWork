<?php 
//TASK:
/*
create a form that contains fields for:
username
password
email
checkbox for Accept Terms

Create a php script that outputs the input of the user.
if the user selected the checkbox, output THANKS
else output YOU MUST ACCEPT!
*/

//Receive Inputs:
$uname = $_POST["uname"];
$pw = $_POST["pw"];
$email = $_POST["email"];
$checkbox = $_POST["checkbox"];


if(isset($_POST["checkbox"]))
{
    echo("<h1>Thanks for filling Terms of Service</h1>");
}
else
{
    echo("<h1>ACCEPT IT.</h1>");
}

?>