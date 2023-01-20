<?php
$host = "localhost:3306";
$username = "imtowns3";
$password = "cae266cha";
$dbname = "imtowns3";

$pdo = new PDO('mysql:host='. $host . '; dbname=' . $dbname . ';charset=utf8', $username, $password);
$pdo->exec("set names utf8");

?>

