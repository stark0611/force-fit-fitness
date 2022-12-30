<?php 
// require 'navbar.php';
session_start();

$login=false;
$serror=false;
if ($_SERVER["REQUEST_METHOD"]== "POST") {
  include 'db_connect.php';
  
  
  $username=$_POST["email"];
  $password=$_POST["password"];
 

  //checking wether record exists in database or not
 

  $query = "SELECT * FROM `sign` WHERE `Email` = '$username'";

  $result = $conn->query($query);
  $checkuser= mysqli_num_rows($result);
  if($checkuser >0){
    while ($row= mysqli_fetch_assoc($result)) {
      # code...
      if (password_verify($password,$row['password'])) {
        # code...
        $login=true;
        session_start();
        $_SESSION["email"] = $username;
        // $_SESSION["id"] = $id;
        $_SESSION["loggedin"] = true;
        header("location:welcome.php");
      }
      else {
        # code...
        
        $serror=true;
      }
    }
    
  }else {
    # code...
    
    $serror=true;
  }

}




?>

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Login Page</title>
  <style>
   *{
margin: 0;
padding: 0;
}

body{
    background: url(bg.jpg) no-repeat center center fixed;
/* 
    background-color: black; */
    
    background-image: linear-gradient(to top, rgb(111, 166, 222),rgb(215, 107, 107));
    
    /* background-image: linear-gradient(140deg, #0997a7 0%, #BC70A4 30%, #ba458f 75%); */
    background-size: cover; 
}

.container{ 
    color: white;
    position: absolute;
    top: 25%;
    left: 40%; 
}

.container h1{
    font-family: 'Heebo', sans-serif;
    width: 50%;
    display: inline-block;
    font-size: 40px;
    border-bottom: 5px solid purple;
    margin-bottom: 15px;
    padding: 13px 0;
}

.box{
    width: 100%; 
    margin: 22px 0px;
    border-bottom: 2px solid purple;
}

.box input{  
    background: none;
    width: 75%;
    padding: 5px 10px;
    font-size: 20px;
    border: none;
    outline:none;
    color: white;
}


.btn{
    color: white;
    cursor: pointer;
    outline: none; 
    margin: 12px 0;
    padding: 10px 21px;
    border: 2px solid purple;
    border-radius: 10px;
    font-size: 18px;
    background: none;
    font-weight: bold;
    
}

.box i{ 
    width: 25px; 
    text-align: center;
}

.btn:hover{
    opacity: 0.5;
    color: purple; 
    background: white; 
    
}
  </style>
</head>
<body>
   <form action="login.php" method="POST">
    <div class="container">
        <h1>Log In</h1>
        <div class="box">
            <i class="fa fa-envelope"></i>
            <input type="email" name="email" id="email" placeholder="Enter Your Email">
        </div>
        <div class="box">
            <i class="fa fa-key"></i>
            <input type="password" name="password" id="password" placeholder="Enter Your Password">
        </div>
        <button class="btn">Log In</button>
        <span ><a href="signup.php" style="color:aqua; ">Don't have an account?create account </a></span>
    </div>
   </form>
</body>
</html>
