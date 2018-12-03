<?php
$ser = "34.222.23.83";
$user = "admin";
$pass = "=@!#254tecmint";
$db = "cs425_hw04";
 
$con = mysqli_connect($ser, $user, $pass, $db)or die ("Connection Failed");
echo "Connected successfully....";

$Name = $_POST['Name'];
$Photo = $_POST['Photo'];
$Location = $_POST['Location'];
$Operator = $_POST['Operator'];
$CommisionDate = $_POST['CommisionDate'];
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

$query = "INSERT INTO pv_system (Name,Photo,Location,Operator,Commision_date, Description, System_Power, Annual_Production, CO2_Avoided, Reimbursement, Solar_Panel_Modules, Azimuth_Angle, Inclination_Angle, Communication, Inverter, Sensors) VALUES ('".$Name."','".$Photo."','".$Location."','".$Operator."','".$CommisionDate."','".$Description."','".$SystemPower."','".$AnnualProduction."','".$CO2Avoided."','".$Reimbursement."','".$Panel."','".$Azimuth."','".$Inclination."','".$Communication."','".$Inverter."', '".$Sensors."')";

if(!mysqli_query($con, $query)){
    header("Location: 34.222.23.83/cs425_fall18_hw04_tm12"); /* Redirect browser */
    exit();
}
else{
    header("Location: 34.222.23.83/cs425_fall18_hw04_tm12/create.php"); /* Redirect browser */
    exit();
}

mysqli_close($con);
?>