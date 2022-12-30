<?php
session_start();
if(!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !==true)
{
    header("location: login.php");
    // header("location:front.php");
}
// require 'navbar.php';

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>home</title>
    <style>
      
      .container{
        background-color: rgb(7, 56, 3);
        font-size: medium;
        height: 50px;
        width: 100%;

        
       
       
        
        
      }
     .container .user{
      color: aqua;
      float : right;
    
      
     }
     .btn  {
      color: white;
    cursor: pointer;
    outline: none; 
    margin: 20px 0px;
    float: right;
   
      
     }
   

    </style>
</head>
<body>
  <div class="container" >
    <div  class="user">Hello <?php echo $_SESSION['email'];?> </div>
    <button class="btn"><a href="logout.php" ">logout</a></button>
  </div>
  
  
    
  
</body>
</html>

