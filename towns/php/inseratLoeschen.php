<?php


// Session Beginnen 
session_start();
require('config.php');

if (isset($_SESSION['userID'])) {

        $userID = $_SESSION['userID'];

        }

$sql = "DELETE FROM inserat WHERE users_id= $userID";

$stmt = $pdo->prepare($sql);

$erfolg = $stmt->execute(array('Beschreibung' => $beschreibung, 'Adresse' => $adresse, 'Gegenleistung' => $gegenleistung, 'Users_id' => $userID));

if ($erfolg) {

    print_r('Inserat wurde erfolgreich geloescht!');

} else {

    print_r($erfolg);
};