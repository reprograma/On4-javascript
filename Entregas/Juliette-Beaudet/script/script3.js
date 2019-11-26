/* **Desafio**

A cada endereço submetido no form, exibir os dados cadastrados em uma div que deve ser inserida dentro da div `lista` */

const inputNome = document.getElementById("enderecoInputNome")
const inputCEP = document.getElementById("enderecoInputCEP")
const inputRua = document.getElementById("enderecoInputRua")
const inputNumero = document.getElementById("enderecoInputNumero")
const inputComplemento = document.getElementById("enderecoInputComplemento")
const botao = document.querySelector(".endereco__button")
const mensagem = document.querySelector(".endereco__subtitle")
const divlista = document.getElementById("listaestilosa")

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
    mensagem.textContent = "Preencha o campo Nome"
    inputNome.focus()
}
else if(cepValor == ""){
    mensagem.textContent = "Preencha o campo CEP"
    inputCEP.focus()
}
else if(ruaValor == ""){
    mensagem.textContent = "Preencha o campo Rua"
    inputRua.focus()
}
else if(numeroValor == ""){
    mensagem.textContent = "Preencha o campo Número"
    inputNumero.focus()
}

else{
    mensagem.textContent = "Endereço cadastrado com sucesso"
    inputNome.value = ""
    inputRua.value = ""
    inputCEP.value = ""
    inputNumero.value = ""
}



const linha = document.createElement("div") 

    linha.textContent = `Rua ${ruaValor}, número ${numeroValor} - apto ${inputComplemento.value} - CEP ${cepValor}.`

    divlista.appendChild(linha)

}