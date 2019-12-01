const nome = document.querySelector("#enderecoInputNome")
const cep = document.querySelector("#enderecoInputCEP")
const rua = document.querySelector("#enderecoInputRua")
const num = document.querySelector("#enderecoInputNumero")
const complemento = document.querySelector("#enderecoInputComplemento")
const botao = document.querySelector(".endereco__button")
console.log(nome, cep, rua, num, botao)

let texto = document.querySelector(".endereco__subtitle")

botao.addEventListener("click", function(event){ 
    event.preventDefault() 

    const valorNome = nome.value;
    const valorCep = cep.value;
    const valorRua = rua.value
    const valorNum = num.value
 
  
    if(valorNome == ""){    
        alert("Preencher o campo Nome") 
    }
    else if(valorCep ==""){
        alert("Preencher o campo Cep")
    }
    else if(valorRua == ""){
        alert("Preencher o campo Rua")
    }
    else if(valorNum == ""){
        alert("Preencher o campo Número")
    }
    else{
        texto.textContent = "Endereço cadastrado com sucesso"
     
    nome.value = ""
    cep.value = ""
    rua.value = ""
    num.value = ""
    complemento.value = ""

    }
    console.log(valorNome, valorCep, valorRua, valorNum)
})

