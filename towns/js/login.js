function login() {

    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;


    console.log(email + password);

    let formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    
    console.log("Hello Login pliiiis work ");

    fetch("https://imtowns3.chappuiscaetano.ch/php/login.php",
        {
            body: formData,
            method: "post",
        })

        .then((response) => {

            console.log(response)
            return response.json();

        })

        .then((data) => {

            console.log(data + " " + "test");

            nachricht.textContent = data.message

            console.log(data.success)
            
            if (data.success === false) {


            } else {

                    window.location.href = "https://imtowns3.chappuiscaetano.ch/user.html";
            }

        })
}