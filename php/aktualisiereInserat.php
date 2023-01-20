<?php
// Session beginnen 
session_start();
require('config.php');

if (isset($_SESSION['userID'])) {

        $userID = $_SESSION['userID'];

        }

// Update Inserat 
$beschreibung = $_POST["beschreibung"];
$adresse = $_POST["adresse"];
$gegenleistung = $_POST["gegenleistung"];


$sql = "UPDATE inserat SET beschreibung=?, adresse=?, gegenleistung=? WHERE users_id=?";
$stmt = $pdo->prepare($sql);

$erfolg = $stmt->execute([$beschreibung, $adresse, $gegenleistung, $userID]);

// falls erfolg true bzw. 1 ist
if ($erfolg) {

    print_r('inserat wurde Aktualisiert');


} else {

    print_r($erfolg);

};




