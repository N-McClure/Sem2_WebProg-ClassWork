<?php 

//User Input Processing Script:

//Receive Input:
$fname = $_POST["fname"];
$lname = $_POST["lname"];
$drink = $_POST["drink"];

?>

<h1>Hello There, My name is: <?= $fname ?> <?= $lname ?></h1>
<p>My Preffered Beverage is: <?= $drink ?></p>