console.log("Hola Biiiitii funktionierts 👉🏻👈🏻");

loggedIn();

    function loggedIn() {

        fetch("https://imtowns3.chappuiscaetano.ch/php/auth.php")

            .then((response) => {

                return response.json();

            })
            .then((data) => { 

                console.log(data);

                if (data.status === "logged in") {

                    //Zeige  Zweimal individuelle Userdaten an
                    displayUser();
                    displayUserZwei();
                    displayInserat();

                } else {

                    //verstecke und deaktiviere "bearbeiten" Button
                    document.getElementById("editkonto").disabled = true;
                    document.getElementById("editkonto").style.visibility = 'hidden';

                    //Ändere "Profil" zu "Du bist noch nicht eingeloggt"
                    let profil = document.querySelector(".seitentitel");
                    profil.innerHTML = "Du bist noch nicht eingeloggt.";

                }

            })

    }

    function displayUser() {

        fetch("https://imtowns3.chappuiscaetano.ch/php/holeUser.php")

            .then((res) => {

                return res.json();

            })

            .then((data) => {

        console.log(data);

        let username = document.querySelector("#username");
        username.innerHTML = data[0].vorname;

    })

    }

    function displayUserZwei() {

        fetch("https://imtowns3.chappuiscaetano.ch/php/holeUser.php")

            .then((res) => {

                return res.json();

            })

            .then((data) => {

                console.log(data);

                let email = document.querySelector("#email");
                email.innerHTML = data[0].email;

                let vorname = document.querySelector("#vorname");
                vorname.innerHTML = data[0].vorname;

                let nachname = document.querySelector("#nachname");
                nachname.innerHTML = data[0].nachname;

             })

    }

    

function displayInserat() {

    fetch("https://imtowns3.chappuiscaetano.ch/php/holeInserat.php")

        .then((res) => {

            return res.json();

        })

        .then((data) => {

    console.log(data);

    let beschreibung = document.querySelector("#deinBeschreibung");
    beschreibung.innerHTML = data[0].beschreibung;
    
    let gegenleistung = document.querySelector("#deinGegenleistung");
    gegenleistung.innerHTML = data[0].gegenleistung;

    let adresse = document.querySelector("#deinAdresse");
    adresse.innerHTML = data[0].adresse;
})


}
