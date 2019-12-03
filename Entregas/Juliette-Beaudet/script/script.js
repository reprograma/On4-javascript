/* **Fase 1**
Verificar se os campos Nome, CEP, Rua, Número do formulário de endereço foram preenchido. Obs.: o campo complemento não precisar ser preenchido.

Se os campos necessários estiverem prenchidos exibir um alerta que diz "Endereço cadastrado com sucesso"*/


const inputNome = document.getElementById("enderecoInputNome")
const inputCEP = document.getElementById("enderecoInputCEP")
const inputRua = document.getElementById("enderecoInputRua")
const inputNumero = document.getElementById("enderecoInputNumero")
const botao = document.querySelector(".endereco__button")

console.log(inputNome, inputCEP, inputRua, inputNumero)

botao.addEventListener("click", vamosverificarform)

function  vamosverificarform(event){
    event.preventDefault();

const nomeValor = inputNome.value
const cepValor = inputCEP.value
const ruaValor = inputRua.value
const numeroValor = inputNumero.value
console.log(nomeValor, cepValor, ruaValor, numeroValor)


if(nomeValor == ""){
    alert("Preencha o campo Nome")
    inputNome.focus() //sei que não era necessário criar esse focus no exercício, mas é bem bonito :)//
}
else if(cepValor == ""){
    alert("Preencha o campo CEP")
    inputCEP.focus()
}
else if(ruaValor == ""){
    alert("Preencha o campo Rua")
    inputRua.focus()
}
else if(numeroValor == ""){
    alert("Preencha o campo Número")
    inputNumero.focus()
}

else{
    alert("Endereço cadastrado com sucesso")
}

}




