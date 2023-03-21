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
?>

<form action = "Task_Backend.php" method = "POST">
    <input name = "uname">
    <input name = "pw">
    <input name = "email">
    <input name = "checkbox">
    <input type = "checkbox">

    <input type = "submit">
</form>