const inputNome = document.getElementById ("enderecoInputNome") 
const inputCEP = document.getElementById ("enderecoInputCEP") 
const inputRua = document.getElementById ("enderecoInputRua") 
const inputNum= document.getElementById ("enderecoInputNumero")
const inputComp= document.getElementById ("enderecoInputComplemento")
const botao = document.querySelector(".endereco__button")

console.log (inputNome, inputCEP, inputRua, inputNum, inputComp)

botao.addEventListener("click", acao)
 
function acao(event){
    event.preventDefault()
    const Nome = inputNome
    const CEP = inputCEP
    const Endereço = inputRua
    const numero = inputNum
    const complemento = inputComp

    console.log (Nome, CEP, Enderço, inputnumero, complemento)
}


