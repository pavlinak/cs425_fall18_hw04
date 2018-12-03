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
$Photo = $_POST['Photo'];
$Location = $_POST['Location'];
$Operator = $_POST['Operator'];
$CommisionDate = $_POST['CommissionDate'];
$Description = $_POST['Description'];
$SystemPower = $_POST['SystemPower'];
$AnnualProduction = $_POST['AnnualProduction'];
$CO2Avoided = $_POST['CO2Avoided'];
$Reimbursement = $_POST['Reimbursement'];
$Panel = $_POST['Panel'];
$Azimuth = $_POST['Azimuth'];
$Inclination = $_POST['Inclination'];
$Communication = $_POST['Communication'];
$Inverter = $_POST['Inverter'];
$Sensors = $_POST['Sensors'];

$sql = "INSERT INTO pv_system (Name,Photo,Location,Operator,Commision date, Description, System Power, Annual Production, CO2 Avoided, Reimbursement, Solar Panel Modules, Azimuth Angle, Inclination Angle, Communication, Inverter, Sensors) VALUES ['$Name','$Photo','$Location','$Operator','$CommisionDate','$Description','$SystemPower','$AnnualProduction','$CO2Avoided','$Reimbursement','$Panel','$Azimuth','$Inclination','$Communication','$Inverter', $Sensors]";
?>