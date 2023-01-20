function logout() {

    fetch("https://imtowns3.chappuiscaetano.ch/php/logout.php")

        .then((response)=>{

        return response.text();

    })
        .then(()=>{
        window.location.href = "https://imtowns3.chappuiscaetano.ch/login.html"
    })
}