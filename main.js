const name = document.querySelector("#exampleInputName1")
const email = document.querySelector("#exampleInputEmail1")
const pwd1 = document.querySelector("#exampleInputPassword1")
const pwd2 = document.querySelector("#exampleInputPassword2")
const btn = document.querySelector("#btnEnviar")
const msj = document.querySelector("#msj")

btn.addEventListener("click", (e) => {

    e.preventDefault()

    if (name.value === "" || email.value === "" || pwd1.value === "" || pwd2.value === "") {

        msj.innerHTML = '<div class="alert alert-danger" role="alert"> Rellena todos los campos espabilao </div>'

    } else if (/(\w+?@\w+?\x2E.+)/.test(email.value) !== true) {
        
        msj.innerHTML = '<div class="alert alert-danger" role="alert"> El email no es válido espabilao </div>'

    } else if (/^[a-zA-Z]\w{3,14}$/.test(pwd1.value) !== true) {
        
        msj.innerHTML = '<div class="alert alert-danger" role="alert"> La contraseña no es válida espabilao </div>'

    } else if (pwd1.value !== pwd2.value) {

        msj.innerHTML = '<div class="alert alert-warning" role="alert"> Las contraseñas no coinciden espabilao </div>'

    } else {

        let misObjetos = JSON.parse(localStorage.getItem("Formulario")) || [];
        const objeto = { name:name.value, email:email.value, pwd1:pwd1.value };

        misObjetos.push(objeto);
        localStorage.setItem("Formulario", JSON.stringify(misObjetos));

        msj.innerHTML = '<div class="alert alert-success" role="alert"> Facilito EZ tutorial </div>'

        name.value = ""
        email.value = ""
        pwd1.value = ""
        pwd2.value = ""

    }

    setTimeout(() => {
        msj.innerHTML = "";
    }, 3000);

})
