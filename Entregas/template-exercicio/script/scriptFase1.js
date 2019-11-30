let inputName = document.getElementById("enderecoInputNome")
let inputZipCode = document.getElementById("enderecoInputCEP")
let inputStreet = document.getElementById("enderecoInputRua")
let inputNumber = document.getElementById("enderecoInputNumero")
let inputComplement = document.getElementById("enderecoInputComplemento")
let inputButton = document.querySelector(".endereco__button")
let inputMessage = document.getElementById("mensagem")

//console.log(inputName, inputZipCode, inputStreet, inputNumber, inputButton, inputMessage)

inputButton.addEventListener("click", function(event){
    event.preventDefault()

    let valName = inputName.value
    let valZipCode = inputZipCode.value
    let valStreet = inputStreet.value
    let valNumber = inputNumber.value

    if(valName == ""){
        inputMessage.textContent = "Preencha o campo Nome"
    }else if(valZipCode == ""){
        inputMessage.textContent = "Preencha o campo CEP"
    }else if(valStreet == ""){
        inputMessage.textContent = "Preencha o campo Rua"
    }else if(valNumber == ""){
        inputMessage.textContent = "Preencha o campo numero"
    }else{
        alert("Endereço cadastrado com sucesso!")
    }
    
    console.log(valName, valZipCode, valStreet, valNumber)
    

})