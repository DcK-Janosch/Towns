<?php

session_start();

if (isset($_SESSION['userID'])) {

    if ($_SESSION['timestamp'] + 1000 < time()) {

        session_unset();
        session_destroy();
        echo '{
            "status": "logged out"
        }';

    } else {

        $_SESSION['timestamp'] = time();
        echo '{
            "status": "logged in"
        }';

    }
} else {
    echo '{
        "status": "logged out"
    }';
}
