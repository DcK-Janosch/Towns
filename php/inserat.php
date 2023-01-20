<?php


// Session Beginnen 
session_start();
require('config.php');

if (isset($_SESSION['userID'])) {

        $userID = $_SESSION['userID'];

        }


// userid muss auch noch übermittelt werden!
$beschreibung = $_POST["beschreibung"];
$adresse = $_POST["adresse"];
$gegenleistung = $_POST["gegenleistung"];


$sql = "INSERT INTO inserat (beschreibung, adresse, gegenleistung, users_id) VALUES (:Beschreibung, :Adresse, :Gegenleistung, :Users_id)";

$stmt = $pdo->prepare($sql);

$erfolg = $stmt->execute(array('Beschreibung' => $beschreibung, 'Adresse' => $adresse, 'Gegenleistung' => $gegenleistung, 'Users_id' => $userID));

if ($erfolg) {

    print_r('Inserat Erflgreich erstellt');

} else {

    print_r($erfolg);
};