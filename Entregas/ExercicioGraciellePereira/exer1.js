//Fase 1 Verificar se os campos Nome, CEP, Rua, Número do formulário de endereço
// foram preenchido. Obs.: o campo complemento não precisar ser preenchido.
//Se os campos necessários estiverem prenchidos exibir um alerta que diz 
//"Endereço cadastrado com sucesso"

//ESTOU ENVIANDO COM ERRO PQ NÃO SEI O PQ NÃO ESTOU CONSEGUINDO PUXAR NO CONSOLE, ENVIEI 
//PARA ALGUMAS MENINAS E ELAS ME AJUDARAM E VIRAM QUE FIZ CERTO POREM NÃO PUXA. 
//EU NÃO QUIS INCOMODAR MINHA MONITORA POIS ELA
//PERDEU O AVÔ ONTEM E HJ ESTAVA FAZENDO OS PROCESIMENTOS


let nome = document.getElementById ("endereçoInputNome")
let cep = document.getElementById("endereçoInputCep")
let endereco = document.getElementById("endereçoInputRua")
let numero = document.getElementById("endereçoInputNumero")
let complemento = document.getElementById("endereçoInputComplemento")
let botao = document.getElementById("enderecoInputBotao")
let mensagem = document.getElementById("mensagem")

console.log(mensagem)


botao.addEventListener ("click", function(event)){
    event.preventDefault();

    let nomeValor = nome.value;
    let cepValor = cep.value;
    let ruaValor = rua.value;
    let numeroValor = numero.value;

    if (nomeValor == ""){
        mensagem.textContent = "Preencha o Nome"
    }else if (cepValor == ""){
        mensagem.textContent = "Preencha o  CEP"
    }else if (ruaValor  == ""){
        mensagem.textContent = "Preencha a Rua"
    }else if (numeroValor == ""){
        mensagem.textContent = "Preencha o  Número"
    }else {
        mensagem.textContent = "Endereço cadastrado"}

        console.log(nomeValor, cepValor, ruaValor, numeroValor);
    }



