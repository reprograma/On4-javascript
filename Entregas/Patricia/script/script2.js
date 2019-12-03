let inputNome = document.getElementById("enderecoInputNome");
let inputCep = document.getElementById("enderecoInputCEP");
let inputRua = document.getElementById("enderecoInputRua");
let inputNumero = document.getElementById("enderecoInputNumero");
let inputComplemento = document.getElementById("enderecoInputComplemento");
let button = document.querySelector(".endereco__button");


button.addEventListener("click", function(event){
    event.preventDefault();

    let nomeValor = inputNome.value
    let cepValor = inputCep.value
    let ruaValor = inputRua.value
    let numeroValor = inputNumero.value
    
    if (nomeValor == ""){
        mensagem.textContent = "Preencha o Nome"
    }else if (cepValor == ""){
        mensagem.textContent = "Preencha o CEP"
    }else if (ruaValor  == ""){
        mensagem.textContent = "Preencha a Rua"
    }else if (numeroValor == ""){
        mensagem.textContent = "Preencha o Número"
    }else {document.querySelector(".endereco__subtitle").textContent = "Endereço cadastrado com sucesso!"
   
        inputNome.value = ""
        inputCep.value = ""
        inputRua.value = ""
        inputNumero.value = ""
        inputComplemento.value = ""
        
        
    }
        
          
        
})
