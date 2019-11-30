let inputNome = document.getElementById("enderecoInputNome");
let inputCEP = document.getElementById("enderecoInputCEP");
let inputRua = document.getElementById("enderecoInputRua");
let inputNumero = document.getElementById("enderecoInputNumero");

let button = document.querySelector(".endereco__button");


button.addEventListener("click", function(event){
    event.preventDefault();

    if(inputNome.value === undefined || inputNome.value === null || inputNome.value === "" || inputNome.value === " "){
    
      return false;
    }else if(inputCEP.value === undefined || inputCEP.value === null || inputCEP.value === "" || inputCEP.value === " "){
    
        return false;
    }else if(inputRua.value === undefined || inputRua.value === null || inputRua.value === "" || inputRua.value === " "){
        return false;

    }else if(inputNumero.value === undefined || inputNumero.value === null || inputNumero.value === "" || inputNumero.value === " "){
    
        return false;
    }

    
    inputNome.value = ""
    inputCEP.value = ""
    inputRua.value = ""
    inputNumero.value = ""
    
    document.querySelector(".endereco__subtitle").textContent = "Endereço cadastrado com sucesso, arrasou!"
    return true;
})