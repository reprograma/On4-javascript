
const nome = document.getElementById("enderecoInputNome")
const cep = document.getElementById("enderecoInputCEP")
const endereco = document.getElementById("enderecoInputRua")
const numero = document.getElementById("enderecoInputNumero")
const complemento = document.getElementById("enderecoInputComplemento")
const botao = document.querySelector(".endereco__button")

const mensagem = document.getElementById("mensagem")

console.log(mensagem)


botao.addEventListener("click", function(event){
    event.preventDefault()

    const valorNome = nome.value 
    const valorCep = cep.value 
    const valorEnd = endereco.value 
    const valorNum = numero.value 

    if (valorNome == ""){
        mensagem.textContent = "Preencha o campo Nome"
        input.focus()

    }else if (valorCep == ""){
        mensagem.textContent = "Preencha o campo CEP"
        input.focus()

    }else if (valorEnd == ""){
        mensagem.textContent = "Preencha o campo Rua"
        input.focus()

    }else if (valorNum == ""){
        mensagem.textContent = "Preencha o campo Número"
        input.focus()

    }else {
        mensagem.textContent = "Endereço cadastrado com sucesso"
    
    }

})

console.log(nome, cep, endereco, numero, botao)