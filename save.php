<?php
define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', '');
define('DB_NAME', 'cs425_hw04');
 
$link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);
 
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}

$Name = $_POST['Name'];
$Location = $_POST['Location'];

$sql = "INSERT INTO pv_system (Name) VALUES ['$Name']";
?>