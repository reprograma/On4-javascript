//exercicio 1 verificar se campos estao preenchidos e exibir alerta se todos estiverem "Endereço cadastrado com sucesso"
const mensagem = document.getElementById ("mensagem");
const input = document.getElementById ("enderecoInputNome"); //nome 
const cep = document.getElementById ("enderecoInputCEP");
const rua = document.getElementById("enderecoInputRua");
const numero = document.getElementById("enderecoInputNumero");
const botao = document.querySelector (".endereco__button");
console.log (input,cep,rua,numero,botao); //ok 

botao.addEventListener ("click",acao)

function acao (event){
event.preventDefault () // para nao recarregar
const nomeValor = input.value
const cepValor = cep.value
const ruaValor = rua.value
const numeroValor = numero.value

if (nomeValor == ""){
   mensagem.textContent = "O campo nome não pode ser vazio"
   input.focus()
}else if (cepValor ==""){
    mensagem.textContent ="O campo CEP não pode ser vazio"
   cep.focus()
}else if (ruaValor ==""){
    mensagem.textContent ="O campo Rua não pode ser vazio"
   rua.focus()
}else if (numeroValor==""){
    mensagem.textContent ="O campo número não pode ser vazio"
   numero.focus()
}else {
    alert ("Endereço cadastrado com sucesso ")
}
console.log (nomeValor, cepValor)
}

//teste ok