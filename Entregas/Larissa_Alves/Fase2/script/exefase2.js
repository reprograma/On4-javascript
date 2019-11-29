
const nome = document.getElementById("enderecoInputNome")
const cep = document.getElementById("enderecoInputCEP")
const endereco = document.getElementById("enderecoInputRua")
const numero = document.getElementById("enderecoInputNumero")
const complemento = document.getElementById("enderecoInputComplemento")
const botao = document.querySelector(".endereco__button")

const mensagem = document.querySelector(".endereco__subtitle")

console.log(mensagem)


botao.addEventListener("click", function(event){
    event.preventDefault()

    const valorNome = nome.value 
    const valorCep = cep.value 
    const valorEnd = endereco.value 
    const valorNum = numero.value 

    if (valorNome == ""){
        input.focus()

    }else if (valorCep == ""){
        input.focus()

    }else if (valorEnd == ""){
        input.focus()

    }else if (valorNum == ""){
        input.focus()

    }else {
        mensagem.textContent = "Endereço cadastrado com sucesso"
        nome.value = ""
        cep.value = ""
        endereco.value = ""
        numero.value = ""
    }

})

console.log(nome, cep, endereco, numero, botao)