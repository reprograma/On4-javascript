let nome = document.querySelector(".enderecoInputNome")
let cep = document.querySelector(".enderecoInputCEP")
let rua = document.querySelector(".enderecoInputRua")
let numero = document.querySelector(".enderecoInputNumero")

endereco__button.addEventListener("click", function(event){ 
    event.preventDefault() 
    let valorDoInput = enderecoImputNome.value;
    //se valorDoInput for vazio mandamos uma mensagem de erro
    if(valorDoInput == ""){ // se o valor for igual a "" faça isso
        mensagem.textContent = "Preencha o campo de nome"
    }

    event.preventDefault() 
    let valorDoInput = enderecoImputCEP.value;
    //se valorDoInput for vazio mandamos uma mensagem de erro
    if(valorDoInput == ""){ // se o valor for igual a "" faça isso
        mensagem.textContent = "Preencha o campo de CEP"
    }

    event.preventDefault() 
    let valorDoInput = enderecoImputRua.value;
    //se valorDoInput for vazio mandamos uma mensagem de erro
    if(valorDoInput == ""){ // se o valor for igual a "" faça isso
        mensagem.textContent = "Preencha o campo de CEP"
    }

    event.preventDefault() 
    let valorDoInput = enderecoImputNumero.value;
    //se valorDoInput for vazio mandamos uma mensagem de erro
    if(valorDoInput == ""){ // se o valor for igual a "" faça isso
        mensagem.textContent = "Preencha o campo de Número"
    }



})

