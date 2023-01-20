inseratAnzeigen();

    function inseratAnzeigen() {

        fetch("https://imtowns3.chappuiscaetano.ch/php/inseratAnzeigen.php")

            .then((res) => {

                return res.json();

            })

            .then((data) => {

                console.log(data);

                inseratAnzeigen(data);

            })

        function inseratAnzeigen(data) {

            data.forEach(inserat => {

                console.log(data.inserat);

                if (data.inserat == 0){

                console.log(data.inserat);

                }


                let inseratContainer = document.createElement("div");
                inseratContainer.innerHTML =

                '<div class="inserat-container">' +
                    '<div class="container">' +
                        '<div class="form-group-ganz">' 

                            + '<h1 class="inserat-name">' + inserat.vorname + ' ' + inserat.nachname + '</h1>' 
                             
                            + '<h4 class="inserat-title">' + 'Beschreibung' + '</h4>'

                            + '<p class="inserat-description">' + inserat.beschreibung + '</p>' 

                            + '<h4 class="inserat-title">' + 'Gegenleistung' + '</h4>'

                            + '<p class="inserat-reward">' + inserat.gegenleistung +'</p>' 

                            + '<h4 class="inserat-title-adresse">' + 'Adresse' + '</h4>'

                            + '<a class="inserat-location" target="_blank" href="https://www.google.com/maps/search/?api=1&query='+ inserat.adresse + '">' + inserat.adresse + '</a>' 

                                + '<form id="mieten' + inserat.ID + '">' 

                                     + '<button class="login-button-inserat" onclick="mieten(event,' +"'"+ inserat.email +"'"+ ')">' + 'Inserat' +' Kontaktieren' + '</button>'    

                                + '</form>'

                            + '<br>'  + '<br>'  + '<br>' 


                        + '</div>' 

                    + '</div>';

                    + '</div>';

                document.getElementById("liste-inserat").appendChild(inseratContainer);

            });
         
        }   

    }

    /* Button & Email Function */
    /* Button & Email Function */
    /* Button & Email Function */

        function mieten(event, email) {
            event.preventDefault();
        
            loggedIn().then((isLoggedIn) => {

                if (isLoggedIn) {
                    // if leingeloggt email tab öffnen 
                    let subject = "Inserat Towns Kontaktaufnahme";
                    let body = "Hallo, ich habe dein Inserat gesehen und melde mich, weil ich Interesse habe dir zu helfen."
                    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                    
                } else {
                    // Wenn nicht zur loggin page weiterleiten
                    window.location.href = "https://imtowns3.chappuiscaetano.ch/login.html";
                }
            });
        }
        
        function loggedIn() {

            return new Promise((resolve) => {

                fetch("https://imtowns3.chappuiscaetano.ch/php/auth.php")

                    .then((response) => {

                        return response.json();
                    })
                    .then((data) => {
                        if (data.status === "logged in") {

                            resolve(true);

                        } else {

                            resolve(false);
                        }
                    });
            });
        }

  

    
