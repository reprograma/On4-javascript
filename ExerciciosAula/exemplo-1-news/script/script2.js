let botao = document.querySelector(".news__button")
let inputEmail = document.querySelector(".news__input")
let mensagem = document.querySelector(".mensagem")

//passar classe o seletor .classe
//passar id o seletor #id

console.log(botao,inputEmail,mensagem)

botao.addEventListener("click", function(event){ 
    event.preventDefault() 
    let valorDoInput = inputEmail.value;
    //se valorDoInput for vazio mandamos uma mensagem de erro
    if(valorDoInput == ""){ // se o valor for igual a "" faça isso
        mensagem.textContent = "Preencha o campo de email"
    }else{// caso contrario a gente manda mensagem de sucesso
        //vai inserir um valor de texto(email) no elemento mensagem
        mensagem.textContent = `Seu email: ${valorDoInput} foi cadastrado com sucesso`
        // inputEmail.value = "exemplo@email.com"
        inputEmail.value = ""
    }
})

