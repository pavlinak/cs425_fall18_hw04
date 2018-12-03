<?php
define('DB_SERVER', '34.222.23.83');
define('DB_USERNAME', 'admin');
define('DB_PASSWORD', '=@!#254tecmint');
define('DB_NAME', 'cs425_hw04');
 
$link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);
 
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
$location_name=$_POST['Location'];
// sql to delete a record
$sql = "DELETE FROM `pv system` WHERE 'Location'=$location_name";

if ($link->query($sql) === TRUE) {
    echo "Record deleted successfully";
} else {
    echo "Error deleting record: " . $conn->error;
}

$conn->close();
?>