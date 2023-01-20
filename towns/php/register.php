<?php

require('config.php');

$vorname = $_POST["vorname"];
$nachname = $_POST["nachname"];
$email = $_POST["email"];
$password = $_POST["password"];

/* ------------------test------------------- */

// $vorname="Denis"; 
// $nachname="Peter"; 
// $email = "Denis69@gmail.com"; 
// $password = "123";

/* ------------------Test End------------------- */


// Nur Valide Formatte erlauben / richtige Email und password mit min 5 zeichen 
if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
    die("invalide Email Adresse");
}

if(strlen($password) < 2){
    die("password zu Kurz");
}

// Password schützen mit hasch
$password = password_hash($password, PASSWORD_DEFAULT);


//  In Datenbank hinzufügen funktioniert
$stmt = $pdo->prepare("INSERT INTO users (vorname, nachname, email, password) VALUES (:vorname, :nachname, :email, :password)");

$stmt->bindParam(':vorname', $vorname);
$stmt->bindParam(':nachname', $nachname);
$stmt->bindParam(':email', $email);
$stmt->bindParam(':password', $password);


// Registrieren erfolgreich oder nicht erfolgreich Message
if ($stmt->execute()) {
    echo "Registrierung erfolgreich.";
} else {
    echo "Registrierung fehlgeschlagen. E-mail schon vorhanden " . $stmt->$error;
}

$pdo = null;




