//inicio 

const nome = document.getElementById("enderecoInputNome");
const cep = document.getElementById("enderecoInputCEP");
const rua = document.getElementById("enderecoInputRua");
const numero = document.getElementById("enderecoInputNumero");
const botao = document.querySelector(".endereco__button");
const mensagem = document.getElementById("mensagem")

// Não esquecer de ver no console
console.log(nome, cep, rua, numero, botao, mensagem);

botao.addEventListener ("click", function(event){
    event.preventDefault();

    const nomeValor = nome.value;
    const cepValor = cep.value;
    const ruaValor = rua.value;
    const numeroValor = numero.value;

    if (nomeValor == ""){
        mensagem.textContent = " Nome."
    }else if (cepValor == ""){
        mensagem.textContent = " CEP."
    }else if (ruaValor  == ""){
        mensagem.textContent = "Rua."
    }else if (numeroValor == ""){
        mensagem.textContent = "Numero da sua Casa."
    }else {  
         alert ("Endereço cadastrado com sucesso")

        nome.value = ""
        cep.value = ""
        rua.value = ""
        numero.value = ""
        let texto = document.querySelector (".endereco__subtitle")
        texto.innerHTML = "Endereço Cadastrado com Sucesso."}

        console.log(nomeValor, cepValor, ruaValor, numeroValor);})

        // cada linha uma lagrima, sofri demais nesse exercicio.