<?php 
$username= "root";
$server="localhost";
$password="";
$database= "signup";


$conn=mysqli_connect($server,$username,$password,$database);
if (!$conn) {
    # code...
    dir('Error: Faied toconnect to database');
}





?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php 


?>
</body>
</html>