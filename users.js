const cardName = document.querySelector("#cardName")
const cardEmail = document.querySelector("#cardEmail")
const cardDiv = document.querySelector("#carta")

const formulario = JSON.parse(localStorage.getItem("Formulario"));

for (let i = 0; i < formulario.length; i++) {

    cardDiv.innerHTML += '<div class="card text-center" style="width: 18rem;"> <div class="card-body"> <h5 class="card-title" id="cardName">' + formulario[i].name + 
    '</h5> <h6 class="card-subtitle mb-2 text-muted" id="cardEmail">' + formulario[i].email + '</h6> </div> </div>'
}