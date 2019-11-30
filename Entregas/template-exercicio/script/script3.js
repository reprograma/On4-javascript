const nome = document.getElementById ("enderecoInputNome")
const cep = document.getElementById ("enderecoInputCEP")
const rua = document.getElementById ("enderecoInputRua")
const numero = document.getElementById ("enderecoInputNumero")
const complemento = document.getElementById ("enderecoInputComplemento")
const botao = document.querySelector (".endereco__button")
const mensagem = document.querySelector (".endereco__subtitle")
const cadastro = document.querySelector (".lista_enderecos")

botao.addEventListener ("click", enviarDadosPessoais)
 function enviarDadosPessoais (event){
     event.preventDefault() 
  
     const nomeValor = nome.value
     const cepValor = cep.value 
     const ruaValor = rua.value 
     const numeroValor = numero.value 
     const complValor = complemento.value 

     if (nomeValor == "") {
        mensagem.textContent = "O NOME não pode ser vazio"
        nome.focus()

     }else if (cepValor == "") {
        mensagem.textContent = "O CEP não pode ser vazio"
        cep.focus()

     }else if (ruaValor == "") {
        mensagem.textContent = "O campo RUA não pode ser vazio"
        rua.focus()

     }else if (numeroValor == "") {
        mensagem.textContent = "O número não pode ser vazio"
        numero.focus()

     }else {
        mensagem.textContent = "Endereço cadastrado com sucesso!"
        nome.value = ""
        cep.value = ""
        rua.value = ""
        numero.value = ""
        complemento.value = ""
     }

     console.log (nomeValor, cepValor, ruaValor, numeroValor, complValor)

     const itemCadastro = document.createElement ("div");
     const nomeCadastro = document.createElement ("p");
      nomeCadastro.textContent = nomeValor
     
     const endereco = document.createElement ("p");
      endereco.textContent = `${cepValor}, ${ruaValor}, ${numeroValor}, ${complValor}`;

    itemCadastro.appendChild (nomeCadastro);
    itemCadastro.appendChild (endereco);

    document.getElementById ("lista").appendChild (itemCadastro);

    nome.value = ""
    cep.value = ""
    rua.value = ""
    numero.value = ""
    complemento.value = ""

    return true;
    
 }



