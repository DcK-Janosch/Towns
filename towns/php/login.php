<?php

require('config.php');

$email = $_POST["email"];
$password = $_POST["password"];

$sql = "SELECT * FROM users WHERE email = '$email'";

$stmt = $pdo->prepare($sql);

$erfolg = $stmt->execute();

if ($erfolg) {

    $array = $stmt->fetchAll();

    $anzahlResultate = count($array);

    if ($anzahlResultate == 1) {

        $dbPassword = $array[0]['password'];
        $userID = $array[0]['id'];
        $vorname = $array[0]['vorname'];
        $timestamp = time();

        pruefepassword($password, $dbPassword, $userID);
        createSession($userID, $timestamp, $name);

        echo '{
            "success": true,
            "message": "Login erfolgreich"
        }';

    } else {

        echo '{
            "success": false,
            "message": "Kein Konto auf dieser Email!"
        }';
        
    }
    
} else {
    
    echo '{
        "success": false,
        "message": "Ups! Da ist etwas schiefgelaufen."
    }';
    
}

function pruefepassword($password, $dbPassword, $userID)
{

    if (password_verify($password, $dbPassword)) {


    } else {

        echo '{
            "success": false,
            "message": "Passwort inkorrekt!"
        }';

        exit();
       


    }
}


// create user session
function createSession($userID, $timestamp, $name) {
    session_start();
    $_SESSION['userID'] = $userID;
    $_SESSION['name'] = $name;
    $_SESSION['timestamp'] = $timestamp;
}

//session_start();
//session_unset();
//session_delete();
//1header('location: index.html')