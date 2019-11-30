const botaoLogin = document.querySelector(".login__button")
const botaoFechar = document.querySelector(".login-modal__button-close")


botaoLogin.addEventListener("click", abrirModal)

function abrirModal(){
    document.querySelector(".login-modal").style.display = "flex"
    // style é o que usa pra modificar o css via js
}

botaoFechar.addEventListener("click", fecharModal)

function fecharModal(){
    document.querySelector(".login-modal").style.display = "none"
}

