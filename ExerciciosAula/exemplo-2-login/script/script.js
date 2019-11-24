const input = document.getElementById("loginInputEmail")
const senha = document.getElementById("loginInputPassword")
const botao = document.querySelector(".login__button")

const mensagem = document.getElementById("mensagem")
// const mensagem = document.querySelector("#mensagem")

//botão ta inserido dentro de form que da reload
botao.addEventListener("click", acaoQueVaiSerExecutada)

function acaoQueVaiSerExecutada(event){
    event.preventDefault() // previnir o evento de reload do form

    const emailValor = input.value
    const senhaValor = senha.value

    if(emailValor == ""){
        // se o email não estiver preenchido da msg de erro
        mensagem.textContent = "O email não pode ser vazio"
        input.focus()

    }else if(senhaValor == ""){
        // se o senha não estiver preenchida da msg de erro
        mensagem.textContent = "A senha não pode ser vazia"
        senha.focus()
    }else{
        // se tudo estiver preenchido da msg de sucesso
        mensagem.textContent = "Sucesso, arrasou, tudo cadastrado!"
        input.value = ""
        senha.value = ""
    }
    
    console.log(emailValor, senhaValor)
}