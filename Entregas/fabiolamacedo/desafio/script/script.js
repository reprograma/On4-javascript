//A cada endereço submetido no form, exibir os dados cadastrados em uma div que deve ser inserida dentro da div `lista`
const mensagem = document.getElementById ("mensagem");
const input = document.getElementById ("enderecoInputNome"); //nome 
const cep = document.getElementById ("enderecoInputCEP");
const rua = document.getElementById("enderecoInputRua");
const numero = document.getElementById("enderecoInputNumero");
const complemento =document.getElementById("enderecoInputComplemento")
const botao = document.querySelector (".endereco__button");
const okcadastro = document.querySelector(".endereco__title");
const listaendereco = document.querySelector(".lista_enderecos")
console.log (input,cep,rua,numero,botao,okcadastro,complemento,mensagem,listaendereco);

botao.addEventListener ("click",acao);

function acao (event){
event.preventDefault () // para nao recarregar
const nomeValor = input.value;
const cepValor = cep.value;
const ruaValor = rua.value;
const numeroValor = numero.value;
const complementoValor = complemento.value;


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
}else if (complementoValor ==""){
    mensagem.textContent = "Endereço cadastrado com sucesso"
}else {
    okcadastro.textContent = "Endereço cadastrado com sucesso"
    input.value ="";
    cep.value = "";
    rua.value ="";
    numero.value = "";
    complemento.value= ""
}
console.log (nomeValor, cepValor,ruaValor,numeroValor,complementoValor);

const lista = document.createElement ("div")
lista.textContent =     `${input.value} , Rua ${rua.value} , número ${numero.value} , Cep ${cep.value}`
listaendereco.appendChild (lista)
}
