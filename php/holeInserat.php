<?php

// Session beginnen 
session_start();
require('config.php');

if (isset($_SESSION['userID'])) {

        $userID = $_SESSION['userID'];

        }
//$_SESSION['userID']
// $sql = "SELECT * FROM inserat WHERE users_id = '$userID'";
$sql = "SELECT * FROM inserat WHERE users_id = '$userID'";

$stmt = $pdo->prepare($sql);

$success = $stmt->execute();

if ($success) {

    $resultateArray = $stmt->fetchAll();

    $jsonArray = json_encode($resultateArray);

    print_r($jsonArray);
}