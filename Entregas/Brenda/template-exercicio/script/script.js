/*Fase 1 Verificar se os campos Nome, CEP, Rua, Número do formulário de endereço foram preenchido. Obs.: o campo complemento não precisar ser preenchido.

Se os campos necessários estiverem prenchidos exibir um alerta que diz "Endereço cadastrado com sucesso"*/

const nome = document.getElementById("enderecoInputNome");
const cep = document.getElementById("enderecoInputCEP");
const rua = document.getElementById("enderecoInputRua");
const numero = document.getElementById("enderecoInputNumero");
const botao = document.querySelector(".endereco__button");
const mensagem = document.getElementById("mensagem")

console.log(nome, cep, rua, numero, botao, mensagem);

botao.addEventListener ("click", function(event){
    event.preventDefault();

    const nomeValor = nome.value;
    const cepValor = cep.value;
    const ruaValor = rua.value;
    const numeroValor = numero.value;

    if (nomeValor == ""){
        mensagem.textContent = "Informe seu Nome."
    }else if (cepValor == ""){
        mensagem.textContent = "Informe o CEP da sua cidade."
    }else if (ruaValor  == ""){
        mensagem.textContent = "Informe a rua onde você mora."
    }else if (numeroValor == ""){
        mensagem.textContent = "Informe o número da sua casa."
    }else {  
         alert ("Endereço cadastrado com sucesso, vencemos o primeiro formulário!")
//FASE2
        nome.value = ""
        cep.value = ""
        rua.value = ""
        numero.value = ""
        let texto = document.querySelector (".endereco__subtitle")
        texto.innerHTML = "endereço cadastrado com sucesso."}
     
        console.log(nomeValor, cepValor, ruaValor, numeroValor);})