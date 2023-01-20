
console.log("Welcome new User. Please Register on this page");

function registrieren() {
    event.preventDefault(); 
    let vorname = document.getElementById("vorname").value;
    let nachname = document.getElementById("nachname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let formData = new FormData();
    formData.append('vorname', vorname);
    formData.append('nachname', nachname);
    formData.append('email', email);
    formData.append('password', password);

    fetch("https://imtowns3.chappuiscaetano.ch/php/register.php", 
        {
            body: formData,
            method: "post",
        })

        .then((response) => {

            console.log(response)
            return response.text();
        })
        .then((data) => {
        
            if (data.toLowerCase().includes("erfolgreich")) {
                window.location.href = "https://imtowns3.chappuiscaetano.ch/login.html";
                
            } else {
                
                document.querySelector('#nachricht').innerHTML = data;
            }
        })
        .catch(error => console.log(error))
    }
