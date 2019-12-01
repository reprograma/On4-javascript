let nome = document.querySelector("#enderecoInputNome")
let cep = document.querySelector("#enderecoInputCEP")
let rua = document.querySelector("#enderecoInputRua")
let num = document.querySelector("#enderecoInputNumero")
let complemento = document.querySelector("#enderecoInputComplemento")
let botao = document.querySelector(".endereco__button")
console.log(nome, cep, rua, num, botao)

let texto = document.querySelector(".endereco__subtitle")
let lista = document.querySelector(".lista_enderecos")

botao.addEventListener("click", function(event){ 
    event.preventDefault() 

    let valorNome = nome.value;
    let valorCep = cep.value;
    let valorRua = rua.value
    let valorNum = num.value
    let valorComplemento = complemento.value

    
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

        let div = document.createElement("div")
        let dados = document.createElement("p")
        let dados2 = document.createElement("p")
        
        dados.textContent = valorNome
        dados2.textContent = `Rua ${valorRua}, número ${valorNum} - compl ${valorComplemento} - CEP ${valorCep}.`
        div.appendChild(dados)
        div.appendChild(dados2)
        lista.appendChild(div)

    }
    console.log(valorNome, valorCep, valorRua, valorNum)
})


