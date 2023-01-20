

function inserathinzufügen(){

    console.log("Inserat Hinzufügen");

    let beschreibung = document.querySelector("#beschreibung").value;
    let gegenleistung = document.querySelector("#gegenleistung").value;
    let adresse = document.querySelector("#adresse").value;

    let formData = new FormData();
    formData.append('adresse', adresse);
    formData.append('beschreibung', beschreibung);
    formData.append('gegenleistung', gegenleistung);


    fetch("https://imtowns3.chappuiscaetano.ch/php/inserat.php", 
        {

            body: formData,
            method: "post",

        })

        .then((response) => {

            return response.text();

        })

        .then((data) => {

        console.log(data);
        document.querySelector('#nachricht').innerHTML = data;
        window.location.href = "https://imtowns3.chappuiscaetano.ch/index.html";

        })

}

function aktualisiereInserat() {

    // Formulardaten in Body übertragen
    let beschreibung = document.querySelector('#beschreibung').value;
    let gegenleistung = document.querySelector('#gegenleistung').value;
    let adresse = document.querySelector('#adresse').value;


    // let jsonHashtags = JSON.stringify(hashtags);
    let formData = new FormData();
    // formData.append('users_id', users_id);
    formData.append('beschreibung', beschreibung);
    formData.append('gegenleistung', gegenleistung);
    formData.append('adresse', adresse);
    // formData.append('hashtags', jsonHashtags);

    // formData.append('wgID', wgID);
    console.log("Inserat Aktualisieren");

    fetch("https://imtowns3.chappuiscaetano.ch/php/aktualisiereInserat.php",
        {
            body: formData,
            method: "POST",

        })

        .then(response => response.text())
        .then(data => {

            // Show the response message
            document.querySelector("#nachricht").innerHTML = data;
            window.location.href = "https://imtowns3.chappuiscaetano.ch/user.html";

        })

        .catch(error => {

            console.error("Error:", error);

        });
}

console.log("holla Buttons")

//Buttons verstecken und deaktivieren, abhängig von Inhalt der Datenbank
hideButtons();

function hideButtons() {

    fetch("https://imtowns3.chappuiscaetano.ch/php/holeInserat.php")

        .then((res) => {

            return res.json();

        })

        .then((data) => {

            //falls kein Inserat vorhanden, verstecke aktualisieren und löschen
            console.log(data[0])
            if (data[0] == undefined){

            console.log(data[0]);

            //AKTUALISIEREN-BUTTON
            document.getElementById("button-aktualisieren").disabled = true;
            document.getElementById("button-aktualisieren").style.visibility = 'hidden';

            //LÖSCHEN-BUTTON
            document.getElementById("inserat-loeschen").disabled = true;
            document.getElementById("inserat-loeschen").style.visibility = 'hidden';


            //falls Inserat vorhanden, verstecke hinzufügen
            } else {

                console.log("achman");

                document.getElementById("inserat-Hinzufügen").disabled = true;
                document.getElementById("inserat-Hinzufügen").style.visibility = 'hidden';

            }

        })

}

function inseratLoeschen() {
    fetch("https://imtowns3.chappuiscaetano.ch/php/inseratLoeschen.php")
    .then((data => {
        console.log("inserat wurde geloescht")
        location.reload();
    }))
}




