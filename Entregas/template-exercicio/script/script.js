const nome = document.getElementById ("enderecoInputNome")
const cep = document.getElementById ("enderecoInputCEP")
const rua = document.getElementById ("enderecoInputRua")
const numero = document.getElementById ("enderecoInputNumero")
const complemento = document.getElementById ("enderecoInputComplemento")
const botao = document.querySelector (".endereco__button")
const mensagem = document.querySelector (".endereco__subtitle")

botao.addEventListener ("click", enviarDadosPessoais)
 function enviarDadosPessoais (event){
     event.preventDefault() 
  
     const nomeValor = nome.value
     const cepValor = cep.value 
     const ruaValor = rua.value 
     const numeroValor = numero.value 
     const complValor = complemento.value 

     if (nomeValor == "") {
        alert ("O NOME não pode ser vazio")
        nome.focus()

     }else if (cepValor == "") {
        alert ("O CEP não pode ser vazio")
        cep.focus()

     }else if (ruaValor == "") {
        alert ("O campo RUA não pode ser vazio")
        rua.focus()

     }else if (numeroValor == "") {
        alert ("O número não pode ser vazio")
        numero.focus()

     }else {
        alert ("Endereço cadastrado com sucesso!")
        nome.value = ""
        cep.value = ""
        rua.value = ""
        numero.value = ""
        complemento.value = ""
     }

     console.log (nomeValor, cepValor, ruaValor, numeroValor, complValor)


 }

