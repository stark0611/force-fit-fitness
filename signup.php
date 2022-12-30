<?php
$err = false;
$exist=false;
$not=false;

if ($_SERVER["REQUEST_METHOD"]== "POST") {
  include 'db_connect.php';
  $username=$_POST["email"];
  $password=$_POST["password"];
  $cpassword=$_POST["cpassword"];

  //checking wether record exists in database or not
 

  $query = "SELECT * FROM `sign` WHERE `Email` = '$username'";

  $cresult = $conn->query($query);
  $checkuser= mysqli_num_rows($cresult);
  if ($checkuser>=1) {
    # code...
    $exist=true;
  }
  

  if ($cresult) {
 //checking if the password are same or not
  if( ($password==$cpassword) && ($checkuser==0)) {
    $hash=password_hash($password,PASSWORD_DEFAULT);
    # code...
    $sql="INSERT INTO `sign` ( `Email`, `password`,`date`) VALUES ('$username', '$hash',current_timestamp())	";
    $result= mysqli_query($conn,$sql);
    if($result){
      $err=true;
      
    }

  }else {
    
    $not=true;
  }
   
 }

}

?>

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Signup</title>
  <style>
   *{
margin: 0;
padding: 0;
}

body{
    background: url(bg.jpg) no-repeat center center fixed;

    /* background-color: black; */
    
   
    
    background-image: linear-gradient(to top, rgb(111, 166, 222),rgb(215, 107, 107));
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
<?php
//  require 'navbar.php';
    if ($not) {
      # code...
      echo '
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
         <strong>Error!</strong>Password didnot match.
         <button type="button" class="close" data-dismiss="alert" aria-label="Close">
           <span aria-hidden="true">&times;</span>
         </button>
       </div>';
    }
    ?>
    
    <?php 
    if ($err) {
    # code...
    echo '
    <div class="alert alert-success alert-dismissible fade show" role="alert">
     <strong>success!</strong> The data has been saved .
     <button type="button" class="close" data-dismiss="alert" aria-label="Close">
       <span aria-hidden="true">&times;</span>
     </button>
   </div>';

   header("location:login.php");
      }


      //error for user already exists

      if($exist){
        echo '
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
         <strong>Error!</strong>user already exists.
         <button type="button" class="close" data-dismiss="alert" aria-label="Close">
           <span aria-hidden="true">&times;</span>
         </button>
       </div>';
      }


?>
   <form action="signup.php" method="POST">
    <div class="container">
        <h1>Sign In</h1>
        <div class="box">
            <i class="fa fa-envelope"></i>
            <input type="email" name="email" id="email" placeholder="Enter Your Email">
        </div>
        <div class="box">
            <i class="fa fa-key"></i>
            <input type="password" name="password" id="password" placeholder="Enter Your Password">
        </div>
        <div class="box">
            <i class="fa fa-key"></i>
            <input type="password" name="cpassword" id="password" placeholder="confirm Password">
        </div>
        <button class="btn">sign In</button>
        <span ><a href="login.php" style="color:aqua; ">Already have an account?Log In </a></span>
    </div>
   </form>
</body>
</html>
