/* **Fase 2**

Limpe os campos preenchidos quando o formulário for submetido

Remova o alert e em seu lugar exiba o texto "Endereço cadastrado com sucesso" no elemento `endereco__subtitle` */


const inputNome = document.getElementById("enderecoInputNome")
const inputCEP = document.getElementById("enderecoInputCEP")
const inputRua = document.getElementById("enderecoInputRua")
const inputNumero = document.getElementById("enderecoInputNumero")
const botao = document.querySelector(".endereco__button")
const mensagem = document.querySelector(".endereco__subtitle")

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

}





