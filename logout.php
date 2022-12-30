<?php
session_start();
// require 'navbar.php'



session_destroy();
unset($_SESSION['email']);
$_SESSION['message']="logged out";
header("location:login.php");


?>




